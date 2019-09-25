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
    // 拷贝文字
    Vue.prototype.$wCopy = function (code) {
        let oInput = document.createElement('input') // 生成一个节点
        oInput.value = code  // 你要复制的文本
        oInput.readOnly = "readOnly"    //防止手机环境下弹出键盘
        document.body.appendChild(oInput) // 插入文档
        oInput.select() // 选择对象
        document.execCommand("Copy") // 执行浏览器复制命令
        document.body.removeChild(oInput) //移除标签
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