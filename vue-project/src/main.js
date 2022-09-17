import Vue from 'vue'
import App from './App.vue'
import UmyTable from 'umy-table'
import 'umy-table/lib/theme-chalk/index.css';

// import './assets/main.css'
Vue.use(UmyTable)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
