// npm 查看远程包
// 第一种方法:
// npm info <packageName>
// 第二种方法:
// npm view <packageName> versions --json
// npm查看本地安装的包版本号
// npm ls <packageName>        // 本地包
// npm ls <packageName> -g     // 全局安装包
// npm语义化版本号

// npm使用 a.b.c 的版本号来管理安装包，
// a为达版本号，有重大api改变，一般不向下兼容，
// b为小版本号，新增功能，向下兼容，
// c为补丁号，通常修复一些bug。npm安装包的时候允许使用一些特殊符号表示安装的版本范围，如：

// ~a.b.c :    取最新的c的版本号值，a与b保持不变
// ^a.b.c :    取b和c均为最新版本号，a保持不变