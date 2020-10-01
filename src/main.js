import Vue from 'vue'
import vuetify from './plugins/vuetify';
import Layout from './views/Layout.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(Layout)
}).$mount('#app')
