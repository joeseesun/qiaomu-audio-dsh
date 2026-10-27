import {synthesizeHttp,TTS_PROVIDERS,ttsProfile} from './original/core/tts/providers.js';
import {synthesizeEdge} from './original/core/tts/edge.js';
import {EdgeSpeechClient} from './original/core/tts/edge-client.js';
import {synthesizeMacSpeech,macSpeechVoices} from './original/core/tts/macos.js';
import {macVoiceChoices} from './original/core/tts/mac-voices.js';
import {loadVoiceCatalog} from './original/core/tts/choices.js';
import {cloudConfig} from './original/core/asr/providers.js';
import {recognizeCloud} from './original/core/asr/request.js';
import {createLocalTtsManager,LOCAL_MODELS,ASR_MODELS} from './original/runtime/local.js';
import {CredentialStore} from './credential-store.js';

export async function boundedRequest(request,{signal,fetcher=fetch,limit=32*1024*1024}={}){
  const url=new URL(request.url);if(!['https:','http:'].includes(url.protocol)||url.username||url.password)throw Error('Invalid service URL');
  const signals=[AbortSignal.timeout(90000)];if(signal)signals.push(signal);
  const response=await fetcher(url,{method:request.method||'GET',headers:{...request.headers,...(request.contentType?{'Content-Type':request.contentType}:{})},body:request.body,redirect:'error',signal:AbortSignal.any(signals)});
  if(Number(response.headers.get('content-length')||0)>limit){await response.body?.cancel();throw Error('Service response exceeds size limit');}
  const chunks=[];let size=0;const reader=response.body?.getReader();
  if(reader)try{while(true){const {value,done}=await reader.read();if(done)break;size+=value.length;if(size>limit){await reader.cancel();throw Error('Service response exceeds size limit');}chunks.push(value);}}finally{reader.releaseLock();}
  const bytes=Buffer.concat(chunks,size),text=bytes.toString('utf8');let json;try{json=JSON.parse(text);}catch{}
  return {status:response.status,headers:Object.fromEntries(response.headers),text,json,arrayBuffer:bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength)};
}
function validateText(text){if(typeof text!=='string'||!text.trim()||text.length>20000)throw Error('Speech text must contain 1–20000 characters');}
function decodeAudio(value){if(typeof value!=='string'||value.length>48*1024*1024||!/^[A-Za-z0-9+/]*={0,2}$/.test(value))throw Error('Invalid audio data');return new Uint8Array(Buffer.from(value,'base64'));}
const packed=result=>({...result,bytes:undefined,base64:Buffer.from(result.bytes).toString('base64')});
const idPattern=/^[a-z0-9-]{1,80}$/;
export class AudioHost {
  constructor({credentials=new CredentialStore(),localOptions}={}){this.credentials=credentials;this.localOptions=localOptions;this.jobs=new Map();this.edge=new EdgeSpeechClient(synthesizeEdge);this.revision=0;this.waiters=new Set();}
  localManager(){if(!this.manager){this.manager=createLocalTtsManager(this.localOptions);this.unsubscribe=this.manager.subscribe(()=>{this.revision++;for(const wake of this.waiters)wake();});}return this.manager;}
  async localChanges({revision}){this.localManager();if(revision===this.revision)await new Promise(resolve=>{const done=()=>{clearTimeout(timer);this.waiters.delete(done);resolve();};const timer=setTimeout(done,25000);this.waiters.add(done);});return {revision:this.revision,states:Object.fromEntries([...LOCAL_MODELS,...ASR_MODELS].map(m=>[m.id,this.manager.snapshot(m.id)]))};}
  async profile(input){if(!input||!TTS_PROVIDERS[input.id])throw Error('Unknown speech service');const base=ttsProfile({profiles:{[input.id]:input}},input.id);return {...base,key:['system','macos','edge','localModel'].includes(input.id)?'':typeof input.key==='string'?input.key:await this.credentials.get(`qiaomu-audio-dsh-tts-${input.id}`)};}
  async withJob(id,run){if(!idPattern.test(id||'')||this.jobs.has(id))throw Error('Invalid or active operation');const abort=new AbortController();this.jobs.set(id,abort);try{return await run(abort.signal);}finally{this.jobs.delete(id);}}
  cancel({id}){this.jobs.get(id)?.abort();return {cancelled:true};}
  async speech({id,text,profile}){validateText(text);return this.withJob(id,async signal=>{const p=await this.profile(profile);let result;
    if(p.id==='macos')result=await synthesizeMacSpeech(text,p.voice,{signal});
    else if(p.id==='edge')result=await this.edge.synthesize(text,p.voice,{signal});
    else if(p.id==='localModel')result=await this.localManager().synthesize(p,text,signal);
    else if(p.id==='system')throw Error('System speech is played by the client');
    else result=await synthesizeHttp(p,text,{key:p.key,signal,request:r=>boundedRequest(r,{signal})});
    return packed(result);
  });}
  async voices({id,profile,chinese=true}){return this.withJob(id,async signal=>{const p=await this.profile(profile);if(p.id==='macos')return {voices:macVoiceChoices(await macSpeechVoices(signal),key=>({voicePremium:chinese?'优质':'Premium',voiceEnhanced:chinese?'增强':'Enhanced',recommended:chinese?'推荐':'Recommended',voiceDisplayName:chinese?'显示名称':'Display name'}[key]||key),chinese)};return loadVoiceCatalog(p,{key:p.key,signal,request:r=>boundedRequest(r,{signal})});});}
  async transcribe({id,profile,base64,language='auto',local=false}){const wav=decodeAudio(base64);return this.withJob(id,async signal=>{if(local)return {text:await this.localManager().transcribe('sensevoice',wav,signal)};if(!profile||!idPattern.test(profile.id||''))throw Error('Invalid transcription profile');const cfg=cloudConfig(profile);const key=typeof profile.key==='string'?profile.key:await this.credentials.get(`qiaomu-audio-dsh-asr-${profile.id}-${profile.provider}`);return {text:await recognizeCloud(cfg,key,wav,{language,signal,request:r=>boundedRequest(r,{signal})})};});}
  async local({operation,model}){if(![...LOCAL_MODELS,...ASR_MODELS].some(x=>x.id===model))throw Error('Unknown local model');const manager=this.localManager();if(operation==='status')return manager.status(model);if(operation==='snapshot')return manager.snapshot(model);if(operation==='install'){await manager.install(model);return manager.snapshot(model);}if(operation==='cancel'){manager.cancelInstall(model);return manager.snapshot(model);}throw Error('Invalid local operation');}
  async secrets({operation,id,value}){if(operation==='get')return {value:await this.credentials.get(id)};if(operation==='set'){await this.credentials.set(id,value);return {saved:true};}throw Error('Invalid credential operation');}
  dispose(){for(const job of this.jobs.values())job.abort();this.unsubscribe?.();for(const wake of this.waiters)wake();this.manager?.dispose();this.jobs.clear();}
}
