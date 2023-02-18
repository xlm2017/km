- [ ] 写webpack demo 
    1. hard-source-webpack-plugin 使用插件 对打包进行缓存 当第二次再打包时 使用缓存 加快打包速度 提升50%+的打包速度。
    2. compression-webpack-plugin gzip压缩打包体积。nginx服务器也需要配置 还可以配置 **gzip_static** 静态资源压缩 首先采用静态压缩 如果不是压缩文件 再采用静态压缩。优化减少50%左右。
    3. Tree-shaking 在package.json中配置sideEffects:false。移除 JavaScript 上下文中的未引用代码(dead-code)减少包体积。优化减少10%左右。
    4. splitChunks 对打包的文件进行自动分包，增加传输速度。
    5. 懒加载/异步加载 模块导入import 。
    6. cdn 加速 部分资源放在cdn服务器上 使用cdn服务器进行加速。
    7. webpack打包原理：[https://blog.csdn.net/weixin_43845044/article/details/108443856](https://blog.csdn.net/weixin_43845044/article/details/108443856)