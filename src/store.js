import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
        loggedInUser: {
            first_name: "Andronikos",
            last_name: "Ntinos"
        },
        properties: {
            daysPerWeek: 2,
            daysPerMonth: 5,
            peoplePerDay: 6,
        },
        loggedIn: false,
    },
    mutations: {
        setCounter: function (state, data) {
            state.counter = data
        },
        setLoggedInUser: function (state, data) {
            state.loggedInUser = data
        },
        setLoggedIn: function (state, data) {
            state.loggedIn = data
        },
        setProperties: function (state, data) {
            state.properties = data
        },
    },
    actions: {
        // Your actions go here
    },
    getters: {
        counter: (state) => state.counter,
        loggedInUser: (state) => state.loggedInUser,
        loggedIn: (state) => state.loggedIn,
        properties: (state) => state.properties,
    },
});