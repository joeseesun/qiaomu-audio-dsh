import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const dom=new JSDOM('<html lang="zh"><body></body></html>',{url:'http://localhost/',pretendToBeVisual:true});
for(const key of ['window','document','HTMLElement','Element','Node','MutationObserver','CustomEvent','getComputedStyle','requestAnimationFrame','cancelAnimationFrame'])globalThis[key]=typeof dom.window[key]==='function'&&['getComputedStyle','requestAnimationFrame','cancelAnimationFrame'].includes(key)?dom.window[key].bind(dom.window):dom.window[key];
Object.defineProperty(globalThis,'navigator',{value:dom.window.navigator,configurable:true});
globalThis.innerWidth=1200;globalThis.innerHeight=900;
class ResizeObserver{observe(){}disconnect(){}}globalThis.ResizeObserver=dom.window.ResizeObserver=ResizeObserver;
dom.window.matchMedia=()=>({matches:true,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}});
dom.window.speechSynthesis={getVoices:()=>[],cancel(){},pause(){},resume(){},speak(){},addEventListener(){},removeEventListener(){}};dom.window.SpeechSynthesisUtterance=class{};
const {mountAudio}=await import('../src/native-app.jsx');
const {disposeSurfaces}=await import('../src/harness-ui.ts');
test('actual native entry mounts original settings tabs, voice dialog, editor and cleanly disposes',async()=>{
 let revision=0,saved;const notes=new Map();
 const api={load:async()=>({revision,data:{settings:{tts:{provider:'system',welcomed:true}},document:{path:'test.md',text:'# 标题\n\n原版朗读测试。',etag:null}}}),info:async()=>({platform:'darwin'}),assets:async()=>[],save:async input=>{assert.equal(input.revision,revision);saved=input.data;return{revision:++revision,data:saved};},notesWrite:async input=>{const result={...input,etag:'saved'};notes.set(input.path,result);return result;},notesList:async()=>({entries:[]}),operation:async({method})=>{if(method==='cancel')return{value:{cancelled:true}};throw Error(method);}};
 const root=document.createElement('div');document.body.append(root);const mounted=await mountAudio(root,api);
 assert.equal(root.querySelectorAll('.cm-editor').length,1);assert.equal(root.querySelectorAll('.qaudio-speech-slot').length,1);root.querySelector('button[aria-label="阅读预览"]').click();assert.equal(mounted.view.getMode(),'preview');assert.equal(root.querySelector('.qaudio-dsh-preview h1').textContent,'标题');root.querySelector('button[aria-label="编辑 Markdown"]').click();
 mounted.plugin.openSettings();assert.equal(document.querySelectorAll('[role=tab]').length,4);
 for(const tab of [...document.querySelectorAll('[role=tab]')].map(el=>el.textContent)){
  const button=[...document.querySelectorAll('[role=tab]')].find(el=>el.textContent===tab);button.click();assert.ok(document.querySelector('.qaudio-settings-body').textContent.length>0);
 }
 document.querySelector('.modal-close-button').click();
 mounted.plugin.reading.voiceMenu();assert.ok(document.querySelector('.qm-sound'));assert.ok(document.querySelector('[data-sound-field=id]'));await mounted.plugin.reading.voicePicker.adapter.apply({id:'macos',voice:'fixture-native',key:''});assert.equal(saved.settings.tts.provider,'macos');document.querySelector('.modal-close-button').click();
 mounted.view.editor.setCursor({line:2,ch:0});mounted.view.editor.replaceRange('新增。',{line:2,ch:0});await mounted.save();assert.match(notes.get('test.md').text,/新增。原版/);
 await mounted.dispose();assert.equal(document.querySelectorAll('.modal-container,.cm-editor').length,0);assert.equal(saved.document.path,'test.md');disposeSurfaces();root.remove();
});
test('original dictation meter, batch failure retry and insertion work with the native editor',async()=>{
 const {Recorder}=await import('../src/original/obsidian/recorder.js');const start=Recorder.prototype.start;
 Recorder.prototype.start=async function(){this.rate=16000;};let revision=0,saved;
 const api={load:async()=>({revision,data:{settings:{asr:{engine:'local',mode:'batch',keepAudio:false}},document:{path:'dictation.md',text:'原文',etag:null}}}),info:async()=>({platform:'darwin'}),assets:async()=>[],save:async input=>{saved=input.data;return{revision:++revision};},operation:async()=>({value:{}})};
 const root=document.createElement('div');document.body.append(root);let mounted;
 try{
  mounted=await mountAudio(root,api);const {plugin,view}=mounted;plugin.transcription.readiness=async()=>null;plugin.transcription.transcribe=async()=>{throw Error('temporary fixture failure');};
  await plugin.dictation.start(view);const session=plugin.dictation.session;assert.equal(session.state,'listening');
  session.recorder.accept(Float32Array.from({length:16000},(_,i)=>Math.sin(i*.2)*.2));assert.ok(session.ui.meter.firstElementChild.style.getPropertyValue('--qaudio-level'));
  await plugin.dictation.finish();assert.equal(plugin.dictation.session.state,'error');assert.equal(view.editor.getValue(),'原文');
  plugin.transcription.transcribe=async()=> '重试后的转写';await plugin.dictation.retry();assert.equal(view.editor.getValue(),'重试后的转写\n\n原文');assert.equal(plugin.dictation.isActive(),false);
  root.querySelector('button[aria-label="阅读预览"]').click();view.editor.replaceRange('更新',{line:0,ch:0});assert.match(root.querySelector('.qaudio-dsh-preview').textContent,/更新重试/);
  const input=root.querySelector('input[aria-label="Markdown 路径"]');input.value='renamed-draft.md';await plugin.saveSettings();assert.equal(saved.document.draftPath,'renamed-draft.md');
 }finally{Recorder.prototype.start=start;await mounted?.dispose();root.remove();}
});
test('product CSS is byte-identical to archived Obsidian source',async()=>{const hash=async path=>createHash('sha256').update(await readFile(path)).digest('hex');assert.equal(await hash('src/original/styles.css'),'33873f41de434f2f5e22fdbd5f14d3441f691ab464a9b8ac2bf16cea404aa250');});
