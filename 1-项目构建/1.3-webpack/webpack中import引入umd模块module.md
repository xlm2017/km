<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-03 10:39:17
 * @LastEditTime: 2023-03-03 10:39:50
 * @LastEditors: xlm
-->


babel-loader重复编译导致的，因为umd模块一般是经过babel编译的模块，所以是不需要再编译，我们只需要使用webpack的能力就可以直接使用。


解决重复编译，我们可以使用babel-loader的ignore选项

复制代码
{
    loader: require.resolve('babel-loader'),
    options: {
        "ignore":['src/**/*.umd.js'],
    }   
} 
复制代码
或在babel.config.js中添加也可以

module.exports = {
    "ignore": ['src/**/*.umd.js'],
}
将你的umd模块脚本重名名为umd.js结尾。