<script setup>
import { ref } from "vue";

const props = defineProps(["course"]);
const showViewPopup = ref(false);

console.log(props.course);

const handleClick = () => {
    showViewPopup.value = true;
};
</script>
<template>
    <div class="class-card" @click="handleClick">
        <h2>{{ props.course.courseNumber }}</h2>
        <h1>{{ props.course.name }}</h1>
        <p>Level: {{ props.course.level }} Hour: {{ props.course.hours }}</p>
    </div>
</template>

<style scoped>
.class-card {
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>
