# babel可以和构建工具联合使用，也可以独立使用

# 如果要独立的使用babel，需要安装下面两个库：
- @babel/core：babel核心库，提供了编译所需的所有api
- @babel/cli：提供一个命令行工具，调用核心库的api完成编译


# npm i babel 不能使用



# 请使用下面的命令
npm i -D @babel/core @babel/cli


# 可使用
@babel/preset-env

@babel/polyfill




@babel/cli的使用极其简单

它提供了一个命令babel

# 按文件编译
babel 要编译的文件 -o 编辑结果文件
// npx babel a.js -o c.js 

# 按目录编译
babel 要编译的整个目录 -d 编译结果放置的目录
// npx bael js -d dist
// npx bael js -d dist -w(实时监控)