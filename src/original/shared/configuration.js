import {ttsSecretId} from '../settings.js';
export async function findSpeechSettings(app,sourceId){return app.speechSettings(sourceId);}
export async function copySpeechSettings(host,sourceId){
 const imported=await host.bridge.importSpeech(sourceId);if(!imported)return -1;
 for(const provider of Object.keys(imported.tts.profiles)){
  if(['system','macos','edge','localModel'].includes(provider))continue;
  await host.app.secretStorage.refreshSecret(ttsSecretId(provider,'qiaomu-audio-dsh'));
 }
 const previous=host.settings.tts;host.settings.tts=imported.tts;
 try{await host.saveSettings();}catch(error){host.settings.tts=previous;throw error;}
 host.speech.controller.cache.clear();host.reading?.restartWithSettings();return imported.keys;
}
