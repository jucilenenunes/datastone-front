<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row no-gutters class="mt-10 mb-6">
        <v-col>
          <h1 class="page-title">Cadastro de Clientes</h1>
        </v-col>
        <v-col cols="1">
          <DialogForm :title="viewData(cliente).dialogTitle" :primaryText="viewData(cliente).primaryText" @primaryClick="handleSalvar">
            <FormCliente :cliente="cliente" />
          </DialogForm>
        </v-col>
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
                <tr v-for="item in mock.clientes" :key="item.nome">
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
import DialogForm from "@/components/DtsDialogForm.vue";
import FormCliente from "./components/FormCliente.vue"

export default {
  name: 'Clientes',
  components: {
    DialogForm,
    FormCliente
  },
  methods: {
    handleSalvar() {
      console.log('Realizar validação...');
      if (this.viewData(this.cliente).cadastro) {
        console.log('Chamar cadastro...', this.cliente);
      } else {
        console.log('Chamar alteração...', this.cliente);
      }
    },
    viewData(x) {
      return !!(x?.id) ? {
        cadastro: false,
        dialogTitle: "Alterar Cliente",
        primaryText: "Salvar",
      } : {
        cadastro: true,
        dialogTitle: "Cadastrar Cliente",
        primaryText: "Cadastrar",
      }
    }
  },
  data() {
    return {
      mock,
      cliente: { id: null, nome: 'Cliente Teste 1', status: true }, 
    }
  },
}
</script>
  