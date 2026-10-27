import {AudioHost} from "./audio-host.js";
import {AudioFiles} from "./audio-files.js";
import {normalizeSettings} from "./original/settings.js";
import { TypertRemoteService, Remote } from "@deepseek-ai/dsh-typert-protocol";
import path from "node:path";
import { homedir } from "node:os";
import { StateStore } from "./storage.js";
import { NAME, SERVICE } from "./meta.js";
export const Config = {
  "~standard": {
    version: 1,
    vendor: NAME,
    validate(value) {
      if (value == null) return { value: {} };
      if (
        typeof value !== "object" ||
        Array.isArray(value) ||
        (value.notesDir!==undefined&&(typeof value.notesDir!=="string"||!path.isAbsolute(value.notesDir))) ||
        Object.keys(value).some((k) => !["dataDir","notesDir"].includes(k)) ||
        (value.dataDir !== undefined &&
          (typeof value.dataDir !== "string" ||
            !path.isAbsolute(value.dataDir)))
      )
        return {
          issues: [{ message: "dataDir must be an absolute directory" }],
        };
      return { value };
    },
  },
};
export default class PluginService extends TypertRemoteService {
  constructor(ctx, config = {}) {
    super(ctx, SERVICE);
    this.audioHost=new AudioHost();
    ctx.effect(()=>()=>this.audioHost.dispose());
    this.store = new StateStore(
      config.dataDir ||
        path.join(
          process.env.DSH_HOME || path.join(homedir(), ".dsh"),
          "qiaomu",
          NAME,
        ),
    );
    this.files=new AudioFiles(config.notesDir||path.join(path.dirname(this.store.file),'notes'));
  }
  info(){return {platform:process.platform};}
  async operation(request){try{const allowed=['speech','voices','transcribe','cancel','local','localChanges','secrets'];if(!request||!allowed.includes(request.method))throw Error('Invalid operation');return {value:await this.audioHost[request.method](request.input)};}catch(e){return {failure:{message:e.code||'Audio operation failed',code:e.code,name:e.name,status:e.status,retryAt:e.retryAt}};}}
  notesList(request){return this.files.list(request?.folder||'');}
  notesRead(request){return this.files.read(request.path);}
  notesWrite(request){return this.files.write(request);}
  assets(){return this.files.assets();}
  assetRead(request){return this.files.assetRead(request.path);}
  exportFiles(request){return this.files.export(request);}
  reveal(request){return this.files.reveal(request.path);}

  load() {
    return this.store.load();
  }
  save(request) {
    return this.store.save({...request,data:{document:request.data.document,settings:normalizeSettings(request.data.settings)}});
  }
}
for (const name of ["load","save","info","operation","notesList","notesRead","notesWrite","assets","assetRead","exportFiles","reveal"])
  Remote(name)(PluginService.prototype[name], {
    name,
    private: false,
    static: false,
    addInitializer(fn) {
      fn.call(Object.create(PluginService.prototype));
    },
  });
