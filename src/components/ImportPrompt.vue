<template>
  <div>
    <div v-if="showDialog" class="modal-overlay" @click.self="closeDialog">
      <div class="modal">
        <h3>Select a CSV File</h3>
        <input type="file" accept=".csv" @change="handleFile" />
        <div class="buttons">
            <button @click="importData">Import</button>
        </div>
        <div class="buttons">
          <button @click="closeDialog">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, toRef, ref } from 'vue'
import { parseCSV } from '../utils/parseCSV.js'

const props = defineProps({
  show: Boolean,
})

const emit = defineEmits(['update:show'])

const showDialog = toRef(props, 'show')

const csvHeaders = ref([])
const csvData = ref([])

function closeDialog() {
  emit('update:show', false) 
  csvHeaders.value = []
  csvData.value = []
}

function handleFile(event) {
  const file = event.target.files[0]
  if (file && file.type === 'text/csv') {
    const reader = new FileReader()
    reader.onload = (e) => {
      const rawText = e.target.result
      const { headers, data } = parseCSV(rawText)
      csvHeaders.value = headers
      csvData.value = data
    }
    reader.readAsText(file)
  } else {
    alert('Please select a valid CSV file.')
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0,0,0,0.5);
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
