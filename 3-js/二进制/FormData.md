<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-22 15:58:55
 * @LastEditTime: 2023-02-22 15:59:05
 * @LastEditors: xlm
-->


FormData 接口提供了一种表示表单数据的键值对 key/value 的构造方式，并且可以轻松的将数据通过XMLHttpRequest.send() 方法发送出去，本接口和此方法都相当简单直接。

# 如果送出时的编码类型被设为 "multipart/form-data"，它会使用和表单一样的格式。

如果你想构建一个简单的GET请求，并且通过<form>的形式带有查询参数，可以将它直接传递给URLSearchParams。

实现了 FormData 接口的对象可以直接在for...of结构中使用，而不需要调用entries() : for (var p of myFormData) 的作用和 for (var p of myFormData.entries()) 是相同的。


FormData.append()