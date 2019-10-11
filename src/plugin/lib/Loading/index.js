
import Loading from './loading.vue'

Loading.install = Vue => {
    let $vm
    const $view = Vue.extend(Loading)
    $vm = new $view()
    $vm.$mount()
    Vue.directive('wLoading', function (el, binding,vNode) {
        $vm.show = binding.value
        if(vNode.data.attrs){
            if(vNode.data.attrs.text){
                $vm.text = vNode.data.attrs.text
            }
            if(vNode.data.attrs.textColor){
                $vm.textColor = vNode.data.attrs.textColor
            }
            if(vNode.data.attrs.bg){
                $vm.bg = vNode.data.attrs.bg
            }
        }

        if (binding.value) {
            el.appendChild($vm.$el)
        } else {
            if (el.hasOwnProperty($vm.$el)) {
                el.removeChild($vm.$el)
            }
            // setTimeout(function () {
            //     if (el.hasOwnProperty($vm.$el)) {
            //         el.removeChild($vm.$el)
            //     }
            // }, 0)
        }
    })
}

export default Loading
