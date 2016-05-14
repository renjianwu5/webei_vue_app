import Vue from 'vue';
import Vuex from 'vuex';
import concat from 'lodash/concat';

Vue.use(Vuex);

const state = {
  isFetching: false,
  success: true,
  nextPage: 1,
  hasMore: true,
  showActionSheet: false,
  actionMunes: [],
  feeds: []
};

const mutations = {
  // mutation 的第一个参数是当前的 state
  // 你可以在函数里修改 state

  SHOW_ACTION_SHEET(state) {
    state.showActionSheet = true;
  },

  HIDE_ACTION_SHEET(state) {
    state.showActionSheet = false;
  },

  ClEAR_FEED_LIST(state) {
    state.feeds = [];
  },

  REQUEST_FEED_LIST(state) {
    state.isFetching = true;
    state.success = true;
  },

  FEED_LIST(state, feeds) {
    state.isFetching = false;
    state.success = true;
    state.feeds = concat(state.feeds, feeds);
    state.hasMore = feeds.length >= 9;
    state.nextPage = state.nextPage + 1;
  },

  REQUEST_FEED_LIST_FAILURE(state) {
    state.isFetching = false;
    state.success = false;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
