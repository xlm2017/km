在官方的es5中，定义了一个名叫[[prototype]]的属性，每个对象都拥有这样一个属性，这个属性是一个指针，它指向一个名叫原型对象的内存堆。

  __proto__ 是 [[Prototype]] 的因历史原因而留下来的 getter/setter。
  __proto__ 的存在是出于历史的原因，现代编程语言建议我们应该使用函数 Object.getPrototypeOf/Object.setPrototypeOf 来取代 __proto__ 去 get/set 原型。
  但实际上，包括服务端在内的所有环境都支持它，因此我们使用它是非常安全的。