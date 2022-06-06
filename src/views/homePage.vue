<template>
    <div>
        <header>
            <h1>实时检测与调控平台</h1>
        </header>
    </div>
    <!-- 大容器 -->
    <section class="container">
        <!-- 左容器 -->
        <section class="itemLeft">
            <div class="face"></div>
            <div class="imformation"></div>

        </section>
        <!-- 中容器 -->
        <section class="itemCenter">
            <div class="map"></div>
            <div class="eeg_sign"></div>

        </section>
        <!-- 右容器 -->
        <section class="itemRight">
            <div class="duration"></div>
            <div class="musiclist">
                <div class="turn">
                    <router-link to="/music">
                        跳转
                    </router-link>
                </div>

            </div>
            <div class="analysis">
                <div class="turn">
                    <router-link to="/analysis">
                        跳转
                    </router-link>
                </div>
            </div>
            <div class="history">
                <div class="turn">
                    <router-link to="/history">
                        跳转
                    </router-link>
                </div>
            </div>

        </section>

    </section>
</template>

<script>

export default {
    components: {},

    methods: {



    }
}
</script>

<style scoped lang="scss">
@function conversion($num) {
    //换算rem适配pc端
    @return $num/192;
}

header {
    height: conversion(91)+rem;
    width: 100%;
    background-image: url(~@/assets/head_bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

h1 {
    font-size: conversion(48)+rem;
    font-family: "Adobe 黑体 Std";
    color: #fff;
    text-align: center;
    line-height: conversion(80)+rem;
}

.container {
    // 宽度
    min-width: conversion(960)+rem;
    width: conversion(1910)+rem;
    height: conversion(980)+rem;
    margin: 0 auto;
    padding: conversion(35)+rem;
    padding-bottom: 0;
    background-color: gray;
    display: flex;
}

.itemLeft {
    flex: 2;
    height: conversion(922)+rem;
    background-color: blue;

}

.itemRight {
    flex: 3;
    height: conversion(922)+rem;
    background-color: blue;

}

.itemCenter {
    flex: 5;
    height: conversion(922)+rem;
    margin: 0 conversion(35)+rem;
    background-color: blue;
}

.face {
    height: conversion(440)+rem;
    width: 85%;
    background-color: pink;
    margin: 0 auto;
    margin-bottom: conversion(58)+rem;
}

.imformation {
    height: conversion(424)+rem;
    width: 100%;
    background-color: pink;
    margin: 0 auto;
}

.map {
    height: conversion(516)+rem;
    background-color: pink;
    width: 100%;
    margin: 0 auto;
    margin-bottom: conversion(58)+rem;
}

.eeg_sign {
    height: conversion(348)+rem;
    background-color: pink;
    width: 100%;
    margin: 0 auto;
}

.duration {
    height: conversion(62)+rem;
    background-color: pink;
    width: 100%;
    margin: 0 auto;
    margin-bottom: conversion(20)+rem;
}

.musiclist {
    height: conversion(110)+rem;
    background-color: pink;
    width: 100%;
    margin: 0 auto;
    margin-bottom: conversion(20)+rem;
}

.analysis {
    height: conversion(336)+rem;
    background-color: pink;
    width: 100%;
    margin: 0 auto;
    margin-bottom: conversion(20)+rem;
}

.history {
    height: conversion(354)+rem;
    background-color: pink;
    width: 100%;
    margin: 0 auto;
    margin-bottom: conversion(20)+rem;
}

.turn {

    height: conversion(50)+rem;
    width: conversion(50)+rem;
    background-color: red;
}
</style>