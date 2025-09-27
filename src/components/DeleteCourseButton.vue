<template>
  <div>
    <button @click="showDeleteCoursePrompt = true">Delete</button>

    <DeleteCoursePrompt
      v-model:show="showDeleteCoursePrompt"
      :course="course"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DeleteCoursePrompt from './DeleteCoursePrompt.vue';

const showDeleteCoursePrompt = ref(false)

const props = defineProps({
  course: {
    type: String,
    default: "idk....."
  }
});

</script>

<style scoped>
.buttons {
  margin-top: 1rem;
  text-align: right;
}
</style>