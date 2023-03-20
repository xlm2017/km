/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-15 16:45:06
 * @LastEditTime: 2023-03-15 16:45:50
 * @LastEditors: xlm
 */

// Element.closest() 方法用来获取：
// 匹配特定选择器且离当前元素最近的祖先元素（也可以是当前元素本身）。如果匹配不到，则返回 null。

a.addEventListener("click", function (event) {
  if (event.target.closest("a").nodeName === 'A' && event.target.closest("a").href) {
    let index = event.target.closest("a").href;
  }
})