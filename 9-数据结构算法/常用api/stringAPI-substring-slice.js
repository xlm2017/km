let str = 'string';

console.log(str.substring(0, 3));  // str
console.log(str.slice(0, 3));      // str  

console.log(str.slice(1));      // tring  
console.log(str.slice(-1));      // g  
console.log('-2:', str.slice(-2));      // ng  
console.log(str.slice(5));      // g  
console.log(str.slice(6));      // 

let str1 = 'aab';
console.log(str1.slice(2));      // b
console.log(str1.slice(3));      // 



let str2 = 'aabc';
console.log('str2:', str2.slice(2));      // bc
console.log('str2:', str2.slice(2, -1));      // b
console.log('str2--:', str2.slice(-2));      // bc
console.log('str2:', str2.slice(2, str2.length + 1));      // bc
console.log('str2-sub:', str2.substring(2, str2.length + 1));      // bc
console.log('str2-sub2:', str2.substring(2, -1));      // aa


// substring

// 如果 indexStart 等于 indexEnd，substring 返回一个空字符串。
// 如果省略 indexEnd，substring 提取字符一直到字符串末尾。
// 如果任一参数小于 0 或为 NaN，则被当作 0。
// 如果任一参数大于 stringName.length，则被当作 stringName.length。
// 如果 indexStart 大于 indexEnd，则 substring 的执行效果就像两个参数调换了一样。见下面的例子。





// slice

// beginIndex
// 从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 strLength + beginIndex 看待，这里的strLength 是字符串的长度（例如，如果 beginIndex 是 -3 则看作是：strLength - 3）

// endIndex
// 可选。在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，slice() 会一直提取到字符串末尾。如果该参数为负数，则被看作是 strLength + endIndex，这里的 strLength 就是字符串的长度 (例如，如果 endIndex 是 -3，则是，strLength - 3)。





console.log(str);    // string