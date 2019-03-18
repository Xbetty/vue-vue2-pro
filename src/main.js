// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由
// import router的router一定要小写，不能写成Router，否则会报can't match的报错
import router from './router'
// 引入elementui框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 注入到根实例中
  router,
  components: { App },
  template: '<App/>'
})
