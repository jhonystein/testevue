import Vue from 'vue'
import App from './App'
import Vuelidate from 'vuelidate'
import VueFire from 'vuefire'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
