# js的api设计

## Array

### find(callback[, thisArg])

- find方法对数组中的每一项元素执行一次 callback 函数，直至有一个 callback 返回 true。当找到了这样一个元素后，该方法会立即返回这个元素的值，否则返回 undefined。注意 callback 函数会为数组中的每个索引调用即从 0 到 length - 1，而不仅仅是那些被赋值的索引，这意味着对于稀疏数组来说，该方法的效率要低于那些只遍历有值的索引的方法。

### findIndex()

- 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1

### includes

- 两个参数, 第一个参数为item, 第二个为index

	- 类似slice(8, -1)

## Map

### myMap.forEach(callback([value][,key][,map])[, thisArg])

- forEach 方法会对map中每个真实存在的键执行一次给定的 callback 函数。它不会对被删除的键执行函数。然而，它会对每个值为 undefined 的键执行函数。

### for in

- 个人理解: 不能遍历hash结构的值和建

## 语句和声明

### for in 

- 以任意顺序迭代一个对象的除Symbol以外的可枚举属性，包括继承的可枚举属性。
- 如果你只要考虑对象本身的属性，而不是它的原型，那么使用 getOwnPropertyNames() 或执行 hasOwnProperty() 来确定某属性是否是对象本身的属性（也能使用propertyIsEnumerable）。或者，如果你知道不会有任何外部代码干扰，您可以使用检查方法扩展内置原型。
- 数组

	- for...in也可以遍历数组，但是会出现以下问题

index索引为字符串型数字，不能直接进行几何运算
遍历顺序有可能不是按照实际数组的内部顺序
	- 使用for...in会遍历数组所有的可枚举属性，包括原型。原型方法method和name属性都会被遍历出来，通常需要配合hasOwnProperty()方法判断某个属性是否为该对象的实例属性，来将原型对象从循环中剔除。

### for of

- Map, 会得到一个键和值的数组

## 分支主题 3

*XMind - Trial Version*