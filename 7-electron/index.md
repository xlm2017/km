# 认识electron.
2013年创建.同类型的还有NW.js,对系统对话框,系统托盘,系统菜单,剪切板等api做了封装.

# 相关生态.
- electron-builder 构建工具,自动下载,自动构建,自动打包,自动升级等能力.
- rxdb是一个在electron应用内使用的实时NoSQL数据库,如果希望使用传统的数据库, 也可以使用SQLite数据库.
- electron-vue.

# Electron的不足.
- 打包后体积巨大.
- 开发复杂度较大.跨进程通信.
- 版本发布过快.
- 安全性问题.有安全隐患的模块和API.
- 资源消耗较大.

# 竞争者.
- nw.js
  - 合并了Node.js和Chromium的事件循环机制.
- PWA.
- 微软的Edge WebView2.
- flutter.
- Tauri.
  - Tauri 构建的桌面程序太小了，远不是 Electron.JS 可以相比的，因为它放弃了体积巨大的 Chromium 内核 和 nodejs，前端使用操作系统的 webview，后端集成了 Rust。

# 技术选型分析.
- 崩溃报告.
- 自动更新.
- 社会活跃度.
- 周边组件.
- 开发难度.
- 知名应用.
- 维护人员.