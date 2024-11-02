// 查找arr中比val大的最小值, 如果没有, 返回最小值
function search(arr, val) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] <= val) {
      l = mid + 1
    } else {
      r = mid 
    }
    console.log("mid:", mid, l, r);
  }
  return r;
}


let arr = [1,3,5,7,9], val = 0;

console.log(search(arr, val));