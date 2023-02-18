

var rangeAddQueries = function(n, queries) {
  let res = new Array(n);
  for(let i = 0; i < n; i++){
      res[i] = new Array(n).fill(0);
  }
  for (let k = 0; k < queries.length; k++) {
    const element = queries[k];
    console.log(element);
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
          if(i >= element[0] && i <= element[2] && j >= element[1] && j <= element[3]){
            console.log(i);
            res[i][j]++
          } 
        }
    }
  }
  return res;
};

let queries = [[1,1,2,2],[0,0,1,1]];

console.log(rangeAddQueries(3, queries));