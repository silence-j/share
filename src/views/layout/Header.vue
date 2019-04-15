<template>
  <div id="header"><p class="h-title">我是头部</p></div>
</template>

<style scoped lang="less">
#header{
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  z-index: 101;
  top: 0;
  background: rgba(38,57,70,1);
  .h-title{
    text-align:center;
    line-height: 60px;
    color:#fff;
  }
}
</style>
