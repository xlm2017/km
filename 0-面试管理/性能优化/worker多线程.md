<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-09-28 11:56:00
 * @LastEditTime: 2023-09-28 13:46:57
 * @LastEditors: xlm
-->


// worker.js
onmessage = function(e) {
// 接收主线程的消息
console.log('Received a message from main thread:', e.data);
// 在Worker线程中执行耗时操作
var result = fibonacci(e.data);
// 向主线程发送消息
postMessage(result);
}
function fibonacci(n) {
if (n< 2) {
return n;
}
else {
return fibonacci(n-1) + fibonacci(n-2);
}
}