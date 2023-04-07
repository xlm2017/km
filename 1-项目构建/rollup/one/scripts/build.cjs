/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-20 20:59:38
 * @LastEditTime: 2023-03-21 10:55:41
 * @LastEditors: xlm
 */


const rollup = require('rollup'); // 引入rollup

// const terser = require('@rollup/plugin-terser') // 压缩代码的插件
// const commonjs = require('@rollup/plugin-commonjs') // rollup默认支持es6的模块系统，需要支持commonjs的话需要这个插件
// const babel = require('@rollup/plugin-babel') // rollup的babel 插件
// const vuePlugin = require('rollup-plugin-vue') // 解析vue
// const postcss = require('rollup-plugin-postcss') // 解释css
// const json = require('@rollup/plugin-json');
// const image = require('rollup-plugin-img');// 导入图片处理
// const url = require('@rollup/plugin-url')// 资源引用
// const { nodeResolve } = require('@rollup/plugin-node-resolve');
// // const eslint = require('@rollup/plugin-eslint');
// const ts = require('@rollup/plugin-typescript');
// const dts = require('rollup-plugin-dts').default;
// const postcssPxToViewport = require("postcss-px-to-viewport-update");


const fs = require("fs");
const path = require('path');

const args = process.argv[2] // 拿到 npm run build packName 中的packName

// const projectPath = `packages/${args}` // 子包所在的路径，相对process.cwd()

// const packagePath = path.resolve(__dirname, '../' + projectPath + '/package.json')

// const packageJson = fs.readFileSync(packagePath, { encoding: 'utf8', flag: 'r' })

// const pkg = JSON.parse(packageJson)

let input = 'main.js';

// 输入的文件配置
const inputOptions = {
  input,
  plugins: [
    // ts(),
    // ts 时会出错
    // eslint({
    //   fix: false,
    //   throwOnError: true,
    //   exclude: ['node_modules/**']
    // }),
    // nodeResolve(),
    // json(),
    // url(),
    // image(),
    // vuePlugin({
    //   target: 'browser',
    // }),
    // postcss({
    //   //extensions: 处理该数组内包含的扩展名，支持指定扩展名文件
    //   //extract: 如不使用该配置，样式会被打包进最终的包文件中，使用该配置，可将样式单独打包成指定文件
    //   extensions: ['.css', '.less', ".sass", ".scss"],
    //   extract: "index.css",
    //   plugins: [
    //     postcssPxToViewport({
    //       unitToConvert: 'px', // 需要转换的单位，默认为"px"
    //       viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度
    //       viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334
    //       unitPrecision: 3, // 指定转换后的精度位数
    //       propList: ['*'], // 能转化为vw的属性列表
    //       viewportUnit: 'vw', // 希望使用的视口单位
    //       fontViewportUnit: 'vw', // 字体使用的视口单位
    //       selectorBlackList: ['.ignore-', '.hairlines'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
    //       minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
    //       mediaQuery: false, // 媒体查询里的单位是否需要转换单位
    //       replace: true, // 是否直接更换属性值而不添加备用属性
    //       include: [/Reader/],
    //       exclude: [/node_modules/] // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
    //     })
    //   ]
    // }),
    // commonjs(),
    // babel({ // babel文件的设置，会读取根目录的babel.config.js文件配置
    //   // runtimeHelpers: true,
    //   babelHelpers: 'bundled',
    //   exclude: 'node_modules/**',
    //   sourceMap: true,
    //   extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue']
    // }),
    // terser(),
  ],
  // external: ['element-ui', "vue", '@geeboo/epub', 'element-plus'] // 不依赖
}

// 输出的配置
const outputOptions = [
  {
    // file: `${projectPath}/${pkg.main}`,
    file: `lib/index.js`,
    format: 'umd',
    name: `${args}`,
    sourcemap: true, // 生成源码映射文件
    globals: {
      "vue-demi": "VueDemi",
      "vue": "Vue",
      "element-plus": "ElementPlus"
    },
  }
  , {
    // file: `${projectPath}/${pkg.module}`,
    file: `lib/index.es.js`,
    format: 'es',
    name: `${args}`,
    sourcemap: true, // 生成源码映射文件
    globals: {
      "vue-demi": "VueDemi",
      "vue": "Vue",
      "element-plus": "ElementPlus"
    },
  }
]


async function build (outputs = outputOptions) {
  // create a bundle
  let bundle = ''
  let dist
  
  try {
    // outputs.forEach(async item => {
    bundle = await rollup.rollup(inputOptions) // inputOptions放在这里
    dist = await bundle.write(outputs[0]) // outputOptions放在这里
  } catch (e) {
    return console.error("build js error:", e)
  }


  try {
    // })
    await rollup.rollup(inputOptions) // inputOptions放在这里

    await bundle.write(outputs[1]) // outputOptions放在这里

  } catch (e) {
    return console.error("build es error:", e)
  }
  return { bundle, dist, outputs: outputs[0] }
}


delFile('lib');

build().then((r) => {
  if (!r) {
    return Error("buid error")
  }

  console.log("正在打包:", 'build');
})




function delFile (path, reservePath) {
  if (fs.existsSync(path)) {
    if (fs.statSync(path).isDirectory()) {
      let files = fs.readdirSync(path);
      files.forEach((file, index) => {
        let currentPath = path + "/" + file;
        if (fs.statSync(currentPath).isDirectory()) {
          delFile(currentPath, reservePath);
        } else {
          fs.unlinkSync(currentPath);
        }
      });
      if (path != reservePath) {
        fs.rmdirSync(path);
      }
    } else {
      fs.unlinkSync(path);
    }
  }
}