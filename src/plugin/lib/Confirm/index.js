
import confirmView from './index.vue'

confirmView.install = Vue => {
  Vue.prototype.$wConfirm = function (object) {
    let $vm
    const $view = Vue.extend(confirmView)
    $vm = new $view()
    $vm.$mount()
    document.body.appendChild($vm.$el)
    if (object.title) {
      $vm.title = object.title
    }
    if (object.message) {
      $vm.message = object.message
    }
    if(object.cancel){
      $vm.noConfirm = object.cancel
    }
    if(object.confirm){
      $vm.confirm = object.confirm
    }
    $vm.visible = true
  }
}

export default confirmView
