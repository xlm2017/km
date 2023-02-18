

var deleteGreatestValue = function(grid) {
  let res = 0;  
   
  let len = grid[0].length;
  console.log("len:", grid[0].length);
  for(let n = 0; n < len; n++){
      let maxValue = 0; 
      console.log("n:", n);
      for(let i = 0; i < grid.length; i++){
        console.log(i);
        let array  = grid[i];
        let max = Math.max(...array);
        let index = array.indexOf(max);
        array.splice(index, 1);
        if(max > maxValue){
          maxValue = max;  
        }
        console.log("gird:", grid[i], max);
      }
      console.log("maxValue:", maxValue);
      res += maxValue;
  }  
  
  return res;
};

let grid1 = [[1,2,4],[3,3,1]];


// console.log(deleteGreatestValue(grid1));