<script setup>
import { ref } from 'vue';
import sidebar from './components/sidebar.vue';
import topbar from './components/topbar.vue';
import ListView from "./components/ListView.vue";

const listViewRef = ref(null);

const handleSearch = (searchTerm) => {
    if (listViewRef.value) {
        listViewRef.value.handleSearch(searchTerm);
    }
};
</script>

<template>
  <topbar @search="handleSearch" />
  <sidebar />
  <ListView ref="listViewRef" />
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