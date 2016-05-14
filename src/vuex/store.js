import Vue from 'vue';
import Vuex from 'vuex';
import feeds from './modules/feeds';
import rewards from './modules/rewards';

Vue.use(Vuex);
Vue.config.debug = true;

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    feeds,
    rewards
  },
  strict: debug
});
