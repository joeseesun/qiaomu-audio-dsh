import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
const dom=new JSDOM('<html><body></body></html>');
globalThis.window=dom.window;globalThis.document=dom.window.document;globalThis.CustomEvent=dom.window.CustomEvent;
const {createSharedAudioService}=await import('../src/shared-service.js');
const deferred=()=>{let resolve;const promise=new Promise(r=>resolve=r);return{promise,resolve};};
function fixture(){
 const gate=deferred();let speaks=0,stops=0,reads=0;const listeners=new Set();
 const controller={owner:null,state:'idle',stop(){stops++;this.owner=null;for(const f of [...listeners])f(this);}};
 const plugin={speech:{controller,configurationError:()=>null,subscribe:f=>{listeners.add(f);return()=>listeners.delete(f);},speak(owner){speaks++;controller.owner=owner;return true;}},reading:{stop(){},isPlaying:()=>false,start(view){reads++;return view;}},dictation:{start:view=>view,isActive:()=>false}};
 const api={load:()=>gate.promise,info:async()=>({platform:'darwin'})};
 return{gate,api,plugin,counts:()=>({speaks,stops,reads}),resolve:()=>gate.resolve({revision:0,data:{settings:{}}})};
}
test('stop cancels speech still waiting for host initialization',async()=>{
 const f=fixture(),service=createSharedAudioService(f.api),pending=service.speak('cancel me');
 service.stop();service.attach(f.plugin,{});f.resolve();await pending;
 assert.equal(f.counts().speaks,0);service.dispose();
});
test('latest queued speech wins; detach does not replace a newer panel',async()=>{
 const f=fixture(),service=createSharedAudioService(f.api),first=service.speak('first'),second=service.speak('second');
 const detach=service.attach(f.plugin,{id:1});const view={id:2};service.attach(f.plugin,view);detach();f.resolve();await first;
 await new Promise(resolve=>setTimeout(resolve,0));assert.equal(f.counts().speaks,1);assert.equal(await service.readNote(),view);
 service.stop();await second;service.dispose();await assert.rejects(service.speak('after dispose'),/disconnected/);
});
test('foreground operations await panel mount and reject on unload',async()=>{
 const f=fixture();let opens=0;const service=createSharedAudioService(f.api,{openPanel(){opens++;}});
 const pending=service.readNote();assert.equal(opens,1);const view={id:3};const detach=service.attach(f.plugin,view);assert.equal(await pending,view);
 detach();const waiting=service.startDictation();service.dispose();await assert.rejects(waiting,/disconnected/);
});
test('unload during host initialization never starts audio',async()=>{
 const f=fixture(),service=createSharedAudioService(f.api),pending=service.speak('late');service.dispose();f.resolve();await assert.rejects(pending,/disconnected/);assert.equal(f.counts().speaks,0);
});
test('independent Reader bridge returns audio and cancels pending work on unload',async()=>{
 const calls=[],pending=deferred();const service=createSharedAudioService({info:async()=>({platform:'darwin'}),operation:async request=>{calls.push(request);if(request.method==='speech')return pending.promise;return {value:{phase:'ready'}};}});
 const bridge=await service.createSpeechBridge();assert.equal(bridge.platform,'darwin');const speech=bridge.speech({id:'macos',voice:''},'Reader fixture');assert.equal(calls[0].method,'speech');assert.equal(await bridge.status('kokoro').then(x=>x.phase),'ready');service.dispose();assert.ok(calls.some(x=>x.method==='cancel'&&x.input.id===calls[0].input.id));pending.resolve({value:{base64:btoa('wav'),mime:'audio/wav'}});await assert.rejects(speech,/disconnected/);assert.throws(()=>bridge.speech({},'closed'),/disconnected/);bridge.dispose();
});
test('Reader and Audio share speech ownership and release workspace listeners',()=>{
 const service=createSharedAudioService({});let a=0,b=0;const reader=service.coordinateSpeech(()=>a++),audio=service.coordinateSpeech(()=>b++);reader.claim();assert.equal(a,0);assert.equal(b,1);audio.claim();assert.equal(a,1);reader.dispose();audio.claim();assert.equal(a,1);service.dispose();reader.claim();audio.claim();assert.equal(b,1);
});

test('RSS discovery never reads credentials; explicit import returns only configured TTS keys',async()=>{
 const calls=[];const api={load:async()=>({data:{settings:{tts:{provider:'openai',profiles:{openai:{voice:'alloy',key:'must-strip'},macos:{voice:'Linfei'}}},asr:{profiles:[{id:'private'}]}}}}),operation:async request=>{calls.push(request);return{value:{value:'fixture-key'}};}};
 const service=createSharedAudioService(api),settings=await service.exportSpeechSettings();assert.equal(settings.provider,'openai');assert.equal(settings.profiles.openai.key,undefined);assert.equal(calls.length,0);await service.exportSpeechSettings({includeSecrets:'false'});assert.equal(calls.length,0);
 settings.profiles.openai.voice='changed';const result=await service.exportSpeechSettings({includeSecrets:true});assert.equal(result.tts.profiles.openai.voice,'alloy');assert.deepEqual(result.secrets,{openai:'fixture-key'});assert.equal(calls.length,1);assert.equal(calls[0].input.id,'qiaomu-audio-dsh-tts-openai');service.dispose();await assert.rejects(service.exportSpeechSettings(),/disconnected/);
});
test('late export and credential failures cannot return partial secrets',async()=>{
 const gate=deferred();const service=createSharedAudioService({load:()=>gate.promise});const pending=service.exportSpeechSettings({includeSecrets:true});service.dispose();gate.resolve({data:{settings:{}}});await assert.rejects(pending,/disconnected/);
 const bad=createSharedAudioService({load:async()=>({data:{settings:{tts:{provider:'openai',profiles:{openai:{}}}}}}),operation:async()=>({failure:{message:'redacted'}})});await assert.rejects(bad.exportSpeechSettings({includeSecrets:true}),/Could not read/);bad.dispose();
});
