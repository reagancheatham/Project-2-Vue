<template>
  <div>
    <!-- <button @click="showAddPopup = true">Add Course</button> -->
     <v-btn variant="tonal" @click="showAddPopup = true">
      <v-icon>
        mdi-plus
      </v-icon>
     </v-btn>

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

.v-btn {
  width: 150px !important;
  border-radius: 20px;
}
</style>