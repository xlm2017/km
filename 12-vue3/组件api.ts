/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-05-04 16:13:14
 * @LastEditTime: 2023-05-04 16:58:41
 * @LastEditors: xlm
 */



import {
  defineComponent
} from 'vue';


// import type 是 TypeScript 中的一个语法，用于导入类型而不是具体的值。它告诉编译器在编译时只导入类型信息，而不会生成额外的 JavaScript 代码。

// 例如，假设有一个名为 MyModule 的模块，其中包含一个名为 MyType 的接口：

// // MyModule.ts
// export interface MyType {
//   // ...
// }

import type { DefineComponent } from 'vue'

export default defineComponent({
  name: 'ElColorAlphaSlider',
  props: {}
})