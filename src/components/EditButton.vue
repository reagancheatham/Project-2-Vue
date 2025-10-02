<template>
    <div>
        <button @click="showEditPopup = true">Edit Course</button>

        <EditPopup v-model:show="showEditPopup" :courseNumber="props.course" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import EditPopup from "./EditPopup.vue";

const showEditPopup = ref(false);

const props = defineProps({
    course: {
        type: String,
        default: "idk.....",
    },
});
</script>

<style scoped>
.buttons {
    margin-top: 1rem;
    text-align: right;
}
</style>
