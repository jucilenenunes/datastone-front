<template>
    <v-navigation-drawer temporary>
      <v-list>
        <v-list-subheader >Menu</v-list-subheader>
        <v-list-item to="/" prepend-icon="mdi-home">Início</v-list-item>
        <v-list-item to="/clientes" prepend-icon="mdi-account-circle">Clientes</v-list-item>
        <v-list-item to="/produtos" prepend-icon="mdi-package-variant">Produtos</v-list-item>
        <v-list-subheader >Sair</v-list-subheader>
        <v-list-group></v-list-group>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
    export default {
        name: 'Navbar',
    }
</script>