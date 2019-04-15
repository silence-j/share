<template>
<div class="masony-box">
<el-row>
  <el-button type="primary" size="small" @click="point('reward')">奖励贡献分</el-button>
  <el-button type="primary" size="small" @click="point('deduct')">扣除贡献分</el-button>
</el-row>
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
  <el-table
    :data="tableData"
    border
    max-width="500px"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
        type="selection"
        width="55"
        align="center">
      </el-table-column>
      <el-table-column
          type="index"
          label="序号"
          align="center"
          width="70">
      </el-table-column>
      <el-table-column
          prop="name"
          label="用户名"
          align="center"
          width="120px">
      </el-table-column>
      <el-table-column
          prop="phone"
          label="手机号"
          align="center"
          width="140px">
      </el-table-column>
    <el-table-column
          prop="time"
          label="注册时间"
          align="center"
          width="180px">
      </el-table-column>
      <el-table-column
          prop="zMasony"
          align="center"
          label="所属区域"
          width="220px">
      </el-table-column>
      <el-table-column
          prop="xhMasony"
          align="center"
          label="所属机构"
          width="220px">
      </el-table-column>
      <el-table-column
          prop="syMasony"
          align="center"
          label="总贡献分"
          width="120px">
      </el-table-column>
      <el-table-column
          prop="startLeave"
          align="center"
          label="消耗贡献分"
          width="120px">
        </el-table-column>
        <el-table-column
          prop="status"
          align="center"
          label="剩余贡献分"
          width="120px">
        </el-table-column>
        <el-table-column
          prop="startLeave"
          align="center"
          label="会员等级"
          width="120px">
        </el-table-column>
        <el-table-column
          prop="status"
          align="center"
          label="会员星级"
          width="200px">
          <template slot-scope="scope">
            <el-rate
              v-model="scope.row.startValue"
              disabled
              :show-score="false"
              text-color="#ff9900">
            </el-rate>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="操作"
          width="100"
          fixed="right">
          <template slot-scope="scope">
              <div class="operate-div">
                <span class="click-active ripple" @click="detailMsg(scope.row)">详情</span>
              </div>
          </template>
      </el-table-column>
  </el-table>
</el-row>

<!-- 弹窗 -->
<el-dialog :title="dialogTitle" :visible.sync="rewardVisible" width="400px">
  <el-form label-width="0px">
    <el-form-item label="">
      <el-select v-model="searchForm.number" placeholder="请选择XX">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="">
      <el-input type="text" placeholder="请填写分值"></el-input>
    </el-form-item>
    <el-form-item label="">
      <el-input type="textarea" placeholder="请填写备注"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button size="small">取 消</el-button>
    <el-button type="primary" size="small">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
export default {
  data() {
    return {
      dialogTitle: '',
      rewardVisible: false,
      searchForm: {
        number: '',
        status: '',
        date1: '',
      },
      value5: 3,
      options1: [],
      tableData: [{
        startValue: 3,
        startLeave: 'V1',
        syMasony: '2',
        xhMasony: '2',
        zMasony: '4',
        phone: '18268210939',
        time: '2010-09-09',
        name: '王小虎',
        id: 1,
      }, {
        startValue: 3,
        startLeave: 'V1',
        syMasony: '2',
        xhMasony: '2',
        zMasony: '4',
        phone: '18268210939',
        time: '2010-09-09',
        name: '王小虎',
        id: 2,
      }],
      multipleSelection: [],
    };
  },
  components: {

  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log('1', this.multipleSelection);
    },
    detailMsg(row) {
      this.$router.push({ name: 'wealthPointDetail', params: { aaId: row.id } });
    },
    point(val) {
      this.rewardVisible = true;
      if (val === 'reward') {
        this.dialogTitle = '奖励贡献分';
      } else if (val === 'deduct') {
        this.dialogTitle = '扣除贡献分';
      }
    },

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
