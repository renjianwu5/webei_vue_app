import { getFeedResource } from './api';
export const getFeedList = ({ dispatch }, options) => {
  dispatch('REQUEST_FEED_LIST');
  setTimeout(() => {
    getFeedResource(options).then(res => {
      const feeds = res.data;
      dispatch('FEED_LIST', feeds);
    }, () => dispatch('REQUEST_FEED_LIST_FAILURE'));
  }, 500);
};
export const showAcitonSheet = ({ dispatch }) => dispatch('SHOW_ACTION_SHEET');
export const hideAcitonSheet = ({ dispatch }) => dispatch('HIDE_ACTION_SHEET');
