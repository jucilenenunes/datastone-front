<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Cadastro de Clientes</h1>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon="mdi-plus" color="primary" />
          </template>
        </v-menu>
      </v-row>
      <v-row>
        <v-col cols="12 b1">
          <v-table>
            <template v-slot:default>
              <thead class="pl-2">
                <tr>
                  <th class="text-left pa-6">Nome do Cliente</th>
                  <th class="text-center">Status</th>
                  <th class="text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in mock.produtos" :key="item.nome">
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
                    <v-btn color="error" icon="mdi-trash-can" class="mr-2" />
                    <v-btn color="primary" icon="mdi-pencil" />
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
  name: 'Clientes',

  components: {

  },

  data() {
    return {
      mock,
    }
  },
}
</script>
  