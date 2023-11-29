<template>
  <v-row class="ma-0 pa-0">
    <v-card class="ma-0 pa-0" width="100%">
      <carouselVue/>
      <v-row class="ma-0 pa-0" style="display:flex">
        <v-row class="ma-0 pa-0">
            <card-template/>
        </v-row>
        <images-ins/>
        </v-row>
        <br>
        <h1 class="title3">Productos de Temporada</h1>
      <v-card class="ma-0 pa-0" color="#C9E5F" max-width="100%" height="500px" elevation="0" tile>
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
    <footer-final/>
  </v-row>
</template>


<script>
import CardTemplate from '~/components/cardTemplate.vue'
import carouselVue from '~/components/carousel.vue'
import FooterFinal from '~/components/footerFinal.vue'
import imagesIns from '~/components/imagesIns.vue'
export default {
  components:{carouselVue, CardTemplate, imagesIns, FooterFinal},
    data: () => ({

    }),
  }


</script>

<style>

</style>
