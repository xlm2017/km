


const { pending, data: posts } = {
  pending: false,
  data: [1, 2, 3]
}

// console.log("data:", data);
// ReferenceError: data is not defined

console.log("data:", posts);
//  data: [ 1, 2, 3 ]