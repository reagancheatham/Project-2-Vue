<script setup>
import searchbar from './searchbar.vue';
</script>


<template>
    <div class="row">
        <div class="title">
            ClassDB
        </div>
        <div>
            <searchbar />
        </div>
    </div>
</template>

<style scoped>
    .row {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        padding: 20px;
        padding-left: 45px;
        gap: 10%;
    }

    .title {
        color: #000000;
        font-size: 26px;
        font-weight: 600;
    }
</style>