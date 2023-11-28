<template>
<div>
    <v-app-bar
      app
      color="#6A76AB"
      dark
    >
        <div class="d-flex align-center">
            <v-img
            alt="iLink Logo"
            class="shrink mr-2"
            contain
            :src="iLinkImage"
            transition="scale-transition"
            width="130"
            />
        </div>
        <v-spacer></v-spacer>

        <v-img
        alt="Work from home image"
        class="shrink hidden-sm-and-down mt-1 ml-10"
        contain
        :src="WorkImage"
        width="250"
        />
      
      <v-spacer  v-if="$store.getters.loggedIn == true" />
      <div  v-if="$store.getters.loggedIn == true">
        {{$store.getters.loggedInUser.first_name}}
        {{$store.getters.loggedInUser.last_name}}
      </div>
      <v-btn @click="logout()"
             v-if="$store.getters.loggedIn == true"
             icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
</div>
</template>

<script>
import iLinkWhite from '../assets/iLinkWhite.png'
import WorkFromHome from '../assets/WorkFromHome.png'


  export default {
    name: 'Appbar',
    data: () => ({
        iLinkImage: iLinkWhite,
        WorkImage: WorkFromHome,
    }),
    methods: {
      logout() {
        this.$store.commit('setLoggedIn', false)
        this.$router.push({path: '/'})
      }
    }
  }
</script>

<style scoped>

</style>
