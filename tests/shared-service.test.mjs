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
