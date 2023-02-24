

let  arr = [
  function name(params) {
    console.log("名字")
  },
  function age(params) {
    console.log("年龄")
  },
];


arr.forEach.apply(arr, arguments);


