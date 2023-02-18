let flatArr = [
  { id: 1, title: '标题1', parent_id: 0 },
  { id: 3, title: '标题2-1', parent_id: 2 },
  { id: 4, title: '标题3-1', parent_id: 3 },
  { id: 5, title: '标题4-1', parent_id: 4 },
  { id: 6, title: '标题2-2', parent_id: 2 },
  { id: 2, title: '标题2', parent_id: 0 },
]

function convert(list){
  const result = []
  const map = list.reduce((pre, cur)=>{
    pre[cur.id] = cur
    return pre
  }, {})

  console.log("map:", JSON.stringify(map, null, 2))

  for (const item of list) {
    if(item.parent_id === 0){
      result.push(item)
      continue;
    }
    if(item.parent_id in map){
      const parent = map[item.parent_id]
      parent.children = parent.children || []
      parent.children.push(item)
    }  
  }
  return result
}

console.log(JSON.stringify(convert(flatArr), null, 2))


{
  let maps = {
    "1": {
      "id": 1,
      "title": "标题1",
      "parent_id": 0
    },
    "2": {
      "id": 2,
      "title": "标题2",
      "parent_id": 0
    },
    "3": {
      "id": 3,
      "title": "标题2-1",
      "parent_id": 2
    },
    "4": {
      "id": 4,
      "title": "标题3-1",
      "parent_id": 3
    },
    "5": {
      "id": 5,
      "title": "标题4-1",
      "parent_id": 4
    },
    "6": {
      "id": 6,
      "title": "标题2-2",
      "parent_id": 2
    }
  }

  
  let arr = [
    {
      "id": 1,
      "title": "标题1",
      "parent_id": 0
    },
    {
      "id": 2,
      "title": "标题2",
      "parent_id": 0,
      "children": [
        {
          "id": 3,
          "title": "标题2-1",
          "parent_id": 2,
          "children": [
            {
              "id": 4,
              "title": "标题3-1",
              "parent_id": 3,
              "children": [
                {
                  "id": 5,
                  "title": "标题4-1",
                  "parent_id": 4
                }
              ]
            }
          ]
        },
        {
          "id": 6,
          "title": "标题2-2",
          "parent_id": 2
        }
      ]
    }
  ]

  // 数组转树
  function flatten(data){

  }
}