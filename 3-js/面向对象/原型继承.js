// 传统继承

// 外部原型链与constructor属性

// 用户代码来维护一个外部原型链, 也称之为'构造器原型链'.
// 这个显式维护的链表是通过修改构造器的prototype属性来形成的.

// 构造器声明
function MyObject(){}
function MyObjectEx(){}

// 原型链
MyObjectEx.prototype = new MyObject()

// 创建对象实例
let obj1 = new MyObjectEx()
let obj2 = new MyObjectEx()



// 子类的.constructor属性指向了父类
let bool1 = MyObjectEx.prototype.constructor === MyObject 
console.log(bool1)

// 然而这也会导致子类实例拥有一个错误的constructor属性
let bool2 = (new MyObjectEx).constructor === MyObject
console.log(bool2)

// 
MyObjectEx.prototype.constructor = MyObjectEx  // 添加该行代码
//因此早期的js中, 外部原型链与有效的constructor属性只能二取其一




// 升级版

// 构造器声明
function MyObject(){

}

// 子类的一种实现模式
function MyObjectEx(){
  this.constructor = MyObjectEx
}

// 构建外部原型链
MyObjectEx.prototype = new MyObject()

// 每次构造实例时都要重写constructor属性, 效率低


// 原型继承关注于继承对象(在类属关系上)的层次, 而原型修改关注具体对象实例的行为特性.
// "基于原型继承的对象系统"最独特的设计观念: 将继承关系与行为描述分离.

// '原型修改'本质上是一种动态语言特性. 因此这里正好就是动态语言与面向对象继承交汇的关键点

// 1. 首先为每一个构造器分配一个原型
// 2. 通过修改原型构造整个对象树
// 3. 通过在原型链中查找属性表来访问一个实例的成员


// 关于delete
// 子类必须具有父类的特性, 这也是js中不能用delete删除从父类继承来的成员的原因, 尽管这看起来是'自有属性表'带来的特性(因而显得与继承性无关),
// 但它确保了在重写成员, 改变它的实现等的同时, 在界面(interfaces)上保持与父类的必然一致.