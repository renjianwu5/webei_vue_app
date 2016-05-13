<template>
  <div
    class="feed-list"
    v-infinite-scroll="getFeedList({page: nextPage})"
    infinite-scroll-disabled="loading || !statusSuccess"
    infinite-scroll-distance="10"
  >
    <div
      v-for="item in feeds"
      track-by="id"
      class="feed-list__item"
      v-on:click="goDetail(item.id)"
    >
      {{ item.content }}
    </div>
    <load-more v-if="loading"></load-more>
    <button
      v-if="!loading && hasMore"
      v-on:click="getFeedList({page: nextPage})"
      class="load-more--btn"
    >{{ statusSuccess ? '加载更多' : '获取失败，点击重试加载' }}</button>
  </div>
</template>

<script>
  import { getFeeds, getLoading, getHasMore, getNextPage, getFetchStatus } from '../vuex/getters';
  import { getFeedList } from '../vuex/actions';
  import LoadMore from './LoadMore';
  const infiniteScroll = require('vue-infinite-scroll').infiniteScroll;

  export default {
    components: {
      LoadMore
    },
    vuex: {
      getters: {
        feeds: getFeeds,
        loading: getLoading,
        nextPage: getNextPage,
        hasMore: getHasMore,
        statusSuccess: getFetchStatus
      },
      actions: {
        getFeedList
      }
    },
    directives: { infiniteScroll },
    created() {
      // this.getFeedList({ page: 1 });
    },
    methods: {
      goDetail: (id) => {
        alert(`将会跳转到 ID 为 ${id} 的微帖详情页`);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .feed-list {
    background-color: #fff;
    max-width: 600px;
    margin: 0 auto 20px;
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
