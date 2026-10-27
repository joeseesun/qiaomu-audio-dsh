# 乔木语音 · DeepSeek Harness

[English](README.en.md) · [功能与验收记录](docs/ADAPTATION.md) · [本机模型安装](docs/local-runtime.md)

把原版乔木语音的朗读、听写和音视频导出带到 DeepSeek Harness。直接保留原版声音选择、播放控制、设置、分享弹窗和 CSS，只适配宿主接口与 Markdown 工作区。

![原版阅读控制](docs/screenshots/original-reading-controls.png)

## 功能

- Markdown 全篇、选中内容、光标和可见位置朗读；暂停、恢复、逐句跳转、进度、倍速和自动跟随。
- 系统语音、macOS 增强音色、Edge、Kokoro/Melo，以及 OpenAI 兼容、Qwen、豆包、MiniMax、硅基流动、ElevenLabs、Azure；保留原版服务配置、音色目录、试听与最近选择。
- 麦克风听写和音频文件转写；实时/批量模式、失败重试、取消、保留录音、光标插入。支持本机 SenseVoice 与原版全部云识别协议。
- 原版分享流程：编辑朗读稿、多范围、预听、MP3、横竖 MP4、4 类可视化、字幕/SRT、封面/尾卡、头像、署名、背景和笔记附件。
- 原生快捷操作、Markdown 保存与草稿恢复、写入冲突保护；可复用的 `qiaomuAudio` 公共服务与 Reader/RSS 配置导入接口。

## 安装

需要 DeepSeek Harness **>=0.2.1-rc.3 <0.3.0**。从 [Releases](https://github.com/joeseesun/qiaomu-audio-dsh/releases) 下载 tgz，在 Harness 插件管理中安装并启用，侧栏打开“乔木语音”。也可使用应用自带 CLI：

```sh
dsh plugin --profile YOUR_PROFILE add /absolute/path/qiaomu-audio-dsh-0.1.3.tgz
```

首次选择声音后可试听，再打开或输入 Markdown。默认文件位于 `DSH_HOME/qiaomu/qiaomu-audio-dsh/notes`，设置与草稿单独保存在同级 `state.json`；默认 `DSH_HOME` 为 `~/.dsh`。插件配置可指定绝对 `notesDir`/`dataDir`。不修改原 Obsidian 插件或它的数据。

API 密钥保存到 macOS Keychain、Windows DPAPI 或 Linux Secret Service，不写入项目 JSON。Linux 需要可用的 Secret Service 与 `secret-tool`。导入 Reader/RSS 设置是显式的一次性复制，保留目标已有密钥；只有来源插件注册接口后才显示导入入口。

## 本机模型与验证

本机模型需要先按[安装说明](docs/local-runtime.md)准备独立 Python 环境，再在原版设置中下载模型。macOS 实测了 Mac 音色、Edge、Kokoro、Melo、SenseVoice、MP3 与 H.264/AAC MP4 导出、原版预览、保存、跨插件服务和 720px 界面。

自动检查覆盖原版 TTS/ASR/导出协议、取消与重试、真实原版组件挂载、听写光标插入、Host 文件与凭据边界。付费云服务使用协议 fixtures 验证，未代替用户调用所有付费账号；真实麦克风授权与 Windows/Linux 实机仍需对应环境验证。详细证据见 [ADAPTATION.md](docs/ADAPTATION.md)。

## 开发与集成

```sh
npm ci
npm run check
npm pack
```

Cordis 客户端通过可选注入 `qiaomuAudio` 使用 `speak`、`stop`、`transcribe`、`readNote`、`startDictation`。服务在语音面板关闭时仍能朗读和转写，需要编辑器的操作会打开语音面板。卸载或停止会取消未开始的播放。类型与可复用原版语音组件由 `qiaomu-audio-dsh/shared` 导出；不要将密钥加入持久化设置。

源项目 [qiaomu-audio](https://github.com/joeseesun/qiaomu-audio)，GPL-3.0-only；第三方依赖与来源见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

`createSpeechBridge()` 为 Reader/RSS 提供独立的原生合成、音色目录和本地模型接口；`coordinateSpeech()` 协调跨插件播放。消费者在卸载时释放 bridge 与协调句柄。

`exportSpeechSettings()` 供 RSS 的原版设置页发现当前语音配置，不读取密钥；用户点击导入时才调用 `exportSpeechSettings({includeSecrets:true})`。返回值仅用于向目标系统凭据库复制，不写入 JSON。
