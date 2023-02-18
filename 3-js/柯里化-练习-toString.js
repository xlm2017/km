function a (params) {
  console.log("a:", params);
}

a.toString = () => {
  console.log("a-tostring");
}
console.log(a);