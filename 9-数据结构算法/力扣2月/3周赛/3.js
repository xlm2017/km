

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
var substringXorQueries = function(s, queries) {
  let res = [];
  for(let i = 0; i < queries.length; i++){
    let item = queries[i][0] ^ queries[i][1];
    // console.log("item", item, item.toString(2));
    let value = item.toString(2);
    if(s.indexOf(value) === -1){
      res.push([-1,-1])
    }else{
      res.push([s.indexOf(value) , s.indexOf(value) + value.length - 1])
    }
  }  
  return res;
};

let s = "101101", queries = [[0,5],[1,2]];
// [[0,2],[2,3]]

console.log(substringXorQueries(s, queries));