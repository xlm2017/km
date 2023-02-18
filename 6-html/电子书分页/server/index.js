// 引入express模块
var express = require('express');
// 引入path模块
var path = require('path');

// 获取服务实力对象
var app = express();
// 监听端口
app.listen(3000, err => {
  if (!err) console.log('服务器已启动 端口号3000:::')
})
// 使用express.static中间件 让服务器可以返回静态文件
app.use(express.static(path.resolve(__dirname, './static')))
// 配置路由
app.get('/person', (req, res) => {
  res.json({
    name: 'zhangsan',
    age: 20
  })
})
