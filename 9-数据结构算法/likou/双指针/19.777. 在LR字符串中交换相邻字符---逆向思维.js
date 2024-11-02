// 在一个由 'L' , 'R' 和 'X' 三个字符组成的字符串（例如"RXXLRXRXL"）中进行移动操作。一次移动操作指用一个"LX"替换一个"XL"，或者用一个"XR"替换一个"RX"。现给定起始字符串start和结束字符串end，请编写代码，当且仅当存在一系列移动操作使得start可以转换成end时， 返回True。



// 示例 :

// 输入: start = "RXXLRXRXL", end = "XRLXXRRLX"
// 输出: True
// 解释:
// 我们可以通过以下几步将start转换成end:
// RXXLRXRXL ->
// XRXLRXRXL ->
// XRLXRXRXL ->
// XRLXXRRXL ->
// XRLXXRRLX


// 提示：

// 1 <= len(start) = len(end) <= 10000。
// start和end中的字符串仅限于'L', 'R'和'X'。



/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */

// 逆向思考, start不能转换成什么状态???
var canTransform = function (start, end) {
  if (start.replaceAll("X", "") !== end.replaceAll("X", "")) return false;

  let i = 0;
  let j = 0;
  let n = start.length;
  while (i < n && j < n) {
    while (i < n && start[i] == 'X') {
      i++;
    }
    while (j < n && end[j] == 'X') {
      j++;
    }

    // 没下面这个if, 也是对的,  原因: 是js 下标越界没事, 会变成undefined
    if(i === n || j === n){
      return i === j;
    }
    // console.log("抓到一个有效字符:", start[i], end[j]);
    
    if (start[i] !== end[j]) return false;
    if (start[i] === "L" && i < j) {
      return false;
    }
    if (start[i] === "R" && i > j) {
      return false;
    }
    i++;
    j++;
  }

  // while (i < n) {
	// 	if (start[i] !== 'X') return false;
	// 	i++;
	// }
	// while (j < n) {
	// 	if (end[j] !== 'X') return false;
	// 	j++;
	// }
  return true;
};


let start = "RXXLRXRXL";
let end = "XRLXXRRLX";
// 输出: True


console.log(canTransform(start, end));