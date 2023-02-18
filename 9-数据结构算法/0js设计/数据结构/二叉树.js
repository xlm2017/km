var myTree = {
  val: 6,
  left: {
    val: 5,
    left: {
      val: 4
    },
    right: {
      val: 3
    }
  },
  right: {
    val: 2,
    right: {
      val: 1
    }
  }
}

// 广度优先遍历, 思路: 利用队列,从根节点开始, 依次将左节点,右节点push进数组.
function bfs(tree) {
  var queue = [tree]
  var res = []
  var count = 0
  while (queue[count] && queue[count].val) {
    res.push(queue[count].val)
    var left = queue[count].left
    var right = queue[count].right
    if (left) {
      queue.push(left)
    }
    if (right) {
      queue.push(right)
    }
    count++
  }
  return res
}

console.log("广度优先遍历:", bfs(myTree))


// 深度优先遍历, 思路: 利用栈,依次将左右节点入栈
// 非递归版本
function dfs(tree){
  var stack = [tree]
  var res = []
  while(stack.length){
    var node = stack.pop()
    res.push(node.val)
    var left = node.left
    var right = node.right
    if (left) {
      stack.push(left)
    }
    if (right) {
      stack.push(right)
    }
  }
  return res
}
console.log("深度优先遍历:", dfs(myTree))






let root = {
  name: '中国',
  children: [
    {
      name: '河南',
      children: [
        {
          name: '信阳',
          children: [
            {
              name: '光山',
              children: []
            },
            {
              name: '新县',
              children: []
            }
          ]
        },
        {
          name: '南阳',
          children: []
        }
      ]
    },
    {
      name: '江西',
      children: [
        {
          name: '宜春',
          children: [
            {
              name: '上高',
              children: []
            }
          ]
        }
      ]
    }
  ]
}
// 深度遍历递归版本
function dfs_recursive(root, res = []){
  res.push(root.name)
  for (const iterator of root.children) {
    dfs_recursive(iterator, res)
  }
  return res
  // for (const key in object) {
  //   if (Object.hasOwnProperty.call(object, key)) {
  //     const element = object[key];
      
  //   }
  // }
}
console.log("递归深度优先遍历:", dfs(root))
console.log("递归深度优先遍历2:", dfs_recursive(root))

// 广度优先遍历(breadth-first-search) 递归版本
function bfs_recursive(root, res = []){
  if(Array.isArray(root)){
    for (const iterator of root) {
      res.push(iterator.name)
    }
  }else{
    for (const key in root) {
      if (Object.hasOwnProperty.call(root, key)) {
        if(key === 'name'){
          res.push(root[key])
        }      
        if(key === 'children'){
          for (const iterator of root[key]) {
            bfs_recursive(iterator, res)
          }
        }
      }
    }
  }
  return res
}
console.log("递归广度优先遍历:", bfs(root))
console.log("递归广度优先遍历2:", bfs_recursive(root))


// 广度优先遍历(breadth-first-search) 递归版本 (写成了深度优先了)
function bfs_recursive(root, res = []){
  for (const key in root) {
    if (Object.hasOwnProperty.call(root, key)) {
      if(key === 'name'){
        res.push(root[key])
      }      
      if(key === 'children'){
        for (const iterator of root[key]) {
          bfs_recursive(iterator, res)
        }
      }
    }
  }
  return res
}
console.log("假递归广度优先遍历:", bfs_recursive(root))


Array.prototype.istrue = true
let a = [1,2,3]
for(let i in a){
  console.log(i, a[i])
}
// 0 1
// 1 2
// 2 3
// istrue true

// 然后for in会遍历到数组的后面添加的原型链属性
// 如果使用了for in遍历数组，就用hasOwnProperty来规避遍历到原型链上的属性或方法
Array.prototype.istrue = true
let a = [1,2,3]
for(var i in a) {
  if(a.hasOwnProperty(i)){
    console.log(a[i]);
  }
}

// for in
// 一般用于遍历对象的可枚举属性，以及对象从构造函数原型中继承的属性。对于每个不同的属性，语句都会被执行。
// 不建议使用for in 遍历数组，因为输出的顺序是不固定的。
// 如果迭代的对象的变量值是null或者undefined, for in不执行循环体，建议在使用for in循环之前，先检查该对象的值是不是null或者undefined

// for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值且不包括数组的原型属性method和索引name
// for in 适合遍历对象，for of 用于遍历数组