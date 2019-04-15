<template>
<div class="masony-box">
<el-form :model="searchForm">
  <div class="search-form_box clearfix length-box">
    <div class="search-form_item">
      <el-input v-model="searchForm.number" placeholder="请输入XX"></el-input>
    </div>
    <div class="search-form_item">
      <el-date-picker type="date"
        placeholder="请选择注册时间"
        v-model="searchForm.date1">
      </el-date-picker>
    </div>
    <div class="search-form_item">
      <el-select v-model="searchForm.number" placeholder="请选择XX">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
    </div>
    <div class="search-form_button">
      <el-button type="primary" size="small">查询</el-button>
    </div>
  </div>
</el-form>

<el-row class="mt20">
  <el-table :data="tableData" border max-width="500px" style="width: 100%">
      <el-table-column
          type="index"
          label="序号"
          align="center"
          width="70">
      </el-table-column>
      <el-table-column
          prop="name"
          label="用户名"
          align="center">
      </el-table-column>
      <el-table-column
          prop="phone"
          label="手机号"
          align="center">
      </el-table-column>
    <el-table-column
          prop="time"
          label="注册时间"
          align="center">
      </el-table-column>
      <el-table-column
          prop="zMasony"
          align="center"
          label="总财钻数">
      </el-table-column>
      <el-table-column
          prop="xhMasony"
          align="center"
          label="消耗财钻数">
      </el-table-column>
      <el-table-column
          prop="syMasony"
          align="center"
          label="剩余财钻数">
      </el-table-column>
      <el-table-column
          prop="startLeave"
          align="center"
          label="会员等级">
        </el-table-column>
        <el-table-column
          prop="status"
          align="center"
          label="会员星级">
          <template slot-scope="scope">
            <el-rate
              v-model="scope.row.startValue"
              disabled
              :show-score="false"
              text-color="#ff9900">
            </el-rate>
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
      searchForm: {
        number: '',
        status: '',
        date1: '',
      },
      value5: 3,
      options1: [],
      tableData: Array(5).fill({
        startValue: 3,
        startLeave: 'V1',
        syMasony: '2',
        xhMasony: '2',
        zMasony: '4',
        phone: '18268210939',
        time: '2010-09-09',
        name: '王小虎',
      }),
    };
  },
  components: {

  },
  methods: {

  },
};
</script>
<style lang="less">
.masony-box{
  &/deep/ .el-select, .el-date-editor.el-input, .el-date-editor.el-input__inner{
      width:100%;
  }
}

</style>
