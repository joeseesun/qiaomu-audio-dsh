import {TTS_PROVIDERS} from './original/core/tts/providers.js';
/** A selected provider can use its default voice without a profiles override. */
export function ttsCredentialProviders(tts) {
  return [...new Set([tts?.provider,...Object.keys(tts?.profiles || {})])]
    .filter(id=>TTS_PROVIDERS[id]&&!['system','macos','edge','localModel'].includes(id));
}
