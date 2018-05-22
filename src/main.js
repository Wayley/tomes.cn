// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import store from './store/index'
import App from './App';
import routes from './routes';
import VuxPlugin from './vuxPlugin';
// 引入fontawesome
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
fontawesome.library.add(brands, solid, regular)

// 全局使用font-awesome-icon组件
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)


// 全局注册transfer-dom 实现组件自动移动带body下 解决部分组件的问题
Vue.directive('transfer-dom', VuxPlugin.TransferDom);
// 移除移动端页面点击延迟
FastClick.attach(document.body)

// 全局使用vux组件
Vue.use(VuxPlugin)

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
window.app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
