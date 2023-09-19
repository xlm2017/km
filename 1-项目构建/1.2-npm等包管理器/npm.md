



查看某个依赖的版本
# npm view less versions


全部依赖
# npm list 


npm uninstall -g xxx	//全局删除卸载
npm uninstall xxx	//删除模块，但不删除模块留在package.json中的对应信息
npm uninstall xxx --save	//删除模块，同时删除模块留在package.json中dependencies下的对应信息
npm uninstall xxx --save-dev	//删除模块，同时删除模块留在package.json中devDependencies下的对应信息


npm install -g xxx	//模块安装到全局，不是安装到当前目录的项目下
npm install xxx	//安装项目到项目目录下，不会将模块依赖写入devDependencies或dependencies
npm install -save xxx	//模块安装到项目目录下，并在package文件的dependencies节点写入依赖
npm install -save-dev xxx	//模块安装到项目目录下，并在package文件的devDependencies节点写入依赖

node -v		//查看全局node版本
vue -V		//查看全局cli版本
npm -v		//查看当前npm版本
# npm list vue		//查看vue版本


npm view typescript version		//查看本机TypeScript版本
npm info typescript		//查看typescript不同环境下的版本,查看测试版本、开发版本、最近版本、下一版本
npm view typescript versions		//查看TypeScript所有可以使用的版本



------------------------------------------------------------
npm config list	  //查看npm配置文件内容
npm config ls -l   //查看所以npm 详细配置
npm ls	 //查看当前项目依赖
npm ls -g	//查看全局npm依赖
npm ls typescript		//查看本地是否安装typescript
npm ls  typescript -g	//全局查看是否安装typescript，后面加个-g


————————————————
版权声明：本文为CSDN博主「漂移的电子」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_40030173/article/details/126606165