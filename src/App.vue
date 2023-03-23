<template>
  <v-app>
    <v-app-bar
      app
      flat
      
    >
      <Header />
    </v-app-bar>

    <v-content>
      <Hero />
      <Gallery />
      <LatestPost />
    </v-content>
    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Gallery from './components/Gallery.vue'
import LatestPost from './components/LatestPost.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Gallery,
    LatestPost,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
