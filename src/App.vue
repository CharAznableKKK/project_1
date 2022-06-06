<template>
  <router-view/>
</template>

<style lang="less">
html,body{
  width:100%;
  overflow-x:hidden;
}
body{
    // 让背景图适应整个屏幕（填满） 哈哈牛逼
    background-image: url("~@/assets/bg.jpg");
    background-size: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;  /*关键*/
    background-position: center;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    //min-width: 1536px;
    z-index: -10;
    zoom:1;
}
*{
  margin:0px;
  padding:0px;
  box-sizing: border-box;
}
</style>
