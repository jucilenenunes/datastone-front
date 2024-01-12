import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/DtsTemplate.vue'
import Clientes from '../views/ClientesView.vue'
import Produtos from '../views/ProdutosView.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Produtos,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
