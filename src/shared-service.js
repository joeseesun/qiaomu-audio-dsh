import {coordinateSpeech} from './original/shared/coordination.js';
import {NativeBridge} from './native-bridge.js';
import {SpeechService} from './original/speech.js';
import {TranscriptionService} from './original/transcription.js';
import {createApi} from './original/api.js';
import {normalizeSettings,ttsSecretId,asrSecretId} from './original/settings.js';
import {setPlatform} from './harness-ui.ts';
import {createSpeechSources} from './speech-sources.js';
const workspace=()=>({on(name,fn){const listener=e=>fn(e.detail);document.addEventListener(name,listener);return {name,listener};},offref(ref){document.removeEventListener(ref.name,ref.listener);},trigger(name,value){document.dispatchEvent(new CustomEvent(name,{detail:value}));}});
/** The public v1 API remains usable while another Harness panel is active. */
export function createSharedAudioService(api,{openPanel}={}) {
 let active=null,standalone=null,initializing=null,disposed=false,speechGeneration=0,settingsGeneration=0;
 const waiters=new Set(),bridges=new Set(),coordinators=new Set();
 const sources=createSpeechSources(api);
 const clearStandalone=()=>{standalone?.plugin.speech.dispose();standalone?.plugin.bridge.dispose();standalone?.secrets.clear();standalone=null;};
 async function background(){
  if(disposed)throw Error('Audio service is disconnected');
  if(active)return active.api;
  if(standalone)return standalone.api;
  if(initializing)return initializing;
  const generation=settingsGeneration;
  initializing=(async()=>{
   const [saved,info]=await Promise.all([api.load(),api.info()]);setPlatform(info);
   const bridge=new NativeBridge(api),secrets=new Map();let revision=saved.revision;
   const plugin={settings:normalizeSettings(saved.data.settings),manifest:{id:'qiaomu-audio-dsh'},bridge,voiceCatalogs:{},app:{workspace:workspace(),secretStorage:{getSecret:id=>secrets.get(id)||''}},local:()=>bridge,
    async saveSettings(){const result=await api.save({revision,data:{...saved.data,settings:normalizeSettings(plugin.settings)}});revision=result.revision;},
    reading:{stop(){},isPlaying:()=>false},dictation:{isActive:()=>false},
   };
   const settings=plugin.settings;const ids=[...Object.keys(settings.tts.profiles).filter(id=>!['system','macos','edge','localModel'].includes(id)).map(id=>ttsSecretId(id,'qiaomu-audio-dsh')),...settings.asr.profiles.map(p=>asrSecretId(p.id,p.provider))];
   try{await Promise.all(ids.map(async id=>secrets.set(id,(await bridge.call('secrets',{operation:'get',id})).value)));if(disposed||active||generation!==settingsGeneration){bridge.dispose();secrets.clear();if(disposed)throw Error('Audio service is disconnected');if(active)return active.api;throw Error('Audio settings changed; retry the operation');}
    plugin.speech=new SpeechService(plugin);plugin.transcription=new TranscriptionService(plugin);standalone={plugin,secrets,api:createApi(plugin)};return standalone.api;
   }catch(error){bridge.dispose();secrets.clear();throw error;}
  })().finally(()=>{initializing=null;});
  return initializing;
 }
 async function foreground(){
  if(disposed)throw Error('Audio service is disconnected');if(active)return active.api;
  if(!openPanel)throw Error('Open the Qiaomu Audio panel first');
  return new Promise((resolve,reject)=>{const waiter=value=>{clearTimeout(timer);waiters.delete(waiter);value?resolve(value):reject(Error('Audio service is disconnected'));};const timer=setTimeout(()=>{waiters.delete(waiter);reject(Error('Audio panel did not become ready'));},10000);waiters.add(waiter);try{openPanel();}catch(error){clearTimeout(timer);waiters.delete(waiter);reject(error);}});
 }
 return {
  version:1,
  coordinateSpeech(pause){if(disposed)throw Error('Audio service is disconnected');const entry=coordinateSpeech(workspace(),pause);coordinators.add(entry);let closed=false;return{claim(){if(!closed&&!disposed)entry.claim();},dispose(){if(closed)return;closed=true;coordinators.delete(entry);entry.dispose();}};},
  async createSpeechBridge(){
   if(disposed)throw Error('Audio service is disconnected');
   const info=await api.info();if(disposed)throw Error('Audio service is disconnected');
   const bridge=new NativeBridge(api);bridges.add(bridge);let closed=false;
   const live=fn=>(...args)=>{if(closed||disposed)throw Error('Audio speech bridge is disconnected');const result=fn(...args);return result?.then?result.then(value=>{if(closed||disposed)throw Error('Audio speech bridge is disconnected');return value;}):result;};
   return {platform:info.platform,speech:live((...args)=>bridge.speech(...args)),voices:live((...args)=>bridge.voices(...args)),snapshot:live(id=>bridge.snapshot(id)),status:live(id=>bridge.status(id)),install:live(id=>bridge.install(id)),cancelInstall:live(id=>bridge.cancelInstall(id)),subscribe:live(fn=>bridge.subscribe(fn)),dispose(){if(closed)return;closed=true;bridges.delete(bridge);bridge.dispose();}};
  },
  registerSpeechSource:(id,provider)=>sources.register(id,provider),
  speechSettings:id=>sources.read(id),
  importSpeech:id=>sources.copy(id),
  async speak(text){const generation=++speechGeneration;const service=await background();if(disposed||generation!==speechGeneration)return;return service.speak(text);},
  async transcribe(audio,options){return (await background()).transcribe(audio,options);},
  stop(){speechGeneration++;active?.api.stop();standalone?.api.stop();},
  isReading:()=>active?.api.isReading()||false,
  isDictating:()=>active?.api.isDictating()||false,
  async readNote(view){return (await foreground()).readNote(view);},
  async startDictation(view){return (await foreground()).startDictation(view);},
  attach(plugin,view){clearStandalone();const entry={api:createApi(plugin,()=>view)};active=entry;for(const waiter of [...waiters])waiter(entry.api);return()=>{if(active===entry)active=null;};},
  settingsChanged(){settingsGeneration++;clearStandalone();},
  dispose(){disposed=true;speechGeneration++;sources.dispose();for(const entry of coordinators)entry.dispose();coordinators.clear();for(const bridge of bridges)bridge.dispose();bridges.clear();active?.api.stop();active=null;clearStandalone();for(const waiter of [...waiters])waiter(null);},
 };
}
