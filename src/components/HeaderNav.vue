<template>
  <div class="header-nav">
    <nav class="feed_nav">
      <!-- <div class="more"></div> -->
      <div class="nav_wrapper">
        <div class="nav_list">
          <a
            v-for="link in navList"
            track-by="id"
            v-bind:class="[{ active: topicId === link.id}]"
            v-on:click="switchTopicFeeds(link.id)"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import { getTopicId, getNextPage } from 'vuexs/getters';
  import { switchTopic, getFeedList } from 'vuexs/actions';

  export default {
    props: {
      navList: {
        type: Array,
        default: () => []
      }
    },
    vuex: {
      getters: {
        topicId: getTopicId,
        nextPage: getNextPage
      },
      actions: {
        switchTopic,
        getFeedList
      }
    },
    methods: {
      switchTopicFeeds(id) {
        if (id === this.topicId) {
          return;
        }
        this.switchTopic(id);
        this.getFeedList({ page: 1, topic_id: id });
      }
    }
  };
</script>

<style>
.header-nav {
  display: block;
  width: 100%;
  z-index: 2;
}
.feed_nav {
  position: relative;
}
.feed_nav::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 100%;
  background-size: 100%;
  background-image: -webkit-linear-gradient(0deg,rgba(255,255,255,0) 0,#fff 100%);
  background-image: linear-gradient(90deg,rgba(255,255,255,0) 0,#fff 100%);
}
.feed_nav,.feed_nav .more {
  background-color: #fff
}

.feed_nav .more {
  float: right;
  width: 40px;
  height: 36px;
  position: relative;
  border-bottom: 1px solid #dbdbdb;
  box-shadow: -2px 0 2px -1px #dbdbdb
}

@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio:2) {
  .feed_nav .more {
      border:none;
      background-image: -webkit-linear-gradient(top,transparent 50%,#dbdbdb 50%,#dbdbdb 100%);
      background-image: linear-gradient(to bottom,transparent 50%,#dbdbdb 50%,#dbdbdb 100%);
      background-repeat: no-repeat;
      background-size: 100% 1px;
      background-position: bottom
  }
}

.feed_nav .more:after,.feed_nav .more:before {
  content: " ";
  background-color: gray;
  width: 1px;
  height: 15px;
  position: absolute
}

.feed_nav .more:after {
  -webkit-transform: translate(-50%, -50%) rotate(90deg);
  -ms-transform: translate(-50%, -50%) rotate(90deg);
  transform: translate(-50%, -50%) rotate(90deg)
}

.nav_wrapper {
  margin-right: 0;
  height: 36px;
  overflow: hidden;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  border-bottom: 1px solid #dbdbdb
}

@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio:2) {
  .nav_wrapper {
      border:none;
      background-image: -webkit-linear-gradient(top,transparent 50%,#dbdbdb 50%,#dbdbdb 100%);
      background-image: linear-gradient(to bottom,transparent 50%,#dbdbdb 50%,#dbdbdb 100%);
      background-repeat: no-repeat;
      background-size: 100% 1px;
      background-position: bottom
  }
}

.nav_wrapper::-webkit-scrollbar {
  display: none
}

.nav_wrapper .nav_list {
  white-space: nowrap;
  height: 100%
}

.nav_wrapper .nav_list a {
  display: inline-block;
  margin: 0 10px;
  font-size: 15px;
  line-height: 34px;
  color: #545454;
  padding: 0 5px;
  white-space: nowrap
}

.nav_wrapper .nav_list a.active {
  color: #42b983;
  border-bottom: 1px solid #42b983
}

</style>
