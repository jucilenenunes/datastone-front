<template >
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon="mdi-plus" color="primary" />
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <FormProduto title="Novo Produto" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Fechar
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import FormProduto from "../views/Produtos/components/FormProduto.vue"
  export default {
    props: ['title'],
    data: () => ({
      dialog: false,
      title: ''
    }),
    components: {
      FormProduto
    },
  }
</script>