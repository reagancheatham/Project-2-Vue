<template>
  <div>
    <button @click="showImportPrompt = true">Import CSV</button>

    <ImportPrompt
      v-model:show="showImportPrompt"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ImportPrompt from './ImportPrompt.vue';

const showImportPrompt = ref(false)

</script>

<style scoped>
.buttons {
  margin-top: 1rem;
  text-align: right;
}
</style>
