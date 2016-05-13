<template>
  <div class="feed-list">
    <div
      v-for="item in feeds"
      track-by="id"
      class="feed-list__item"
      v-on:click="goDetail(item.id)"
    >
      {{ item.content }}
    </div>
  </div>
  <div v-if="loading" class="loading-container">加载ing...</div>
  <button
    v-if="!loading && hasMore"
    v-on:click="getFeedList({page: nextPage})"
    class="load-more--btn"
  >加载更多</button>
</template>

<script>
  import { getFeeds, getLoading, getHasMore, getNextPage } from '../vuex/getters';
  import { getFeedList } from '../vuex/actions';
  export default {
    vuex: {
      getters: {
        feeds: getFeeds,
        loading: getLoading,
        nextPage: getNextPage,
        hasMore: getHasMore
      },
      actions: {
        getFeedList
      }
    },
    created() {
      this.getFeedList({ page: 1 });
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
    margin: 0 auto;
    &__item {
      padding: 10px;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      transition: all 400ms ease;
      &:hover {
        background-color: #f2f2f2;
      }
    }
  }
  .loading-container {
    padding: 10px 0;
    text-align: center;
  }
  .load-more--btn {
    display: block;
    width: 100%;
    padding: 12px;
    color: #fff;
    border: none;
    background-color: rgb(0, 188, 212);
  }
</style>
