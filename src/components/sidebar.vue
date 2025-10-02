<script setup>
import AccordionButton from "./AccordionButton.vue";
import DeleteAllCoursesButton from "./DeleteAllCoursesButton.vue";
import DeleteCourseButton from "./DeleteCourseButton.vue";
import AddButton from "./AddButton.vue";
import ImportButton from "./ImportButton.vue";
</script>

<template>
  <ul class="side-bar">
    <li class="item">
      <accordion-button title="Department">
        Will be filter options
      </accordion-button>
    </li>
    <li class="item">
      <accordion-button title="Level"> 
        Will be filter options
      </accordion-button>
    </li>
    <li class="item">
      <accordion-button title="Hour">
        Will be filter options
      </accordion-button>
    </li>
    <li class="item">
      <DeleteAllCoursesButton />
    </li>
    <li class="item">
      <DeleteCourseButton course="ACCT-0010"/>
    </li>
    <li class="button-items">
      <AddButton />
      <ImportButton />
    </li>
  </ul>
</template>

<style scoped>
.side-bar {
  color: #000000;
  list-style-type: none;
  width: 20%;
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  top: 0;
  left: 0;
  padding-left: 30px;
  padding-top: 10vh;
}

.item {
  padding-bottom: 20px;
  text-align: left;
}

.button-items {
  margin-top: auto;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
