



<!-- 编译宏命令 -->


<!-- defineProps -->

<!-- defineProps 是vue3的写法并且是一个仅 <script setup> 中可用的编译宏命令，并不需要显式地导入；在vue3的非语法糖setup和在vue2中的写法是 props 。 -->

<!-- defineProps的大部分用法是进行父子组件传值。 -->

<!-- 注意：defineProps() 宏中的参数不可以访问 <script setup>中定义的其他变量，因为在编译时整个表达式都会被移到外部的函数中。 -->

const props = defineProps({
  str: String,
  num: Number,
  bool: Boolean,
  arr: Array,
  obj: Object,
  date: Date,
  getConsole: Function,
  message: Object,
  a: Symbol,
  b: Symbol
})


<!-- 父组件传值给子组件 -->

<!-- 父组件通过将值传递给子组件，子组件通过defineProps进行接收，子组件点击后将接收到的值 alert 出来 -->



<!-- efineEmits 和 defineProps 一样也是仅用于 <script setup> ，并且不需要导入；在vue3的非语法糖setup中的写法是 emits 。 -->
<!-- defineEmits 的不同点在于，组件要触发的事件可以显式地通过 defineEmits() 宏来声明。 -->


<script setup>

defineEmits(['close'])

// defineExpose


const isShow = ref<boo(false)

// 在使用 <script setup> 的时候，组件的实例是默认关闭的不能够通过模板引用或者$parent 进行被访问的。
defineExpose({ // 宏来显示指定组件中属性暴露出去
  isShow,
});

</script>
  