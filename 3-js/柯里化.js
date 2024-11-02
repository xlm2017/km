// 实现函数
add(1); 	// 1
add(1)(2);  	// 3
add(1)(2)(3);  // 6
add(1)(2, 3);   // 6
add(1, 2)(3);   // 6
add(1, 2, 3);   // 6

function add() {
    let args = [].slice.call(arguments);
    let fn = function () {
        let fn_args = [].slice.call(arguments)
        // 1.function.apply(obj,arr)
        // 第一个参数obj:
        // function的this指向obj,null则指向全局
        // 第二个参数arr:
        // 是一个数组，作为参数传给function，ES5开始，这个参数可以是一个类数组对象，就是包含一个length属性的对象{length:2}
        return add.apply(null, args.concat(fn_args))
    }
    fn.toString = function () {
        return args.reduce((a, b) => a + b)
    }
    return fn
}


function add(){
	let args = [...arguments];
	let addfun = function(){
		args.push(...arguments);
		return addfun;
	}
	addfun.toString = function(){
		return args.reduce((a,b)=>{
			return a + b;
		});
	}
	return addfun;
}


// 循环引用问题
// const a = {
//     b: {}
// }

// a.b.c = a