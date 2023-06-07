


// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，
// 应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。



// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let obj1 = {};
  let obj2 = {};
  for(let val of nums1){
      obj1[val] = obj1[val] ? ++obj1[val] : 1;
  }
  for(let val of nums2){
      obj2[val] = obj2[val] ? ++obj2[val] : 1;
  }
  let obj3 = {};
  for(let key in obj1){
      if(obj2[key]){
         obj3[key] = Math.min(obj1[key] * 1, obj2[key] * 1);
      }
  }
  let res = [];
  let minValue = Math.min(...Object.values(obj3));
  for(let key in obj3){
      if(obj3[key] === minValue){
        res.push(obj3[key]);
      }
  }
  console.log(obj1, obj2, obj3);
  return res;
};


let nums1 = [1,2,2,1], nums2 = [2,2];

console.log(intersect(nums1, nums2));