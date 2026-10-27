# 原生插件集成

通过 Cordis 可选注入 `qiaomuAudio`，不要访问另一个面板的 React 实例或全局变量：

```js
ctx.inject(['qiaomuAudio'], child => {
  const audio = child.qiaomuAudio;
  // 用户触发时：await audio.speak(text)
  // 离开该业务时：audio.stop()
});
```

`speak` 在音频结束、被新调用替代或停止后完成；没有启用 Audio 时服务不存在。`transcribe` 接收音频 Blob/ArrayBuffer/Uint8Array，或 Float32Array 与 sampleRate。`readNote` / `startDictation` 未传 view 时打开 Audio 的笔记编辑器；应用卸载和初始化竞态会取消待执行操作。

Reader/RSS 可以提供原版配置的一次性导入来源：

```js
ctx.inject(['qiaomuAudio'], child => child.effect(() =>
  child.qiaomuAudio.registerSpeechSource('qiaomu-reader-dsh', {
    read: async () => currentSettings.tts,
    getSecret: async provider => credentialService.readProviderKey(provider),
  })
));
```

RSS ID 使用 `qiaomu-rss-dsh`。发现设置时不读取凭据；只有用户点击原版导入按钮，才读取来源密钥，目标已有密钥不覆盖。来源卸载后，旧异步结果不再写入。不要把 key 放入 `read()` 返回值，规范化会剔除它。接口注册须由插件生命周期拥有，不要永久留在全局对象中。

原版语音协调事件 `qiaomu-speech:claim-v1` 通过文档事件传递；复用 `SpeechService` 的插件自动暂停其他语音控制器。独立媒体播放器也可以订阅事件并暂停，避免重叠声音。

2026-10-27 独立 Harness profile 中通过单独 QA 插件实测：后台 `speak` 完成、`readNote` 打开原版编辑器并播放、Reader 测试来源出现导入入口、导入系统音色后持久化成功。该 QA 插件不随正式包发布；实际 Reader/RSS 的注册属于各自迁移工作，不能用测试来源代替它们的最终联调。
