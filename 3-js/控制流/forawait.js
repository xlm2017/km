function getTime(seconds){
  return new Promise(resolve=>{
      setTimeout(() => {
          resolve(seconds)
      }, seconds);
  })
}



async function test(){
  let arr = [getTime(2000),getTime(300),getTime(1000)]
  for await (let x of arr){
      console.log(x); // 2000  300 1000 按顺序的
  }
}

test()


for (var i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}

for (var i = 0; i< 10; i++){
  setTimeout((i) => {
  console.log(i);
  }, 1000,i)
}

// 解法二：
for (var i = 0; i< 10; i++){
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 1000)
 })(i)
}