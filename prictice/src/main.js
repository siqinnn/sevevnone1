import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import directives from './directive';
// 在标签内添加 v-testDirective
Vue.directive('testDirective', directives.testDirective)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
