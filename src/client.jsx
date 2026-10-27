import {watchHostTheme,applyHostTheme} from "./harness-ui.ts";
import { remoteApi } from "./remote.js";
import React, { useEffect, useState } from "react";
import { BookOpen, Palette, AudioLines, FileText } from "lucide-react";
import { NAME, ID, TITLE, EN_TITLE, SERVICE } from "./meta.js";
import {createSharedAudioService} from "./shared-service.js";
import { App } from "./native-app.jsx";
import originalCss from "./original/styles.css";
import hostCss from "./harness-ui.css";
import boundaryCss from "./native.css";
const css=hostCss+originalCss+boundaryCss;
const ICON = NAME.includes("ui-learn")
  ? BookOpen
  : NAME.includes("cover")
    ? Palette
    : NAME.includes("audio")
      ? AudioLines
      : FileText;
export const inject = ["slots", "remote", "locale"];
export function apply(ctx) {
  ctx.effect(watchHostTheme);
  let actionHandler=null,pendingAction=null,shared=null,layout=null;
  ctx.inject(["layout"],ready=>{layout=ready.layout;return()=>{layout=null;};});
  const actions={speechImporter:{read:id=>shared?.speechSettings(id),copy:id=>shared?.importSpeech(id)},attachAudio:(plugin,view)=>shared?.attach(plugin,view),settingsChanged:()=>shared?.settingsChanged(),subscribe(fn){actionHandler=fn;if(pendingAction){const next=pendingAction;pendingAction=null;queueMicrotask(()=>fn(next));}return()=>{if(actionHandler===fn)actionHandler=null;};},send(id){if(actionHandler)actionHandler(id);else pendingAction=id;}};
  ctx.inject(["shortcuts","layout"],ready=>{
    for(const [id,label] of [["auto","朗读"],["start","从头朗读"],["cursor","从光标朗读"],["selection","朗读选中内容"],["follow","返回朗读位置"],["share","导出分享"],["toggle","暂停或继续"],["stop","停止朗读"],["next","下一句"],["previous","上一句"],["dictation","开始或结束听写"],["cancel-dictation","取消听写"],["settings","设置"]])ready.effect(()=>ready.shortcuts.register({id:`${ID}.${id}`,label:()=>`${TITLE} · ${label}`,aliases:[label,"Qiaomu Audio"],defaults:{},regions:["page","editable"],modals:[],resolve:()=>({status:"handled",run:()=>{ready.layout.selectPanel(ID);actions.send(id);}})}));
  });
  const listeners = new Set();
  let api = null,
    error = "";
  const notify = () => listeners.forEach((f) => f());
  let disposed = false;
  ctx.effect(() => {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.append(style);
    return () => style.remove();
  });
  ctx.effect(() =>
    ctx.locale.register(ID, { zh: { title: TITLE,language:"zh" }, en: { title: EN_TITLE,language:"en" } }),
  );
  const codec = () => ({
    mode: "strict",
    typeSymbol: NAME + "#json",
    create: () => ({
      parse: (v) => v,
      safeParse: (v) => ({ success: true, data: v }),
    }),
  });
  const methods = ["load","save","info","operation","notesList","notesRead","notesWrite","assets","assetRead","exportFiles","reveal"];
  const descriptors = methods.map((method) => ({
    id: `${NAME}#${SERVICE}/${method}`,
    service: SERVICE,
    namespace: SERVICE,
    method,
    invocation: { kind: "direct" },
    parameters: ["load", "info", "assets"].includes(method)
      ? []
      : [{ name: "request", wire: "request", source: "json", codec: codec() }],
    result: { mode: "src-json" },
    cancellation: { parameter: "signal" },
  }));
  ctx.effect(() => () => {
    disposed = true;
    api = null;
    listeners.clear();
  });
  ctx.remote
    .$mount({ package: NAME, descriptors })
    .then(() => {
      if (disposed) return;
      ctx.inject(["remote." + SERVICE], (ready) => {
        api = remoteApi(ready.remote[SERVICE], methods);
        shared=createSharedAudioService(api,{openPanel:()=>layout?.selectPanel(ID)});
        const unprovide=ready.provide("qiaomuAudio",shared);
        error = "";
        notify();
        return () => {
          shared?.dispose();shared=null;void unprovide();
          api = null;
          notify();
        };
      });
    })
    .catch((e) => {
      error = e.message;
      notify();
    });
  function Panel() {
    const [, render] = useState(0);
    useEffect(() => {
      applyHostTheme();
      const f = () => render((x) => x + 1);
      listeners.add(f);
      return () => listeners.delete(f);
    }, []);
    return (
      <div className="qaudio-dsh-surface qaudio-dsh-host" data-plugin={NAME}>
        {api ? (
          <App api={api} actions={actions} language={ctx.locale.bind(ID)("language")} />
        ) : (
          <p role="status">{error || "正在连接本地服务 / Connecting…"}</p>
        )}
      </div>
    );
  }
  ctx.effect(() =>
    ctx.slots.inject("main", () =>
      ctx.slots.register({ name: "main", key: ID, locale: ID }, Panel),
    ),
  );
  ctx.effect(() =>
    ctx.slots.inject("sidebar.panellist", () =>
      ctx.slots.register(
        {
          name: "sidebar.panellist",
          id: ID,
          order: 45,
          locale: ID,
          label: () => TITLE,
        },
        ICON,
      ),
    ),
  );
}
