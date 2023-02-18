// 哈希表, 纯粹的键值对
// 散列表（Hash table，也叫哈希表），是根据关键字（Key value）而直接访问在内存存储位置的数据结构。摘自 Wiki

// Hash Map通常在JavaScript中作为一个简单的来存储键值对的地方。
// 然而，Object并不是一个真正的哈希映射，如果使用不当可能会带来潜在的问题。
// 而且JavaScript可能不提供本地哈希映射（至少不是跨浏览器兼容的），有一个更好的声明对象属性的方法。

var map = {};
'toString' in map; // true

// 因为in操作符会从所有原型继续对象查找该对象是否存在。要解决这个问题，可使用hasOwnProperty方法检测该对象是否存在：

var map = {};
map.hasOwnProperty('toString'); // false

裸对象

// 创建一个真正的Hash Map的诀窍是解藕所有的原型对象。我们可以通过 Object.create 来实现这个效果


var obj = {};
// is equivalent to:
var obj = Object.create(Object.prototype);


// 另外，这种方法可以让你完全放弃原型，直接使用 null 来继承。
var map = Object.create(null);

map instanceof Object; // false
Object.prototype.isPrototypeOf(map); // false
Object.getPrototypeOf(map); // null


// 这些裸对象（或字典）是作为Hasp Map的理想选择。因为不会有任何冲突，它会抵制任何类型转换，比如这样就会产生错误。
var map = Object.create(null);
map + ""; // TypeError: Cannot convert object to primitive value

// 这里没有任何保留字，它就是为Hash Map设计的，比如。
var map = Object.create(null);
'toString' in map; // false
// 更进一步，for ... in 循环变得更加简单了，我们只需要把循环写成这样。
var map = Object.create(null);

for(var key in map){
    // do something
}
