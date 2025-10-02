<template>
    <div>
        <div v-if="showDialog" class="modal-overlay" @click.self="closeDialog">
            <div class="modal">
                <h3>WORKING</h3>
                <div class="resultTable">
                    <table v-if="csvData.length">
                        <thead>
                            <tr>
                                <th
                                    v-for="(value, key) in csvData[0]"
                                    :key="key"
                                >
                                    {{ key }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(row, rowIndex) in csvData.slice(1)"
                                :key="rowIndex"
                            >
                                <td
                                    v-for="(cell, cellIndex) in row"
                                    :key="cellIndex"
                                >
                                    {{ cell }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="button">
                    <button @click="addCourses">Add Courses</button>
                </div>
                <div class="button">
                    <button @click="closeDialog">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { toRef, ref } from "vue";
import courseServices from "../services/courseServices.js";
import Course from "../services/course.js";

const props = defineProps({
    show: Boolean,
    csvData: Array,
});

const emit = defineEmits(["update:show"]);

const showDialog = toRef(props, "show");
const csvData = toRef(props, "csvData");

function closeDialog() {
    emit("update:show", false);
    location.reload();
}

async function addCourses() {
    let courses = csvData.value.map(
        (data) =>
            new Course(
                data["Course Number"],
                data["Name"],
                data["Dept"],
                data["Description"],
                data["Level"],
                data["Hours"]
            )
    );

    const packetSize = 500;

    for (let i = 0; i < courses.length; i += packetSize)
    {
        let packet = courses.slice(i, i + packetSize);

        await courseServices.createAll(packet);
        console.log(`Imported packet: ${i}-${i+packetSize}`);
    }

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
.button {
    margin-top: 1rem;
    text-align: right;
    display: float;
}

.resultTable {
    width: 100%;
    border-collapse: collapse;
    max-height: calc(100vh - 300px);
    overflow-y: auto;
}
th,
td {
    border: 1px solid white;
    padding: 0.5rem;
    text-align: left;
}
th {
    background: #333;
}
td {
    background: #222;
}
</style>
