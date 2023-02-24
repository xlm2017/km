<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-24 10:28:46
 * @LastEditTime: 2023-02-24 10:45:56
 * @LastEditors: xlm
-->



# Vue的各生命周期 你只要往hook里面填自定义内容，它就可以执行。如vue实例里的beforeCreate,created,mounted等，都是hook。

```ts

export function callHook(
  vm: Component,
  hook: string,
  args?: any[],
  setContext = true
) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget()
  const prev = currentInstance
  setContext && setCurrentInstance(vm)
  const handlers = vm.$options[hook]
  const info = `${hook} hook`
  if (handlers) {
    for (let i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, args || null, vm, info)
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook)
  }
  setContext && setCurrentInstance(prev)
  popTarget()
}

let vm$options = {
  'beforeCreate':[],
  'created':[],
  'beforeMount':[],
  'mounted':[]
}


// 处理组内定时器

export default {
  mounted(){
    const timer = setInterval(()=>{}, 1000)
    this.$once('hook:beforeDestory', ()=> clearInterval(timer));
  }
}

// 设想一个场景如果我们需要在数据渲染到页面的之前让页面loading。mounted 之后停止 loading。beforeUpdata 时开始loading。updatad 之后停止 loading。最简单的方法就是改写组件的生命周期函数，使其在mounted/beforeUpdata /updatad 时通知父组件显示或者隐藏 loading。这样做显示不好，因为侵入了自组件的逻辑，增加的逻辑也和组件本身的功能好不关联。最好的办法就是使用

<v-chart
    @hook:mounted="loading = false"
    @hook:beforeUpdated="loading = true"
    @hook:updated="loading = false"
    :data="data"
/>


```