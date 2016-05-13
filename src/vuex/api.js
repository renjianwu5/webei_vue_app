import Vue from 'vue';
import Vuer from 'vue-resource';

Vue.use(Vuer);

export const FeedResource = Vue.resource('/api/feeds/{page}');
export const getFeedResource = (options) => FeedResource.get(options);
