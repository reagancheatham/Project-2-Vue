<script setup>
import AccordionButton from "./AccordionButton.vue";
import DeleteAllCoursesButton from "./DeleteAllCoursesButton.vue";
import DeleteCourseButton from "./DeleteCourseButton.vue";
import AddButton from "./AddButton.vue";
import ImportButton from "./ImportButton.vue";
import EditButton from "./EditButton.vue";

import { ref } from "vue";
import { departments } from "../data/departments.js";
const selectedDeptCodes = ref([]);
const selectedLevels = ref([]);
const selcetdHours = ref([]);
</script>

<template>
  <ul class="side-bar">
    <li class="item">
      <accordion-button title="Department">
        <v-autocomplete
          variant="outlined"
          clearable
          v-model="selectedDeptCodes"
          :items="departments"
          label="Select Department"
          multiple
          :chips="false"
        > 
          <template v-slot:selection="{ index }"> 
            <span v-if="index === 0"> {{ selectedDeptCodes.length }} selected </span>
          </template>
        </v-autocomplete>
        <div class="chip-list">
          <v-chip v-for="dept in selectedDeptCodes" :key="dept" closable @click:close="selectedDeptCodes.splice(selectedDeptCodes.indexOf(dept), 1)"> 
            {{  dept  }}  
          </v-chip>
        </div>
      </accordion-button>
    </li>
    <li class="item">
      <accordion-button title="Level">
        <!-- ADD LEVELS.JS -->
        <v-autocomplete
          variant="outlined"
          clearable
          v-model="selectedLevels"
          :items="levels"
          label="Select Department"
          multiple
          :chips="false"
        > 
          <template v-slot:selection="{ index }"> 
            <span v-if="index === 0"> {{ selectedLevels.length }} selected </span>
          </template>
        </v-autocomplete>
        <div class="chip-list">
          <v-chip v-for="level in selectedLevels" :key="level" closable @click:close="selectedLevels.splice(selectedLevels.indexOf(level), 1)"> 
            {{  dept  }}  
          </v-chip>
        </div>
      </accordion-button>
    </li>
    <li class="item">
      <accordion-button title="Hour"> Will be filter options </accordion-button>
    </li>
    <li class="item">
      <DeleteAllCoursesButton />
    </li>
    <li class="item">
      <DeleteCourseButton course="ACCT-0010" />
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
  text-align: left;
}

.button-items {
  margin-top: auto;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.v-autocomplete {
  width: 90%;
  padding-left: 10%;
}

.chip-list {
  width: 90%;
  padding-left: 10%;
}

.v-chip{
  margin: 5px;
}
</style>
