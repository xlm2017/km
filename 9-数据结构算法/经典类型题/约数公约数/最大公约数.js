

// 几个数所共有的约数中最大的一个,即可以整除这几个数的最大的数,叫做这几个数的最大公约数。

// 方法一：计算机思维

function maxNumber(n1,n2){
  var c;
   // 判断n1和n2的值，把小的值给n1
   if(n1>n2){
       c = n1;
       n1 = n2;
       n2  = c;
   }
  //  从n1之后开始找最小公倍数
   for(var i = n1;i>=1;i--){
       if(n1%i==0&&n2%i==0){
           return i;
       }
   }
}


console.log(maxNumber(12, 18));
// 6


function maxNumber2(n1, n2) {
  var c;
   // 判断的值
   var min = n1 < n2 ? n1 : n2;

   for (var i = min; i >= 1; i--) {
       if (n1 % i == 0 && n2 % i == 0) {
           return i;
       }
   }
}
