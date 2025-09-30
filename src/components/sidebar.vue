<script setup>
import AccordionButton from "./AccordionButton.vue";
</script>

<template>
  <ul class="side-bar">
    <li class="item">
      <accordion-button title="Department"> 
        <div class="button-content">
            
        </div>
      </accordion-button>
    </li>
    <li class="item">
      <accordion-button title="Level"> </accordion-button>
    </li>
    <li class="item">
      <accordion-button title="Hour"> </accordion-button>
    </li>
  </ul>
</template>

<style scoped>
.side-bar {
  color: #000000;
  list-style-type: none;
  width: 20%;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  padding-left: 30px;
  padding-top: 10vh;
}

.item {
  padding-bottom: 4px;
  text-align: left;
}

.button-content {
    text-align: center;
    /* TODO: this will be for however we do filters */
}
</style>
