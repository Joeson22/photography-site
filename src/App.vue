<template>
  <v-app>
    <v-app-bar app flat>
      <Header />
    </v-app-bar>

    <router-view></router-view>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
