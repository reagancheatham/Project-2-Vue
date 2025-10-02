<template>
  <div>
    <v-btn variant="tonal" @click="showImportPrompt = true">
      <v-icon>
        mdi-import
      </v-icon>
    </v-btn>
    <!-- <button @click="showImportPrompt = true">Import CSV</button> -->

    <ImportPrompt
      v-model:show="showImportPrompt"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ImportPrompt from './ImportPrompt.vue';

const showImportPrompt = ref(false);

</script>

<style scoped>
.buttons {
  margin-top: 1rem;
  text-align: right;
}

.v-btn {
  width: 150px !important;
  border-radius: 20px;
  border: 2px solid #000000;
  color: #eef2f5;
}

.v-icon {
  color: #000000;
}
</style>
