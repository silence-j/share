<template>
<div class="work-box">
   <el-form :model="searchForm">
      <div class="search-form_box clearfix length-box">
        <div class="search-form_item">
          <el-input v-model="searchForm.number" placeholder="请输入工单号"></el-input>
        </div>
        <div class="search-form_button">
          <el-button type="primary" size="small">查询</el-button>
        </div>
      </div>
    </el-form>
    <div class="nav-box mt20">
      <ul class="clearfix">
        <li>
          <router-link to="/business/workManagement/all">全部</router-link>
        </li>
        <li>
          <router-link to="/business/workManagement/assign">待指派</router-link>
        </li>
        <li>
          <router-link to="/business/workManagement/wait">待接单</router-link>
        </li>
        <li>
          <router-link to="/business/workManagement/server">服务中</router-link>
        </li>
        <li>
          <router-link to="/business/workManagement/verify">待审核</router-link>
        </li>
        <li>
          <router-link to="/business/workManagement/finish">已完成</router-link>
        </li>
        <li>
          <router-link to="/business/workManagement/termination">已终止</router-link>
        </li>
      </ul>
    </div>

    <div class="mt-20">
      <transition name="page-toggle" mode="out-in"><router-view/></transition>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      searchForm: {
        number: '',
        status: '',
      },
      addForm: {
        value: '',
        date1: '',
        value1: '',
      },

    };
  },
  created() {
  },
};
</script>

<style lang="less">
.search-form_box{
  margin-top:20px;
  .search-form_item{
    float:left;
    width:11%;
    height:40px;
    &:not(:nth-of-type(1)){
      margin-left:15px;
    }
    .el-select{
      width:100%;
    }
  }
  .search-form_button{
    float:left;
    margin-top:4px;
    width:200px;
    margin-left:20px !important;
    .el-button{
      width:80px;
    }
  }
}

.nav-box{
  ul{
    li{
      float:left;
      border: 1px solid #E6EAEE;
      &:not(:nth-last-of-type(1)){
        border-right:none;
      }
      a{
        color:#333;
        display: block;
        font-size:15px;
        padding: 8px 20px;
        &.router-link-active{
          color:#fff;
          /* font-weight:bold; */
          background:#409EFF;
        }
      }
    }
  }
}

</style>
