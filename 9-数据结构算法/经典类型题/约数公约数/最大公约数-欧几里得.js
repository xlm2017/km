

// 几个数所共有的约数中最大的一个,即可以整除这几个数的最大的数,叫做这几个数的最大公约数。

// 欧几里得思路（辗转相除法）循环方式

// 欧几里得思路（辗转相除法），用较大的数除以较小的数，
// 在用上一次的较小的数除以余数直到余数为零，
// 当前的被除数就是这两个数的最大公约数

// n1 n2 n3
// 57%48=9 n1%n2=n3
// 48%9=3 n2%n3=新n3
// n1 n2 n3
// 9%3=0 余数为0时，此次求余的小数就是最大公约数


function maxNumber(n1, n2) {
  var n3;
  do{
      n3 = n1%n2;
      n1 = n2;
      n2 = n3;
  }while (n3>0) //本来n2>0,但是n2的值赋给n3,所以是n3>0
  return n1;//本来返回n2,但是n2的值赋给n1,所以返回n1
}




console.log(maxNumber(12, 18));
// 6


// 方法四：欧几里得思路（辗转相除法）递归方式

function maxNumber(n1, n2) {
  var n3;
  n3 = n1%n2;
  if(n3==0){
      return n2;
  }
  return maxNumber(n2,n3);
}
