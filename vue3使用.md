<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-09 15:26:19
 * @LastEditTime: 2023-03-09 15:28:47
 * @LastEditors: xlm
-->


setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. 
A component with async setup() must be nested in a <Suspense> in order to be rendered. 


# 在  await

// 缓存电子书

# let cacheSetting = await getIndexeddb('reader-setting');


为什么 ?

为什么这么设计 ?




# 第一种方法 使用suspense 包裹你的组件 感觉不太好

# 第二种方法 使用生命周期钩子

https://www.cnblogs.com/shiazhen/p/14986454.html