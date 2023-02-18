



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


// sum = 22

function names(root, target) { 
  if(!root){
    return false;
  }
  function dfs(node, arr, sum){
    if(!node.left && !node.right){
      if(sum === target){
        return true;
      }
    }
    arr.push(node.val);
    sum += node.val;
    if(node.left){
      dfs(node.left, arr, sum);
      let v = arr.pop();
      sum = sum - v;
    }
    if(node.right){
      dfs(node.right, arr, sum);
      arr.pop();
      let v = arr.pop();
      sum = sum - v;
    }
  } 
  dfs(root, [], 0);
  return false
}

console.log(names(root1, 29));