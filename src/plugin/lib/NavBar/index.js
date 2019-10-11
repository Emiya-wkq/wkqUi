import NavBar from './navBar.vue'

NavBar.install = Vue => {
    Vue.component(NavBar.name, NavBar)
}

export default NavBar