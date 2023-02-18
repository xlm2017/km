/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if(nums.length < 2) return nums;
  let midIndex = Math.floor(nums.length / 2);
  let left = nums.slice(0, midIndex);
  let right = nums.slice(midIndex);
  return merge(sortArray(left), sortArray(right));
};
const merge = (left, right) => {
  let res = [];
  let i = 0;
  let j = 0;
  let lenL = left.length;
  let lenR = right.length;
  while(i < lenL && j < lenR) {
      if(left[i] < right[j]) {
          res.push(left[i]);
          i++;
      }
      else {
          res.push(right[j]);
          j++;
      }
  }
  while(i < lenL) res.push(left[i++]);
  while(j < lenR) res.push(right[j++]);
  return res;
}


let arr = [10, 3, 1, 5, 11, 2, 0, 6, 3];
let SortedArr = sortArray(arr);

console.log(SortedArr);

// 作者：路飞我的神
// 链接：https://leetcode.cn/problems/sort-an-array/solutions/1856924/javascript-by-confident-coldenbfp-6vle/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。