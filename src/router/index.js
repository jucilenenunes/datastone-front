import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard/DashboardView.vue'
import Clientes from '../views/Clientes/ClientesView.vue'
import Produtos from '../views/Produtos/ProdutosView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: Clientes,
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: Produtos,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
