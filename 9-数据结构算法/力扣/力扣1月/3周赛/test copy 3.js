

var rangeAddQueries = function(n, queries) {
  let res = new Array(n);
  for(let i = 0; i < n; i++){
      res[i] = new Array(n).fill(0);
  }
  for (let k = 0; k < queries.length; k++) {
    const element = queries[k];
    for(let i = element[0]; i <= element[2]; i++){
        for(let j = element[1]; j <= element[3]; j++){
          res[i][j]++
        }
    }
    // let i = element[0];
    // let j = element[2];
    // console.log(element);
    // while(i <= element[1] && j <= element[3]){
    //   res[i][j]++;
    //   i++;
    //   j++;
    // }
  }
  return res;
};

let queries = [[1,1,2,2],[0,0,1,1]];

console.log(rangeAddQueries(3, queries));