<template>
<div class="phone-box">
<el-row>
  <el-button type="primary" size="small" @click="addMsg('add')">新增</el-button>
</el-row>
<el-form :model="searchForm">
  <div class="search-form_box clearfix length-box">
    <div class="search-form_item">
      <el-input v-model="searchForm.number" placeholder="请输入工单号"></el-input>
    </div>
    <div class="search-form_item">
      <el-select v-model="searchForm.number" placeholder="请选择预约类型">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
    </div>
    <div class="search-form_item">
      <el-select v-model="searchForm.number" placeholder="请选择服务类型">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
    </div>
    <div class="search-form_item">
      <el-input  placeholder="请输入服务码"></el-input>
    </div>
    <div class="search-form_item">
      <el-date-picker type="date"
        placeholder="请选择预约服务时间"
        v-model="addForm.date1">
      </el-date-picker>
    </div>
    <div class="search-form_item">
      <el-input  placeholder="请输入预约人"></el-input>
    </div>
    <div class="search-form_item">
      <el-select v-model="searchForm.status" placeholder="请选择状态">
          <el-option
            v-for="item in options3"
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
          width="50">
      </el-table-column>
      <el-table-column
          prop="number"
          label="工单号"
          align="center"
          width="120">
      </el-table-column>
      <el-table-column
          prop="type"
          label="预约类型"
          align="center"
          width="120">
      </el-table-column>
    <el-table-column
          prop="serveType"
          label="服务类型"
          align="center"
          width="120">
      </el-table-column>
      <el-table-column
          prop="serveNumber"
          align="center"
          label="服务码"
          width="120">
      </el-table-column>
      <el-table-column
          prop="updateTime"
          align="center"
          label="预约服务时间"
          width="170">
      </el-table-column>
      <el-table-column
          prop="name"
          width="120"
          align="center"
          label="预约人">
      </el-table-column>
      <el-table-column
          prop="telephone"
          align="center"
          width="120"
          label="预约人电话">
        </el-table-column>
        <el-table-column
          prop="status"
          align="center"
          width="120"
          label="预约人类型">
        </el-table-column>
      <el-table-column
          prop="serviceAddress"
          align="center"
          width="240"
          label="小区地址">
      </el-table-column>
      <el-table-column
          prop="name"
          align="center"
          width="120"
          label="业主姓名">
      </el-table-column>
      <el-table-column
          prop="userName"
          align="center"
          min-width="120"
          label="备注">
      </el-table-column>
      <el-table-column
          prop="status"
          align="center"
          width="110"
          label="状态">
          <template slot-scope="scope">
            <div v-if="scope.row.status=='已取消'" class="moveBtn">
              <el-tooltip placement="top" effect="light">
                <div slot="content" style="width: 130px;height: 55px;overflow: auto;">123</div>
                <span>{{scope.row.status}}</span>
              </el-tooltip>
            </div>
            <div v-else>
              <span>{{scope.row.status}}</span>
            </div>
          </template>
      </el-table-column>
      <el-table-column
          prop="updateTime"
          align="center"
          width="170"
          label="提交时间">
      </el-table-column>
      <el-table-column
          align="center"
          label="操作"
          width="150"
          fixed="right">
          <template slot-scope="scope">
              <div class="operate-div">
                <span class="click-active ripple" @click="addMsg('edit')">编辑</span>
                <span class="click-active ripple" @click="cancelMsg">取消</span>
                <span class="click-active ripple" @click="checkMsg">查看</span>
              </div>
          </template>
      </el-table-column>
    </el-table>
</el-row>
  <!-- 新增、编辑 -->
  <el-dialog :title="dialogTitle" :visible.sync="addVisible" width="500px" class="form-box">
    <el-form :model="addForm" label-width="100px">
        <el-form-item label="服务类型:">
          <el-select v-model="addForm.value" placeholder="请选择服务类型">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="服务码:">
          <el-input type="text" placeholder="请填写服务码"></el-input>
        </el-form-item>
        <el-form-item label="预约服务时间:">
           <el-date-picker type="date"
             placeholder="请选择预约服务时间"
             v-model="addForm.date1">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="预约人:">
          <el-input type="text" placeholder="请填写预约人"></el-input>
        </el-form-item>
        <el-form-item label="预约人电话:">
          <el-input type="text" placeholder="请填写预约人电话"></el-input>
        </el-form-item>
        <el-form-item label="预约人类型:">
          <el-select v-model="addForm.value1" placeholder="请选择预约人类型">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="业主姓名:">
          <el-input type="text" placeholder="请填写业主姓名"></el-input>
        </el-form-item>
        <el-form-item label="业主电话:">
          <el-input type="text" placeholder="请填写业主电话"></el-input>
        </el-form-item>
        <el-form-item label="小区地址:">
          <el-input type="text"  placeholder="请填写小区地址"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input type="text" placeholder="请填写详细地址" ></el-input>
        </el-form-item>
        <el-form-item label="备注:">
          <el-input type="textarea" placeholder="请填写备注"></el-input>
        </el-form-item>
      </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="small">取 消</el-button>
      <el-button type="primary" size="small">确 定</el-button>
    </div>
  </el-dialog>

  <!-- 取消操作 -->
  <el-dialog title="提示" :visible.sync="cancelVisible" width="400px">
    <el-form label-width="85px">
        <el-form-item label="取消原因：">
          <el-input type="textarea" v-model="cancelForm.reson"></el-input>
        </el-form-item>
      </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancelReason" size="small">取 消</el-button>
      <el-button @click="sureReason" type="primary" size="small">确 定</el-button>
    </div>
  </el-dialog>

  <!-- 待处理 待指派 待结单详情 -->
   <el-dialog title="详情" :visible.sync="detailVisible" width="500px" class="form-box">
    <el-form :model="detailForm" label-width="120px">
        <el-form-item label="服务类型:">
          <span>服务类型TEXT</span>
        </el-form-item>
        <el-form-item label="服务码:">
          <span>服务码123</span>
        </el-form-item>
        <el-form-item label="预约服务时间:">
           <span>2019-09-09</span>
        </el-form-item>
        <el-form-item label="预约人:">
          <span>预约人NAME</span>
        </el-form-item>
        <el-form-item label="预约人电话:">
          <span>15889899696</span>
        </el-form-item>
        <el-form-item label="预约人类型:">
          <span>预约人类型TYPE</span>
        </el-form-item>
        <el-form-item label="业主姓名:">
          <span>业主姓名NAME</span>
        </el-form-item>
        <el-form-item label="业主电话:">
          <span>业主电话15889899696</span>
        </el-form-item>
        <el-form-item label="小区地址:">
           <span>上海市普陀区金沙江路 1518 弄</span>
        </el-form-item>
        <el-form-item label="备注:">
          <span>备注123</span>
        </el-form-item>
      </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" size="small" @click="detailVisible = false">关 闭</el-button>
    </div>
  </el-dialog>
</div>
</template>
<script>
export default {
  data() {
    return {
      detailVisible: false,
      detailForm: {},
      searchForm: {
        number: '',
        status: '',
      },
      dialogTitle: '',
      tableData: Array(5).fill({
        number: '123456789',
        type: '回访预约',
        serveType: '试压服务',
        serveNumber: '123456',
        name: '王小虎',
        telephone: '18268210939',
        idCardNumber: '342623199212105017',
        houseaddress: '上海市普陀区金沙江路 1518 弄',
        serviceAddress: '浙江省杭州市滨江区',
        nature: '内部水工',
        remark: '本地测试数据',
        status: '已取消',
        updateTime: '2019-02-15 11:08',
        userName: 'admin',
      }),
      dialogTableVisible: false,
      dialogFormVisible: false,
      addVisible: false,
      addForm: {
        value: '',
        date1: '',
        value1: '',
      },
      options: [
        { value: '试压服务', label: '试压服务' },
        { value: '地暖服务', label: '地暖服务' },
      ],
      options1: [
        { value: '业主', label: '业主' },
        { value: '水电工', label: '水电工' },
        { value: '工长', label: '工长' },
        { value: '项目经理', label: '项目经理' },
        { value: '装修公司', label: '装修公司' },
        { value: '经销商', label: '经销商' },
        { value: '机构', label: '机构' },
        { value: '其它', label: '其它' },
      ],
      options3: [
        { value: '待处理', label: '待处理' },
        { value: '待指派', label: '待指派' },
        { value: '待接单', label: '待接单' },
        { value: '服务中', label: '服务中' },
        { value: '管路图审核中', label: '管路图审核中' },
        { value: '已完成', label: '已完成' },
        { value: '已取消', label: '已取消' },
      ],
      cancelVisible: false,
      cancelForm: {
        reason: '',
      },
    };
  },
  methods: {
    /* 新增、编辑 */
    addMsg(val) {
      if (val === 'add') {
        this.dialogTitle = '新增';
      } else if (val === 'edit') {
        this.dialogTitle = '编辑';
      }
      this.addVisible = true;
    },
    /* 取消操作 */
    cancelMsg() {
      this.cancelVisible = true;
    },
    cancelReason() {
      this.cancelVisible = false;
    },
    sureReason() {
      this.cancelVisible = false;
    },
    /* 查看 */
    checkMsg() {
      this.detailVisible = true;
      /* this.$message.warning('这是查看'); */
    },
  },
  created() {
  },
};
</script>

<style lang="less">
.phone-box{
  &/deep/ .el-select, .el-date-editor.el-input, .el-date-editor.el-input__inner{
      width:100%;
  }
  .form-box{
    &/deep/ .el-form-item{
      margin-bottom:15px!important;
    }
    &/deep/ .el-dialog__body{
      padding: 20px 20px;
    }
  }
}

</style>
