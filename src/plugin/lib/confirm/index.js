import Vue from 'vue'
import view from './index.vue'

Vue.prototype.$confirm = function (object) {
  let $vm
  const $view = Vue.extend(view)
  $vm = new $view()
  $vm.$mount()
  document.body.appendChild($vm.$el)
  if (object.title) {
    $vm.title = object.title
  }
  if (object.message) {
    $vm.message = object.message
  }
  $vm.visible = true
  $vm.confirm = object.confirm
  $vm.noConfirm = object.noConfirm
}
export default Vue
