import Vue from 'vue';
import App from './App';
import FastClick from 'fastclick';
FastClick.attach(document.body);
Vue.config.silent = true;
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
});
