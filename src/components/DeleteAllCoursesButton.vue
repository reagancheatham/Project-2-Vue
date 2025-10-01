<template>
  <div>
    <button @click="showDeleteAllCoursesPrompt = true">Delete All Courses</button>

    <DeleteAllCoursesPrompt
      v-model:show="showDeleteAllCoursesPrompt"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DeleteAllCoursesPrompt from './DeleteAllCoursesPrompt.vue';

const showDeleteAllCoursesPrompt = ref(false)


</script>

<style scoped>
.buttons {
  margin-top: 1rem;
  text-align: right;
}
</style>