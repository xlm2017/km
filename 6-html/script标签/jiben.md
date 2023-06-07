<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-05-05 15:45:46
 * @LastEditTime: 2023-05-05 15:46:16
 * @LastEditors: xlm
-->



明确: defer和 async的使用,可以用于提升网页性能
script标签存在两个属性，defer和async，因此 script标签的使用分为三种情况：

<script src="example.js"></script>
没有defer或async属性，浏览器会立即加载并执行相应的脚本。
不等待后续加载的文档元素，读到就开始加载和执行，此举会阻塞后续文档的加载
<script async src="example.js"></script>
有了async属性，表示后续文档的加载和渲染与js脚本的加载和执行是并行进行的，即异步执行；
<script defer src="example.js"></script>
有了defer属性，加载后续文档的过程和js脚本的加载是并行进行的(异步)，此时的js脚本仅加载不
执行, js脚本的执行需要等到文档所有元素解析完成之后，DOMContentLoaded事件触发执行之
前。


1.defer和async在网络加载过程是一致的，都是异步执行的；(放在页面顶部,也不会阻塞页面的加
载,与页面加载同时进行)
2.两者的区别,脚本加载完成之后, async是立刻执行, defer会等一等 (等前面的defer脚本执行,等dom的加载)



————————————————
版权声明：本文为CSDN博主「浙大曾波涛」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_46544034/article/details/123146915