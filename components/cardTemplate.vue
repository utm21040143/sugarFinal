<template>
  <v-row class="ma-0 pa-0 mt-16" justify="center">
    <v-row
      class="pa-0 ma-0 mb-8"
      id="title-card"
      justify="center"
      align="center"
      style="width: 100%"
    >
      SOMOS MÁS QUE REPOSTERÍA
    </v-row>
    <v-row class="pa-0 ma-0" justify="center" style="width: 100%">
      <v-col class="ma-0 pa-0" cols="4" v-for="(item, i) in card" :key="i">
        <v-card v-if="i != 1" min-height="100%" class="ma-0 pa-0" color="white" width="100%" tile elevation="0" >
          <v-card-text>
            <p class="text-h4 text--primary principal">
              {{ item.title }}
            </p>

            <div class="text--primary principal">
              {{ item.description }}<br/>
            </div>
          </v-card-text>
        </v-card>
        <v-hover v-else v-slot="{ hover }">
            <v-card  min-height="100%" class="ma-0 pa-0" :color="hover ? '#ededed' : 'white'" width="100%" elevation="0" tile style="cursor:pointer;" @click="show()">
                <v-card-text>
                  <p class="text-h4 text--primary principal">
                    {{ item.title }}
                  </p>

                  <div class="text--primary principal">
                    {{ item.description }}<br/>
                    <img :src="img">
                  </div>
                </v-card-text>
            </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    whats:'https://wa.me/4495768851',
    img: 'panadero.png',
    card: [
      {
        title: 'Postre Artesanal',
        description:
          'En una pastelería artesanal, los dulces y postres se elaboran con recetas tradicionales, pero también se experimenta con nuevas técnicas y sabores. Los pasteleros artesanales ponen todo su corazón en su trabajo, y eso se nota en el sabor y la apariencia de los dulces y postres que elaboran.',
      },
      {
        title: '',
        description: '',
      },
      {
        title: 'El amor forma parte de nuestra historia',
        description:
          'En Sugar Crumbles, hacemos brownies, galletas y roles de canela con ingredientes frescos y de alta calidad. Nos esforzamos por crear postres que sean deliciosos y que te hagan sonreír.¿Estás listo para probarlos?',
      },
    ],
  }),
  methods: {
    show(){
      this.$store.state.show = !this.$store.state.show 
      console.log(this.$store.state.show); 
    }
  },
}
</script>
