<template>
<div class="redpacket-box">
<el-form :model="searchForm">
  <div class="search-form_box clearfix length-box">
    <div class="search-form_item">
      <el-input v-model="searchForm.keyword" placeholder="请输入关键字"></el-input>
    </div>
    <div class="search-form_item">
      <el-input v-model="searchForm.money"  placeholder="请填写红包金额"></el-input>
    </div>
    <div class="search-form_item">
      <el-input v-model="searchForm.money"  placeholder="请填写已领取金额"></el-input>
    </div>
    <div class="search-form_item">
      <el-input v-model="searchForm.money"  placeholder="请填写已提现金额"></el-input>
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
    style="width: 100%">
      <el-table-column
          type="index"
          label="序号"
          align="center"
          width="70">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          align="center">
      </el-table-column>
      <el-table-column
          prop="phone"
          label="水工电话"
          align="center">
      </el-table-column>
    <el-table-column
          prop="time"
          label="红包金额"
          align="center">
      </el-table-column>
      <el-table-column
          prop="zMasony"
          align="center"
          label="已领取金额">
      </el-table-column>
      <el-table-column
          prop="xhMasony"
          align="center"
          label="已提现金额">
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        width="200"
        fixed="right">
        <template slot-scope="scope">
            <div class="operate-div">
              <span class="click-active ripple" @click="receiveMsg('receive')">领取记录</span>
              <span class="click-active ripple" @click="withdrawMsg('withdraw')">提现记录</span>
            </div>
        </template>
      </el-table-column>
  </el-table>
</el-row>

<!-- 记录弹框 -->
<el-dialog
  title="领取记录"
  :visible.sync="receiveVisible"
  width="300px">
  <div class="receive-dialog-body">
    <div class="receive-dialog-item clearfix" v-for="item in receiveData" :key="item.id">
      <span class="fl">{{item.time}}</span>
      <span class="fr">{{item.money}}元</span>
    </div>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" size="small" @click="receiveVisible = false">关 闭</el-button>
  </span>
</el-dialog>

<el-dialog
  title="提现记录"
  :visible.sync="withdrawVisible"
  width="300px">
  <div class="receive-dialog-body">
    <div class="receive-dialog-item clearfix" v-for="item in withdrawData" :key="item.id">
      <span class="fl">{{item.time}}</span>
      <span class="fr">{{item.money}}元</span>
    </div>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" size="small" @click="withdrawVisible = false">关 闭</el-button>
  </span>
</el-dialog>

</div>
</template>
<script>

export default {
  data() {
    return {
      searchForm: {
        keyword: '',
        money: '',
      },
      receiveVisible: false,
      withdrawVisible: false,
      receiveData: [
        { time: '2019-09-09', money: '200', id: '1' },
        { time: '2019-09-09', money: '300', id: '2' },
        { time: '2019-09-09', money: '400', id: '3' },
        { time: '2019-09-09', money: '500', id: '4' },
        { time: '2019-09-09', money: '600', id: '5' },
      ],
      withdrawData: [
        { time: '2019-09-09', money: '200', id: '1' },
        { time: '2019-09-09', money: '300', id: '2' },
        { time: '2019-09-09', money: '400', id: '3' },
        { time: '2019-09-09', money: '500', id: '4' },
        { time: '2019-09-09', money: '600', id: '5' },
      ],

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
    };
  },
  components: {

  },
  methods: {
    receiveMsg() {
      this.receiveVisible = true;
    },
    withdrawMsg() {
      this.withdrawVisible = true;
    },
  },
};
</script>
<style scoped lang="less">
.redpacket-box{
  &/deep/ .el-select, .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width:100%;
  }
  .receive-dialog-body{
    max-height: 400px;
    overflow: auto;
  }
  .receive-dialog-item{
    line-height:30px;
    font-size:14px;
    .fl{
      width:70%;
    }
    .fr{
      width:30%;
      text-align:right;
    }
  }
}
</style>
