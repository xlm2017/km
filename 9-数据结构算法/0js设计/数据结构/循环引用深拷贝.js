为什么要深拷贝？
怕有些刚基础的同学对深拷贝不理解，先解释下。懂得跳过。

之前我们说过JS中的数据类型分为两大类：“原始类型”和“引用类型”。并且也解释了这两种类型数据的拷贝实现有不同的地方，还不了解的同学可以先看下这篇文章《【每日一题】你可以系统说说JS中都有哪些数据类型吗？》。

浅拷贝
对应的还有浅拷贝，浅拷贝就是简单的赋值拷贝。平时JS中的很多带有拷贝功能的函数只要不特殊处理基本都是浅拷贝（比如数组的slice、concat等） 

这样拷贝的问题：我新数组arr1的内容改了，源数组arr也被改了。

深拷贝
深拷贝函数就是解决上图问题的。主要用于拷贝引用类型的数据（实际应用中，主要是对象和数组），好让拷贝的对象和源对象脱离干系，修改数据不互相影响。

深拷贝实现
深拷贝的写法虽然百花齐放，但是内部原理基本一致：

都是先判断类型，基本类型直接返回；引用类型再判断是数组还是对象。如果是对象就创建对象、并把待拷贝对象的各个键值对递归的拷贝一遍；如果是数组就创建数组、并把目标数组的每一项递归克隆push到新数组中。

实现原理简而言之就是：递归 + 类型判断 + 遍历赋值。（浅拷贝实现上就没有递归类型判断这一层了）

首先，让我们先实现一个深拷贝函数，用于拷贝引用类型的数据（实际应用中，主要是对象和数组）。

/**
 * 深克隆（深拷贝）
 * @param {object} origin 待克隆的数据
 * @returns origin / 克隆的origin
 */
function deepClone(origin) {
  let result = null;
  if (typeof origin === 'object' && origin !== null) { // 【类型判断】引用类型，进行递归拷贝（用typeof判断类型要剔除null的情况）
    if (Object.prototype.toString.call(origin) === '[object Array]') {
      // 【类型判断】数组类型，创建一个新数组
      result = [];
      // 【遍历赋值】
      origin.forEach(el => {
        result.push(deepClone(el)); // 【递归】
      });
    } else {
      // 【类型判断】对象类型，创建一个新对象
      result = {};
      for (const key in origin) {
        // 【遍历赋值】对象这里特殊处理了，不遍历拷贝原型链上的属性
        if (origin.hasOwnProperty(key)) {
          result[key] = deepClone(origin[key]); // 【递归】
        }
      }
    }
  } else { // 【类型判断】原始类型直接返回
    return origin;
  }
  return result;
}
使用
let obj = {
  name: '深拷贝测试',
  age: 19,
  hobby: ['sing', 'sing', 'sing'],
  info: { address: '北京', email: 'whgsn.bh.com' },
}
let objClone = deepClone(obj);
console.log(objClone); // 克隆出一个新的对象
objClone.hobby[1] = 'painting'
console.log(obj.hobby) // 修改新对象的引用值后，目标原对象都没有被改变。我们实现了深拷贝！
尝试修改新对象，原对象不会被同步修改：

问题-循环引用导致栈溢出
上边的例子目前看很正常，但是当我们原对象内的属性值有循环引用时，再次使用深拷贝会引起问题：

let obj2 = {
  name: '循环引用测试'
}
obj2.cycle = obj2
let objClone2 = deepClone(obj2); // 报错栈溢出 Uncaught RangeError: Maximum call stack size exceeded


从例子可以看到，深拷贝目标原对象时没有问题，但当目标原对象存在循环引用时进行深拷贝会报错“栈溢出”。

栈溢出
ECStack执行环境栈又叫调用栈，是JS引擎为了运行js代码在计算机中开辟的一块栈内存空间，用来管理函数调用关系。栈内存遵循先进后出的规律，并且这段栈内存空间是有限的。
当我们进行函数调用的时候，JS引擎会创建一个执行上下文并推进调用栈中供函数执行。当函数执行完毕，这个执行上下文会自动推出执行栈、释放空间。

但是当我们执行上边的代码，因为深克隆会进行递归函数调用，在深层递归内的deepClone函数没执行完毕前，先推进执行栈的函数就不能结束、不能出栈。
又因为我们现在obj2循环引用了自己，我们的deepClone就要不停的循环递归。这就导致了一直往栈中塞数据、但从不释放。栈空间就像一个水杯一样，被我们一直“加水”直至“溢出”并报错。

图源网络

循环引用问题解决方案
思路
解决循环引用导致的栈溢出问题，就需要我们判断要拷贝的对象，是不是已经拷贝过，而不要循环拷贝。

我们可以利用缓存的思想，额外创建一个哈希映射表（字典集合，其实就是一个缓存对象），来存储当前对象和拷贝对象的对应关系。
哈希映射表需要key: value这种键值对结构，并且要满足key可能是引用类型的要求（一般情况下key是字符串类型）。
后续使用时，每拷贝一个引用值，就记录（缓存）到集合中。下次拷贝时，先检查是否在缓存中：
若有，直接取缓存；
若无，实行拷贝并缓存。

特别的，这个缓存的思路也是浏览器缓存、也是Node require缓存、也是DNS缓存、也是代理服务器缓存等等各种缓存都有的一个套路。其实掌握了核心技巧后，其他相关知识点就是旧瓶装新酒、换汤不换药了。

解决方向
因为我们实际是要创建一个缓存对象，但我们的key又要可以是引用类型。
JS提供的原生对象虽然就是键值对的集合，但是传统上对象只能用字符串当作键。不太满足我们的条件。
为此，我们的解决方向上，可以考虑用ES6新增的数据结构：Map、WeakMap

❝
ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
WeakMap结构与Map结构类似，也是用于生成键值对的集合。
来源：https://es6.ruanyifeng.com/#docs/set-map#Map

❞
但是WeakMap比Map有两个不同：

1、【特殊点】WeakMap只接受引用类型（对象）作为键名；
2、【优点】WeakMap的键名所指向的对象都是弱引用，不计入垃圾回收机制，不用考虑内存泄漏。 当引用对象被清除，其所对应的WeakMap记录就会自动被移除。（具体请看ES6相关解释，这里不展开。）

简而言之就是：Map是高级版的Object，WeakMap是高级版的Map。



weakMap键名

Map / weakMap
综合所有考量，我们启用最优解——WeakMap来实现这个缓存字典。

伪代码思路：
1. 检查 weakMap 中有无克隆过的对象。
2. 有，直接返回
3. 没有，将当前对象作为key，克隆对象作为value进行存储
4. 继续克隆

/**
 * 深克隆（深拷贝）+ 解决深拷贝函数中循环引用时导致的栈溢出的问题
 * @param {object} origin 
 * @param {*} hashMap WeakMap数据，用于缓存克隆过的对象
 * @returns origin / 克隆的origin
 */
function deepCloneCycle(origin, hashMap = new WeakMap()) {
  let result = null;
  if (hashMap.has(origin)) return hashMap.get(origin); // 查缓存字典中是否已有需要克隆的对象，有的话直接返回同一个对象（同一个引用，不用递归无限创建进而导致栈溢出了）
  if (typeof origin === 'object' && origin !== null) { // 【类型判断】引用类型，进行递归拷贝（用typeof判断类型要剔除null的情况）
    if (Object.prototype.toString.call(origin) === '[object Array]') {
      // 【类型判断】数组类型，创建一个新数组
      result = [];
      hashMap.set(origin, result); // 哈希表缓存新值
      // 【遍历赋值】
      origin.forEach(el => {
        result.push(deepCloneCycle(el, hashMap)); // 【递归】
      });
    } else {
      // 【类型判断】对象类型，创建一个新对象
      result = {};
      hashMap.set(origin, result); // 哈希表缓存新值
      for (const key in origin) {
        // 【遍历赋值】对象这里特殊处理了，不遍历拷贝原型链上的属性
        if (origin.hasOwnProperty(key)) {
          result[key] = deepCloneCycle(origin[key], hashMap); // 【递归】
        }
      }
    }
  } else { // 【类型判断】原始类型直接返回
    return origin;
  }