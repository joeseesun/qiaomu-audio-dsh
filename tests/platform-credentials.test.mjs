import test from 'node:test';
import assert from 'node:assert/strict';
import {platformCredentials} from '../src/platform-credentials.js';
test('Windows credentials use current-user DPAPI with stdin-only secrets',async()=>{
 const calls=[];const store=platformCredentials('win32',async(cmd,args,input)=>{calls.push({cmd,args,input});return {code:0,output:Buffer.from('test-secret').toString('base64')};});await store.set('qiaomu-audio-dsh-tts-test','test-secret');assert.equal(await store.get('qiaomu-audio-dsh-tts-test'),'test-secret');assert.equal(calls[0].cmd,'powershell.exe');assert.ok(!calls[0].args.join(' ').includes('test-secret'));assert.equal(JSON.parse(calls[0].input).value,'test-secret');const script=Buffer.from(calls[0].args.at(-1),'base64').toString('utf16le');assert.match(script,/DataProtectionScope\]::CurrentUser/);assert.match(script,/ProtectedData\]::Protect/);
});
test('Linux credentials go through Secret Service, with no secret in argv',async()=>{
 const calls=[];const store=platformCredentials('linux',async(cmd,args,input)=>{calls.push({cmd,args,input});return {code:0,output:args[0]==='lookup'?'test-secret\n':''};});await store.set('qiaomu-audio-dsh-tts-test','test-secret');assert.equal(await store.get('qiaomu-audio-dsh-tts-test'),'test-secret');await store.set('qiaomu-audio-dsh-tts-test','');assert.deepEqual(calls.map(c=>c.args[0]),['store','lookup','clear']);assert.ok(calls.every(c=>!c.args.includes('test-secret')));assert.equal(calls[0].input,'test-secret');
});
