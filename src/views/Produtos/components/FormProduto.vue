<template>
  <v-container>
      <span>{{ title }}</span>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Nome do produto"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                
              >
                <v-text-field
                  label="Descrição do produto"
                 
                ></v-text-field>
              </v-col>
             
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['Ativo', 'Inativo']"
                  label="Status"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
      
              </v-col>
            </v-row>
          </v-container>
</template>

<script>
import mock from "../mock";

export default {
  name: 'FormProduto',
  props: ['title'],
  data() {
    return {
      mock,
      title: this.title
    }
  },
}
</script>
  