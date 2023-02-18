
// 求1 到 n 的和
// 1 +  1+2 + 1+2+3 + ... + 1+2+3 +...+ n

function getSum (n) {
  let dp = new Array(n + 1);
  dp[0] = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + i;
    sum = sum + dp[i];
  }
  return sum;
}

console.log(getSum(3));
// 1 + 3 + 6 = 10