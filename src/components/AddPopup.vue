<template>
    <div>
        <div v-if="showDialog" class="modal-overlay" @click.self="closeDialog">
            <div class="modal">
                <h3>Add</h3>
                <label for="courseName">Course Name</label>
                <input v-model="courseName" class="requiredInput" />
                <label for="courseDepartment">Course Department</label>
                <input v-model="courseDepartment" class="requiredInput" />
                <label for="courseNumber">Course Number</label>
                <input v-model="courseNumber" class="requiredInput" />
                <label for="creditHours">Credit Hours</label>
                <input v-model.number="creditHours" :min=0 :max=4 type="number" class="requiredInput" />
                <label for="level">Level</label>
                <input v-model.number="level" :min=0 :max=4 type="number" class="requiredInput" />
                <label for="description">Description</label>
                <input v-model="description" class="requiredInput" />
                <div class="buttons">
                    <button @click="addClass">Add</button>
                </div>
                <div class="buttons">
                    <button @click="closeDialog">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch, toRef, ref } from "vue";
import Course from "../services/course.js";
import courseServices from "../services/courseServices.js";

const props = defineProps({
    show: Boolean,
});

const courseName = ref("");
const courseDepartment = ref("");
const courseNumber = ref("");
const creditHours = ref("");
const level = ref("");
const description = ref("");

const emit = defineEmits(["update:show"]);

const showDialog = toRef(props, "show");

watch(courseDepartment, (deptNew) => {
    const [, numPart = ""] = courseNumber.value.split("-");
    if (deptNew !== undefined && deptNew !== "") {
        courseNumber.value = `${deptNew}-${numPart}`;
        console.log(numPart);
    } else {
        courseNumber.value = `-${numPart}`;
    }
});

function closeDialog() {
    courseName.value = "";
    courseDepartment.value = "";
    courseNumber.value = "";
    emit("update:show", false);
}

function addClass() {
    const course = new Course(
        courseNumber.value,
        courseName.value,
        courseDepartment.value,
        description.value,
        level.value,
        creditHours.value
    );
    courseServices.create(course);
    console.log(course);
    closeDialog();
}
</script>

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
.requiredInput {
    background: antiquewhite;
    color: black;
    border: 5px solid black;
    display: block;
}
</style>
