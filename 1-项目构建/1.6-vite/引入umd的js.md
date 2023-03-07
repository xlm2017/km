<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-03 14:41:16
 * @LastEditTime: 2023-03-03 14:42:16
 * @LastEditors: xlm
-->


<body>
    <div id="app"></div>
    <script src="https://cdn.bootcdn.net/ajax/libs/jszip/3.10.0/jszip.min.js"></script>
    <script src="http://127.0.0.1:5501/epubjs/dist/epub.js"></script>
    <script type="module" src="/src/main.ts"></script>
  </body>


<script setup>
import Reader from "../../../packages/reader/src/main.vue"
import { reactive } from "vue-demi"
import epub from "@geeboo/epub/dist/epub"
console.log("Reader组件-vue3:", Reader);
</script>

# 后面的js的对象, 会覆盖前面的js对象.