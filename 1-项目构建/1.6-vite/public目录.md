<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-03 10:51:03
 * @LastEditTime: 2023-03-03 10:56:10
 * @LastEditors: xlm
-->


public 目录是存放静态资源的一种方式。

项目初始化时默认public作为静态资源服务的文件夹。我们可以在vite.config.js中修改publicDir。

该目录中的文件开发期间在 / 处提供，并在构建期间将public文件夹下的文件（不包含public本身）复制到outDir 的根目录。

public下的文件会被完整复制到目标目录的根目录下，保持原有文件名，不会被hash。