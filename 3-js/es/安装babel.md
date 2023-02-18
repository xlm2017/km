# js babel es6转es5 基本配置步骤

1.全局安装babel-cli，建议用cnpm

 cnpm install -g babel-cli 
2.项目局部安装语法解析器规则，一般是有三种，安装任意一种即可

babel-preset-latest(最新的规则)
babel-preset-env (不会过时的规则)
babel-preset-es2015 (es2015转码规则)

 cnpm install --save-dev babel-preset-es2015


3.初始化一个package.json文件

npm init
4.项目根目录下新建一个.babelrc文件，安装的哪个规则就写相应的名称即可，这里示例es2015配置如下

{
	"presets": [
	  "es2015",
	],
	"plugins": []
}

5.package.json文件下的script字段里配置转译文件路径

"script":{
	"babel_build":"babel 项目/你的文件路径 -o 转译出的路径文件",
	"babel_allDir":"babel src -d lib"
	}
注意：Babel默认只转换新的javascript语法，但并不转换新的API，比如 Generator、Set、Symbol、promise等全局对象，以及一些定义在全局对象上的方法都不会转码。如果想让这些方法运行则必须使用babel-polyfill。

1.安装babel-polyfill，由于生产环境还是会用到babel-polyfill,所以得安装到dependencies中

cnpm install --save babel-polyfill
2.引入的三种方式

1）require("babel-polyfill");

2）import "babel-polyfill";

3）module.exports = {
    //适用于webpack构建
　　entry: ["babel-polyfill", "./app/js"]

};


# 未安装 @babel/core包
<!-- sh: babel: command not found -->

<!-- npm install --save-dev @babel/preset-env -->
npm install -D @babel/preset-env

# 预设配置错误
<!-- Error: Plugin/Preset files are not allowed to export objects, only functions. -->


# 文件夹名字错误
<!-- Error: EISDIR: illegal operation on a directory -->