

let nestedList = [[1,1],2,[1,1]];


let queue = [];

for (let i = 0; i < nestedList.length; i++) {
  if(nestedList[i].length){
    // 切记, 拼写不要错误
    // TypeError: Found non-callable @@iterator
    // queue.push(...nestedList[i])

    // queue.push(...nestedList[i]);

    while(nestedList[i].length){
      queue.push(nestedList[i].shift());
    }


  }else{
    queue.push(nestedList[i]);
  }
}

console.log(queue);
// [ 1, 1, 2, 1, 1 ]