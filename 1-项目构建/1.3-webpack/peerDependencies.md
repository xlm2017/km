<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-24 20:25:09
 * @LastEditTime: 2023-02-24 20:26:05
 * @LastEditors: xlm
-->


在NPM v7中，现在默认安装peerDependencies。

# 对等依赖关系

在很多情况下，这会导致版本冲突，从而中断安装过程。

--legacy-peer-deps标志是在v7中引入的，目的是绕过peerDependency自动安装；
它告诉 NPM 忽略项目中引入的各个modules之间的相同modules但不同版本的问题并继续安装，
保证各个引入的依赖之间对自身所使用的不同版本modules共存。


npm install xxxx --legacy-peer-deps命令是什么？为什么可以解决下载时候产生的依赖冲突呢？
npm install xxxx --legacy-peer-deps命令与其说是告诉npm要去干什么，不如说是告诉npm不要去干什么。

legacy的意思：遗产/（软件或硬件）已过时但因使用范围广而难以替代的；而npm install xxxx --legacy-peer-deps命令用于绕过peerDependency里依赖的自动安装；它告诉npm忽略项目中引入的各个依赖模块之间依赖相同但版本不同的问题，以npm v3-v6的方式去继续执行安装操作。

所以其实该命令并没有真的解决冲突，而是忽略了冲突，以“过时”（v3-v6）的方式进行下载操作。
————————————————
版权声明：本文为CSDN博主「华为云开发者联盟」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/devcloud/article/details/124469666



packageA就只会被安装一次。因此，npm 从版本v7开始，install就默认以peerDependencies的方式去下载了：

如果用户在根目录的package.json文件里显式依赖了核心库，那么各个子项目里的peerDepenedencies声明就可以忽略
如果用户没有显式依赖核心库，那么就按照子项目的peerDepenedencies中声明的版本将依赖安装到项目根目录里