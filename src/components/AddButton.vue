<template>
  <div>
    <button @click="showAddPopup = true">Import CSV</button>

    <AddPopup
      v-model:show="showAddPopup"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AddPopup from './AddPopup.vue';

const showAddPopup = ref(false)

</script>

<style scoped>
.buttons {
  margin-top: 1rem;
  text-align: right;
}
</style>