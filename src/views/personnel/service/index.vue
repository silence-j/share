<template>
  <div class="service-box">
    <el-row>
      <el-button type="primary" size="small" @click="goAdd">新增</el-button>
    </el-row>
    <el-row class="mt20">
    <el-table
    :data="tableData"
    border
    max-width="500px"
    style="width: 100%">
    <el-table-column
      type="index"
      label="序号"
      align="center"
      width="50">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      align="center"
      width="120">
    </el-table-column>
    <el-table-column
      prop="telephone"
      label="电话"
      align="center"
      width="120">
    </el-table-column>
   <el-table-column
      prop="idCardNumber"
      label="身份证号码"
      align="center"
      width="180">
    </el-table-column>
    <el-table-column
      prop="houseaddress"
      width="250"
      align="center"
      label="户籍所在地地址">
    </el-table-column>
     <el-table-column
      prop="serviceAddress"
      width="250"
      align="center"
      label="服务区域">
     </el-table-column>
      <el-table-column
      prop="nature"
      width="100"
      align="center"
      label="专员性质">
     </el-table-column>
      <el-table-column
      prop="remark"
      align="center"
      min-width="150"
      label="备注">
      </el-table-column>
      <el-table-column
      prop="status"
      align="center"
      label="状态">
     </el-table-column>
     <el-table-column
     prop="updateTime"
     align="center"
     width="160"
     label="最后更新时间"
     ></el-table-column>
     <el-table-column
     prop="userName"
     align="center"
     min-width="100"
     label="更新人"
     ></el-table-column>
     <el-table-column
     align="center"
     label="操作"
     width="180"
     >
     <template slot-scope="scope">
       <div class="operate-div">
        <span class="click-active ripple">查看</span>
        <span class="click-active ripple">编辑</span>
        <span class="click-active ripple">重置密码</span>
       </div>
     </template>
     </el-table-column>
  </el-table>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: Array(20).fill({
        name: '王小虎',
        telephone: '18268210939',
        idCardNumber: '342623199212105017',
        houseaddress: '上海市普陀区金沙江路 1518 弄',
        serviceAddress: '浙江省杭州市滨江区',
        nature: '内部水工',
        remark: '本地测试数据',
        status: '正常',
        updateTime: '2019-02-15 11:08',
        userName: 'admin',
      }),
    };
  },
  methods: {
    goAdd() {
      this.$router.push('/personnel/service/add');
    },
  },
  created() {
  },
};
</script>
