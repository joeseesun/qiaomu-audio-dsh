import test from 'node:test';import assert from 'node:assert/strict';
import {build} from 'esbuild';import {mkdtemp,rm,readFile,symlink,mkdir} from 'node:fs/promises';import {tmpdir} from 'node:os';import path from 'node:path';import {pathToFileURL} from 'node:url';
import {CredentialStore} from '../src/credential-store.js';import {AudioFiles} from '../src/audio-files.js';
const temp=await mkdtemp(path.join(tmpdir(),'qaudio-host-tests-'));const entry=path.join(temp,'host.mjs');
await build({entryPoints:['src/audio-host.js'],outfile:entry,bundle:true,platform:'node',format:'esm',loader:{'.py':'text'},banner:{js:"import{createRequire as nativeRequire}from'node:module';const require=nativeRequire(import.meta.url);"}});
const {AudioHost,boundedRequest}=await import(pathToFileURL(entry));
test.after(()=>rm(temp,{recursive:true,force:true}));
test('cloud requests preserve content type, enforce streamed size, and abort',async()=>{
 let sent;const result=await boundedRequest({url:'https://example.com',method:'POST',contentType:'application/json',body:'{}'},{fetcher:async(url,options)=>{sent=options;return new Response('{"ok":true}',{status:200});}});assert.equal(sent.headers['Content-Type'],'application/json');assert.equal(sent.redirect,'error');assert.equal(result.json.ok,true);
 await assert.rejects(boundedRequest({url:'https://example.com'},{limit:3,fetcher:async()=>new Response('1234')}),/size limit/);
 await assert.rejects(boundedRequest({url:'https://user:secret@example.com'}),/Invalid service/);
});
test('free providers never access Keychain, concurrent jobs cancel and unregister',async()=>{
 const host=new AudioHost({credentials:{get:async()=>{throw Error('unexpected credential access');}}});for(const id of ['system','macos','edge','localModel'])assert.equal((await host.profile({id})).key,'');
 const pending=host.withJob('one',signal=>new Promise((resolve,reject)=>signal.addEventListener('abort',()=>reject(Object.assign(Error('cancel'),{name:'AbortError'})))));await assert.rejects(host.withJob('one',()=>{}),/active operation/);host.cancel({id:'one'});await assert.rejects(pending,{name:'AbortError'});assert.equal(host.jobs.size,0);host.dispose();
});
test('local registry and storage guard still work in the actual native bundle',async()=>{
 const root=path.join(temp,'model-test');await mkdir(root);const vault=path.join(root,'vault');await mkdir(vault);const link=path.join(root,'link');await symlink(vault,link);
 const host=new AudioHost({localOptions:{root:path.join(link,'models'),cacheRoot:path.join(root,'cache'),vaultPaths:[vault]}});await assert.rejects(host.localManager().initialize(),{code:'localPath'});host.dispose();
 const safe=new AudioHost({localOptions:{root:path.join(root,'models'),cacheRoot:path.join(root,'cache'),sharedRoots:[]}});assert.equal((await safe.localManager().voices('melo')).length,1);const first=await safe.localChanges({revision:-1});const next=safe.localChanges({revision:first.revision});safe.localManager().emit('kokoro',{phase:'download',bytes:1,total:10});assert.equal((await next).states.kokoro.bytes,1);safe.dispose();
});
test('Keychain transport never places key in arguments and verifies writes',async()=>{
 const calls=[],values=new Map();const store=new CredentialStore({platform:'darwin',execute:async(args,input='')=>{calls.push({args,input});if(args[0]==='-i'){const [,id,,service,,value]=input.trim().split(' ').slice(2);values.set(id,value);return {code:0,output:''};}if(args[0]==='find-generic-password'){const value=values.get(args[2]);return{code:value?0:44,output:value||''};}if(args[0]==='delete-generic-password'){values.delete(args[2]);return{code:0,output:''};}}});
 const id='qiaomu-audio-dsh-tts-openai',value='test-only $(never execute) `literal`';await store.set(id,value);assert.equal(await store.get(id),value);assert.ok(calls.every(call=>!call.args.join(' ').includes(value)));assert.throws(()=>store.set('bad id','x'),/identifier/);await store.set(id,'');assert.equal(await store.get(id),'');
});
test('export writes collision-safe attachments and rejects traversal before writing',async()=>{
 const files=new AudioFiles(path.join(temp,'notes'));const encoded=Buffer.from('ID3fake-test').toString('base64');const a=await files.export({files:[{name:'voice.mp3',base64:encoded}]});const b=await files.export({files:[{name:'voice.mp3',base64:encoded}]});assert.equal(a[0].name,'voice.mp3');assert.equal(b[0].name,'voice 2.mp3');assert.equal((await readFile(a[0].fullPath)).toString(),'ID3fake-test');await assert.rejects(files.export({files:[{name:'../escape.mp3',base64:encoded}]}),/filename/);await assert.rejects(files.assetRead('../escape.mp3'),/relative path/);
});
