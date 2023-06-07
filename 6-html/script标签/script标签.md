


// onload事件在资源被加载完成后会被触发。对于script标签，在外部js文件被加载后代码会被立即执行。
// 那么，外部js文件中的代码和该script标签的onload回调函数，
// 它们的执行顺序是怎样的呢？没有找到官方的说明文档，所以自己做个实验。

// script标签的onload事件都是在外部js文件被加载完成并执行完成后才被触发的。


使用了 src 属性的<script>元素不应该再在<script>和<script>标签中再包含其他 JavaScript 代码。
如果两者都提供的话，则浏览器只会下载并执行脚本文件，从而忽略行内代码。





推迟执行脚本defer
HTML 4.01 为<script>元素定义了一个叫 defer 的属性。这个属性表示脚本在执行的时候不会改 变页面的结构。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，在<script>元素上 设置 defer 属性，相当于告诉浏览器立即下载，但延迟执行

<!DOCTYPE html>
    <html>
<head>
<title>Example HTML Page</title>
<script defer src="example1.js"></script>
 <script defer src="example2.js"></script> </head>
<body>
<!-- 这里是页面内容 -->
</body>
</html>

首先defer只有对外部引入的javascript有效
这里的js文件就是在浏览器解析完</html>后才会去执行




异步执行脚本async
HTML5 为<script>元素定义了 async 属性。从改变脚本处理方式上看，async 属性与 defer 类似。当然，它们两者也都只适用于外部脚本，都会告诉浏览器立即开始下载。不过，与 defer 不同的 是，标记为 async 的脚本并不保证能按照它们出现的次序执行，比如:

<!DOCTYPE html>
<html>
<head>
<title>Example HTML Page</title>
<script async src="example1.js"></script> 
<script async src="example2.js"></script> 
</head>
<body>
<!-- 这里是页面内容 -->
</body>
</html>

在这个例子中，第二个脚本可能先于第一个脚本执行。因此，重点在于它们之间没有依赖关系。给 脚本添加 async 属性的目的是告诉浏览器，不必等脚本下载和执行完后再加载页面，同样也不必等到 该异步脚本下载和执行后再加载其他脚本。正因为如此，异步脚本不应该在加载期间修改 DOM。