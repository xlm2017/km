/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-01 16:31:08
 * @LastEditTime: 2023-03-01 16:34:21
 * @LastEditors: xlm
 */


var v = "bl";

var s = "string" + v;  //"stringbl"
var a = [1,v];  //[1,"bl"]
var o = {first : v};  //{first : "bl"}

// 二、构造函数
// 在JS的世界中。除了null，undefined。其余皆是对象。
// 不过，这里肯定有人说，string、number、boolean怎么会是对象呢。
// 其实虽然我上面那句话不准确，但确实是最直观的感受。因为string、number、boolean在你用的时候，会默认的被相应的基本包装类型给转换成对象。
// 然后我们又知道，在JS中，所有的对象都是通过构造函数来生成的。
// 那么，我们就可以用构造函数来代替字面量定义法，例如:
var s = new String("string"); //String对象，toString()后为"string"
var a = new Array(1,2); //[1,2]
var o = new Object();  //{}
 

// 相应的，我们也可以用构造函数来生成正则表达式
// var re = new RegExp("^\\d+$","gim"); //注意，反斜杠需要转义
// 那么，给它加变量，就和我们前面写的给字符串加变量一样了。
var v = "bl";

var re =new RegExp("^\\d+" + v + "$","gim"); // re为/^\d+bl$/gim
// 至此，最初的问题问题也完全解决了。
 
//  
// 另外，还有一种方法是用过eval动态执行一段字符串的方法，不过我觉得从各方面来说，都属下策。
var re = eval("/^\\d+" + v + "$/gim")