import {
  SHOW_ACTION_SHEET,
  HIDE_ACTION_SHEET,
  CLEAR_FEED_LIST,
  REQUEST_FEED_LIST,
  REQUEST_FEED_LIST_FAILURE,
  FEED_LIST,
  SWITCH_TOPIC
} from '../mutation-types';

import concat from 'lodash/concat';

const state = {
  isFetching: false,
  success: true,
  nextPage: 1,
  hasMore: true,
  showActionSheet: false,
  actionMunes: [],
  topicId: 1,
  feeds: []
};

const mutations = {
  // mutation 的第一个参数是当前的 state
  // 你可以在函数里修改 state

  [SHOW_ACTION_SHEET](state) {
    state.showActionSheet = true;
  },

  [HIDE_ACTION_SHEET](state) {
    state.showActionSheet = false;
  },

  [CLEAR_FEED_LIST](state) {
    state.feeds = [];
    state.isFetching = false;
    state.success = true;
    state.nextPage = 1;
    state.hasMore = true;
    state.showActionSheet = false;
    state.actionMunes = [];
    state.topicId = 1;
  },

  [REQUEST_FEED_LIST](state) {
    state.isFetching = true;
    state.success = true;
  },

  [FEED_LIST](state, feeds) {
    state.isFetching = false;
    state.success = true;
    state.feeds = concat(state.feeds, feeds);
    state.hasMore = feeds.length >= 9;
    state.nextPage = state.nextPage + 1;
  },

  [REQUEST_FEED_LIST_FAILURE](state) {
    state.isFetching = false;
    state.success = false;
  },

  [SWITCH_TOPIC](state, topicId) {
    state.topicId = topicId;
  }
};

export default {
  state,
  mutations
};
