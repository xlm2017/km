// Ajax基于promise的实现方法

function foo(x, y){
  return request(
    'http://some.url.1/?x='+ x +'&y=' + y
  )
}
foo(11, 31).then(
  function(text){
    console.log(text)
  },
  function(err){
    console.log(err)
  }
)


// 结合
{
  function foo(x, y){
    return request(
      'http://some.url.1/?x='+ x +'&y=' + y
    )
  }
  function *main(){
    try{
      var text = yield foo(11, 31)
      console.log(text)
    }
    catch(err){
      console.log(err)
    }
  }

  // 运行*main
  var it = main()
  var p = it.next().value

  // 等待promise p决议
  p.then(
    function(text){
      it.next(text)
    },
     function(err){
       it.throw(err)
     }
  )
}