<script setup>
import NavBar from "./components/NavBar.vue";
import courseService from "./services/courseServices";
import CourseDisplay from "./components/CourseDisplay.vue";

let courses = [];
courseService.getAll()
.then(response => {
  console.log(JSON.stringify(response));
  courses = response;
  console.log(courses);
})
.catch(err => console.log(err));
</script>

<template>
    <NavBar />
    <div class="grid-container">
      <CourseDisplay
        v-for="course in courses"
        :key="course.courseNumber"
        :course="course"
        @deletedCourse="getCourses()"
      />
    </div>
</template>
