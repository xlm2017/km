# 认识npm的生命周期

npm init -y


```js
// package.json
{

"name": "nodejsexample",

"version": "1.0.0",

"description": "",

"main": "index.js",

"scripts": {

"build": "node example.js",

"dev": "node example.js",

"start": "node example.js",

"prestart": "node example.js",

"poststart": "node example.js",

// 历史遗留, install之后执行
"legacy": "cross-env NODE_ENV=production LEGACY=true webpack --progress",

"productionLegacy": "cross-env NODE_ENV=production MINIMIZE=true LEGACY=true webpack --progress",

},

"author": "",

"license": "ISC"

}

// test.js
const ENVIRONMENT = process.env.npm_lifecycle_event;

if (ENVIRONMENT === "build") {

      console.log("Running your build tasks!");

}

if ( ENVIRONMENT === "dev") {

       console.log("Running the dev server!");同

}

if ( ENVIRONMENT === "prestart") {

      console.log("Prestart event: Prepare for Start event!");

}

if ( ENVIRONMENT === "poststart") {

      console.log("Poststart event: Do some cleanup task!");

}

if ( ENVIRONMENT === "start") {

      console.log("Running App in production!");

}

```
## npm publish 命令的生命周期会执行的脚本顺序：

prepublish > prepare > prepublishOnly > publish > postpublish
　　

## npm pack 命令的生命周期会执行的脚本顺序：

prepare > prepack > postpack
　　

## npm install 命令的生命周期会执行的脚本顺序：

prepare > preinstall > install > postinstall
　　

## npm uninstall 命令的生命周期会执行的脚本顺序：

preuninstall > uninstall > postuninstall
　　


## npm version 命令的生命周期会执行的脚本顺序：

preversion > version > postversion
　　


## npm test 命令的生命周期会执行的脚本顺序：

pretest > test > posttest
　　

## npm start 命令的生命周期会执行的脚本顺序：

prestart > start > poststart
　　

npm stop 命令的生命周期会执行的脚本顺序：

prestop > stop > poststop
　　

npm restart 命令的生命周期会执行的脚本顺序：

prerestart > restart > postrestart
　　

npm shinkwrap 命令的生命周期会执行的脚本顺序：

preshinkwrap > shinkwrap > postshinkwrap


# npm配置文件
- name:：包名，必填字段，不可以和依赖中的包名重复，如果将来要发布到npm仓库，需要保持在npm仓库中唯一
- version：版本号，必填字段，遵循 semantic-versioning 规则
- main：包入口代码文件，其他代码来引用此模块的时候，会自动引入此文件
- license：开源协议
- dependencies：生产环境依赖的包列表，通常是运行时依赖的库，会被安装在 node_modules 目录
- devDependencies：开发环境依赖的包列表，通常是辅助开发构建用到的一些工具，比如 webpack，也会安装到 node_modules 目录


# node包管理方案

- n, 交互式 node.js 版本管理工具。
- nvm

## 安装node版本管理模块n
sudo npm install n -g

### 检测目前安装了哪些版本的node
n

### 安装 node.js 最新版本
sudo n latest

### 安装 node.js 特定版本
sudo n 8.12.0

### 切换版本（不会删除已经安装的其他版本）
n 版本号

### 删除版本
sudo n rm 版本号










## nvm管理方式

1）启动终端，cd ~，随后输入

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
2）创建.bash_profile：输入“touch .bash_profile”

3）编辑.bash_profile文件：输入“open .bash_profile”

4）在弹出的.bash_profile文件内增加

　　export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
5）终端键入"command -v nvm"，回车，如果输出了 “nvm”。代表已经安装成功。
6）命令

nvm install stable  //安装最新版 node

nvm install [node版本号]  //安装指定版本的node

nvm ls // 查看已安装版本

nvm use [node版本号]  //切换到指定版本的node

nvm alias default [node版本号] //设置默认版本


### 最新安装方式
使用nvm管理node版本

### 安装nvm

brew install nvm


### 使用nvm安装node版本

安装最新版本

nvm isntall node


安装指定版本

nvm install 8.16.0


### 查看所有版本

nvm ls

### 切换node版本

使用最新版本

nvm use node

使用指定版本

nvm use 10.16.2


### 查看npm全局安装包的位置
查看命令：npm config ls

### 更改全局安装包的位置的命令：
npm config set prefix ''E:/xxxx''

# webpack管理方案



# NRM管理镜像源

查看nrm可用的版本
npm view nrm versions
卸载原有的nrm：
npm uninstall -g nrm
安装指定版本的nrm（这里使用1.1.0不会报错，使用的node版本为v16.3.0）
npm install -g nrm@1.1.0
查看安装的nrm版本：
nrm -V或者nrm --version


<!-- npm install -g cnpm --registry=https://registry.npm.taobao.org -->
nrm ls

* npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/


使用淘宝镜像源
nrm use taobao

测试访问速度
nrm test taobao