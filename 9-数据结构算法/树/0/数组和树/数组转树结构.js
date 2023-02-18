

let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 2 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
]

function to(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if(map.has(arr[i].pid)){
      // arr[i]['children'] = [
      //   arr[map.get(arr[i].pid)]
      // ]
      arr[map.get(arr[i].pid)]['children'] = arr[i];
    }
    map.set(arr[i].id, i);
  }
  console.log('arr:', JSON.stringify(arr, null, 2));
}

let arr2 = [
  {
    pid: 0,
    id: 1,
    name: '部门1',
    children: [
      {
        pid: 1,
        id: 2,
        name: '部门2',
        children: [

        ]
      }
    ]
  }
]

console.log(to(arr));