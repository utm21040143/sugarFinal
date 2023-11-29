<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class=" lighten-2 white--text text-center"
      :style="{ backgroundColor: '#F2c9dc' }"

    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-4 footerfin">
        💌 Contáctanos 📞<br>

        ¿Preguntas, comentarios o simplemente quieres compartir tu amor por nuestras delicias? Estamos aquí para escucharte. Contáctanos en CORREO o llámanos al TELEFONO.

        ¡Gracias por elegir Sugar Crumbles para endulzar tus momentos especiales! ✨🍬
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
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>
