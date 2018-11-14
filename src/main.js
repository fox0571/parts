import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import axios from 'axios';

import TagView from './components/TagView.vue';
import TableView from './components/TableView.vue';
import UnitView from './components/UnitView.vue';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);

axios.defaults.baseURL = "http://192.168.5.130/api/"
// 将axios绑定给vue成为一个属性
Vue.prototype.$http = axios
var router = new VueRouter({
  routes: [
    { path: '/tag', component: TagView },
    { path: '/part', component: TableView },
    { path: '/unit', component: UnitView }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
