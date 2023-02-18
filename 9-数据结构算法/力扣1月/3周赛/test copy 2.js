

var rangeAddQueries = function(n, queries) {
  
  let res = new Array(n);
  for(let i = 0; i < n; i++){
      res[i] = new Array(n).fill(0);
  }

  queries.sort((a,b)=>{
    return a[0] - b[0];
  })
  
  let obj1 = {};
  for (let i = 0; i < queries.length; i++) {
    const element = queries[i];
    for (let j = element[0]; j <= element[2]; j++) {
      obj1[j] = obj1[j] ? ++obj1[j] : 1;      
    }
  }

  queries.sort((a,b)=>{
    return a[1] - b[3];
  })
  
  let obj2 = {};
  for (let i = 0; i < queries.length; i++) {
    const element = queries[i];
    for (let j = element[1]; j <= element[3]; j++) {
      obj2[j] = obj2[j] ? ++obj2[j] : 1;      
    }
  }

  console.log(obj1, obj2);

  for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj1, key)) {
      let j = 0;
      console.log("obj1:", key, obj1[key]);
      while (j < n) {
        res[key * 1][j] = obj1[key]
        j++;
      }      
    }
  }
  // for (const key in obj2) {
  //   if (Object.hasOwnProperty.call(obj2, key)) {
  //     let j = 0;
  //     while (j < n) {
  //       res[j][key * 1] = obj2[key]
  //       j++;
  //     }      
  //   }
  // }

  // for (let k = 0; k < queries.length; k++) {
  //   const element = queries[k];
  //   console.log(element);
  //   for(let i = 0; i < n; i++){
  //     for(let j = 0; j < n; j++){
  //       // if(i >= element[0] && i <= element[2] && j >= element[1] && j <= element[3]){
  //       //   res[i][j]++
  //       // } 

  //     }
  //   }
  // }
  return res;

};

let queries = [[1,1,2,2],[0,0,1,1]];

console.log(rangeAddQueries(3, queries));