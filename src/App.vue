<template>
  <v-app>
    <Navbar />
    <v-main>
      <Template/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/DtsNavbar.vue'
import Template from './components/DtsTemplate.vue'
export default {
  name: 'App',
    components: 'Navbar'
 
}
</script>
