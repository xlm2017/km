

// 判断一个数是否是质数, 只能被1和自身整除
function isPrime(num) {
  if(num==2){
    return true;
  }
  let i = 2;
  while (i < num) {
    if(num % i === 0){
      return false;
    }
    i++
  }
  return true;
}

let n = 11;

console.log(isPrime(n));