<script setup>
import { ref } from "vue";
import sidebar from './components/sidebar.vue';
import topbar from './components/topbar.vue';
import courseService from "./services/courseServices";
import CourseDisplay from "./components/CourseDisplay.vue";

let courses = ref([]);
courseService.getAll()
.then(response => {
  console.log(JSON.stringify(response));
  courses.value = response;
  console.log(courses.value);
})
.catch(err => console.log(err));

</script>


<template>
  <topbar />
  <sidebar />
    <div class="grid-container class-list">
      <CourseDisplay
        v-for="course in courses"
        :key="course.courseNumber"
        :course="course"
        @deletedCourse="getCourses()"
      />
    </div>
</template>

<style>
.class-list {
  margin-left: 18%;
  padding: 10px;
  display: grid;
  gap: 10px;
}
</style>