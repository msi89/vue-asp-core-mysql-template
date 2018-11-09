import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
/*import jQuery from 'jquery'
 global.jQuery = jQuery
 global.$ = jQuery*/
import Popper from 'popper.js'
global.Popper = Popper

let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/css/app.css'
import './assets/js/app.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')