import test from 'node:test';
import assert from 'node:assert/strict';
import {createSpeechSources} from '../src/speech-sources.js';
import {copySpeechSettings} from '../src/original/shared/configuration.js';
test('settings discovery strips keys; explicit import copies only absent credentials',async()=>{
 const values=new Map([['qiaomu-audio-dsh-tts-openai','existing']]);let secretReads=0;
 const registry=createSpeechSources({operation:async({input})=>{if(input.operation==='get')return{value:{value:values.get(input.id)||''}};values.set(input.id,input.value);return{value:{saved:true}};}});
 const remove=registry.register('qiaomu-reader-dsh',{read:()=>({tts:{provider:'openai',profiles:{openai:{voice:'alloy',key:'must strip'}},key:'also strip'}}),getSecret:async provider=>{secretReads++;return provider==='azure'?'imported':'';}});
 const settings=await registry.read('qiaomu-reader');assert.equal(settings.provider,'openai');assert.ok(!JSON.stringify(settings).includes('strip'));assert.equal(secretReads,0);
 const result=await registry.copy('qiaomu-reader');assert.equal(result.keys,1);assert.equal(values.get('qiaomu-audio-dsh-tts-openai'),'existing');assert.equal(values.get('qiaomu-audio-dsh-tts-azure'),'imported');
 remove();assert.equal(await registry.read('qiaomu-reader'),null);registry.dispose();
});
test('unregister during secret lookup prevents delayed credential writes',async()=>{
 let release,requested;const started=new Promise(r=>requested=r),pending=new Promise(r=>release=r);let writes=0;
 const registry=createSpeechSources({operation:async({input})=>{if(input.operation==='set')writes++;return{value:{value:''}};}});
 const remove=registry.register('qiaomu-ai-rss',{read:()=>({provider:'openai'}),getSecret:async()=>{requested();return pending;}});
 const copying=registry.copy('qiaomu-rss-dsh');await started;remove();release('late');await assert.rejects(copying,/disconnected/);assert.equal(writes,0);
});
test('import updates in-memory secret cache and restores settings on failed save',async()=>{
 const previous={provider:'system'},next={provider:'openai',profiles:{openai:{voice:'alloy'}}};let refreshed=0,cleared=0;
 const host={bridge:{importSpeech:async()=>({tts:next,keys:1})},settings:{tts:previous},app:{secretStorage:{refreshSecret:async id=>{assert.equal(id,'qiaomu-audio-dsh-tts-openai');refreshed++;}}},saveSettings:async()=>{throw Error('conflict');},speech:{controller:{cache:{clear(){cleared++;}}}}};
 await assert.rejects(copySpeechSettings(host,'qiaomu-reader'),/conflict/);assert.equal(host.settings.tts,previous);assert.equal(refreshed,1);assert.equal(cleared,0);
 host.saveSettings=async()=>{};assert.equal(await copySpeechSettings(host,'qiaomu-reader'),1);assert.equal(host.settings.tts,next);assert.equal(cleared,1);
});
