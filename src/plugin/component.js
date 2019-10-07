// 引入组件

import BottomNav from '../plugin/lib/BottomNav.vue'
import NavBar from '../plugin/lib/navBar.vue'
import Tab from '../plugin/lib/tab.vue'
import TimeButton from '../plugin/lib/timeButton'
import Button from '../plugin/lib/button'
import CartButton from '../plugin/lib/cartButton'
import Sku from '../plugin/lib/sku'
import Upload from '../plugin/lib/upload/upload'
import Input from '../plugin/lib/input'
import IconFont from '../plugin/lib/fontIcon/fontIcon'

const componentInt = Vue =>{
    Vue.component('w-icon', IconFont)
    Vue.component('w-floatButton', CartButton)
    Vue.component('w-timeButton', TimeButton)
    Vue.component('w-button', Button)
    Vue.component('w-input', Input)
    Vue.component('w-sku', Sku)
    Vue.component('w-tab', Tab)
    Vue.component('w-upload', Upload)
    Vue.component('BottomNav', BottomNav)
    Vue.component('w-topNav', NavBar)
}
export default componentInt