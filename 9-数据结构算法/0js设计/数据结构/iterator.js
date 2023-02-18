内置字符串对象，数组，类数组……这些才是在 JS 语言中真正的可迭代对象（说起来字符串本身也是一种类数组哦）。
所以刚刚的测试报错，我们就用 DevTools 所理解的伪数组（有 length 属性、且有 splice 方法的对象）来骚操作一下 ：

image.png

为啥有问题？好好看报错！cannot read property Symbol(Symbol.iterator)
也就是说，如果你想创建一个可迭代对象，你需要让这个对象(类)拥有一个私有标识：Symbol.iterator 。
确切地来说，Set 的构造器要求对象具有的这一私有的标识，本质上要求应该是一个“具有 next 方法、
且每次 next 方法会返回一个具有 done 和 value 两个属性的对象”的方法，done 的值为布尔值、
为 false 则可以继续执行 next 取下一个值。多说无益，show u my code ：
var foo = {
	0 : 'zero',
	1 : 'one',
	2 : 'two',
	3 : 'three',
	length : 4
};
foo[Symbol.iterator] = function(){
	let i = 0;
    let l = this.length;
	let that = this;
	console.log('someone is using the iterator')
    return {
      next() {
        if (i < l) {
          console.log('now:'+that[i]+',progress:'+i+'/'+l)
          return { done: false, value: that[i++] };
        }
        return { done: true };
      }
    };
}
new Set(foo);