<script setup>
import AccordionButton from "./AccordionButton.vue";
import DeleteAllCoursesButton from "./DeleteAllCoursesButton.vue";
import DeleteCourseButton from "./DeleteCourseButton.vue";
import AddButton from "./AddButton.vue";
import ImportButton from "./ImportButton.vue";
</script>

<template>
  <ul class="side-bar">
    <li class="title">CourseDB</li>
    <li class="item">
      <accordion-button title="Department"> 
        <div class="button-content">
            test
        </div>
      </accordion-button>
    </li>
    <li class="item">
      <accordion-button title="Level"> </accordion-button>
    </li>
    <li class="item">
      <accordion-button title="Hour"> </accordion-button>
    </li>
    <li class="item">
      <DeleteAllCoursesButton />
    </li>
    <li class="item">
      <DeleteCourseButton course="ACCT-0010"/>
    </li>
    <li class="item>
      <add-button />
    </li>
    <li class="item">
      <import-button />
    </li>
  </ul>
</template>

<style scoped>
.side-bar {
    color: #000000;
    border-right: 1px solid #000000;
    list-style-type: none;
    width: 18%;
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
}

.title {
    padding: 4px;
    font-size: 28px;
    font-weight: 600;
    text-align: left;
}

.item {
    padding: 4px;
    text-align: left;
}

.button-content {
    text-align: center;
    /* TODO: this will be for however we do filters */
}
</style>
