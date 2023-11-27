<template>
  <v-app>
    <Appbar/>
    <v-main>
      <Login/>
    </v-main>
  </v-app>
</template>

<script>
import Appbar from './components/Appbar.vue';
import Dashboard from './components/Dashboard.vue';
import Login from './components/Login.vue';

export default {
  name: 'App',

  components: {
    Appbar,
    Dashboard,
    Login,
  },

  data: () => ({
    //
  }),
};
</script>
