<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-18 17:49:19
 * @LastEditTime: 2023-03-03 15:17:17
 * @LastEditors: xlm
-->


mac clash代理

export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7891



# 设置mac的永久代理

http://ipe0.com/archives/20.html



window clash代理

set http_proxy=127.0.0.1:7890  

set https_proxy=127.0.0.1:7890


# git 设置代理

 
git config --global http.proxy 'http://127.0.0.1:4780' 
git config --global https.proxy 'http://127.0.0.1:4780'
 
 
git config --global --get http.proxy
git config --global --get https.proxy
 
 
# 取消全局代理
git config --global --unset http.proxy
git config --global --unset https.proxy

取消全局代理
命令行方式：git config --global --unset http.proxy
 

# 查地址
git remote -v
origin  http://172.80.0.250/geeboo/ui-school.git (fetch)

本地项目设置

git config --local http.proxy 127.0.0.1:7890

# 取消本地项目设置
git config --local --unset http.proxy
git config --local --unset https.proxy

全局git设置

git config --global http.proxy 127.0.0.1:7890

127.0.0.1是代理服务器地址

7890 是代理服务器端口



提示：clash开启的服务默认端口为7890

# 淘宝镜像
npm config set registry https://registry.npm.taobao.org 



cnpm config get registry 
cnpm config set registry https://registry.npm.taobao.org 

## cnpm 替换成淘宝后，报错TypeError: randomUUID is not a function无法初始化, 版本问题
npm uninstall -g cnpm
npm install cnpm@7.1.0 -g




npm cache clean --force

npm config get userconfig

node:internal/modules/cjs/loader:926
  throw err;

# 快速删除 node_modules

rimraf node_modules


npm i cross-env -g   npm i phantomjs -g















6月19日 09:33gitlab地址: http://172.80.0.250/geeboo/ui-school
账号：lib
密码：lib123456
项目名称：ui-school