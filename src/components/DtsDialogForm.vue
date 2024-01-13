<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon="mdi-plus" color="primary" class="float-end" />
      </template>
      <v-card>
        <v-card-title class="ma-0">
          <span class="text-h5 font-weight-bold">{{ title }}</span>
          <v-btn
            class="float-end"
            icon="mdi-window-close"
            color="white"
            size="x-small"
            elevation="0"
            @click="dialog = false"
          />
        </v-card-title>
        <v-card-text>
          <slot></slot>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="secondaryText"
            color="grey-lighten-1"
            variant="text"
            @click="$emit('secondaryClick', $event)"
          >
          {{ secondaryText }}
          </v-btn>
          <v-btn
            v-if="primaryText"
            color="primary"
            variant="outlined"
            @click="$emit('primaryClick', $event)"
          >
            {{ primaryText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>

  export default {
    props: ['title', 'primaryText', 'secondaryText'],
    emits: ['primaryClick', 'secondaryClick', 'close', 'validate'],
    data: () => ({
      dialog: false
    }),
    components: {

    },
  }
</script>