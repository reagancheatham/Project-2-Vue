<script setup>
import { ref } from "vue";

defineProps({
  title: String,
});

const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <button
    class="accordion-button"
    v-on:click="toggle"
    :class="{ open: isOpen }"
  >
    {{ title }}
  </button>
  <slot v-if="isOpen"> </slot>
</template>

<style scoped>
.accordion-button {
  color: #000000;
}

.accordion-button.open {
  background-color: grey;
  color: #000000;
}
</style>
