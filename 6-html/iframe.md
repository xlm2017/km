

深入理解iframe

<!-- https://blog.csdn.net/CatieCarter/article/details/77911221 -->


iframe内部添加的<script>标签中的js不执行？

通过动态插入的方式，能让脚本执行，直接放进去没法执行

var ifr = document.createElement('iframe');
    ifr.id = 'uiui'
    document.body.append(ifr)
    var ifrBody = document.getElementById('uiui').contentDocument.body;
    var script = document.getElementById('uiui').contentDocument.createElement('script');
    script.innerHTML = `
      var p = document.createElement('p');
      p.innerHTML = 'o_o'
      document.body.appendChild(p);
    `;
    document.getElementById('uiui').contentDocument.body.appendChild(script);

# 的确是HTML 4.01新增的安全策略。

回复
yr1014：多谢回答，后来发现在iframe里动态创建script标签，把获取的html内容中的script内容通过正则匹配出来，再插入进去能过执行了



javascript获取iframe框架中页面document对象,获取子页面里面的内容,iframe获取父页面的元素,


# iframe 父子对象 调用

# https://www.cnblogs.com/suizhikuo/p/4961780.html




Window 事件属性
针对 window 对象触发的事件（应用到 <body> 标签）

onload	script	页面结束加载之后触发。
onmessage	script	在消息被触发时运行的脚本。

<!-- https://www.w3school.com.cn/tags/html_ref_eventattributes.asp -->