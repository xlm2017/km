/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-24 09:19:51
 * @LastEditTime: 2023-02-24 09:51:04
 * @LastEditors: xlm
 */


// Book对象的钩子函数ready
// this.book.ready.then(() => {
//   // 执行分页
//   return this.book.locations.generate()
// }).then(result => {
//   // 获取Locations对象
//   this.locations = this.book.locations
// })

// this.rendition.next().then(() => {
//   const currentLocation = this.rendition.currentLocation()
//   const progress = this.locations.percentageFromCfi(currentLocation.start.cfi)
// })



// this.book.loaded.navigation.then(nav => {
//   this.navigation = nav
// })

let toc = [
  {
    id: '1',
    subitems: [
      {
        id: '2',
        subitems: [
	      {
	        id: '3',
	        subitems: []
	      }
        ]
      },
      {
        id: '4',
        subitems: []
      }
    ]
  },
  {
    id: '5',
    subitems: []
  }  
];

const a = [
  { id:1,
    subitems: [
      { id:2, subitems:[] },
      { id:3, subitems:[] }
    ]
  }
]
// 生成新数组的一维数组
// [{id:1}, {id:2}, {id:3}]
// console.log([a[0], ...a[0].subitems]);

// console.log([].concat(...toc.map(item => [item, ...item.subitems])));

console.log("flat:", toc.flat());
console.log("flat-Infinity:", toc.flat(Infinity));
console.log("flatMap:", toc.flatMap((ele, index, arr)=>{
  if(ele.subitems && ele.subitems.length){
    return ele.subitems;
  }else{
    return ele;
  }
  // return ele.subitems;
}, this));


function myflatten(arr) {
  // return [].concat(...arr.map(v => [v, ...flatten(v.subitems)]))
  // 错误写法, 多了一个{}
  // return [].concat(...arr.map( item=> { [item, ...myflatten(item.subitems)] }  ));
  return [].concat(...arr.map( item=> [item, ...myflatten(item.subitems)]  ));
}

console.log("myflatten:", myflatten(toc));

// myflatten: [
//   { id: '1', subitems: [ [Object], [Object] ] },
//   { id: '2', subitems: [ [Object] ] },
//   { id: '3', subitems: [] },
//   { id: '4', subitems: [] },
//   { id: '5', subitems: [] }
// ]



let toc2 = [
  { id: '1', 'parent': null }, 
  { id: '2', 'parent': '1' }, 
  { id: '3', 'parent': '2' },
  { id: '4', 'parent': '1' }, 
  { id: '5', 'parent': null }
]

// 查找某一个目录的层级
function find(item, v = 0) {
  const parent = toc2.filter(it => it.id === item.parent)[0]
  return !item.parent ? v : (parent ? find(parent, ++v) : v)
}
// 调用
toc2.forEach(item => {
  item.level = find(item)
})

console.log("toc2:",toc2);
// toc2: [
//   { id: '1', parent: null, level: 0 },
//   { id: '2', parent: '1', level: 1 },
//   { id: '3', parent: '2', level: 2 },
//   { id: '4', parent: '1', level: 1 },
//   { id: '5', parent: null, level: 0 }
// ]


// 一维数组实现多及目录
/* <div v-for="(item, index) in flatten(navigation)"
    :key="index"
    :style="{marginLeft: (item.level * 10) + 'px'}"
    @click="rendition.display(item.href)">
  <span>{{item.label}}</span>
</div> */