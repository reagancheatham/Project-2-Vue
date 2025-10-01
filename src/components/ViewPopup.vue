

<script setup>
import { toRef } from "vue";
import DeleteCourseButton from "./DeleteCourseButton.vue";
//import EditButton from "./EditButton.vue";
import courseServices from "../services/courseServices.js";

const props = defineProps({
    show: Boolean,
    course: Object,
});

const emit = defineEmits(['update:show']);

const showDialog = toRef(props, "show");

const closeDialog = () => {
    emit('update:show', false);
};

</script>

<template>
    <div>
        <div v-if="showDialog" class="modal-overlay" @click.self="closeDialog">
            <div class="modal">
                <h3>View</h3>
                <label for="courseName">Course Name</label>
                <div class="field-display">{{ course.name || 'N/A' }}</div>
                <label for="courseDepartment">Course Department</label>
                <div class="field-display">{{ course.department || 'N/A' }}</div>
                <label for="courseNumber">Course Number</label>
                <div class="field-display">{{ course.courseNumber || 'N/A' }}</div>
                <label for="creditHours">Credit Hours</label>
                <div class="field-display">{{ course.hours || 'N/A' }}</div>
                <label for="level">Level</label>
                <div class="field-display">{{ course.level || 'N/A' }}</div>
                <label for="description">Description</label>
                <div class="field-display">{{ course.description || 'N/A' }}</div>
                <div class="buttons">
                    <DeleteCourseButton :course="course.courseNumber" />
                </div>
                <div class="buttons">
                    <EditButton :course="course.courseNumber" />
                </div>
                <div class="buttons">
                    <button @click="closeDialog">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal {
    background: black;
    padding: 1.5rem;
    border-radius: 5px;
    width: 80%;
    color: white;
    max-height: 80%;
    overflow-y: auto;
}
.buttons {
    margin-top: 1rem;
    text-align: right;
}
.field-display {
    background: antiquewhite;
    color: black;
    border: 5px solid black;
    display: block;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 3px;
}
</style>