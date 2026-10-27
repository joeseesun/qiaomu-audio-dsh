# 乔木语音 DSH 适配

源仓库 https://github.com/joeseesun/qiaomu-audio，冻结基线 `73bf3c21d9ecbb5c269effdd48e0e754e221679d`。不修改原插件工作区及未提交内容。

目标 DSH 0.2.1-rc.3。客户端使用原生 main / sidebar.panellist Slot，Host Remote 持久化，直接复用原版 UI，仅替换文件/宿主 API，不引入 Obsidian 兼容壳。

验收记录将在本目录追加。

## 完整功能对照（2026-10-27）

本表以冻结来源代码为基线；“已实现”不等于全部端到端已验证。不得将待迁移项改写为不支持后发布精简版。

| 能力 | 原始证据 | DSH 等价行为 | 当前状态 |
| --- | --- | --- | --- |
| Markdown 朗读范围 | markdown/speech-source.js、obsidian/reading.js | 选段/光标/可见/全篇、精确原文字位、过滤 Markdown | 原版核心测试；原生预览保留 source-line 映射，实际预览朗读通过 |
| 播放控制与跟随 | core/tts/controller.js、shared/progress.js | 跨句/进度/暂停恢复/定位/手动滚动后暂停跟随 | 真实 5 句朗读完成；暂停后下一句到 2/5、上一句回 1/5，跟随按钮与原版菜单正常 |
| 系统与 Edge | core/tts/macos.js、edge.js、edge-client.js | 系统语音、Mac 增强音色、Edge、速度与取消 | Mac 191 音色、清和试听/应用成功；Edge 实际返回 11,952 字节 MP3 |
| 全部云 TTS | core/tts/providers.js、choices.js | OpenAI兼容/Qwen/豆包/MiniMax/硅基/ElevenLabs/Azure、音色枚举 | 原版协议与错误/取消 fixtures 通过；未使用全部付费账号做在线调用 |
| 服务与历史 | settings.js、core/tts/recent.js | 配置持久化、8个最近组合、试听还原、不把试听记历史 | 原版历史与试听控制测试通过；音色应用/保存/重载实测 |
| 本机模型 | runtime/local.js、speech-runtime.py、models.json | Kokoro/Melo/SenseVoice、下载校验、Reader模型复用、外部安装器 | 三个模型实测就绪；Kokoro 77,510 字节 WAV、Melo 119,852 字节 WAV；外部环境安装器一并迁移 |
| 听写与识别 | core/asr、obsidian/recorder.js、dictation.js | 麦克风/文件、实时与批量、取消、分段并发、失败保留与重试 | 文件转写实测；原版听写+原生编辑器的输入帧、音量条、失败保留、重试插入、预览更新测试通过；真实麦克风权限未实测 |
| 全部 ASR 服务 | core/asr/providers.js、http.js | 本机/硅基/豆包/GLM/StepFun/MiMo/Groq/OpenAI/兼容 | SenseVoice 实际识别 MP3；所有云协议、鉴权失败、限流重试、取消 fixtures 通过，付费在线账号未逐一调用 |
| 音频导出 | core/share/audio.js、scope.js、export.js | 多范围、预听、编辑朗读稿、MP3、标题作者、保音调变速 | 原版范围/剪辑/导出测试；实际 MP3 44,100 Hz、4.963250 秒、59,627 字节 |
| 视频导出 | core/share/video.js、draw.js、subtitles.js、styles.js | MP4横竖、4类可视化、逐字字幕、强调、封面/尾卡、SRT | 原版全部样式/字幕/输出组合测试；真实 H.264 1080×1920 + AAC MP4、5.712109 秒，经 ffprobe 与画面检查 |
| 分享身份与媒体 | core/share/brand.js、obsidian/share-modal.js | 头像、作者、链接、背景图、目标文件夹、嵌入笔记 | 原版设置/品牌/输出测试；附件实际保存并插入笔记，MP3/MP4 预览加载 |
| 凭据与导入 | settings.js、shared/configuration.js | 安全凭据存储、Reader/RSS设置导入、隔离provider密钥 | Mac Keychain 实测；Windows DPAPI/Linux Secret Service 命令测试；原版导入 UI 用注册测试来源实际验证，目标已有密钥不覆盖；真实 Reader/RSS 注册仍属各自迁移联调 |
| 共享 API 与协调 | api.js、shared/coordination.js | speak/transcribe/startDictation、互斥播放与共享模型 | 原生 qiaomuAudio 服务；独立 QA 插件 speak 完成、readNote 打开并朗读实测；停用/延迟播放/新面板竞态测试通过 |

## UI 迁移硬约束（用户 2026-10-27 明确要求）

尽可能直接复用 Obsidian 原版的布局、CSS、组件、图标、交互和设置界面，不自行重新设计。只改宿主 API、必要的容器与主题变量映射；不得以换宿主为理由重画 UI 或删减功能。逐项对照原版截图与真实交互验收。

## 本轮实际证据

- 117 项测试及构建/包入口检查通过，覆盖原版 TTS/ASR/导出核心、真实原版 UI 挂载与声音应用保存、Host 网络上限/取消/模型路径/钥匙串传输/文件冲突。
- 独立 Harness ports-qa 安装 r12 包，原版声音弹窗191个系统音色，清和试听成功并应用持久化；原版深色设置截图已查看。
- 原版分享弹窗真实导出 MP4（H.264 1080×1920、AAC 44100 Hz、5.712109秒、1212548字节）与 MP3（44100 Hz、4.963250秒、59627字节），ffprobe 独立核验，视频3秒帧已查看；附件链接插入笔记后保存。
- 上述 117 项为较早检查记录；新增服务/凭据/听写回归，并移除 2 个不再使用的旧自绘版本测试后，当前全套 125 项。最新产品代码与产物将在发布前复跑。
- 原版 CSS SHA-256 为 `33873f41de434f2f5e22fdbd5f14d3441f691ab464a9b8ac2bf16cea404aa250`，字节一致；亮/暗/720px 实测，720px 文档宽度仍为 720、弹窗宽 688，无水平溢出。
- 候选 r15 已在独立 Harness 验证公共服务。更多原生 UI/草稿/语言修补需更新候选后复验；此句为候选期记录；v0.1.0 已于当日公开发布并安装到日用 Harness，公开包与安装产物一致。
- 运行限制明确保留：无付费服务账号时不声称全部云服务在线验证；真实麦克风硬件、Windows/Linux 实机未验证。实际 Reader/RSS 注册及互斥联调不能用 QA 测试来源代替，仍在整组迁移任务范围内。

## Reader 原生联调与 0.1.1（2026-10-27）

- 共享服务新增 `createSpeechBridge` 和 `coordinateSpeech`；保留 Audio 原版 UI/CSS。桥接实例独立取消，卸载后拒绝迟到结果，语音所有权通过原版 workspace 事件协议协调。
- 直接运行 Reader 的 `createReaderSpeech`、原版 `attachTts`/`TtsController`，连接本产品真实 `createSharedAudioService` 和 `AudioHost`；macOS 清和音色为两章实际合成 48 kHz PCM WAV（413,058 字节/4.302229 秒、189,322 字节/1.971646 秒），恢复标记写入第二章；竞争朗读触发暂停。此项是 Node/JSDOM + 本机语音进程联调，不冒充 Harness 浏览器播放验收。
- Reader 的原版音色、试听恢复、倍速、密钥设置、跨章、恢复和取消测试通过；Audio 当前 127 项回归、构建和包入口检查通过。
- Reader 当前适配分支注册真实设置来源；RSS 注册仍待其迁移。浏览器由用户使用，本轮没有操作浏览器。
