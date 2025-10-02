

<script setup>
import { toRef } from "vue";
import DeleteCourseButton from "./DeleteCourseButton.vue";
import EditButton from "./EditButton.vue";
import courseServices from "../services/courseServices.js";

const props = defineProps({
    show: Boolean,
    course: Object,
});

const courseNumber = props.course.courseNumber;

const emit = defineEmits(['update:show']);

const showDialog = toRef(props, "show");

const closeDialog = () => {
    emit('update:show', false);
};

const editClass = () => {
    // Edit functionality would go here
    console.log('Edit course:', props.course);
    closeDialog();
};
</script>

<template>
    <div>
        <div v-if="showDialog" class="modal-overlay" @click.self="closeDialog">
            <div class="modal">
                <h3>View Course</h3>
                <v-text-field
                    :model-value="course.name || 'N/A'"
                    label="Course Name"
                    readonly
                />
                <v-text-field
                    :model-value="course.department || 'N/A'"
                    label="Department"
                    readonly
                />
                <v-text-field
                    :model-value="course.courseNumber || 'N/A'"
                    label="Course Number"
                    readonly
                />
                <v-text-field
                    :model-value="course.hours || 'N/A'"
                    label="Credit Hours"
                    readonly
                />
                <v-text-field
                    :model-value="course.level || 'N/A'"
                    label="Level"
                    readonly
                />
                <v-text-field
                    :model-value="course.description || 'N/A'"
                    label="Description"
                    readonly
                />
                <div class="buttons">
                    <DeleteCourseButton :course="courseNumber" />
                </div>
                <div class="buttons">
                    <EditButton :course="courseNumber" />
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
</style>