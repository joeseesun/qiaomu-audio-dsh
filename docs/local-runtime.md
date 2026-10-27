# 本机语音模型

Kokoro、Melo 和 SenseVoice 沿用原版固定版本、校验和与运行时。模型文件和运行环境位于系统应用数据目录的 `qiaomu-audio/speech`，不写入笔记目录。兼容版本的 Reader 模型目录可只读复用。

从本仓库完整源码目录运行（需要 Python 3）：

```sh
python3 scripts/install-local-runtime.py kokoro
python3 scripts/install-local-runtime.py melo
python3 scripts/install-local-runtime.py sensevoice
```

按需要只安装对应模型的环境。安装器校验固定 uv 二进制的 SHA-256，再安装 Python 3.11.11 和固定的 Sherpa 依赖。不会自动运行不明来源的已有 uv。不要只下载单个脚本；它需要同一版本的 `src/original/runtime/models.json`。

返回 Harness → 乔木语音 → 声音与设置 → 本机模型，检查安装，然后下载模型。下载可取消；成功后会执行真实推理校验。离线合成通过本机回环接口和随机令牌连接模型进程。

2026-10-27 macOS Apple Silicon 实测：Kokoro 与 Melo 合成成功，SenseVoice 成功识别导出的 MP3。Windows/Linux 安装路径与凭据代码有自动检查，尚未实机验证。
