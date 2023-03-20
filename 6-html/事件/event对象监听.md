<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-15 16:49:00
 * @LastEditTime: 2023-03-15 16:49:44
 * @LastEditors: xlm
-->


addEventListener(type, listener);
addEventListener(type, listener, options);
addEventListener(type, listener, useCapture);



event.stopImmediatePropagation
Event 接口的 stopImmediatePropagation() 方法阻止监听同一事件的其他事件监听器被调用。

如果多个事件监听器被附加到相同元素的相同事件类型上，当此事件触发时，它们会按其被添加的顺序被调用。如果在其中一个事件监听器中执行 stopImmediatePropagation() ，那么剩下的事件监听器都不会被调用。


event.stopPropagation
Event 接口的 stopPropagation() 方法阻止捕获和冒泡阶段中当前事件的进一步传播。但是，它不能防止任何默认行为的发生；例如，对链接的点击仍会被处理。如果要停止这些行为，请参见 preventDefault() 方法，它可以阻止事件触发后默认动作的发生。它也不能阻止附加到相同元素的相同事件类型的其他事件处理器，如果要阻止这些处理器的运行，请参见 stopImmediatePropagation() 方法。