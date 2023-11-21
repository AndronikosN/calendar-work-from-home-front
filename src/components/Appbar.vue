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
        width="350"
        />
      
      <v-spacer></v-spacer>
      {{$store.getters.loggedInUser.first_name}} 
      {{$store.getters.loggedInUser.last_name}}
      <v-btn icon>
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
    })
  }
</script>

<style scoped>

</style>
