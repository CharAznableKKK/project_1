<template>
    <div class="back">
        <router-link to="/Page">
            返回
        </router-link>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@function conversion($num) {
    //换算rem适配pc端
    @return $num/192;
}

.back {

    height: conversion(50)+rem;
    width: conversion(50)+rem;
    background-color: red;
}
</style>