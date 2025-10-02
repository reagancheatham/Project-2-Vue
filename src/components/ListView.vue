<template>
    <div class="grid-container class-list">
        <CourseDisplay
            v-for="course in courses"
            :key="course.courseNumber"
            :course="course"
            @deletedCourse="getCourses()"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import courseService from "../services/courseServices";
import CourseDisplay from "./CourseDisplay.vue";
let courses = ref([]);

function loadCourses() {
    courseService
    .getAll()
    .then((response) => {
        courses.value = response;
    })
    .catch((err) => console.log(err));
}
loadCourses();
</script>

<style></style>
