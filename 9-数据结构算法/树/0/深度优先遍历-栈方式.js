

let company = {
  name: '益阳科技有限公司',
  children: [
    {
      name: '财务部',
      children: [
        {
          name: '出纳',
        },
        {
          name: '会计',
        },
        {
          name: '审计',
        },
      ]
    },
    {
      name: '技术部',
      children: [
        {
          name: '程序员',
          children: [
            {
              name: "前端",
            },
            {
              name: "后端",
            },
            {
              name: "测试",
            },
          ]
        },
        {
          name: '设计师',
        },
        {
          name: '产品',
        },
      ]
    },
  ]
}

// 栈处理 DFS  
function handleTree (tree) {

  let stack = [];

  stack.push(tree);

  while (stack.length) {
    let element = stack.pop();
    console.log("element:", element.name);
    if(element.children && element.children.length){
      // stack.push(...(element.children.reverse()));
      stack.push(...element.children.reverse());
    }
  }
}

console.log("递归结果:", handleTree(company));


// 名字: 益阳科技有限公司
// 名字: 财务部
// 名字: 出纳
// 名字: 会计
// 名字: 审计
// 名字: 技术部
// 名字: 程序员
// 名字: 前端
// 名字: 后端
// 名字: 测试
// 名字: 设计师
// 名字: 产品