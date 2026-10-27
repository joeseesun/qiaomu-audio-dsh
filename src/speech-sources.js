import {normalizeSettings,ttsSecretId} from './original/settings.js';
import {TTS_PROVIDERS} from './original/core/tts/providers.js';
const aliases={'qiaomu-reader':'qiaomu-reader','qiaomu-reader-dsh':'qiaomu-reader','qiaomu-ai-rss':'qiaomu-ai-rss','qiaomu-rss-dsh':'qiaomu-ai-rss'};
/** Optional native services register their current settings. Keys are requested only on explicit import. */
export function createSpeechSources(api){
 const sources=new Map();let disposed=false;
 const source=id=>sources.get(aliases[id]);
 async function read(id){const entry=source(id);if(!entry)return null;const value=await entry.read();if(disposed||source(id)!==entry)return null;const tts=value?.tts||value;if(!tts||!TTS_PROVIDERS[tts.provider])return null;return normalizeSettings({tts}).tts;}
 return{
  register(id,provider){const key=aliases[id];if(disposed||!key||typeof provider?.read!=='function')throw Error('Invalid speech settings source');if(sources.has(key))throw Error('Speech settings source already registered');sources.set(key,provider);return()=>{if(sources.get(key)===provider)sources.delete(key);};},
  read,
  async copy(id){const entry=source(id),tts=await read(id);if(!entry||!tts)return null;let keys=0;
   for(const provider of Object.keys(TTS_PROVIDERS)){
    if(['system','macos','edge','localModel'].includes(provider)||!entry.getSecret)continue;
    if(disposed||source(id)!==entry)throw Error('Speech settings source disconnected');
    const target=ttsSecretId(provider,'qiaomu-audio-dsh');const existing=await api.operation({method:'secrets',input:{operation:'get',id:target}});if(existing.failure)throw Error('Could not read destination credential');if(existing.value.value)continue;
    const value=await entry.getSecret(provider);if(!value)continue;
    if(disposed||source(id)!==entry)throw Error('Speech settings source disconnected');
    if(typeof value!=='string'||value.length>8192)throw Error('Invalid source credential');
    const saved=await api.operation({method:'secrets',input:{operation:'set',id:target,value}});if(saved.failure)throw Error('Could not save imported credential');keys++;
   }
   if(disposed||source(id)!==entry)throw Error('Speech settings source disconnected');
   return{tts,keys};
  },
  dispose(){disposed=true;sources.clear();},
 };
}
