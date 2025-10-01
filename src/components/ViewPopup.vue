

<script setup>
import { ref, watch } from "vue";
import DeleteCourseButton from "./DeleteCourseButton.vue";
import courseServices from "../services/courseServices.js";

const props = defineProps({
    show: Boolean,
    course: Object,
});

const emit = defineEmits(['update:show']);

const showDialog = ref(false);

// Watch for changes to the show prop
watch(() => props.show, (newVal) => {
    showDialog.value = newVal;
});

const closeDialog = () => {
    showDialog.value = false;
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
                <h3>Course Details</h3>
                <p><strong>Course Name:</strong> {{ course?.name || 'N/A' }}</p>
                <p><strong>Course Department:</strong> {{ course?.department || 'N/A' }}</p>
                <p><strong>Course Number:</strong> {{ course?.courseNumber || 'N/A' }}</p>
                <p><strong>Credit Hours:</strong> {{ course?.hours || 'N/A' }}</p>
                <p><strong>Level:</strong> {{ course?.level || 'N/A' }}</p>
                <p><strong>Description:</strong> {{ course?.description || 'N/A' }}</p>
                <div class="buttons">
                    <button @click="closeDialog">Close</button>
                    <DeleteCourseButton :course="course.courseNumber" />
                    <button @click="editClass">Edit</button>
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
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.modal h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #333;
}

.modal p {
    margin: 0.5rem 0;
    line-height: 1.5;
}

.buttons {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
}

.buttons button {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    background: white;
}

.buttons button:hover {
    background: #f5f5f5;
}
</style>