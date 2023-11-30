<template>
  <v-row>
    <v-col
      v-for="(image, index) in images"
      :key="index"
      class="d-relative child-relative galeria"
      cols="3"
    >
      <v-img
        :src="requireImages(`${Object.values(image)[0]}`)"
        :lazy-src="requireImages(`${Object.values(image)[0]}`)"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { img1: "chispas.jpg" },
        { img2: "dos_roles.jpg" },
        { img3: "galletas.jpg" },
        { img4: "chunky-cooki.jpg" },
        { img5: "navidad-cs.jpg" },
        { img6: "muffin.jpg" },
        { img7: "rol.jpg" },
        { img8: "browniech.jpg" },
        { img9: "muffinrosa.jpg" },
        { img10: "red-velvet.jpg" },
        { img11: "jengibre.jpg" },
        { img12: "browni2.jpg" },
      ],
    };
  },
  methods: {
    requireImages(filename) {
      const images = require.context('@/static', false, /\.jpg$/);
      return images(`./${filename}`);
    },
  },
};
</script>
