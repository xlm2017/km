

var rangeAddQueries = function(n, queries) {
  
  let res = new Array(n);
  for(let i = 0; i < n; i++){
    res[i] = new Array(n).fill(0);
  }
  let minRow = Number.MAX_VALUE;
  let maxRow = 0;
  
  let minCol = Number.MAX_VALUE;
  let maxCol = 0;

  for (let i = 0; i < queries.length; i++) {
    const element = queries[i];
    minRow = Math.min(minRow, element[0]);
    maxRow = Math.max(maxRow, element[2]);
    minCol = Math.min(minCol, element[1]);
    maxCol = Math.max(maxCol, element[3]);
  }

  console.log(minRow, maxRow, minCol, maxCol);
  for(let i = 0; i < n; i++){
      for(let j = 0; j < n; j++){
        if(i >= minRow && i <= maxRow && j >= minCol && j <= maxCol){
          console.log(i);
          res[i][j]++
        } 
      }
  }
  return res;
};

let queries = [[1,1,2,2],[0,0,1,1]];

console.log(rangeAddQueries(3, queries));