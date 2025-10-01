<template>
    <div>
        <div v-if="showDialog" class="modal-overlay" @click.self="closeDialog">
            <div class="modal">
                <h3>Add</h3>
                <label for="name">Course Name</label>
                <input v-model="name" class="requiredInput" />
                <label for="department">Course Department</label>
                <input v-model="department" class="requiredInput" />
                <label for="number">Course Number</label>
                <input v-model="number" class="requiredInput" />
                <label for="hours">Credit Hours</label>
                <input v-model.number="hours" :min=0 :max=4 type="number" class="requiredInput" />
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
  course: {
    type: String,
    default: "idk....."
  }
});

const name = ref("");
const department = ref("");
const number = ref("");
const hours = ref("");
const level = ref("");
const description = ref("");

function generateTextFields(courseNumber) {
    const course = courseServices.find(courseNumber);
    if (course) {
        name.value = course.name;
        department.value = course.department;
        number.value = course.courseNumber;
        hours.value = course.hours;
        level.value = course.level;
        description.value = course.description;
    }
    console.log(course);
}
generateTextFields(props.course);

const emit = defineEmits(["update:show"]);

const showDialog = toRef(props, "show");

watch(department, (deptNew) => {
    const [, numPart = ""] = number.value.split("-");
    if (deptNew !== undefined && deptNew !== "") {
        number.value = `${deptNew}-${numPart}`;
        console.log(numPart);
    } else {
        number.value = `-${numPart}`;
    }
});

function closeDialog() {
    name.value = "";
    department.value = "";
    number.value = "";
    emit("update:show", false);
}

function editClass() {
    const course = new Course(
        number.value,
        name.value,
        department.value,
        description.value,
        level.value,
        hours.value
    );
    console.log(courseServices.update(props.course, course));
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
