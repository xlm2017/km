function Foo() {
    Foo.a = function () {
        console.log(1)
    }
    this.a = function () {
        console.log(2)
    }
}
// 实例方法
Foo.prototype.a = function () {
    console.log(3)
}
// 静态方法
Foo.a = function () {
    console.log(4)
}
Foo.a(); // 4  直接调Foo静态方法a
let obj = new Foo();
obj.a(); // 2  因是obj调用，故优先调用构造函数Foo自身的方法a，如果自身没有则执行原型链上的方法a
Foo.a(); // 1  因执行了一次new 操作，故再次调用Foo.a()时调用了Foo函数体内的静态方法a


// new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make);
// expected output: "Eagle"

//   语法
// new constructor[([arguments])]
// 参数
// constructor
// 一个指定对象实例的类型的类或函数。
// arguments
// 一个用于被 constructor 调用的参数列表。
// 描述
// new 关键字会进行如下的操作：

// 创建一个空的简单JavaScript对象（即{}）；
// 链接该对象（设置该对象的constructor）到另一个对象 ；
// 将步骤1新创建的对象作为this的上下文 ；
// 如果该函数没有返回对象，则返回this。

// （译注：关于对象的 constructor，参见 Object.prototype.constructor）
function Foo() {
    this.a = function () {
        console.log(2)
    }
    var a = function () {
        console.log(2222)
    }
    return a
}
let o = new Foo()
undefined
// o
// ƒ () {
//       console.log(2222)
//     }
// o.a
// undefined

// 创建一个用户自定义的对象需要两步：

// 通过编写函数来定义对象类型。
// 通过 new 来创建对象实例。
// 创建一个对象类型，需要创建一个指定其名称和属性的函数；对象的属性可以指向其他对象，看下面的例子：

// 当代码 new Foo(...) 执行时，会发生以下事情：

// 一个继承自 Foo.prototype 的新对象被创建。
// 使用指定的参数调用构造函数 Foo，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。
// 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）
// 你始终可以对已定义的对象添加新的属性。例如，car1.color = "black" 语句给 car1 添加了一个新的属性 color，并给这个属性赋值 "black"。但是，这不会影响任何其他对象。要将新属性添加到相同类型的所有对象，你必须将该属性添加到 Car 对象类型的定义中。

// 你可以使用 Function.prototype 属性将共享属性添加到以前定义的对象类型。这定义了一个由该函数创建的所有对象共享的属性，而不仅仅是对象类型的其中一个实例。下面的代码将一个值为 null 的 color 属性添加到 car 类型的所有对象，然后仅在实例对象 car1 中用字符串 "black" 覆盖该值。详见 prototype。

function Car() { }
car1 = new Car();
car2 = new Car();

console.log(car1.color);    // undefined

Car.prototype.color = "original color";
console.log(car1.color);    // original color

car1.color = 'black';
console.log(car1.color);   // black

console.log(car1.__proto__.color) //original color
console.log(car2.__proto__.color) //original color
console.log(car1.color)  // black
console.log(car2.color) // original color
// 如果你没有使用 new 运算符， 构造函数会像其他的常规函数一样被调用， 并不会创建一个对象。在这种情况下， this 的指向也是不一样的。

// 示例
// 对象类型和对象实例
// 假设你要创建一个汽车的对象类型。你希望这个类型叫做car，这个类型具备make, model, year等属性，要做到这些，你需要写这样一个函数：

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
// 现在，你可以如下所示创建一个 mycar 的对象：

var mycar = new Car("Eagle", "Talon TSi", 1993);
// 这段代码创建了 mycar 并给他的属性指定值，于是 mycar.make 的值为"Eagle"， mycar.year 的值为1993，以此类推。

// 你可以通过调用 new 来创建任意个汽车对象。例如：

var kenscar = new Car("Nissan", "300ZX", 1992);
// 对象属性为其他对象
// 假设你定义了一个对象叫做 person：

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
// 然后实例化两个新的 person 对象如下：

var rand = new Person("Rand McNally", 33, "M");
var ken = new Person("Ken Jones", 39, "M");
// 然后你可以重写 car 的定义，添加一个值为 person 对象的 owner 属性，如下：

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}
// 为了实例化新的对象，你可以用如下代码：

var car1 = new Car("Eagle", "Talon TSi", 1993, rand);
var car2 = new Car("Nissan", "300ZX", 1992, ken);
// 创建对象时，并没有传字符串或数字给owner，而是传了对象 rand 和 ken 。这个时候，你可以这样来获取 car2 的owner的name：

// car2.owner.name