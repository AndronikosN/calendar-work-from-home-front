import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    setCounter: function(state,data) {
        state.counter = data
    }
  },
  actions: {
    // Your actions go here
  },
  getters: {
    counter: (state) => state.counter,
  },
});