/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-04-12 16:44:02
 * @LastEditTime: 2023-04-12 16:52:39
 * @LastEditors: xlm
 */
let tree = [
 
  {
    "id": 6,
    "name": "河北省",
    "children": [
      {
        "id": 7,
        "name": "石家庄市",
        "children": [
          {"id": 8, "name": "长安区", "children": []},
          {"id": 9, "name": "桥东区", "children": []},
          {"id": 10, "name": "桥西区", "children": []}
        ]
      }
    ]
  }
]

function treeToLevelArray(tree) {
  let result = [];

  while (tree.length) {
    let queue = [];
    let arr = [];
    for (let i = 0; i < tree.length; i++) {
      const element = tree[i];
      let item = {
        id: element.id,
        name: element.name
      }
      arr.push(item);
      queue.push(...element.children);
    }
    result.push(arr);
    tree = queue;
  }

  return result;
}

console.log(treeToLevelArray(tree));
// [
//   [ { id: 6, name: '河北省' } ],
//   [ { id: 7, name: '石家庄市' } ],
//   [
//     { id: 8, name: '长安区' },
//     { id: 9, name: '桥东区' },
//     { id: 10, name: '桥西区' }
//   ]
// ]