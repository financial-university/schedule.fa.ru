import Vue from 'vue'
import Vuex from 'vuex';
import Router from 'vue-router'
import App from '@/App'
import {routes} from './routes';
import axios from "axios";
import VueClipboard from "vue-clipboard2";

Vue.use(Router, axios);
Vue.use(VueClipboard);
Vue.use(Vuex);

const router = new Router({
  routes,
  hashbang: false,
  mode: 'history'
});


router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Бот расписания";
  next();
});

const store = new Vuex.Store({
  strict: true,
  // modules: store
});


global.app = new Vue({
  router,
  store,
  template: '<App/>',
  render: h => h(App),
  el: "#app"
});
