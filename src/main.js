import 'whatwg-fetch';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import modernizr from 'modernizr'; // eslint-disable-line no-unused-vars

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)
library.add(faChevronRight)
library.add(faChevronLeft)
library.add(faTimes)
library.add(faEye)
library.add(faDownload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


export function handleFirstTab(e) {
  if (e.keyCode === 9) {
    enableTabbing();
  }
}

export function enableTabbing() {
  document.body.classList.add('user-is-tabbing');
  window.removeEventListener('keydown', handleFirstTab);
  window.addEventListener('mousedown', handleMouseDownOnce);
}

function handleMouseDownOnce() {
  document.body.classList.remove('user-is-tabbing');
  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
}