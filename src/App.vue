<script setup>
import sidebar from './components/sidebar.vue';
import topbar from './components/topbar.vue';
import ListView from "./components/ListView.vue";
</script>


<template>
  <topbar />
  <sidebar />
  <ListView />
</template>

<style>
.class-list {
    margin-left: 18%;
    margin-top: 5%;
    padding: 10px;
    display: grid;
    gap: 10px;
}
</style>