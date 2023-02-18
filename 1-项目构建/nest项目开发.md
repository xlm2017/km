# nest项目开发

## nest/core

### NestFactory

## 核心概念

### Module

- Nest.js 通过创建一个关系图，来维护各个模块之间的依赖关系。对应 DDD，这里如果我们将 root module 理解为是 application domain，那么每个子 module 我们可以理解为 subdomain

### Controller

- 控制器 (Controller) 就更好理解，和 MVC 中 Controller 的概念一样，可以理解为是服务的入口和出口。一般来说都是薄薄的一层，主要起到了路由 (Routing) 的作用。

### provider

- 在 Nest.js 中，所有可被当作依赖注入 (Injectable) 的 class 都可以被当作 Provider。

## 项目结构

### src

- main.ts
- app.module.ts
- app.controller.ts

	- 相当于路由, 每个路由分开写在控制器里
	- 根模块, 不写具体的逻辑

- app.service.ts

## 装饰器

### @Module

### @Controller

- 定义一个控制器

### @get

- get请求
- 参数为路径, 默认为根路径

### @Injectable

- 依赖注入

## recipes

### https://github.com/kuangshp/nest-code-generate 代码生成器用这个更好

### swagger

- 装饰器

	- ApiTags
	- ApiOperation
	- ApiProperty
	- class入参类型

- 调试apipost

### 子主题 3

## 命令行

### nest -h

### nest g mo moduleName

- 生成一个模块

### nest g co controllerName

- 生成一个控制器

## 模块

### 组织代码, 拆分模块

## 分支主题 7

## 技术

### mysql链接

- Sequelize

### yarn add @types/mongoose

- ts定义文件

### @nestjs/mongoose

## 其他

### mongodb安装

- 找到mongodb安装路径下/bin目录下的mongod文件，双击打开它，这时会出现带“打开”按钮的“无法验证开发者”弹窗，点“打开”
- open -e .bash_profile
- export PATH=${PATH}:/usr/local/mongodb
- source .bash_profile
- mongod -version
- https://www.bilibili.com/video/BV1wr4y1e7rw?spm_id_from=333.337.search-card.all.click

### mongodb配置与启动

- mkdir data log
- 权限 sudo chown xlm /usr/local/mongodb/data
- mongod --fork -dbpath data
- mongod --dbpath /usr/local/mongodb --logpath /usr/local/log/mongo.log --fork

### 坑

- 无法打开“mongo”,因为无法验证开发者。
- mac安装MongoDB以后 报错 command not found: mongod

### mac

- 访达打开/usr/local

*XMind - Trial Version*