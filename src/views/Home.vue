<template>
    <div class="home-box">
      <el-container style="height:calc(100vh - 60px);">
        <el-header>
            <m-header/>
        </el-header>
        <el-container>
            <el-aside width="180px">
                <m-left/>
            </el-aside>
            <el-container>
              <el-main class="router-view-main">
                <router-view/>
              </el-main>
              <el-footer>
                  <m-footer/>
              </el-footer>
            </el-container>
        </el-container>
        </el-container>
    </div>
</template>
<script>
import MLeft from './layout/Left.vue';
import MHeader from './layout/Header.vue';
import MFooter from './layout/Footer.vue';

export default {
  components: {
    MLeft,
    MHeader,
    MFooter,
  },
};
</script>
<style scoped lang="less">
.home-box{
  height:calc(100vh);
  overflow:hidden;
}
.el-header {
    color: #333;
    background:#fff;
    box-shadow:0 2px 6px 0 hsla(0,0%,60.8%,.34);
    box-sizing: border-box;
  }

  .el-aside {
    height:calc(100vh - 60px);
    background:#fff;
    box-shadow:2px 5px 6px 0 hsla(0,0%,60.8%,.34);
    box-sizing: border-box;
    overflow: hidden;
  }

  body > .el-container {
    margin-bottom: 40px;
    overflow:auto;
  }
  .el-footer{
      height:60px;
      line-height: 60px;
      text-align: center;
      font-size: 14px;
      box-shadow:0 -2px -6px 0 hsla(0,0%,60.8%,.34);
      margin-left:2px;
      position: fixed;
      right:0px;
      bottom: 0px;
      width:calc(100vw - 180px);
  }
   .router-view-main{
    overflow-y:auto;
    background:#fff;
    margin-left:10px;
  }
  .breadcrumb{
    margin: 15px 8px;
  }
</style>
