<template>
   <div class="left-box">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      :default-active="activeIndex"
      @close="handleClose">
      <div v-for="menu in jurisdictions" :key="menu.id">
      <el-menu-item :index="menu.id" v-if="!menu.children">
         <div class="item-box" @click="routerTo(menu.path)">
           <i :class="menu.iconClass"></i>
           <span slot="title">{{menu.title}}</span>
         </div>
      </el-menu-item>
      <el-submenu v-else :index="menu.id">
         <template slot="title">
           <div class="item-box">
            <i :class="menu.iconClass"></i>
            <span slot="title">{{menu.title}}</span>
         </div>
        </template>
         <el-menu-item v-for="item in menu.children"
         @click="routerTo(menu.path)"
         :key="item.id" :index="item.id">{{item.title}}</el-menu-item>
      </el-submenu>
      </div>
    </el-menu>
   </div>
</template>
<script>
import jurisdictions from '@/assets/js/jurisdiction';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      jurisdictions,
    };
  },
  computed: {
    ...mapGetters(['activeIndex']),
  },
  methods: {
    // 点击跳转
    routerTo(path) {
      this.$router.push(path);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped lang="less">
.left-box{
  width:100%;
  height:100%;
  ul{
   &.el-menu{
     li{
       padding-left:0px;
       .item-box{
        span{
          display: inline-block;
          width:40px;
           font-size:15px;
        }
       }
     }
   }
  }
}
[class^=fa] {
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
}
</style>
