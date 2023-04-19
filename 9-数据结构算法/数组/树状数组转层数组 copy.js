/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-04-12 16:44:02
 * @LastEditTime: 2023-04-12 16:44:46
 * @LastEditors: xlm
 */
let tree = [
  {
    "id": 1,
    "name": "北京市",
    "children": [
      {"id": 2, "name": "东城区", "children": []},
      {"id": 3, "name": "西城区", "children": []},
      {"id": 4, "name": "海淀区", "children": []},
      {"id": 5, "name": "朝阳区", "children": []}
    ]
  },
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
  const result = [];
  let currentLevel = 0;
  let currentArray = [];

  function traverse(node, level) {
    if (level === currentLevel) {
      currentArray.push({ id: node.id, name: node.name });
    } else {
      result.push(currentArray);
      currentLevel = level;
      currentArray = [{ id: node.id, name: node.name }];
    }

    if (node.children.length > 0) {
      node.children.forEach(child => {
        traverse(child, level + 1);
      });
    }
  }

  tree.forEach(node => {
    traverse(node, 0);
  });

  result.push(currentArray); // 将最后一层的数组加入结果数组

  return result;
}

console.log(treeToLevelArray(tree));