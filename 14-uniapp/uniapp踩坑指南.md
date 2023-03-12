# uniapp踩坑指南

## node-sass

### node16版本

- 不兼容
- 换成sass

### sass

- ruby sass

	- ruby

- node-sass

	- c++

- dart-sass
- dart-sass改名为sass

### saas-loader

- 12版本不兼容webpack5

	- 改为10.2.0

		- unmet不满足

- TypeError: this.getOptions is not a function
- uniapp Error: Cannot find module 'webpack/lib/RuleSet'

### yarn

- lock

### npm

- npm install -g n

## 分支主题 2

## 分支主题 3

*XMind - Trial Version*



var pages = getCurrentPages();
var prevPage = pages[pages.length - 2]; //上一个页面
prevPage.$vm.real.bankName = 'aaa'

这这种方式可以解决, 不要用setData