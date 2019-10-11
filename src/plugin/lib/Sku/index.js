import Sku from './sku.vue'

Sku.install = Vue => {
    Vue.component( Sku.name, Sku)

}

export default Sku