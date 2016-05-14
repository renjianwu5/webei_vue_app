<template>
  <div id="app">
    <div style="width: 100%; height: 40px;background: #f2f2f2;line-height: 40px">
      模拟头部(请使用 iPhone 查看效果)
    </div>
    <sticky>
      <header-nav
        :nav-list="[{
            text: '推荐',
            id: 1
          }, {
            text: '5月飞花',
            id: 2
          }, {
            text: '晒勒个图',
            id: 3
          }, {
            text: '社会',
            id: 4
          }, {
            text: '科技',
            id: 5
          }, {
            text: '财经',
            id: 6
          }, {
            text: '军事',
            id: 7
          }, {
            text: '汽车',
            id: 8
          }, {
            text: '教育',
            id: 9
          }]"
      ></header-nav>
    </sticky>
    <feed-list keep-alive></feed-list>
  </div>
</template>

<script>
import HeaderNav from 'components/HeaderNav';
import FeedList from 'components/FeedList';
import Sticky from 'vux-components/sticky';
// import Display from './components/Display';
// import Increment from './components/IncrementButton';
// import Descrement from './components/DescrementButton';
import store from 'vuexs/store';

export default {
  components: {
    HeaderNav,
    FeedList,
    Sticky
  },
  store
};
</script>

<style>
@import '~vux/vux.css';
html {
  height: 100%;
}

body {
  /*background: #f2f2f2;*/
}

a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
