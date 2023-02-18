const http = require('http');
const fs = require('fs');
const port = 3011
http.createServer((request, response) => {
  console.log(request.url)
  const html = fs.readFileSync('./test.html', 'utf-8')
  if(request.url === '/'){
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    console.log("发送页面")
    response.end(html)
  }else{
    if(request.url === '/favicon.ico'){
      return
    }
    const img = fs.readFileSync('./' + request.url)
    response.writeHead(200, {
      // 'Content-Type': 'image/jpg'
    })
    response.end(img)
  }
  // response.writeHead(200, {
  //   'Content-Type': 'text/html'
  // });
  // console.log("发送页面")
  // response.end(html)
}).listen(port)
console.log("server listening on port ", 'http://localhost:'+ port)