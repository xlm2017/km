

let target = 10

let arr = [2, 3, 4, 7, 8, 9];


// 寻找最接近的下标
function findNearestIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if(arr[mid] === target){
      return mid;
    }
    if(arr[mid] < target){
      left = mid + 1;
    }else{
      right = mid - 1;
    }
  }
  console.log(left, right);
  if(right === -1){
    return 0;
  }
  if(left === arr.length){
    return arr.length - 1;
  }
  if(Math.abs(arr[left] - target) <= Math.abs(arr[right] - target)){
    return left;
  }else{
    return right;
  } 
}

console.log(findNearestIndex(arr, target));