
import filterInt from './filter'
import directiveInt from './directive'
import componentInt from './component'
import prototypeInt from './prototype'

let MyPlugin = {}
MyPlugin.install = function (Vue, options) {
    // 过滤器注册
    filterInt(Vue)
    //自定义指令注册
    directiveInt(Vue)
    // 注册组件
    componentInt(Vue)
    // 原型链
    prototypeInt(Vue)

}
export default MyPlugin