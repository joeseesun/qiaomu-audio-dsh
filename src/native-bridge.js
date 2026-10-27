import {bytesToBase64} from './original/core/asr/request.js';
export const toBase64=value=>bytesToBase64(value instanceof Uint8Array?value:new Uint8Array(value));
export const fromBase64=value=>Uint8Array.from(atob(value),c=>c.charCodeAt(0));
export class NativeBridge {
 constructor(api,importer){this.api=api;this.importer=importer;this.listeners=new Set();this.states={};this.revision=-1;this.watchGeneration=0;this.active=new Set();}
 async call(method,input){const result=await this.api.operation({method,input});if(result.failure)throw Object.assign(new Error(result.failure.message),result.failure);return result.value;}
 async job(method,input,signal){signal?.throwIfAborted();const id=crypto.randomUUID();this.active.add(id);const cancel=()=>void this.call('cancel',{id}).catch(()=>{});signal?.addEventListener('abort',cancel,{once:true});try{const result=await this.call(method,{...input,id});signal?.throwIfAborted();return result;}finally{this.active.delete(id);signal?.removeEventListener('abort',cancel);}}
 async speech(profile,text,signal){const result=await this.job('speech',{profile,text},signal);return {...result,bytes:fromBase64(result.base64)};}
 voices(profile,{signal,chinese}){return this.job('voices',{profile,chinese},signal);}
 async transcribe(engine,wav,language,signal){const result=await this.job('transcribe',{profile:engine.profile,local:engine.kind==='local',base64:toBase64(wav),language},signal);return result.text;}
 snapshot(model){return this.states[model]||{phase:'unknown'};}
 publish(model,state){this.states[model]=state;for(const f of this.listeners)f(model,state);return state;}
 async status(model){return this.publish(model,await this.call('local',{operation:'status',model}));}
 async install(model){const state=await this.call('local',{operation:'install',model});return this.publish(model,state);}
 async cancelInstall(model){return this.publish(model,await this.call('local',{operation:'cancel',model}));}
 subscribe(fn){this.listeners.add(fn);if(this.listeners.size===1)this.watch();return ()=>{this.listeners.delete(fn);if(!this.listeners.size)this.watchGeneration++;};}
 async watch(){const generation=++this.watchGeneration;while(this.listeners.size&&generation===this.watchGeneration){try{const data=await this.call('localChanges',{revision:this.revision});if(generation!==this.watchGeneration)return;this.revision=data.revision;for(const [id,state] of Object.entries(data.states))this.publish(id,state);}catch(error){for(const id of Object.keys(this.states))this.publish(id,{phase:'error',error:{code:error.code||'network'}});break;}}}
 async exportFiles(files,folder=''){const saved=await this.api.exportFiles({folder,files:files.map(f=>({name:f.name,base64:toBase64(f.bytes)}))});return saved.map((f,i)=>({...files[i],...f}));}
 reveal(path){return this.api.reveal({path});}
 async speechSettings(sourceId){return this.importer?.read(sourceId)||null;}
 async importSpeech(sourceId){return this.importer?.copy(sourceId)||null;}
 dispose(){this.watchGeneration++;this.listeners.clear();for(const id of this.active)void this.call('cancel',{id}).catch(()=>{});this.active.clear();}
}
