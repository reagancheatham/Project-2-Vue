<template>
  <div class="grid-container class-list">
    <!-- Show search info if searching -->
    <div v-if="searchTerm" class="search-info">
      <p>
        {{ filteredCourses.length }} course{{
          filteredCourses.length !== 1 ? "s" : ""
        }}
        found for "{{ searchTerm }}"
      </p>
    </div>

    <CourseDisplay
      v-for="course in filteredCourses"
      :key="course.courseNumber"
      :course="course"
      @deletedCourse="getCourses()"
    />

    <!-- No results message -->
    <div v-if="filteredCourses.length === 0 && searchTerm" class="no-results">
      <h3>No courses found for "{{ searchTerm }}"</h3>
      <p>Try searching with a different course name.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import courseService from "../services/courseServices";
import CourseDisplay from "./CourseDisplay.vue";

const courses = ref([]);
const searchTerm = ref("");

// Handle search from parent
const handleSearch = (term) => {
  searchTerm.value = term;
};

// Computed property for filtered courses (search by course name only)
const filteredCourses = computed(() => {
  if (!searchTerm.value) {
    return courses.value;
  }

  const term = searchTerm.value.toLowerCase();
  return courses.value.filter((course) =>
    course.name.toLowerCase().includes(term)
  );
});

function getCourses() {
  courseService
    .getAll()
    .then((response) => {
      courses.value = response;
    })
    .catch((err) => console.log(err));
}

// Expose methods to parent component
defineExpose({
  handleSearch,
});

getCourses();
</script>

<style></style>
