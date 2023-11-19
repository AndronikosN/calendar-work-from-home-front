import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    loggedInUser: {
      first_name: "Andronikos",
      last_name: "Ntinos"
    }
  },
  mutations: {
    setCounter: function(state,data) {
        state.counter = data
    },
    setLoggedInUser: function (state,data) {
      state.loggedInUser = data
    },
  },
  actions: {
    // Your actions go here
  },
  getters: {
    counter: (state) => state.counter,
    loggedInUser: (state) => state.loggedInUser,
  },
});