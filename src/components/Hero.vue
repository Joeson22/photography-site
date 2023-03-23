<template>
  <v-container>
    <div class="heroBlock">
      <template>
        <v-carousel hide-delimiters cycle>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            cover>
              <div class="d-flex fill-height title justify-center align-center">
                <div >{{ item.title }}</div>
              </div>
          </v-carousel-item>
        </v-carousel>
      </template>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'Hero-view',

    data () {
      return {
        items: [
          {
            src: require('../assets/images/img-carousel1.jpg'),
            title: "We are creative"
          },
          {
            src: require('../assets/images/img-carousel2.jpg'),
            title: "We are persistent"
          },
          {
            src: require('../assets/images/img-carousel3.jpg'),
            title: "We are professional"
          },
        ],
      }
    },
  }
</script>
