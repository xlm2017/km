/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-04-12 16:44:02
 * @LastEditTime: 2023-04-12 17:29:42
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
      },
      {
        "id": 11,
        "name": "邯郸市",
        "children": [
          {"id": 12, "name": "哈区", "children": []},
        ]
      },
    ]
  }
]

function treeTrackBack(array) {
  console.log("222");
  for (let i = 0; i < array.length; i++) {
    const tree = array[i];
    treeTrackBack(tree.children);
    console.log(tree.name);
  }
}

console.log(treeTrackBack(tree));
