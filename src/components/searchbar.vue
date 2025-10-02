<template>
    <div class="search">
        Search:
        <input class="search-bar" type="text" /> 
    </div>
</template>

<style scoped>
.search {
    display: flex;
    flex-direction: row;
    color: #000000;
    font-size: 26px;
    font-weight: 600;
    gap: 30px;
}

.search-bar {
    background: #ffffff;
    border-radius: 20px;
    width: 60vw;
    font-size: 16px;
    font-weight: 400;
    padding-left: 15px;
}
</style>