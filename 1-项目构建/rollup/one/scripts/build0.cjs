

const rollup = require('rollup'); // 引入rollup

console.log("打包为立即执行函数模块");

async function build () {
  let bundle = null;
  try {
    bundle = await rollup.rollup({
      input: 'main.js',
    })

  } catch (error) {
    console.log("打包异常:", error)
  }

  bundle.write({
    // file: 'dist/bundle.js',
    file: 'dist/bundle2.js',
    format: 'iife',
    // intro: 'var myNamespace = {}; (function () {',
    // outro: '})(myNamespace);',
    name: 'myLibrary'
  })
}

build()