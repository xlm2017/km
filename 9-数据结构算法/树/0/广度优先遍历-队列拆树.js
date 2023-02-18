

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

// 处理前端位置, 独立出新的技术部-2 
function handleTree (tree, target) {

  // 广度优先, 执行队列
  let queue = [tree];

  let stack = [];

  while (queue.length) {

    // 出队
    let element = queue.shift();
    console.log("名字:", element.name);

    if (element.name === target) {
      console.log("\n分界点:", element.name);
      console.log("分界栈:", stack, '\n');
    } else {
      // stack.push(element.name);

    }

    if (element.children) {
      queue.push(...element.children);
    }
  }

}

console.log("结果:", handleTree(company, '前端'));




let company2 = {
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
            }
          ]
        },
      ],
    },
    {
      name: '技术部',
      children: [
        {
          name: '程序员',
          children: [
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