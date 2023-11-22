<template>
<v-row class="ma-0 pa-0 my-16" justify="center">
  <v-row class="pa-0 ma-0 mb-8" justify="center" align="center" style="width:100%">
    WE'RE CRUMBS & DOILIES
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

          <p class="text-h4 text--primary">
            {{item.title}}
          </p>

          <div class="text--primary">
          {{item.description}}<br>

          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
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
        {title: 'Endulzate',
        description: 'Son tan ricos, que no te cansarás de probarlos',
        last: 'visita nuestra tienda en línea'},
        {title: 'Ven a conocernos',
        description: 'La tienda física se encuentra en: ',
        last: 'icono de maps'},
        {title: 'OFERTAAAAS!!!',
        description: 'Tenemos promociones',
        last: 'revisa el menú disponible'}
      ],

    }),
  }
</script>

