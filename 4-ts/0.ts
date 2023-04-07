/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-22 18:55:10
 * @LastEditTime: 2023-03-22 19:09:52
 * @LastEditors: xlm
 */


function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString"); 

let output2 = identity("myString");