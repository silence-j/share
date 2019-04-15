<template>
<div>
<el-form :model="searchForm">
  <div class="search-form_box clearfix length-box">
    <div class="search-form_item">
      <el-input v-model="searchForm.keyword" placeholder="请输入所属机构"></el-input>
    </div>
    <div class="search-form_item">
      <el-input v-model="searchForm.money"  placeholder="请填写单据编号"></el-input>
    </div>
    <div class="search-form_item">
      <el-input v-model="searchForm.money"  placeholder="请填写物品编号"></el-input>
    </div>
    <div class="search-form_item">
      <el-input v-model="searchForm.money"  placeholder="请填写状态"></el-input>
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
          label="所属机构"
          align="center">
      </el-table-column>
      <el-table-column
          prop="name"
          label="单据编号"
          align="center">
      </el-table-column>
      <el-table-column
          prop="name"
          label="水工姓名"
          align="center">
      </el-table-column>
      <el-table-column
          prop="phone"
          label="水工电话"
          align="center">
      </el-table-column>
    <el-table-column
          prop="time"
          label="兑换物品"
          align="center">
      </el-table-column>
      <el-table-column
          prop="zMasony"
          align="center"
          label="物品编号">
      </el-table-column>
      <el-table-column
          prop="xhMasony"
          align="center"
          label="兑换数量">
      </el-table-column>
      <el-table-column
          prop="xhMasony"
          align="center"
          label="消耗贡献分">
      </el-table-column>
      <el-table-column
          prop="xhMasony"
          align="center"
          label="申请时间">
      </el-table-column>
      <el-table-column
          prop="xhMasony"
          align="center"
          label="状态">
      </el-table-column>
      <el-table-column
          prop="xhMasony"
          align="center"
          label="操作人">
      </el-table-column>
      <el-table-column
          prop="xhMasony"
          align="center"
          label="操作时间">
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        width="200"
        fixed="right">
        <template slot-scope="scope">
            <div class="operate-div">
              <span class="click-active ripple" @click="sureMsg">确认兑换</span>
              <span class="click-active ripple" @click="cancelMsg">取消</span>
            </div>
        </template>
      </el-table-column>
  </el-table>
</el-row>

<!-- 取消操作 -->
<el-dialog title="提示" :visible.sync="cancelVisible" width="400px">
  <el-form label-width="85px">
      <el-form-item label="取消原因：">
        <el-input type="textarea" v-model="cancelForm.reson"></el-input>
      </el-form-item>
    </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button size="small">取 消</el-button>
    <el-button @click="sureReason" type="primary" size="small">确 定</el-button>
  </div>
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
      cancelVisible: false,
      cancelForm: {
        reson: '',
      },
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
    sureMsg() {
      this.$confirm('确认兑换, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$message({
          type: 'success',
          message: '成功!',
        });
      }).catch(() => {});
    },
    cancelMsg() {
      this.cancelVisible = true;
    },
    sureReason() {

    },
  },
};
</script>
<style scoped lang="less">
</style>
