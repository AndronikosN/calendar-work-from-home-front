<template>
  <v-app>
    <Appbar/>
    <v-main>
      <Dashboard/>
    </v-main>
  </v-app>
</template>

<script>
import Appbar from './components/Appbar.vue';
import Dashboard from './components/Dashboard.vue';

export default {
  name: 'App',

  components: {
    Appbar,
    Dashboard,
  },

  data: () => ({
    //
  }),
};
</script>
