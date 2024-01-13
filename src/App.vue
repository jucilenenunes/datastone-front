<template>
  <v-app>
    <v-main>
      <Template/>
    </v-main>
  </v-app>
</template>

<script>
import Template from './components/DtsTemplate.vue'
export default {
  name: 'App',
    components: {
      Template,
    }
}
</script>
