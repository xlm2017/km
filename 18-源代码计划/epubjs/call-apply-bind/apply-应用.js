/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-24 17:46:27
 * @LastEditTime: 2023-02-24 18:18:08
 * @LastEditors: xlm
 */


let  arr = [
  function name(params) {
    console.log("名字")
  },
  function age(params) {
    console.log("年龄")
  },
];


arr.forEach.apply(arr, arguments);

// spine.js
function each () {
  // spineItems 对外屏蔽了 内部数组 spineItems 这个实现细节
  return this.spineItems.forEach.apply(this.spineItems, arguments);
}


this.spine.each(function(section) {
  if (section.linear) {
    this.q.enqueue(this.process.bind(this), section);
  }
}.bind(this));