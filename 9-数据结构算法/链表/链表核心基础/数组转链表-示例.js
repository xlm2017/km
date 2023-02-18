

let arr2 = [1,3,4];

/**
 * 将数组转换为链表
 * @param  array  arr    需要转换的数组
 * @param  int    type   转换的类型，0为单链表，1为循环链表
 * @return object        返回链表
 */
function array2List(arr, type = 0) {
  if (!arr.length) return null;
  let header = { data:arr[0], next: null };
  // 尾插法
  let obj = header;
  for (let i = 1; i < arr.length; i++) {
      obj.next = { data: arr[i], next: null };
      obj = obj.next;
  }
  if (type) obj.next = header;
  return header;
}


console.log(JSON.stringify(array2List(arr2), null, 2));