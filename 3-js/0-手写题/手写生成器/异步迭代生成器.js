// 回调方法

function foo(x, y, cb){
  ajax(
    'http://some.url.1/?x='+ x +'&y=' + y,
    cb
  )
}

foo(11, 31, function(err, text){
  if(err){
    console.log(err)
  }
  else{
    console.log(text)
  }
})

// =========================================

// 生成器表达同样的任务流程控制
{ 
  function foo(x, y){
    ajax(
      'http://some.url.1/?x='+ x +'&y=' + y,
      function(err, data){
        if(err){
          // 向*main()抛出一个错误
          it.throw(err)
        }
        else{
          // 用收到的data恢复*main()
          it.next(data)
        }
      }
    )
  }

  function *main(){
    try{
      var text = yield foo(11, 31)
      console.log(text)
    }
    catch(err){
      console.error(err)
    }
  }

  var it = main()

  //这里启动
  it.next()
}