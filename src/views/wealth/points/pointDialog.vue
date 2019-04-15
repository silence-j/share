<template>
<div>
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
    };
  },
  components: {

  },
  methods: {


  },
};
</script>
