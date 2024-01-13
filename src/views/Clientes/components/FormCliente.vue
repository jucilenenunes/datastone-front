<template>
  <v-container>
    <span>{{ title }}</span>
    <v-row>
      <v-col cols="12">
        <v-text-field label="Nome do cliente" required></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field label="Endereço do cliente"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="Telefone"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="Email"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="Documento"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-radio-group label="Status" v-model="cliente.status" inline>
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
import mock from "../mock";

export default {
  name: 'FormCliente',
  props: ['cliente'],
  data() {
    return {
      mock,
    }
  },
}
</script>
    