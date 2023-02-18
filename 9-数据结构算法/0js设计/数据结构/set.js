
Set 
// 类数组, 成员的值唯一
// 只有key, Object.keys() 与 Object.values() 键值相同, Obejct.entries() 返回键值组成的数组
// Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。
Set.prototype[Symbol.iterator] === Set.prototype.values
// 这意味着，可以省略values方法，直接用for...of循环遍历 Set。
let set = new Set(['red', 'green', 'blue']);
for (let x of set) {
  console.log(x);
}
// Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值。
let set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + ' : ' + value))

// add() delete() clear()  has()  增删查, 没有修改功能
// Set.prototype.clear()：清除所有成员，没有返回值。
// 向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。
Set // Set {NaN}
// 上面代码向 Set 实例添加了两次NaN，但是只会加入一个。这表明，在 Set 内部，两个NaN是相等的。


let set = new Set();

// set.add({});
// set.size // 1

// set.add({});
// set.size // 2
// 上面代码表示，由于两个空对象不相等，所以它们被视为两个值。

// Set 结构的实例有以下属性。

// Set.prototype.constructor：构造函数，默认就是Set函数。
// Set.prototype.size：返回Set实例的成员总数。

// Array.from方法可以将 Set 结构转为数组。
// Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。


const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
// 这就提供了去除数组重复成员的另一种方法。

function dedupe(array) {
  return Array.from(new Set(array));
}
// let set = new Set(['red', 'green', 'blue']);
// let arr = [...set];

dedupe([1, 1, 2, 3]) // [1, 2, 3]


扩展运算符和 Set 结构相结合，就可以去除数组的重复成员。

let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
// [3, 5, 2]
而且，数组的map和filter方法也可以间接用于 Set 了。

// new Set([iterable])
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// 返回Set结构：{2, 4, 6}

let set = new Set([1, 2, 3, 4, 5]);

set = new Set([...set].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4}
因此使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
// 如果想在遍历操作中，同步改变原来的 Set 结构，目前没有直接的方法，但有两种变通方法。一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；另一种是利用Array.from方法。

// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
// set的值是2, 4, 6

// 方法二
let set = new Set([1, 2, 3]);
// Set对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的。
console.log(set.size)
let classArr = {
  0: 'a',
  1: 'b',
  2: 'c',
}
console.log("类数组:", classArr.length, classArr[0])
// object is not iterable (cannot read property Symbol(Symbol.iterator))
// let set2 = new Set(classArr);
// iterable 可选
// 如果传递一个可迭代对象，它的所有元素将不重复地被添加到新的 Set中。如果不指定此参数或其值为null，则新的 Set为空。
// Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
let set2 = new Set(Array.from(classArr));

console.log(Array.from(classArr), set2.size)

// set = new Set(Array.from(set, val => val * 2));
// set的值是2, 4, 6


Array.from()
类数组定义
1）拥有length属性，其它属性（索引）为非负整数（对象中的索引会被当做字符串来处理）；
2）不具有数组所具有的方法；

javascript中常见的类数组有 arguments对象和 DOM方法的返回结果。比如 document.getElementsByTagName()。

类数组转换为数组

args = Array.prototype.slice.call(arguments);

// 类数组转换为数组首先Array.prototype.slice.call(arrayLike)的结果是将arrayLike对象转换成一个Array对象。所以其后面可以直接调用数组具有的方法


