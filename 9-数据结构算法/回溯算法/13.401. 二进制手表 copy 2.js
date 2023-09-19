

// 二进制手表顶部有 4 个 LED 代表 小时（0-11），底部的 6 个 LED 代表 分钟（0-59）。每个 LED 代表一个 0 或 1，最低位在右侧。



// 给你一个整数 turnedOn ，表示当前亮着的 LED 的数量，返回二进制手表可以表示的所有可能时间。你可以 按任意顺序 返回答案。

// 小时不会以零开头：

// 例如，"01:00" 是无效的时间，正确的写法应该是 "1:00" 。
// 分钟必须由两位数组成，可能会以零开头：

// 例如，"10:2" 是无效的时间，正确的写法应该是 "10:02" 。


// 示例 1：

// 输入：turnedOn = 1
// 输出：["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
// 示例 2：

// 输入：turnedOn = 9
// 输出：[]


// 提示：

// 0 <= turnedOn <= 10


var readBinaryWatch = function (turnedOn) {
  let hours = [8, 4, 2, 1];
  let minutes = [32, 16, 8, 4, 2, 1];

  let stack = [];
  let stack2 = [];
  let res2 = [];

  let ans = [];
  function backtracking2 (array, start, sum, k) {
    if (stack2.length === k) {
      if (sum < 60) {
        res2.push(sum);
      }
      return;
    }
    for (let i = start; i < array.length; i++) {
      stack2.push(array[i]);
      sum = sum + array[i];
      backtracking2(array, i + 1, sum, k)
      sum = sum - stack2.pop();
    }
  }

  function backtracking (array, start, sum) {

    if(stack.length <= turnedOn && stack.length <= 3){
      let k = turnedOn - stack.length;
      if (sum < 12 && k <= 5) {
        // 找到全部符合条件的分钟数
        res2 = [];
        stack2 = [];
        backtracking2(minutes, 0, 0, k);
        for (let j = 0; j < res2.length; j++) {
          ans.push(sum + ":" + (res2[j] < 10 ? "0" + res2[j] : res2[j]));
        }
      }
    }

    for (let i = start; i < array.length; i++) {
      stack.push(array[i]);
      sum = sum + array[i];
      backtracking(array, i + 1, sum);
      sum = sum - stack.pop();
    }
  }

  backtracking(hours, 0, 0);
  return ans;
};


// let turnedOn = 1
// 输出：["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]

let turnedOn = 2
// ["0:03","0:05","0:06","0:09","0:10","0:12","0:17","0:18","0:20","0:24","0:33",
// "0:34","0:36","0:40","0:48","1:01","1:02","1:04","1:08","1:16","1:32","2:01","2:02",
// "2:04","2:08","2:16","2:32","3:00","4:01","4:02","4:04","4:08","4:16","4:32","5:00",
// "6:00","8:01","8:02","8:04","8:08","8:16","8:32","9:00","10:00"]

console.log(readBinaryWatch(turnedOn));


// 观察可知:
// 8 4 2 1  // 最多选3个  0-11
// 32 16 8 4 2 1  // 最多选5个 0-59

// 综上, 最多选八个灯亮