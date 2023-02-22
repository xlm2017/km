

// import Hook from './hook';
// SyntaxError: Cannot use import statement outside a module

let Hooks  = require('./hook');

console.log("Hook:", Hooks.Hook);

class Student {
  constructor(name){
    this.hooks = {};
    this.hooks.render = new Hooks.Hook(this);
    this.name = name;
  }

  beforeLearn(){
    console.log("学习之前");
    let view = null
    this.hooks.render.trigger(view, this).then(() => {
      console.log("钩子执行完毕");
    })
  }
}

let zhang = new Student("法外狂徒");

console.log("学生", zhang);


zhang.hooks.render.register(view => {
  console.log("注册钩子:");
})
zhang.hooks.render.register(view => {
  console.log("注册钩子2:");
})

zhang.beforeLearn();