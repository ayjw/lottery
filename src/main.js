// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(ElementUI)
const messages = {
  zh: require('./assets/lang/cn'),
  en: require('./assets/lang/en')
}

const i18n = new VueI18n({
  locale: 'zh',
  messages
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
