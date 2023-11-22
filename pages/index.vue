<template>
  <v-row class="ma-0 pa-0">
    <v-card class="ma-0 pa-0" width="100%">
      <carouselVue/>
      <v-row class="ma-0 pa-0" style="display:flex">
        <v-row class="ma-0 pa-0">
            <card-template/>
        </v-row>
      </v-row>
      <v-card class="ma-0 pa-0" color="#FF787B" max-width="100%" height="500px" elevation="0" tile>
        <v-row class="ma-0 pa-0" justify="center" style="height:100%" align="center">
          <v-col cols="6" class="ma-0 pa-0">
            <v-row class="ma-0 pa-0" justify="center" align="center">
              <img src="~/static/navidenas.jpg" style="max-width: 100%" />
            </v-row>
          </v-col>
          <v-col cols="6" class="ma-0 pa-0">
            <v-row class="ma-0 pa-0" justify="center" align="center">
              <img src="~/static/brownies_nav.jpg" style="max-width: 100%"/>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
  </v-row>
</template>

<script>
import CardTemplate from '~/components/cardTemplate.vue'
import carouselVue from '~/components/carousel.vue'
export default {
  components:{carouselVue, CardTemplate},
    data: () => ({

    }),
  }


</script>

<style>

</style>
