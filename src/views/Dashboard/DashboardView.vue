<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Início</h1>
        <v-col cols="6">
          <v-autocomplete
              :items="items"
              append-inner-icon="mdi-close"
              auto-select-first
              class="flex-full-width"
              density="comfortable"
              item-props
              menu-icon=""
              placeholder="Buscar"
              prepend-inner-icon="mdi-magnify"
              
              theme="light"
             
          ></v-autocomplete>
      </v-col>
      </v-row>
     
      <v-row>
        <v-col cols="12 b1">
          <v-table>
            <template v-slot:default>
              <thead class="pl-2">
                <tr>
                  <th class="text-left pa-6">Nome do Cliente</th>
                  <th class="text-left pa-6">Nome do Produto</th>
                  <th class="text-center">Status</th>
                  <th class="text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in mock.produtos" :key="item.nome">
                  <td class="pa-6">{{ item.nome }}</td>
                  <td class="pa-6">{{ item.nome }}</td>
                  <td v-if="item.ativo" class="text-center">
                    <v-chip link color="success" class="ma-2 ml-0">
                      Ativo
                    </v-chip>
                  </td>
                  <td v-else-if="!item.ativo" class="text-center">
                    <v-chip link color="error" class="ma-2 ml-0">
                      Inativo
                    </v-chip>
                  </td>
                  <td class="text-right">
                    <v-btn color="primary" icon="mdi-eye" class="mr-
                    " />
                  </td>
                </tr>
              </tbody>
            </template>
          </v-table>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import mock from "./mock";

export default {
  name: 'DtsClientes',

  components: {

  },

  data() {
    return {
      mock,
      items: []
    }
  },
}
</script>
  