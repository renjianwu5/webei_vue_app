import { getFeedResource } from './api';
import * as types from './mutation-types';
export const getFeedList = ({ dispatch }, options) => {
  dispatch(types.REQUEST_FEED_LIST);
  // const feeds = [];
  // for (let i = (Number(options.page) - 1) * 10; i < Number(options.page) * 10; i++) {
  //   feeds.push({
  //     id: i,
  //     content: `西湖区湖底公园${i}号`,
  //   });
  // }
  // setTimeout(() => {
  //   dispatch(types.FEED_LIST, feeds);
  // }, 600);
  setTimeout(() => {
    getFeedResource(options).then(res => {
      const feeds = res.data;
      dispatch(types.FEED_LIST, feeds);
    }, () => dispatch(types.REQUEST_FEED_LIST_FAILURE));
  }, 600);
};
export const switchTopic = ({ dispatch }, topicId) => {
  dispatch(types.CLEAR_FEED_LIST);
  dispatch(types.SWITCH_TOPIC, topicId);
};
export const showAcitonSheet = ({ dispatch }) => dispatch(types.SHOW_ACTION_SHEET);
export const hideAcitonSheet = ({ dispatch }) => dispatch(types.HIDE_ACTION_SHEET);
