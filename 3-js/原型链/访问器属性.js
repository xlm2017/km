
// accessor  访问器

let a = {
  get name () {
    return '张三'
  },
  set name (val) {
    this._name = val
  },
  age: 18
}
console.log("a的属性:", a.hasOwnProperty("name"))

console.log(a)

a.name = '历史'

console.log(a)

// a的属性: true
// { name: [Getter/Setter], age: 18 }
// { name: [Getter/Setter], age: 18, _name: '历史' }

{

  var obj = {
    _name: 'test'
  }

  Object.defineProperty(obj, 'name', {

    get: function () {
      return this._name
    },
    set: function (value) {
      this._name = value
    }
  })

}


// 设置get和set其中任意一个即可转换为访问器属性
Object.defineProperty(person, "year", {
  get: function () {
    //        return this,year;    // error
    return this._year;
  },
  set: function (value) {
    //             this.year = value;　　// error
    this._year = value;
  }
})

var descriptor = Object.getOwnPropertyDescriptor(person, 'year');
console.log(descriptor);    // {get: ƒ, set: ƒ, enumerable: true, configurable: true}