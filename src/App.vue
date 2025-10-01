<script setup>
import NavBar from "./components/NavBar.vue";
import courseService from "./services/courseServices";

courseService.getAll()
.then(response => console.log(JSON.stringify(response)))
.catch(err => console.log(err));
</script>

<template>
    <NavBar />
</template>
