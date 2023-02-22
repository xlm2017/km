<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-22 15:09:09
 * @LastEditTime: 2023-02-22 15:48:20
 * @LastEditors: xlm
-->


一个 TypedArray 对象描述了底层二进制数据缓冲区的类数组视图。没有称为 TypedArray 的全局属性，也没有直接可用的 TypedArray 构造函数。
但是，有很多不同的全局属性，其值是指定元素类型的类型化数组构造函数，如下所列。在接下来的页面，你将找到可以与包含任意类型元素的任意类型化数组一起使用的常见属性和方法。


```js

const typedArray1 = new Int8Array(8);
typedArray1[0] = 32;

const typedArray2 = new Int8Array(typedArray1);
typedArray2[1] = 42;

console.log(typedArray1);
// Expected output: Int8Array [32, 0, 0, 0, 0, 0, 0, 0]

console.log(typedArray2);
// Expected output: Int8Array [32, 42, 0, 0, 0, 0, 0, 0]

```