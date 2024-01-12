<template>
  <v-app>
    <Navbar />
    <v-main>
      
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/DtsNavbar.vue'
import Template from './components/DtsNavbar.vue'
export default {
  name: 'App',
    components: 'Navbar'
 
}
</script>
