/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-01 16:53:50
 * @LastEditTime: 2023-03-01 16:55:48
 * @LastEditors: xlm
 */


// groups
// 一个命名捕获组对象，其键是名称，值是捕获组。若没有定义命名捕获组，则 groups 的值为 undefined。参阅捕获组以了解更多信息。


RegExp.prototype.exec()
// exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。


// [
//   '<section>dfdfdfdfdfdfdfdfdfdfdfdf</section>',
//   'f',
//   index: 0,
//   input: '<section>dfdfdfdfdfdfdfdfdfdfdfdf</section><section>dfdfddfdfdfdf<section>ddfddfdfddfdfdf</section></section>\n',
//   groups: undefined
// ]


String.prototype.matchAll()
// matchAll() 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。