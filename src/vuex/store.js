import Vue from 'vue';
import Vuex from 'vuex';
import concat from 'lodash/concat';

Vue.use(Vuex);

const state = {
  isFetching: false,
  nextPage: 1,
  hasMore: true,
  feeds: []
};

const mutations = {
  // mutation 的第一个参数是当前的 state
  // 你可以在函数里修改 state

  ClEAR_FEED_LIST(state) {
    state.feeds = [];
  },

  REQUEST_FEED_LIST(state) {
    state.isFetching = true;
  },

  FEED_LIST(state, feeds) {
    state.isFetching = false;
    state.feeds = concat(state.feeds, feeds);
    state.hasMore = feeds.length >= 9;
    state.nextPage = state.nextPage + 1;
  },

  REQUEST_FEED_LIST_FAILURE(state) {
    state.isFetching = false;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
