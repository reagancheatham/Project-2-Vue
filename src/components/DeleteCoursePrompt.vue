<template>
  <div>
    <div v-if="showDialog" class="modal-overlay" @click.self="closeDialog">
      <div class="modal">
        <h3>Are you sure you wish to delete course {{course}}</h3>
        <div class="buttons">
          <button @click="confirmDelete">Delete</button>
        </div>
        <div class="buttons">
          <button @click="closeDialog">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRef } from "vue";
import courseServices from "../services/courseServices.js";

const props = defineProps({
  show: Boolean,
  course: {
    type: String,
    default: "idk....."
  }
});

const emit = defineEmits(["update:show", "course"]);

const showDialog = toRef(props, "show");


function closeDialog() {
  emit("update:show")
  location.reload();
}

function confirmDelete() {
    courseServices.delete(props.course)
    closeDialog()
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