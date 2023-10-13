<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-09-26 17:47:16
 * @LastEditTime: 2023-09-26 17:49:09
 * @LastEditors: xlm
-->


# Vite2中@vitejs/plugin-vue插件


# @vitejs/plugin-vue 是一个 Vite 插件，它可以让 Vite 可以解析 .vue 文件。它支持 Vue 3 的特性，支持 SFC（Single File Component）和组件的热更新。

npm install @vitejs/plugin-vue

 在 vite.config.js 中配置插件：

import VuePlugin from '@vitejs/plugin-vue'

export default {
  plugins: [VuePlugin()]
}


4. 在项目中引用 .vue 文件：
  
  import MyComponent from './MyComponent.vue'

export default {
  components: {
    MyComponent
  }
}

5. 使用热更新：
 import { hot } from '@vitejs/plugin-vue'

hot(import.meta)
