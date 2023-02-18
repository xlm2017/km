// 浅拷贝的实现非常简单，而且还有多种方法，其实就是遍历对象属性的问题，这里只给出一种，如果看不懂下面的方法，或对其他方法感兴趣，可以看我的这篇文章
// Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。


// 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。

// Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。该方法使用源对象的[[Get]]和目标对象的[[Set]]，
// 所以它会调用相关 getter 和 setter。因此，它分配属性，而不仅仅是复制或定义新的属性。如果合并源包含getter，
// 这可能使其不适合将新属性合并到原型中。为了将属性定义（包括其可枚举性）复制到原型，
// 应使用Object.getOwnPropertyDescriptor()和Object.defineProperty() 。

// String类型和 Symbol 类型的属性都会被拷贝。

// 在出现错误的情况下，例如，如果属性不可写，会引发TypeError，如果在引发错误之前添加了任何属性，则可以更改target对象。

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
function shallowClone(source) {
    var target = {};
    for(var i in source) {
        if (source.hasOwnProperty(i)) {
            target[i] = source[i];
        }
    }

    return target;
}


function clone(source) {
    var target = {};
    for(var i in source) {
        if (source.hasOwnProperty(i)) {
            if (typeof source[i] === 'object') {
                target[i] = clone(source[i]); // 注意这里
            } else {
                target[i] = source[i];
            }
        }
    }

    return target;
}

// 没有对参数做检验
// 判断是否对象的逻辑不够严谨
// 没有考虑数组的兼容

function isObject(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
}



function createData(deep, breadth) {
    var data = {};
    var temp = data;

    for (var i = 0; i < deep; i++) {
        temp = temp['data'] = {};
        for (var j = 0; j < breadth; j++) {
            temp[j] = j;
        }
    }

    return data;
}

createData(1, 3); // 1层深度，每层有3个数据 {data: {0: 0, 1: 1, 2: 2}}
createData(3, 0); // 3层深度，每层有0个数据 {data: {data: {data: {}}}}
// 当clone层级很深的话就会栈溢出，但数据的广度不会造成溢出

clone(createData(1000)); // ok
clone(createData(10000)); // Maximum call stack size exceeded

clone(createData(10, 100000)); // ok 广度不会溢出
// 其实大部分情况下不会出现这么深层级的数据，但这种方式还有一个致命的问题，就是循环引用，举个例子

var a = {};
a.a = a;

clone(a) // Maximum call stack size exceeded 直接死循环了有没有，/(ㄒoㄒ)/~~

// 关于循环引用的问题解决思路有两种，一直是循环检测，一种是暴力破解，关于循环检测大家可以自己思考下；关于暴力破解我们会在下面的内容中详细讲解


破解递归爆栈
其实破解递归爆栈的方法有两条路，第一种是消除尾递归，但在这个例子中貌似行不通，
第二种方法就是干脆不用递归，改用循环，当我提出用循环来实现时，基本上90%的前端都是写不出来的代码的，这其实让我很震惊

举个例子，假设有如下的数据结构

var a = {
    a1: 1,
    a2: {
        b1: 1,
        b2: {
            c1: 1
        }
    }
}
这不就是一个树吗，其实只要把数据横过来看就非常明显了

    a
  /   \
 a1   a2        
 |    / \         
 1   b1 b2     
     |   |        
     1  c1
         |
         1       
用循环遍历一棵树，需要借助一个栈，当栈为空时就遍历完了，栈里面存储下一个需要拷贝的节点

首先我们往栈里放入种子数据，key用来存储放哪一个父元素的那一个子元素拷贝对象

然后遍历当前节点下的子元素，如果是对象就放到栈里，否则直接拷贝

function cloneLoop(x) {
    const root = {};

    // 栈
    const loopList = [
        {
            parent: root,
            key: undefined,
            data: x,
        }
    ];

    while(loopList.length) {
        // 深度优先
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = {};
        }

        for(let k in data) {
            if (data.hasOwnProperty(k)) {
                if (typeof data[k] === 'object') {
                    // 下一次循环
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k],
                    });
                } else {
                    res[k] = data[k];
                }
            }
        }
    }

    return root;
}
改用循环后，再也不会出现爆栈的问题了，但是对于循环引用依然无力应对

破解循环引用
有没有一种办法可以破解循环应用呢？别着急，我们先来看另一个问题，上面的三种方法都存在的一个问题就是引用丢失，这在某些情况下也许是不能接受的

举个例子，假如一个对象a，a下面的两个键值都引用同一个对象b，经过深拷贝后，a的两个键值会丢失引用关系，从而变成两个不同的对象，o(╯□╰)o

var b = 1;
var a = {a1: b, a2: b};

a.a1 === a.a2 // true

var c = clone(a);
c.a1 === c.a2 // false
如果我们发现个新对象就把这个对象和他的拷贝存下来，每次拷贝对象前，都先看一下这个对象是不是已经拷贝过了，如果拷贝过了，就不需要拷贝了，直接用原来的，这样我们就能够保留引用关系了，✧(≖ ◡ ≖✿)嘿嘿

但是代码怎么写呢，o(╯□╰)o，别急往下看，其实和循环的代码大体一样，不一样的地方我用// ==========标注出来了

引入一个数组uniqueList用来存储已经拷贝的数组，每次循环遍历时，先判断对象是否在uniqueList中了，如果在的话就不执行拷贝逻辑了

find是抽象的一个函数，其实就是遍历uniqueList

// 保持引用关系
function cloneForce(x) {
    // =============
    const uniqueList = []; // 用来去重
    // =============

    let root = {};

    // 循环数组
    const loopList = [
        {
            parent: root,
            key: undefined,
            data: x,
        }
    ];

    while(loopList.length) {
        // 深度优先
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = {};
        }
        
        // =============
        // 数据已经存在
        let uniqueData = find(uniqueList, data);
        if (uniqueData) {
            parent[key] = uniqueData.target;
            break; // 中断本次循环
        }

        // 数据不存在
        // 保存源数据，在拷贝数据中对应的引用
        uniqueList.push({
            source: data,
            target: res,
        });
        // =============
    
        for(let k in data) {
            if (data.hasOwnProperty(k)) {
                if (typeof data[k] === 'object') {
                    // 下一次循环
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k],
                    });
                } else {
                    res[k] = data[k];
                }
            }
        }
    }

    return root;
}

function find(arr, item) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].source === item) {
            return arr[i];
        }
    }

    return null;
}
下面来验证一下效果，amazing

var b = 1;
var a = {a1: b, a2: b};

a.a1 === a.a2 // true

var c = cloneForce(a);
c.a1 === c.a2 // true
接下来再说一下如何破解循环引用，等一下，上面的代码好像可以破解循环引用啊，赶紧验证一下

惊不惊喜，(*^__^*) 嘻嘻……

var a = {};
a.a = a;

cloneForce(a)
看起来完美的cloneForce是不是就没问题呢？cloneForce有两个问题

第一个问题，所谓成也萧何，败也萧何，如果保持引用不是你想要的，那就不能用cloneForce了；

第二个问题，cloneForce在对象数量很多时会出现很大的问题，如果数据量很大不适合使用cloneForce


// 这个年代可以用 WeakMap 了，把 uniqueList 换成 WeekMap 性能就上去了。