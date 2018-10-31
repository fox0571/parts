import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(ElementUI);
axios.defaults.baseURL = "http://192.168.5.130/api/"
// 将axios绑定给vue成为一个属性
Vue.prototype.$http = axios
new Vue({
  render: h => h(App)
}).$mount('#app')
