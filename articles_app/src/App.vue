<template>
  <v-app>
    <Navigation/>
    <Search/>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import Navigation from './components/Navigation';
import Search from './components/Search'

export default {
  name: 'App',

  components: {
    Navigation,Search
  },

  data: () => ({
    //
  }),
};
</script>
 