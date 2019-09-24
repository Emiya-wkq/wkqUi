import confirmView from '../plugin/lib/confirm/index.vue'

const prototypeInt = Vue =>{
    Vue.prototype.$isWeiXin = function () {
        let ua = window.navigator.userAgent.toLowerCase()
        if (ua.match(/MicroMessenger/i) === 'micromessenger') {
            return true
        } else {
            return false
        }
    }
    // bus
    Vue.prototype.$bus = new Vue()
    // 确认窗口
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
export default prototypeInt