<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-09-26 17:53:01
 * @LastEditTime: 2023-09-26 17:57:36
 * @LastEditors: xlm
-->


# el-table-v2组件

渲染自定义组件的其中两种方式(js和jsx)及注意事项

columns属性中自定义单元格渲染器的字段是cellRenderer，类型为VueComponent/(props: CellRenderProps) => VNode

一、js方式，主要使用函数 h() 用于创建 vnodes

h() 是 hyperscript 的简称——意思是“能生成 HTML (超文本标记语言) 的 JavaScript”。这个名字来源于许多虚拟 DOM 实现默认形成的约定。
一个更准确的名称应该是 createVnode()，但当你需要多次使用渲染函数时，一个简短的名字会更省力。

#   https://cn.vuejs.org/guide/extras/render-function.html#creating-vnodes




# @vitejs/plugin-vue-jsx -D

<script lang="jsx" setup>
  
cellRenderer: ({ cellData: date }) => (
      <ElTooltip content={dayjs(date).format('YYYY/MM/DD')}>
        {
          <span class="flex items-center">
            <ElIcon class="mr-3">
              <Timer />
            </ElIcon>
            {dayjs(date).format('YYYY/MM/DD')}
          </span>
        }
      </ElTooltip>
    ),

作者：每天都有好果汁吃
链接：https://juejin.cn/post/7265283229506142243
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。