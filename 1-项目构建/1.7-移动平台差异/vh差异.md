<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-14 17:32:11
 * @LastEditTime: 2023-03-14 17:33:43
 * @LastEditors: xlm
-->


<!-- https://juejin.cn/post/7135600743095992327 -->

为什么100vh问题会发生在移动设备上？

简短的答案是，浏览器的工具栏高度没有被考虑在内。



第一个建议是尽量少用 vh。例如，在上面的代码中，你可以使用一个 sticky 按钮，避免使用vh单位。
// HTML
<div className="layout">
  <p>Lorem ipsum dolor sit amet...</p>
  <button>Sign Up</button>
</div>

// CSS
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
.layout button {
  position: sticky;
  bottom: 0;
}

作者：王大冶
链接：https://juejin.cn/post/7135600743095992327
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。