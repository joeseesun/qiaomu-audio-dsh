import {marked} from 'marked';
import DOMPurify from 'dompurify';
/** Host Markdown surface. Source line mapping is retained for the original ReadingManager. */
export function renderPreview(element,source){
 const masked=source.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/,text=>text.replace(/[^\n]/g,' '));const tokens=marked.lexer(masked);let offset=0;const pieces=[];
 for(const token of tokens){const start=masked.indexOf(token.raw,offset);if(start>=0)offset=start;const line=masked.slice(0,offset).split('\n').length-1;offset+=token.raw.length;const list=[token];list.links=tokens.links;const html=DOMPurify.sanitize(marked.parser(list),{USE_PROFILES:{html:true},FORBID_TAGS:['input','button','form','iframe','style']});pieces.push(`<div data-source-line="${line}">${html}</div>`);}
 element.innerHTML=pieces.join('');for(const a of element.querySelectorAll('a')){a.target='_blank';a.rel='noopener noreferrer';}
}
export function previewPosition(element){const top=element.getBoundingClientRect().top;const blocks=[...element.querySelectorAll('[data-source-line]')];return Number(blocks.find(block=>block.getBoundingClientRect().bottom>top+1)?.dataset.sourceLine||0);}
export function scrollPreview(element,line){const blocks=[...element.querySelectorAll('[data-source-line]')];const target=blocks.filter(block=>Number(block.dataset.sourceLine)<=line).at(-1)||blocks[0];if(target)element.scrollTop+=target.getBoundingClientRect().top-element.getBoundingClientRect().top;}
const previewResources=new WeakMap();
export function disposePreview(element){const resources=previewResources.get(element);if(resources){resources.active=false;resources.urls.forEach(url=>URL.revokeObjectURL(url));previewResources.delete(element);}}
export async function hydratePreview(element,{sourcePath,loadAsset}){
 disposePreview(element);const resources={active:true,urls:[]};previewResources.set(element,resources);
 await Promise.all([...element.querySelectorAll('img')].map(async image=>{const raw=image.getAttribute('src')||'';let target;try{target=new URL(raw,'https://qiaomu-notes.invalid/'+sourcePath);}catch{return;}if(target.origin!=='https://qiaomu-notes.invalid')return;
 try{const file=decodeURIComponent(target.pathname.slice(1));const result=await loadAsset(file);if(!resources.active)return;const ext=file.split('.').at(-1).toLowerCase(),mime={mp3:'audio/mpeg',mp4:'video/mp4',m4a:'audio/mp4',webm:'audio/webm',wav:'audio/wav',ogg:'audio/ogg',png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',webp:'image/webp',gif:'image/gif',avif:'image/avif'}[ext]||'application/octet-stream';const bytes=Uint8Array.from(atob(result.base64),c=>c.charCodeAt(0));const url=URL.createObjectURL(new Blob([bytes],{type:mime}));resources.urls.push(url);if(mime.startsWith('audio/')||mime.startsWith('video/')){const media=document.createElement(mime.startsWith('audio/')?'audio':'video');media.controls=true;media.preload='metadata';media.src=url;media.style.maxWidth='100%';image.replaceWith(media);}else image.src=url;
 }catch{if(resources.active){image.setAttribute('alt',(image.getAttribute('alt')||raw)+'（附件不可用）');image.removeAttribute('src');}}}));
}
