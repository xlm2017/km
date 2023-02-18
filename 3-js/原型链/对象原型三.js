function Vue(options){
  this.options = {
    data: {}
  }
  return this
}
Vue.options = {
  t: 'www'
}
Vue.prototype.options = {
  s: 'ddd'
}
let vue = new Vue({})
console.log(Vue.constructor, vue.constructor, vue.constructor.options)