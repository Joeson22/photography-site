<template>
  <v-content>
    <div class="staticHero">
      <v-img :width="width" src="../assets/images/img13.jpg" >
        <v-row align-content="end" class="lightbox white--text pa-2 fill-height">
          <v-col >
            <v-container>
              <div class="headline">About Us</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem! Aspernatur aperiam repudiandae vel dignissimos deleniti quae dolores, voluptas magnam, quam at nam molestiae earum pariatur a voluptatum! Reiciendis, harum.</p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Our Teams</h2>
        <v-row>
          <v-col v-for="item in items" :key="item.id" cols="12" sm="4">
            <v-card flat class="mx-auto" >
                <v-img class="white--text align-end"  :src="item.src" >      
                </v-img>
                <v-card-text class="text--primary text-center">
                  <div class="title">{{ item.name }}</div>
                  <p>{{ item.title }}</p>
                </v-card-text>
              
              </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
  
</template>

<script>
  export default {
    name: 'About-view',

    data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/images/team1.jpg"),
          name: 'Peter Smith',
          title: 'Director'
        },
        {
          id: 2,
          src: require("../assets/images/team2.jpg"),
          name: 'Roy Perry',
          title: 'Photographer'
        },
        {
          id: 3,
          src: require("../assets/images/team3.jpg"),
          name: 'Lisa White',
          title: 'Freelancer'
        }
      ]
      }
    }

  };
</script>
