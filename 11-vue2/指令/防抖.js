import Vue from 'vue'
Vue.directive('noMoreClick', {
  inserted(el, binding) {
    el.addEventListener('click', e => {
      el.classList.add('is-disabled')
      el.disabled = true
      setTimeout(() => {
        el.disabled = false
        el.classList.remove('is-disabled')
      }, 2000)//我这里设置的是2000毫秒也就是2秒
    })
})


<el-button v-no-more-click type="primary" @click="submitForm('ruleForm')">确 定</el-button>