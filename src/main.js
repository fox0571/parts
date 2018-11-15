import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import axios from 'axios';
import JsonExcel from 'vue-json-excel';

import routeConfig from './router/index.js';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.component('downloadExcel', JsonExcel)
axios.defaults.baseURL = "http://192.168.5.130/api/"
Vue.prototype.$http = axios

const router = new VueRouter({
  routes: routeConfig
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
