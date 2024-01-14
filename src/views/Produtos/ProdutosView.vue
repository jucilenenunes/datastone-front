<template>
  <v-container fluid>
    {{  }}
    <div class="dashboard-page">
      <v-row no-gutters class="mt-10 mb-6">
        <v-col>
          <h1 class="page-title">Cadastro de Produtos</h1>
        </v-col>
        <v-col cols="1">
          <DialogForm :title="viewDados(produto).dialogTitle" :primaryText="viewDados(produto).primaryText"
            @primaryClick="handleSalvar" :open="editing">
            <FormProduto :produto="produto" />
          </DialogForm>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12 b1">
          <v-table>
            <template v-slot:default>
              <thead class="pl-2">
                <tr>
                  <th class="text-left pa-6">Nome do Produto</th>
                  <th class="text-center">Status</th>
                  <th class="text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in produtos" :key="item.nome">
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
                    <v-btn color="primary" icon="mdi-pencil" @click="editar(item)" />
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
import DialogForm from "@/components/DtsDialogForm.vue";
import FormProduto from "@/views/Produtos/components/FormProduto.vue"
import { getProdutos } from '@/services/produtos';

export default {
  name: 'Produtos',
  components: {
    DialogForm,
    FormProduto
  },
  methods: {
    carregarDados() {
      getProdutos().then(
        (data) => {
          this.produtos = [...data];
        }
      ).catch(
        (e) => {
          console.log("Erro ao carregar produtos.");
        }
      );
    },
    editar(dado) {
      console.log("editar", dado);
      this.produto = null;
      if (!!dado && dado.id) {
        this.produto = { dado };
      }
      this.editing = true;
    },
    handleSalvar() {
      console.log('Realizar validação...');
      if (this.viewDados(this.produto).cadastro) {
        console.log('Chamar cadastro...', this.produto);
      } else {
        console.log('Chamar alteração...', this.produto);
      }
    },
    viewDados(x) {
      return !!(x?.id) ? {
        cadastro: false,
        dialogTitle: "Alterar Produto",
        primaryText: "Salvar",
      } : {
        cadastro: true,
        dialogTitle: "Cadastrar Produto",
        primaryText: "Cadastrar",
      }
    }
  },
  data() {
    return {
      produtos: [],
      produto: {},
      editing: false
    }
  },
  mounted() {
    this.carregarDados();
  }
}

</script>
