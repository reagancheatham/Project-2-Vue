<script setup>
import NavBar from "./components/NavBar.vue";
import courseService from "./services/courseServices";

courseService.getAll()
.then(response => console.log(JSON.stringify(response)));
</script>

<template>
    <NavBar />
</template>
