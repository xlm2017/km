// 输入：coordinates = "a1"
// 输出：false
// 解释：如上图棋盘所示，"a1" 坐标的格子是黑色的，所以返回 false 。

let res = 'abc';

console.log(res.charCodeAt());  // 97

console.log(res.charAt(2));  // c

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  // 黑色为false

  // 奇数以false开头
  let word = coordinates.charCodeAt() % 2 === 0;

  // 字母为false时候, 奇数为false, 
  // 字母为true时候, 偶数为false
  // let num = coordinates.charAt(1) * 1 % 2 === 0;

  // return word ^ num;

  return coordinates.charCodeAt() % 2 === 0 ? coordinates.charAt(1) * 1 % 2 === 1 ? true : false : coordinates.charAt(1) * 1 % 2 === 1 ? false : true;
};

let str1 = "a1";

console.log(squareIsWhite(str1));