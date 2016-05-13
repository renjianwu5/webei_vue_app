<template>
  <div id="app">
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
      :current="2"
    ></header-nav>
    <feed-list></feed-list>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav';
import FeedList from './components/FeedList';
// import Display from './components/Display';
// import Increment from './components/IncrementButton';
// import Descrement from './components/DescrementButton';
import store from './vuex/store';

export default {
  components: {
    HeaderNav,
    FeedList
  },
  store
};
</script>

<style>
html {
  height: 100%;
}

body {
  background: #f2f2f2;
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
