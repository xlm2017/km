<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-20 14:25:14
 * @LastEditTime: 2023-03-21 11:37:07
 * @LastEditors: xlm
-->


# npm install --global rollup


rollup -v
rollup v3.20.0



# rollup main.js --file bundle.js --format iife

打包为立即执行函数, 默认对象参数为{}, 如用在es module环境中, 需要将立即执行函数改为模块 import export 
export default myModule;






# rollup main.js --file bundle2.js --format cjs


# rollup main.js --file bundle3.js --format umd --name "myBundle"