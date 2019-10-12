// 引入组件

// import BottomNav from './lib/BottomNav'
import NavBar from './lib/NavBar'
import Tab from './lib/Tab'
import TimeButton from './lib/TimeButton'
import Button from './lib/Button'
import CartButton from './lib/CartButton'
import Sku from './lib/Sku'
import Upload from './lib/Upload'
import Input from './lib/Input'
import IconFont from './lib/FontIcon'
import Popup from './lib/Popup'

const componentInt = Vue =>{
    Vue.component(IconFont.name, IconFont)
    Vue.component(CartButton.name, CartButton)
    Vue.component(TimeButton.name, TimeButton)
    Vue.component(Button.name, Button)
    Vue.component(Input.name, Input)
    Vue.component(Sku.name, Sku)
    Vue.component(Tab.name, Tab)
    Vue.component(Upload.name, Upload)
    // Vue.component('BottomNav', BottomNav)
    Vue.component(NavBar.name, NavBar)
    Vue.component(Popup.name, Popup)
}
export default componentInt