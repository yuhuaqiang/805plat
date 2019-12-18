import Vue from 'vue'
import './cube-ui'

import App from './App.vue'

import '@/assets/styles/common.styl'
import '@/assets/styles/iconfont.styl'
import { router, store } from '@/common/index'
// import VConsole from 'vconsole'
// var vConsole = new VConsole();

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

Vue.config.productionTip = false