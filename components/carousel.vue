<template>
  <v-carousel cycle v-model="model" hide-delimiter-background hide-delimiters :show-arrows="false" class="carro">
    <v-carousel-item v-for="(item) in images" :key="item" :src="item">
      <v-row
        class="ma-0 fill-height"
        align="center"
        justify="center"
      >
        <div class="text-img" >
          La mejor repostería artesanal
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>



<script>
  export default {
    data: () => ({
      model: 0,
       images: [
        './brownies_nav.jpg',
        './chispas.jpg',
        './muchos_roles.jpg',
      ],
    }),
  }
</script>
