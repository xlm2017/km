/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-05-04 16:24:31
 * @LastEditTime: 2023-05-04 16:25:29
 * @LastEditors: xlm
 */
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'NodeContent',
  setup() {
    const ns = useNamespace('cascader-node')
    return {
      ns,
    }
  },
  render() {
    const { ns } = this
    const { node, panel } = this.$parent
    const { data, label } = node
    const { renderLabelFn } = panel
    return h(
      'span',
      { class: ns.e('label') },
      renderLabelFn ? renderLabelFn({ node, data }) : label
    )
  },
})
