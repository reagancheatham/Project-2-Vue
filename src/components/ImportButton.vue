<template>
  <div>
    <button @click="showImport = true">Import CSV</button>

    <ImportPrompt
      v-model:show="showImport"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ImportPrompt from './ImportPrompt.vue';

const showImport = ref(false)

</script>

<style scoped>
.buttons {
  margin-top: 1rem;
  text-align: right;
}
</style>
