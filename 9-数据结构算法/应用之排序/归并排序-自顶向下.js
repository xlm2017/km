



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

  function merge(arr, low, mid, high) {
    let i = low;
    let j = high;
    let aux = [];
    for (let k = low; k <= high; k++) {
      aux[k] = arr[k];    
    }
    // 归并回到arr[low...high]
    for (let k = low; k <= high; k++) {
      if(i > mid) arr[k] = aux[j++];
      else if(j > hi) arr[k] = aux[i++];
      else if(less(aux[j], aux[i])) arr[k] = aux[j++];   
      else arr[k] = aux[i++];
    }
  }

  function sort(arr, low, high) {
    if(high <= low){
      return;
    }
    let mid = Math.floor(low + (high - low)/2);
    sort(arr, low, mid);
    sort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }

  // 一次性分配空间
  let res = [];
  sort(nums, 0, nums.length);
  return res
};


let nums = [5,2,3,1];

console.log(sortArray(nums));


