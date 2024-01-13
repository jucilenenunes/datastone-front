<template >
  <v-app>
    <Navbar v-model="isDrawerOpen" />
    <v-app-bar flat class="border-b">
      <v-app-bar-nav-icon @click="isDrawerOpen = ! isDrawerOpen"></v-app-bar-nav-icon>
      <v-app-bar-title>Tela incial</v-app-bar-title>
      <template #append>
        <v-btn icon class="mr=2">
          <v-badge dot color="info">
          <v-icon  icon="mdi-bell-outline"></v-icon>
        </v-badge>
        </v-btn>
        <v-menu>
          <template #activator="{props}">
            <v-avatar v-bind="props">
              <v-img src="../assets/logo.svg"></v-img>
            </v-avatar>
          </template>
          <v-card>
            <v-list :lines="false" density="compact" nav>
              <v-list-item to="/">Jucilene</v-list-item>
              <v-list-item to="">Perfil</v-list-item>
              <v-list-item>Sair</v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </template>
    </v-app-bar>
    <v-main>
    <v-container>
      <router-view/>
    </v-container>
  </v-main>
  </v-app>
</template>

<script setup>
import Navbar from '../components/DtsNavbar.vue';
import { ref } from 'vue';
const isDrawerOpen = ref(false)
</script>