class MyObject{
  // 声明属性读方法
  get aName(){

  }
  set aName(value){

  }
  // 声明方法
  aMethod(){

  }
}
let obj = new MyObject()
console.log(obj, obj.aMethod)
console.log(obj, obj.prototype)
console.log(obj, obj.constructor)
console.log(obj, MyObject)
console.log(obj, MyObject.prototype)