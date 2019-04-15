<template>
<div class="point-detail_box">
<el-row>
  <el-button type="primary" size="small" @click="$router.push('/wealth/points')">返回</el-button>
  <el-button type="primary" size="small" @click="point('reward')">奖励贡献分</el-button>
  <el-button type="primary" size="small" @click="point('deduct')">扣除贡献分</el-button>
</el-row>

<el-form label-width="100px" class="mt20" style="width:1200px;">
  <el-row :gutter="24">
    <el-col :span="6">
      <el-form-item label="用 户 名:"><span>123用户名</span></el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="手 机 号:"><span>15889899696</span></el-form-item>
    </el-col>
    <el-col :span="5">
      <el-form-item label="注册时间:"><span>2015-09-09</span></el-form-item>
    </el-col>
    <el-col :span="5">
      <el-form-item label="所属区域:"><span>浙江省杭州市滨江区</span></el-form-item>
    </el-col>
  </el-row>
  <el-row :gutter="24">
    <el-col :span="6">
      <el-form-item label="所属机构:"><span>所属机构所属机构所属机构</span></el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="总贡献分:"><span>22</span></el-form-item>
    </el-col>
    <el-col :span="5">
      <el-form-item label="消耗贡献分:"><span>22</span></el-form-item>
    </el-col>
    <el-col :span="5">
      <el-form-item label="剩余贡献分:"><span>44</span></el-form-item>
    </el-col>
  </el-row>
  <el-row :gutter="24">
    <el-col :span="6">
      <el-form-item label="会员等级:"><span>V1</span></el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="会员星级:">
          <el-rate
              v-model="startValue"
              disabled
              :show-score="false"
              text-color="#ff9900">
            </el-rate>
      </el-form-item>
    </el-col>

  </el-row>
</el-form>

<div class="mt20">
  <el-table
    class="point-detail_table"
    :data="tableData"
    border
    style="width: 1200px">
    <el-table-column
        type="index"
        label="序号"
        align="center"
        width="70">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      align="center">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名目"
      align="center">
    </el-table-column>
    <el-table-column
      prop="score"
      label="分值"
      align="center">
    </el-table-column>
    <el-table-column
      prop="remark"
      label="备注"
      align="center">
    </el-table-column>
    <el-table-column
      prop="op"
      label="操作人"
      align="center">
    </el-table-column>
    <el-table-column
      prop="date"
      label="操作时间"
      align="center">
    </el-table-column>
  </el-table>
</div>
</div>
</template>

<script>

export default {
  data() {
    return {
      startValue: 3,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        op: 'xxx',
        score: '10',
        remark: '123',
      }],
    };
  },
  components: {

  },
  methods: {
    point() {

    },


  },
};
</script>

<style lang="less">
.point-detail_box{
  /deep/.el-rate{
    margin-top:9px;
  }
  .point-detail_table{
    margin-left:20px;
  }
}
</style>
