



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

function names(root, targetSum) { 
  if(!root){
    return false;
  }
  let res = [];
  function dfs(node, arr){

    arr.push(node.val);

    if(!node.left && !node.right){
      let sum = arr.reduce((t, i)=> t + i);
      if(sum === targetSum){
        res.push([...arr]);
        return;
      }
    }
    
    if(node.left){
      dfs(node.left, arr);
      arr.pop();
    }
    if(node.right){
      dfs(node.right, arr);
      arr.pop();
    }
  } 
  dfs(root, [], 0);
  return res;
}

console.log(names(root1, 29));