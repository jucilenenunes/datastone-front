<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field label="Nome do produto" 
          v-model="produto.nome"
          required 
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-radio-group label="Status" v-model="produto.status" inline>
          <v-radio label="Ativo" :value="true"></v-radio>
          <v-radio label="Inativo" :value="false"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12" sm="6">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'FormProduto',
  props: ['produto']
}


</script>
  