import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    activeIndex: state => state.activeIndex,
  },
  state: {
    activeIndex: '',
  },
  mutations: {
    setActive(state, index) {
      state.activeIndex = index;
    },
  },
  actions: {

  },
});
