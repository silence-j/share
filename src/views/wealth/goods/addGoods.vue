<template>
<div class="add_goods-box">
<el-row>
  <el-button type="primary" size="small" @click="$router.push('/wealth/goods')">返回</el-button>
  <el-button type="primary" size="small">提交</el-button>
</el-row>
<el-form
    style="width:500px"
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm mt20">
    <el-form-item label="物品状态:" prop="name">
        <el-radio v-model="radio" label="1">上架</el-radio>
        <el-radio v-model="radio" label="2">下架</el-radio>
    </el-form-item>
    <el-form-item label="物品编号:" prop="name">
        <el-input placeholder="请填写物品编号"></el-input>
    </el-form-item>
  <el-form-item label="所属机构:" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择所属机构">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="物品名称:" prop="delivery">
     <el-input placeholder="请填写物品名称"></el-input>
  </el-form-item>
  <el-form-item label="兑换单位:" prop="delivery">
     <el-input placeholder="请填写兑换单位"></el-input>
  </el-form-item>
  <el-form-item label="剩余库存:" prop="delivery">
     <el-input placeholder="请填写剩余库存"></el-input>
  </el-form-item>
  <el-form-item label="消耗贡献分:" prop="delivery">
     <el-input placeholder="请填写消耗贡献分"></el-input>
  </el-form-item>
  <el-form-item label="兑换限制:" prop="delivery">
     <el-radio-group v-model="radio">
        <el-radio :label="3">每天</el-radio>
        <el-radio :label="6">每月</el-radio>
        <el-radio :label="9">每年</el-radio>
        <el-radio :label="10">无限制</el-radio>
      </el-radio-group>
  </el-form-item>
  <el-form-item label="" v-show="radio===10">
    <el-input type="text" placeholder="请填写次数"></el-input>
  </el-form-item>
  <el-form-item label="物品图片:">
      <div style="position:relative;top:-26px">
        <image-list/>
      </div>
  </el-form-item>
  <el-form-item label="物品描述:" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
</el-form>
</div>
</template>


<script>
import imageList from '@/components/imageList.vue';

export default {
  data() {
    return {
      radio: '1',
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          {
            min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur',
          },
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' },
        ],
        date1: [
          {
            type: 'date', required: true, message: '请选择日期', trigger: 'change',
          },
        ],
        date2: [
          {
            type: 'date', required: true, message: '请选择时间', trigger: 'change',
          },
        ],
        type: [
          {
            type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change',
          },
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' },
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' },
        ],
      },
    };
  },
  components: {
    imageList,
  },
  methods: {

  },
};
</script>

<style lang="less">
.add_goods-box{
   &/deep/ .el-select, .el-date-editor.el-input, .el-date-editor.el-input__inner{
      width:100%;
  }
  &/deep/ .avatar-uploader {
    width: 80px;
    height: 80px;
  }
  &/deep/.avatar-uploader-icon{
    font-size: 18px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    }
  &/deep/.image-list_box ul li .mask{
    width: 80px;
    height: 80px;
  }
  &/deep/.avatar{
    width: 80px;
    height: 80px;
    display: block;
  }
  &/deep/.el-form-item {
    margin-bottom: 20px;
  }
}
</style>
