function Person(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.setName = function(name) {
	this.name = name
}
function Student (name, age) {
	Person.call(this,name,age)
}
Student.prototype = new Person //这里无需入参，参数默认是undefined就行,
// 反正成员变量已经在前一步通过call继承到子类型Student对象上了
// 如果需要调用Student的成员变量，也轮不到沿着原型链找到这个new Person头上
Student.prototype.constructor = Student

const s1 = new Student('lisa', 123)
s1.setName('Tangtang')
console.log(s1, Object.getPrototypeOf(s1), typeof Object.getPrototypeOf(s1))



{
  // 类继承
  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    setName(newName) {
      this.name = newName
    }
  }
  class Student extends Person{
    constructor(name, age){
      super(name, age)
    }
  }
  const student1 = new Student('tangtang', 12)
  student1.setName('sunsun')
  console.log(student1, Object.getPrototypeOf(student1), typeof Object.getPrototypeOf(student1))
}



function c(){

}
console.log(typeof c)