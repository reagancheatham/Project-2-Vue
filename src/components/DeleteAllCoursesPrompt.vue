<template>
  <div>
    <div v-if="showDialog" class="modal-overlay" @click.self="closeDialog">
      <div class="modal">
        <h3>Are you sure you wish to delete all courses</h3>
        <input v-model="userInput" type="text" placeholder="CONFIRM" />
        <div class="buttons">
          <button :disabled="userInput !== 'CONFIRM'" @click="confirmDelete">
            Delete
          </button>
        </div>
        <div class="buttons">
          <button @click="closeDialog">Cancel</button>
        </div>
        <div class="error" v-if="error">
          <p>Incorrect. Please spell "CONFIRM"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRef, ref } from "vue";
import { deleteAllCourses } from "../utils/deleteUtils.js";

const props = defineProps({
  show: Boolean,
});

const emit = defineEmits(["update:show"]);

const showDialog = toRef(props, "show");

const userInput = ref("")
let error = false;

function closeDialog() {
  emit("update:show");
}


function confirmDelete() {
  if (userInput.value === "CONFIRM") {
    deleteAllCourses();
    closeDialog();
    return
  }
  error=true;
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
