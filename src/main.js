import Vue from 'vue'
import App from './App'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(Vuelidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
