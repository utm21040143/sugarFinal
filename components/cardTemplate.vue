<template>
<v-row class="ma-0 pa-0 my-16" justify="center">
  <v-row class="pa-0 ma-0 mb-8" id="title-card" justify="center" align="center" style="width:100%">
    SOMOS MÁS QUE REPOSTERÍA
  </v-row>
  <v-row class="pa-0 ma-0" justify="center" style="width:100%">
    <v-col class="ma-0 pa-0" cols="4" v-for="(item, i) in card" :key="i">
      <v-card
        min-height="100%"
        class="ma-0 pa-0"
        color="white"
        width="100%"
        tile
        elevation="0"
    >
        <v-card-text>

          <p class="text-h4 text--primary principal">
            {{item.title}}
          </p>

          <div class="text--primary principal">
          {{item.description}}<br>

          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            class="principal"
            text
            color="deep-purple accent-4"
          >

              {{item.last}}


          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</v-row>
</template>

<script>
  export default {
    data: () => ({
      card:[
        {title: 'Postre Artesanal',
        description: 'En una pastelería artesanal, los dulces y postres se elaboran con recetas tradicionales, pero también se experimenta con nuevas técnicas y sabores. Los pasteleros artesanales ponen todo su corazón en su trabajo, y eso se nota en el sabor y la apariencia de los dulces y postres que elaboran.',
        last: 'visita nuestra tienda en línea'},
        {title: 'Saborea tus postres favoritos',
        description: 'La tienda física se encuentra en: ',
        last: 'mdi-map-marker-radius'},
        {title: 'El amor forma parte de nuestra historia',
        description: 'En Sugar Crumbles, hacemos brownies, galletas y roles de canela con ingredientes frescos y de alta calidad. Nos esforzamos por crear postres que sean deliciosos y que te hagan sonreír.¿Estás listo para probarlos?',
        last: '¡pide tus productos hoy!'}
      ],

    }),
  }
</script>

