



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
    return false;
  }
  let res = [];
  let flag = false;
  function dfs(node, arr){
    arr.push(node.val);
    
    if(!node.left && !node.right){
      let sum = arr.reduce((total, item)=> total + item);
      if(sum === target){
        flag = true;
        return true;
      }
      res.push([...arr]);
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
  dfs(root, []);
  // return false
  console.log('flag:', flag);
  return res;
}

console.log(names(root1, 29));