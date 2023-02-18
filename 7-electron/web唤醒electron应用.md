 1.若要通过页面上支持打开桌面应用，即通过shell命令打开某个应用。因此需要把当前的应用写在windows的注册表里面。

    方法一：.electron提供了一个写入注册表里面的方法。即
    ```js
        app.setAsDefaultProtocolClient()


        if (app.isPackaged) { // 是否处于打包
          app.setAsDefaultProtocolClient('vue-cli-electron')
        } else {
          app.setAsDefaultProtocolClient('vue-cli-electron', process.execPath, [
            path.resolve(process.argv[1])
          ])
        }
<!-- 注：如何你开发的协定和打包后的协定名一样的话，同时都启动的话，调用伪协定可能会启动到开发的哦，当初试试本地开发是否通过伪协定拉起咱们的客户端。 -->
    
    ```
    方法二: 通过打包设置的安装的nsi命令来实现。

    此时：installer.nsi文件内容可以添加：

    ```js
    !macro customInstall
      DetailPrint "Register "自定义的协议" URI Handler"
      DeleteRegKey HKCR "自定义的协议"
      WriteRegStr HKCR "自定义的协议" "" "URL:自定义的协议"
      WriteRegStr HKCR "自定义的协议" "URL Protocol" ""
      WriteRegStr HKCR "自定义的协议\shell" "" ""
      WriteRegStr HKCR "自定义的协议\shell\Open" "" ""
      WriteRegStr HKCR "自定义的协议\shell\Open\command" "" "$INSTDIR\${APP_EXECUTABLE_FILENAME} %1"
    !macroend
    
    !macro customUnInstall
        DeleteRegKey HKCR "自定义的协议"
    !macroend

    ```

    Mac配置：在vue.config.js中的builderOptions增加electron-builder的配置链接：

    protocols: [{
    name: 'vue-cli-electron',
    schemes: ['vue-cli-electron']
    }],


  在electron的 main.js里面添加收到当前的命令的参数。在app的ready事件之后添加相应的事件
  
  方法一、可以通过 brower-window-create事件来处理当前的参数。(ps：亲测有效)

  ```js
      app.once("browser-window-created", () => {
          //此方法，在electron创建窗口的时候会触发。
          //当前收到的命令参数在 process.argv 里面存放,当前是个数组，第一个为当前应用的地址，第二个即启动时的命令。（ps:数据类似["C:\\Program Files (x86)\\postman\\postman.exe","--","postman://postman?name=liming&age=45"]）
        if (process.argv.length > 1)
        {
              //do something
            }else{
              //do something
            }
    
      })


      // windows唤起
      app.on('second-instance', (event, argv) => {
        if (process.platform === 'win32') {
          logger.warn('唤起');
          logger.warn(event, argv);
          //TODO:还没写
        }
      });

      // macOS唤起
      app.on('open-url', (event, urlStr) => {
        logger.warn('唤起');
        logger.warn(event, urlStr);
        // 解析数据
        const urlObj = new URL(urlStr);
        const { searchParams } = urlObj;
        //数据
        const xxx = searchParams.get('xxx');
        const xxx2 = searchParams.get('xxx2');
      });

  ```

  <a href="postman://postman?name=liming&age=45">打开应用</a>


[pc端检测本地电脑是否安装某应用，安装则打开反之则下载]

https://www.jianshu.com/p/343891e410e3