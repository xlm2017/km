



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

//
//      2
//   9     20
//       15   7
//

// sum = 22

function names(root, target) { 
  if(!root){
    return [];
  }
  let flag = false;
  let sums = 0;
  function dfs(node, arr){
    
    arr.push(node.val);
    sums += node.val;
    if(!node.left && !node.right){
      if(sums === target){
        flag = true;
        return;
      }
    }
    if(node.left){
      dfs(node.left, arr);
      let v = arr.pop();
      // console.log("弹出左:", v);
      sums = sums- v;
    }
    if(node.right){
      dfs(node.right, arr);
      let v = arr.pop();
      sums = sums - v;
    }
  } 
  dfs(root, [], sums);
  return flag;
}

console.log(names(root1, 29));