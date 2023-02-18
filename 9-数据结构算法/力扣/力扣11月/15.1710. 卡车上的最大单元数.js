// 请你将一些箱子装在 一辆卡车 上。给你一个二维数组 boxTypes ，其中 boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi] ：

// numberOfBoxesi 是类型 i 的箱子的数量。
// numberOfUnitsPerBoxi 是类型 i 每个箱子可以装载的单元数量。
// 整数 truckSize 表示卡车上可以装载 箱子 的 最大数量 。只要箱子数量不超过 truckSize ，你就可以选择任意箱子装到卡车上。

// 返回卡车可以装载 单元 的 最大 总数。



// 示例 1：

// 输入：boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
// 输出：8
// 解释：箱子的情况如下：
// - 1 个第一类的箱子，里面含 3 个单元。
// - 2 个第二类的箱子，每个里面含 2 个单元。
// - 3 个第三类的箱子，每个里面含 1 个单元。
// 可以选择第一类和第二类的所有箱子，以及第三类的一个箱子。
// 单元总数 = (1 * 3) + (2 * 2) + (1 * 1) = 8
// 示例 2：

// 输入：boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
// 输出：91


// 提示：

// 1 <= boxTypes.length <= 1000
// 1 <= numberOfBoxesi, numberOfUnitsPerBoxi <= 1000
// 1 <= truckSize <= 106


/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  if (boxTypes.length === 1) {
    if (truckSize > boxTypes[0][0]) {
      return boxTypes * boxTypes[0][1];
    } else {
      return truckSize * boxTypes[0][1];
    }
  }
  boxTypes.sort((a, b) => {
    return b[1] - a[1];
  })
  let sum = 0;
  let num = 0;
  console.log("大小排序:", boxTypes);
  for (let i = 0; i < boxTypes.length; i++) {
    // let element = boxTypes[i];
    const element = boxTypes[i];
    num = num + element[0];
    if (num > truckSize) {
      return sum + (truckSize - (num - element[0])) * element[1];
    } else if (num === truckSize) {
      return sum + element[0] * element[1];
    } else {
      sum = sum + element[0] * element[1];
    }
  }
  return sum;
};

// let arr1 = [[1, 3], [2, 1], [3, 2]];
// console.log("最大:", maximumUnits(arr1, 4));



let arr2 = [[1, 3], [5, 5], [2, 5], [4, 2], [4, 1], [3, 1], [2, 2], [1, 3], [2, 5], [3, 2]];
console.log("最大:", maximumUnits(arr2, 35));