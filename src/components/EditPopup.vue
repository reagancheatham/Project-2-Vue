<template>
    <div>
        <div v-if="show" class="modal-overlay" @click.self="closeDialog">
            <div class="modal">
                <h3>Edit</h3>
                <v-text-field
                    v-model="name"
                    class="requiredInput"
                    label="Course Name"
                />
                <v-autocomplete
                    v-model="department"
                    :items="departments"
                    label="Select a department"
                    clearable
                ></v-autocomplete>
                <v-text-field
                    v-model="number"
                    class="requiredInput"
                    label="Number"
                    @input="changeNumber"
                />
                <v-text-field
                    v-model.number="hours"
                    :min="0"
                    :max="4"
                    type="number"
                    class="requiredInput"
                    label="Credit Hours"
                />
                <v-text-field
                    v-model.number="level"
                    :min="0"
                    :max="4"
                    type="number"
                    class="requiredInput"
                    label="Level"
                />
                <v-text-field
                    v-model="description"
                    class="requiredInput"
                    label="Description"
                />
                <div class="buttons">
                    <button @click="editClass">Save</button>
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
    type: String
  }
});
const departments = [
    "ACCT",
    "ARSC",
    "ARTS",
    "BIBL",
    "BIOL",
    "BOTN",
    "BUSA",
    "CENG",
    "CHDV",
    "CHEM",
    "CHNS",
    "CHST",
    "CLTR",
    "CMIN",
    "CMSC",
    "COMM",
    "COMP",
    "CRMJ",
    "ECED",
    "ECON",
    "EDUC",
    "ELEC",
    "ELEM",
    "ENGL",
    "ENGR",
    "ENVS",
    "ESLI",
    "EXSC",
    "FINC",
    "FINE",
    "FMIN",
    "FMLF",
    "FMST",
    "FRNC",
    "GEOG",
    "GERM",
    "GMIN",
    "GNSC",
    "GRAD",
    "GREK",
    "HBRW",
    "HIST",
    "HMBH",
    "HMEC",
    "HONR",
    "HRMT",
    "HSMT",
    "HUMN",
    "INDS",
    "INFO",
    "INTL",
    "JAPN",
    "JOUR",
    "LATN",
    "LCIA",
    "LCIE",
    "LCIH",
    "LCIL",
    "LCIP",
    "LDSH",
    "LECT",
    "LIBS",
    "LING",
    "MATH",
    "MDLA",
    "MECH",
    "MEDT",
    "MGMT",
    "MISS",
    "MKTG",
    "MLED",
    "MLSC",
    "MLSP",
    "MSCM",
    "MUSC",
    "NESP",
    "NPRO",
    "NTXT",
    "NURS",
    "NWTS",
    "OLTS",
    "OMGT",
    "ORCM",
    "OSEC",
    "OSLP",
    "PHED",
    "PHIL",
    "PHYS",
    "POLS",
    "PORT",
    "PSYC",
    "RLED",
    "RUSS",
    "SCIE",
    "SDEV",
    "SNUR",
    "SOCI",
    "SOSC",
    "SOWK",
    "SPAN",
    "SPED",
    "SPMG",
    "SPWR",
    "THAI",
    "THEO",
    "YTMN",
    "ZOOL",
];
const department = ref("");
const name = ref("");
const number = ref("");
const hours = ref("");
const level = ref("");
const description = ref("");

async function generateTextFields(courseNumber) {
    const course = await courseServices.find(courseNumber);
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

function changeNumber() {
    const [, numPart = ""] = number.value.split("-");
    if (department.value !== undefined && department.value !== "") {
        number.value = `${department.value}-${numPart}`;
        console.log(numPart);
    } else {
        number.value = `-${numPart}`;
    }
}
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
    console.log(course);
    courseServices.update(props.course, course);
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
</style>
