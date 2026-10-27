import {NotesStore} from './notes.js';
import {mkdir,writeFile,readFile,lstat,realpath,readdir} from 'node:fs/promises';
import path from 'node:path';
import {homedir} from 'node:os';
import {spawn} from 'node:child_process';
const extensions=/\.(png|jpe?g|webp|gif|bmp|avif|mp3|mp4|m4a|wav|ogg|webm|srt)$/i;
export class AudioFiles extends NotesStore {
 async resolveAsset(relative){if(typeof relative!=='string'||!extensions.test(relative))throw Error('Unsupported attachment');return this.resolve(relative,{directory:true});}
 async assets(){await this.ready;const result=[];const walk=async(folder,depth=0)=>{if(depth>6||result.length>=1000)return;for(const entry of await readdir(path.join(this.root,folder),{withFileTypes:true})){if(entry.name.startsWith('.')||entry.isSymbolicLink())continue;const relative=path.posix.join(folder,entry.name);if(entry.isDirectory())await walk(relative,depth+1);else if(extensions.test(relative))result.push({path:relative,name:entry.name,extension:entry.name.split('.').at(-1)});}};await walk('');return result;}
 async assetRead(relative){const full=await this.resolveAsset(relative),stat=await lstat(full);if(!stat.isFile()||stat.size>64*1024*1024)throw Error('Attachment exceeds 64 MB');return {base64:(await readFile(full)).toString('base64')};}
 async export({files,folder=''}){if(!Array.isArray(files)||!files.length||files.length>20)throw Error('Invalid export');let dir;
 if(folder){if(typeof folder!=='string'||folder.includes('\0'))throw Error('Invalid folder');if(folder==='~')folder=homedir();else if(folder.startsWith('~/'))folder=path.join(homedir(),folder.slice(2));if(!path.isAbsolute(folder))throw Error('Choose an absolute export folder');dir=folder;}else dir=await this.resolve('attachments',{directory:true});
 await mkdir(dir,{recursive:true,mode:0o700});dir=await realpath(dir);const saved=[];
 for(const file of files){if(typeof file.name!=='string'||path.basename(file.name)!==file.name||/[\\/\0]/.test(file.name)||!extensions.test(file.name))throw Error('Invalid export filename');if(typeof file.base64!=='string'||file.base64.length>256*1024*1024||!/^[A-Za-z0-9+/]+={0,2}$/.test(file.base64))throw Error('Invalid export data');const bytes=Buffer.from(file.base64,'base64');const ext=path.extname(file.name),stem=path.basename(file.name,ext);let name=file.name,fullPath;
 for(let n=1;n<=10000;n++){name=n===1?file.name:`${stem} ${n}${ext}`;fullPath=path.join(dir,name);try{await writeFile(fullPath,bytes,{flag:'wx',mode:0o600});break;}catch(e){if(e.code!=='EEXIST'||n===10000)throw e;}}
 const relative=path.relative(this.root,fullPath);saved.push({name,fullPath,...(!relative.startsWith('..')&&!path.isAbsolute(relative)?{vaultFile:{path:relative,name,extension:ext.slice(1)}}:{})});}return saved;
 }
 async reveal(fullPath){if(typeof fullPath!=='string'||!path.isAbsolute(fullPath)||fullPath.includes('\0'))throw Error('Invalid export path');await lstat(fullPath);const command=process.platform==='darwin'?'/usr/bin/open':process.platform==='win32'?'explorer.exe':'xdg-open';const args=process.platform==='darwin'?['-R',fullPath]:process.platform==='win32'?[`/select,${fullPath}`]:[path.dirname(fullPath)];await new Promise((resolve,reject)=>{const child=spawn(command,args,{stdio:'ignore'});child.once('error',reject);child.once('close',code=>code===0?resolve():reject(Error('Could not reveal file')));});return {revealed:true};}
}
