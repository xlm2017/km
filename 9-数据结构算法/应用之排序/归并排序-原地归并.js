


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