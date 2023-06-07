<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-05-04 16:47:06
 * @LastEditTime: 2023-05-04 17:02:17
 * @LastEditors: xlm
-->
<template>
  <div id="nav">
      <h2>{{xm.name}}</h2>
      <h2>{{xm.age}}</h2>
      <h2>{{xm.sex}}</h2>
      <h2>{{xm.wife}}</h2>
      <button @click="updateData">更新数据</button>
  </div>

</template>
<!--需求：显示用户相关信息，点击按钮，可以更新用户的相关信息数据-->
<script>
  import {defineComponent,reactive} from "vue"
  export default defineComponent ({
    name: 'App',
    // vue3组合API
    setup() { // 组合API入口函数
       const person = {
           name: '小明',
           age: 19,
           sex: '男',
           wife: {
               name: '小红',
               age: 18,
               sex: '女'
           }
       }
       // 把数据变成响应式的数据，返回的是一个Proxy的代理对象，被代理的目标对象就是person对象
        //xm现在是代理对象，person是目标对象
       const xm = reactive(person);
       // 更新数据
        const updateData = ()=> {
            xm.name += '=='
            xm.wife.name += '----'
        }
       return {
           xm,
           updateData
       }
    }
  })
</script>
