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
    <div class="button-content" :class="{ open: isOpen }">
      <slot v-if="isOpen">

      </slot>
    </div>
</template>

<style scoped>
.accordion-button {
  color: #46494b;
  font-size: 18px;
  padding: 10px;
  width: 100%;
  text-align: left;
  border-radius: 8px;
  transition: color 0.5s ease, background-color 0.5s ease;
}

.accordion-button:hover {
  color: #000000;
  background-color: #dce2e7;
}

.accordion-button.open {
  background-color: #dce2e7;
  color: #000000;
  font-weight: 600;
  text-align: left;
}

.button-content {
  padding-top: 20px;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.4s ease, opacity 0.4s ease, padding-bottom 0.4s ease;
}

.button-content.open {
  max-height: 500px;
  opacity: 1;
  padding-bottom: 10px;
}
</style>
