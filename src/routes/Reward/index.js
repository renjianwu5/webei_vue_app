import Vue from 'vue';
import VueRouter from 'vue-router';
import OverView from './OverView';
const App = Vue.extend({});

Vue.use(VueRouter);
const router = new VueRouter();

router.map({
  '/overview': {
    component: OverView
  }
});

router.redirect({
  '*': '/overview'
});

router.start(App, 'body');
