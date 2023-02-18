

// 引用类型在比较运算符时候,隐式转换会调用本类型toString或valueOf方法.

var a = { num: 0 };
a.valueOf = function () {
  return ++a.num
}
if (a == 1 && a == 2 && a == 3) {
  console.log(1);
}


let a = [1, 2, 3];
a.toString = a.shift;
if (a == 1 && a == 2 && a == 3) {
  console.log(1);
}

var a = {
  i: 1,
  toString () {
    return a.i++;
  }
}

if (a == 1 && a == 2 && a == 3) {
  console.log(1);
}