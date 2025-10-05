<script setup>
import AccordionButton from "./AccordionButton.vue";
import DeleteAllCoursesButton from "./DeleteAllCoursesButton.vue";
import AddButton from "./AddButton.vue";
import ImportButton from "./ImportButton.vue";

import { ref } from "vue";
import { departments } from "../data/departments.js";
import { levels } from "../data/levels.js";
import { hours } from "../data/hours.js";
const selectedDeptCodes = ref([]);
const selectedLevels = ref([]);
const selectedHours = ref([]);
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
        <v-autocomplete
          variant="outlined"
          clearable
          v-model="selectedLevels"
          :items="levels"
          label="Select Level"
          multiple
          :chips="false"
        > 
          <template v-slot:selection="{ index }"> 
            <span v-if="index === 0"> {{ selectedLevels.length }} selected </span>
          </template>
        </v-autocomplete>
        <div class="chip-list">
          <v-chip v-for="level in selectedLevels" :key="level" closable @click:close="selectedLevels.splice(selectedLevels.indexOf(level), 1)"> 
            {{  level  }}  
          </v-chip>
        </div>
      </accordion-button>
    </li>
    <li class="item">
      <accordion-button title="Hour">
        <v-autocomplete
          variant="outlined"
          clearable
          v-model="selectedHours"
          :items="hours"
          label="Select Hour"
          multiple
          :chips="false"
        > 
          <template v-slot:selection="{ index }"> 
            <span v-if="index === 0"> {{ selectedHours.length }} selected </span>
          </template>
        </v-autocomplete>
        <div class="chip-list">
          <v-chip v-for="hour in selectedHours" :key="hour" closable @click:close="selectedHours.splice(selectedHours.indexOf(hour), 1)"> 
            {{  hour  }}  
          </v-chip>
        </div>
      </accordion-button>
    </li>
    <li class="item">
      <accordion-button title="Delete All Courses">
        <DeleteAllCoursesButton />
      </accordion-button>
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
