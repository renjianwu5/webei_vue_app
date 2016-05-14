<template>
  <div
    class="feed-list"
    v-infinite-scroll="getFeedList({page: nextPage, topic_id: topicId})"
    infinite-scroll-disabled="loading || !statusSuccess"
    infinite-scroll-distance="40"
  >
    <div
      v-for="item in feeds"
      track-by="$index"
      class="feed-list__item"
      v-on:click="showAcitonSheet()"
    >
      {{ item.content }}
    </div>
    <load-more v-if="loading"></load-more>
    <button
      v-if="!loading && hasMore"
      v-on:click="getFeedList({page: nextPage, topic_id: topicId})"
      class="load-more--btn"
    >{{ statusSuccess ? '加载更多' : '获取失败，点击重试加载' }}</button>
  </div>
  <actionsheet
    :show.sync="actionsheetShow"
    :menus="menus"
    show-cancel
    @menu-click="clickActionSheet"
    @just-hide-actionsheet="hideAcitonSheet()"
    cancel-text="取消"
  ></actionsheet>
</template>

<script>
  import {
    getFeeds,
    getLoading,
    getHasMore,
    getNextPage,
    getFetchStatus,
    getTopicId,
    getActionSheetShow
  } from '../vuex/getters';
  import Actionsheet from './Actionsheet';
  import {
    getFeedList,
    showAcitonSheet,
    hideAcitonSheet
  } from '../vuex/actions';
  import LoadMore from './LoadMore';
  const infiniteScroll = require('vue-infinite-scroll').infiniteScroll;

  export default {
    components: {
      LoadMore,
      Actionsheet
    },
    data() {
      return {
        menus: {
          menu1: '取消收藏',
          menu2: '举报'
        }
      };
    },
    vuex: {
      getters: {
        feeds: getFeeds,
        loading: getLoading,
        nextPage: getNextPage,
        hasMore: getHasMore,
        statusSuccess: getFetchStatus,
        actionsheetShow: getActionSheetShow,
        topicId: getTopicId
      },
      actions: {
        getFeedList,
        showAcitonSheet,
        hideAcitonSheet
      }
    },
    directives: { infiniteScroll },
    created() {
      // this.getFeedList({ page: 1 });
    },
    methods: {
      clickActionSheet(key) {
        console.log(key);
        this.hideAcitonSheet();
      }
      // goDetail: () => {
      //   this.showAcitonSheet();
      // }
    }
  };
</script>

<style lang="scss" scoped>
  .feed-list {
    background-color: #fff;
    max-width: 600px;
    padding-bottom: 40px;
    &__item {
      padding: 10px;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      transition: all 400ms ease;
    }
  }
  .load-more--btn {
    display: block;
    width: 100%;
    padding: 12px;
    color: #666;
    border: none;
    background-color: #f8f8f8;
  }
</style>
