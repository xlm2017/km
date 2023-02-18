

// 给你一个数组 towers 和一个整数 radius 。

// 数组  towers  中包含一些网络信号塔，其中 towers[i] = [xi, yi, qi] 表示第 i 个网络信号塔的坐标是 (xi, yi) 且信号强度参数为 qi 。所有坐标都是在  X-Y 坐标系内的 整数 坐标。两个坐标之间的距离用 欧几里得距离 计算。

// 整数 radius 表示一个塔 能到达 的 最远距离 。如果一个坐标跟塔的距离在 radius 以内，那么该塔的信号可以到达该坐标。在这个范围以外信号会很微弱，所以 radius 以外的距离该塔是 不能到达的 。

// 如果第 i 个塔能到达 (x, y) ，那么该塔在此处的信号为 ⌊qi / (1 + d)⌋ ，其中 d 是塔跟此坐标的距离。一个坐标的 信号强度 是所有 能到达 该坐标的塔的信号强度之和。

// 请你返回数组 [cx, cy] ，表示 信号强度 最大的 整数 坐标点 (cx, cy) 。如果有多个坐标网络信号一样大，请你返回字典序最小的 非负 坐标。

// 注意：

// 坐标 (x1, y1) 字典序比另一个坐标 (x2, y2) 小，需满足以下条件之一：
// 要么 x1 < x2 ，
// 要么 x1 == x2 且 y1 < y2 。
// ⌊val⌋ 表示小于等于 val 的最大整数（向下取整函数）。

// 输入：towers = [[1,2,5],[2,1,7],[3,1,9]], radius = 2
// 输出：[2,1]
// 解释：
// 坐标 (2, 1) 信号强度之和为 13
// - 塔 (2, 1) 强度参数为 7 ，在该点强度为 ⌊7 / (1 + sqrt(0)⌋ = ⌊7⌋ = 7
// - 塔 (1, 2) 强度参数为 5 ，在该点强度为 ⌊5 / (1 + sqrt(2)⌋ = ⌊2.07⌋ = 2
// - 塔 (3, 1) 强度参数为 9 ，在该点强度为 ⌊9 / (1 + sqrt(1)⌋ = ⌊4.5⌋ = 4
// 没有别的坐标有更大的信号强度。


/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function (towers, radius) {

  // 绘制最小矩形, 找出x的最大值 最小值,   y的最大值 最小值

  if (radius === 0) {
    return [0, 0];
  }


  if (towers.length === 1) {
    if (towers[0][2] == 0) {
      return [0, 0];
    }
    return [towers[0][0], towers[0][1]];
  }

  // 移除信号强度为0的塔
  towers = towers.filter(item => {
    return item[2] > 0;
  })

  let minX, maxX, minY, maxY;
  let arrX = towers.map(item => {
    // return 不可不写
    return item[0];
  })
  let arrY = towers.map(item => {
    return item[1];
  })
  minX = Math.min(...arrX);
  maxX = Math.max(...arrX);
  minY = Math.min(...arrY);
  maxY = Math.max(...arrY);

  // 确认最小坐标范围 (minX, minY) -- (maxX, minY)
  console.log("坐标范围:", minX, minY, '最大:', maxX, maxY);


  let res = [0, 0];
  let curMax = 0;
  for (let i = minX; i <= maxX; i++) {

    for (let j = minY; j <= maxY; j++) {

      // 总强度
      let sum = 0;
      // 计算每一个点距离 塔的距离
      // (i, j) 点坐标
      for (let n = 0; n < towers.length; n++) {
        const element = towers[n];
        let dis = Math.sqrt(Math.pow(element[0] - i, 2) + Math.pow(element[1] - j, 2))
        if (i == 1 || i == 34) {
          // console.log("计算距离:", dis)
        }
        if (dis <= radius) {
          if (i == 1 || i == 34) {
            // console.log("计算一个塔强度:", Math.ceil(element[2] / (1 + dis)), '\n');
          }
          sum += Math.floor(element[2] / (1 + dis));
          // sum += Math.ceil(element[2] / (1 + dis));
          // sum += element[2] / (1 + dis);
        }
      }

      // console.log("当前强度:", sum, i, j);

      if (curMax > sum) {
        // 这个强度点没有意义
      } else if (curMax == sum) {
        // 这个点增加
        // res.push([i, j]);
      } else {
        // 这个点增加, 删除旧的点
        res = []
        res.push([i, j]);
        curMax = sum;
      }

    }

  }
  console.log("最大强度点:", res[0], curMax)
  return res[0];

};
// let towers = [[1, 2, 5], [2, 1, 7], [3, 1, 9]];
// let radius = 2;
// 输出：[2,1]

// let towers = [[2, 1, 9], [0, 1, 9]];
// let radius = 2;
// 输出：[0,1]

// let towers = [[0, 1, 2], [2, 1, 2], [1, 0, 2], [1, 2, 2]];
// let radius = 1;
// 输出：[1, 1]

let towers = [[30, 34, 31], [10, 44, 24], [14, 28, 23], [50, 38, 1], [40, 13, 6], [16, 27, 9], [2, 22, 23], [1, 6, 41], [34, 22, 40], [40, 10, 11]];
let radius = 20;
// [1,6]
// 坐标范围: 1 6 最大: 50 44


bestCoordinate(towers, radius);


