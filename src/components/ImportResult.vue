<template>
    <div>
        <div v-if="showDialog" class="modal-overlay" @click.self="closeDialog">
            <div class="modal">
                <h3>Select a CSV File</h3>
                <input type="file" accept=".csv" @change="handleFile" />
                <div class="buttons">
                    <button @click="closeDialog">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { toRef, ref } from "vue";

const props = defineProps({
    show: Boolean,
});

const emit = defineEmits(["update:show"]);

const showDialog = toRef(props, "show");

function closeDialog() {
    emit("update:show", false);
    csvHeaders.value = [];
    csvData.value = [];
}
</script>
<style scope>
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
    width: 400px;
    color: white;
    max-height: 80vh;
    overflow-y: auto;
}
.buttons {
    margin-top: 1rem;
    text-align: right;
}
</style>
