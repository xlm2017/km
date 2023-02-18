/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let dis = null;
  let minIndex = -1;
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] === x || points[i][1] === y) {
      let cur = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y);
      console.log('计算:', i, cur, minIndex);
      if (minIndex === -1) {
        dis = cur;
        minIndex = i;
      } else {
        console.log('dis:', dis, cur, i);
        if (cur < dis) {
          minIndex = i;
          dis = cur;
        }
      }
    }
  }
  return minIndex;
};

let x = 3;
let y = 4;
let points = [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]];
// 2
console.log(nearestValidPoint(x, y, points));