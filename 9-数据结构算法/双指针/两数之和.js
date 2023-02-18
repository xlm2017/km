// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]


var twoSum = function(nums, target) {
  for(let i = 0; i<nums.length;i++){
      let key = target - nums[i]
      let index = nums.findIndex((item, y)=>item === key && i !==y)
      if(index != -1){
        return [i, index]
      }
  }
};

let res = twoSum([2,7,1,0, 11,15], 9)
console.log("res:", res)

let nums = [2,7,1,0, 11,15]
let index = nums.findIndex(item=>item === 22)
console.log("index:", index)


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let map = new Map()
    for(let i = 0; i< nums.length; i++) {
        let k = target-nums[i]
        if(map.has(k)) {
            return [map.get(k), i]
        }
        map.set(nums[i], i)
    }
    return [];
};