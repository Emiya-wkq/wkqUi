import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import wkqUi from 'vue-wkq-ui'
// Vue.use(wkqUi)
// import 'vue-wkq-ui/lib/wkqUi.css';
import WkqUi from './plugin/index'
Vue.use(WkqUi)
import GeminiScrollbar from 'vue-gemini-scrollbar'

Vue.use(GeminiScrollbar)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
