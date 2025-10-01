<script setup>
import { ref } from "vue";
const props = defineProps(["course"]);
console.log(props.course);


</script>
<template>
    <div class="class-card">
        <h2>{{ props.course.dept }}-{{ props.course.courseNum }}</h2>
        <h1>{{ props.course.name }}</h1>
        <p>Level: {{ props.course.level }} Hour: {{ props.course.hours }}</p>
    </div>
</template>
