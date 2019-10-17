import html2canvas from 'html2canvas'

import confirmView from '../plugin/lib/Confirm'
import toastView from '../plugin/lib/toast.vue'

const prototypeInt = Vue =>{
    Vue.prototype.$isWeiXin = function () {
        let ua = window.navigator.userAgent.toLowerCase()
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true
        } else {
            return false
        }
    }
    Vue.prototype.$wCreatePhoto = function (el) {
        // 截取dom为图片
        return new Promise(function (resolve, reject) {
            html2canvas(el,{
                //backgroundColor: null
            }).then((canvas) => {
                let dataURL = canvas.toDataURL("image/png");
                resolve(dataURL)
            });
        })
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
    // 轻提示
    Vue.prototype.$wToast = function (data) {
        let $vm
        const $view = Vue.extend(toastView)
        $vm = new $view()
        $vm.$mount()
        document.body.appendChild($vm.$el)
        if(typeof data === 'object') {
            if (data.content) {
                $vm.content = data.content
            }
            if (data.time) {
                $vm.time = Number(data.time)
            }
            if(data.styleList){
                $vm.styleList = data.styleList
            }
        } else {
            $vm.content = data
        }

        $vm.show = true
        $vm.init()
    }
}
export default prototypeInt