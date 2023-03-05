
var kthLargestLevelSum = function(root, k) {
  let arr = [];
  function track(array){
     let a = []; 
     let sum = 0; 
     for(let i = 0; i < array.length; i++){
        sum += array[i].val; 
        if(array[i].left){
            a.push(array[i].left);
        } 
        if(array[i].right){
            a.push(array[i].right);
        } 
     }
    arr.push(sum);
    track(a);  
  }
  track([root]);
  if(k > arr.length){
      return -1;
  }
  arr.sort((a,b)=>b-a);
  return arr[k-1];    
};
let root1 = {
  val: 2,
  left: {
    val: 9
  },
  right: {
    val: 20,
    left: {
      val: 15
    },
    right: {
      val: 7
    }
  }
}

console.log(kthLargestLevelSum(root1, 2));