import Vue from 'vue'
import vuetify from './plugins/vuetify';
import Dashboard from './views/Dashboard.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(Dashboard)
}).$mount('#app')
