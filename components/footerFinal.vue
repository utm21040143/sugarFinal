<template>
  <v-footer padless class="ma-0 pa-0">
    <v-card flat tile class=" lighten-2 white--text text-center">
      <v-card-text :style="{ backgroundColor: '#a35c83 !important;'}">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="26px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-4 footerfin" :style="{ backgroundColor: '#a35c83 !important;'}">
       🧁🍰Deliciosos postres para los momentos importantes de la vida🍰🧁 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus ipsa et autem, alias libero harum vitae nobis necessitatibus ducimus eveniet adipisci eos sit expedita eius asperiores eligendi dolore blanditiis.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text  :style="{ backgroundColor: '#a35c83;' }">
        {{ new Date().getFullYear() }} — <strong>Sugar Crumbles</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-whatsapp',
      'mdi-instagram',
    ],
  }),
}
</script>
