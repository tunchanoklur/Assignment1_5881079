// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SuiVue from 'semantic-ui-vue';
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(SuiVue);

// axios.defaults.withCredentials = true
//default route for axios
// axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.baseURL = 'https://assignment1backend.appspot.com'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
