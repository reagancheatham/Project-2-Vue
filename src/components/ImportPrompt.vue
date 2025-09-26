<template>
  <div>
    <div v-if="showDialog" class="modal-overlay" @click.self="closeDialog">
      <div class="modal">
        <h3>Select a CSV File</h3>
        <input type="file" accept=".csv" @change="importFile" />
        <div class="buttons">
          <button @click="importData">Import</button>
        </div>
        <div class="buttons">
          <button @click="closeDialog">Cancel</button>
        </div>
      </div>
    </div>
  </div>
  <ImportResult
    v-model:show="showImportResult"
    :csvData="csvData"
    :csvHeader="csvHeader"
  />
</template>

<script setup>
import { watch, toRef, ref } from "vue";
import { handleFile } from "../utils/readCSV.js";
import ImportResult from "./ImportResult.vue";

const props = defineProps({
  show: Boolean,
  csv: { type: Array, default: () => [] },
});

const emit = defineEmits(["update:show", "csvData", "csvHeader"]);

const showDialog = toRef(props, "show");

const csvHeader = ref([]);
const csvData = ref([]);
const selectedFile = ref(null);

const showImportResult = ref(false);

function closeDialog() {
  emit("update:show", false);
  csvHeader.value = [];
  csvData.value = [];
}

function importFile(event) {
  const file = event.target.files[0];
  if (file && file.type === "text/csv") {
    selectedFile.value = file;
  } else {
    alert("Select valid CSV");
    selectedFile.value = null;
  }
}

async function importData() {
  try {
    const { headers, data } = await handleFile(selectedFile.value);
    csvHeader.value = headers;
    csvData.value = data;
    if (csvHeader.value != null) {
      showResult();
    }
  } catch (err) {
    console.error("Failed to read CSV:", err);
  }
}

function showResult() {
  emit("update:show", false);
  emit("csvData", csvData.value);
  emit("csvHeader", csvHeader.value);
  showImportResult.value = true;
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
