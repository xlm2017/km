
// 提示：

// 1 <= votes.length <= 1000
// 1 <= votes[i].length <= 26
// votes[i].length == votes[j].length for 0 <= i, j < votes.length
// votes[i][j] 是英文 大写 字母
// votes[i] 中的所有字母都是唯一的
// votes[0] 中出现的所有字母 同样也 出现在 votes[j] 中，其中 1 <= j < votes.length


/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  if (votes.length === 1) {
    return votes[0];
  }
  let str = '';
  let obj = {};
  for (let i = 0; i < votes.length; i++) {
    for (let j = 0; j < votes[i].length; j++) {
      if (obj[votes[i][j]]) {
        if (obj[votes[i][j]][j]) {
          obj[votes[i][j]][j]++;
        } else {
          obj[votes[i][j]][j] = 1
        }
      } else {
        obj[votes[i][j]] = {
          [j]: 1
        };
      }
    }
  }
  // obj { A: { '0': 5 }, B: { '1': 2, '2': 3 }, C: { '1': 3, '2': 2 } } 

  let arr = Object.entries(obj);
  // [
  //   [ 'A', { '0': 5 } ],
  //   [ 'B', { '1': 2, '2': 3 } ],
  //   [ 'C', { '1': 3, '2': 2 } ]
  // ] 
  console.log('obj', obj, arr, '\n');

  // 构造数组后排序
  let length = votes.length;

  // arr.sort((a, b) => {
  //   let num1 = 0;
  //   let num2 = 0;
  //   for (const key in a[1]) {
  //     if (Object.hasOwnProperty.call(a[1], key)) {
  //       num1 = num1 + a[1][key] * Math.pow(10, length - key * 1 - 1);
  //     }
  //   }
  //   for (const key in b[1]) {
  //     if (Object.hasOwnProperty.call(b[1], key)) {
  //       num2 = num2 + b[1][key] * Math.pow(10, length - key * 1 - 1);
  //     }
  //   }
  //   console.log("arr排序:", a[1], b[1], num1, num2);
  //   if (num1 === num2) {
  //     // return b[0] - a[0];
  //     // return a[0] - b[0];
  //     // return b[0] < a[0];
  //     return a[0].charCodeAt() - b[0].charCodeAt();
  //   }
  //   return num2 - num1;
  // })


  // obj {
  //   B: { '0': 2, '1': 2, '2': 2 },
  //   C: { '0': 2, '1': 2, '2': 2 },
  //   A: { '0': 2, '1': 2, '2': 2 }
  // } 
  // arr [
  //   [ 'B', { '0': 2, '1': 2, '2': 2 } ],
  //   [ 'C', { '0': 2, '1': 2, '2': 2 } ],
  //   [ 'A', { '0': 2, '1': 2, '2': 2 } ]
  // ] 
  // 解决大数排序的问题
  arr.sort((a, b) => {
    let arr1 = new Array(length);
    let arr2 = new Array(length);
    for (let i = 0; i < length; i++) {
      if (a[1][i]) {
        arr1[i] = a[1][i];
      } else {
        arr1[i] = 0;
      }
      if (b[1][i]) {
        arr2[i] = b[1][i];
      } else {
        arr2[i] = 0;
      }
    }
    console.log('两个数组比较:', arr1, arr2);
    for (let j = 0; j < length; j++) {
      if (arr1[j] > arr2[j]) {
        return arr2[j] - arr1[j];
      } else if (arr1[j] === arr2[j]) {
        if (j === length - 1) {
          // 字母排序
          // if (a[0].charCodeAt() > b[0].charCodeAt()) {
          //   return a[0].charCodeAt() - b[0].charCodeAt();
          // }
          return a[0].charCodeAt() - b[0].charCodeAt();
        }
        continue;
      } else {
        return arr2[j] - arr1[j];
      }
    }
  })


  // console.log("排序后:", arr);

  for (let i = 0; i < arr.length; i++) {
    str = str + arr[i][0];
  }

  return str;
};

// let arr1 = ["ABC", "ACB", "ABC", "ACB", "ACB"];
// ACB

// let arr1 = ["ABC", "ACB", "ABC", "ACB"];
// let arr1 = ["ABC", 'ACB'];

// let arr1 = ["WXYZ", 'XYZW'];
// XWYZ
// console.log("结:", rankTeams(arr1));


let arr2 = ["BCA", "CAB", "CBA", "ABC", "ACB", "BAC"];
// ABC
console.log("结果:", rankTeams(arr2));