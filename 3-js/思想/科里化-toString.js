function add () {
  const _args = [...arguments];
  function fn () {
    _args.push(...arguments);
    return fn;
  }
  fn.toString = function () {
    let res = _args.reduce((sum, cur) => sum + cur);
    console.log("打印to-string:", res);
    return res;
  }
  return fn;
}

let a = add(1)(2)(3)(4);

let b = add(1)(1, 2, 3)(2);


console.log(('a:', a));
console.log(('b:', b));