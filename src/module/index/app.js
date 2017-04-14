import Vue from 'vue';
import VueTouch from 'vue-touch';
import Introduction from './app.vue';

VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2
});

Vue.use(VueTouch);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Introduction/>',
  components: { Introduction },
});
