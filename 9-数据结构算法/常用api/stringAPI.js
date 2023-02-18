

// // const newStr = str.replaceAll(regexp | substr, newSubstr | function)
// // 此方法不会更改调用 String 对象。它只是返回一个新字符串。

// // 备注： 当使用一个 regex 时，您必须设置全局（“g”）标志， 否则，它将引发 TypeError：“必须使用全局 RegExp 调用 replaceAll”。


// // String.prototype.replace()
// // replace() 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。
// // 模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。如果pattern是字符串，则仅替换第一个匹配项。



// // JS中给正则表达式加变量

// var v = "bl";
// var re = new RegExp("^\d+" + v + "$", "gim"); // re为/^d+bl$/gim

// // 另外，还有一种方法是用过eval动态执行一段字符串的方法，不过我觉得从各方面来说，都属下策。
// // var re = eval("/^\d+" + v + "$/gim")


// // 常见正则
// https://blog.csdn.net/lm1022/article/details/79050083

// // js 判断字符串是否存在某个字符串
// 1、使用indexOf()方法，返回某个指定的字符串值在字符串中首次出现的位置。如果要检索的字符串值没有出现，则该方法返回 - 1。

// var str = "abc";
// console.log(str.indexOf("a") != -1);
// 2、使用search()方法，用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。如果没有找到任何匹配的子串，则返回 - 1。

// var str = "abc";
// console.log(str.search("c"));
// 3、使用match()方法，在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。

// var str = "abc";
// var reg = RegExp(/c/);
// console.log(str.match(reg))
// 二、使用RegExp对象的方法
// 4、使用RegExp对象的test()方法，用于检索字符串中指定的值。返回 true 或 false。

// var str = "abc";
// var reg = RegExp(/b/);
// console.log(reg.test(str));
// 5、使用RegExp对象的exec()方法，用于检索字符串中的正则表达式的匹配。返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。

// var str = "abc";
// var reg = RegExp(/c/);




// // JavaScript删除字符串中指定字符的四种方法


// 方法一：使用replace()方法

// replace()方法用于将特定字符或字符串替换为其他字符或字符串。

// 参数：第一个参数是待替换的字符或字符串，第二个参数是替换为的字符或字符串。

// 可以将第一个参数设为要删除的字符，将第二个参数设为空字符串，这样就可以删除字符串中的指定字符了。但是这个方法只能删除第一次出现的字符，想要将该字符全部删除需要将replace()方法和正则表达式一起使用，它将选择字符串中的每个匹配项并将其全部删除。

// var str = "aabbccddeegg";

// var reg1 = new RegExp("a", "g"); // 加'g'，删除字符串里所有的"a"
// var a1 = str.replace(reg1, "");
// console.log(a1); // bbccddeegg

// var reg2 = new RegExp("a"); // 不加'g'，仅删除字符串里第一个"a"
// var a2 = str.replace(reg2, "");
// console.log(a2); // abbccddeegg


// 方法二：使用slice()方法

// slice()方法用于提取给定参数之间的字符串部分。

// 此方法获取字符串的起始索引和结束索引，并返回这些索引之间的字符串。如果未指定索引，则假定它是字符串的长度。

// 可以通过将开始索引指定为1来删除第一个字符。它将字符串从第二个字符提取到字符串的结尾。

// 通过将结束索引指定为小于字符串长度的一个，可以删除最后一个字符。这将从字符串的开头提取字符串到倒数第二个字符。

// var str = "hello hgbhggfj!";
// console.log("原始字符串是：" + str); // 原始字符串是：hello hgbhggfj!
// console.log("删除字符串的第一个字符：" + str.slice(1)); // 删除字符串的第一个字符：ello hgbhggfj!
// console.log("删除字符串的最后一个字符：" + str.slice(0, str.length - 1)); // 删除字符串的最后一个字符：hello hgbhggfj


// 方法三：使用substring()方法

// subString()方法用于提取字符串中介于两个指定下标之间的字符。

// subString()方法返回的子串包括开始处的字符，但不包括结束处的字符。

// var str = "aabbccdd";
// console.log(str.substring(4));  // ccdd


// 方法四：分隔成数组

// 这是一种比较取巧的方法，就是分隔成数组，再重新拼接成字符串。

// var str = "abcdaabbssaaa";
// var a = str.split("a").join("");
// console.log(a); // bcdbbss 作者：朵宝特工007 https://www.bilibili.com/read/cv17421049/ 出处：bilibili