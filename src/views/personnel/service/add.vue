<template>
  <div class="service-add_box">
    <el-row>
      <el-button type="primary" size="small"
      @click="$router.push('/personnel/service')">返回</el-button>
      <el-button type="primary" size="small" @click="handleSubmit">提交</el-button>
    </el-row>
    <el-row class="mt20 row-form_box">
      <el-form ref="addForm" :model="addForm" label-width="120px">
        <el-form-item
        label="状态："
        >
        <el-radio-group v-model="addForm.status">
          <el-radio label="1">正常</el-radio>
          <el-radio label="2">禁用</el-radio>
        </el-radio-group>
        </el-form-item>
        <el-form-item
        label="电话："
        >
        <el-input
        placeholder="请填写电话号码"
         v-model="addForm.telephone"/>
        </el-form-item>
        <el-form-item
        label="身份证号码："
        >
        <el-input
        placeholder="请填写身份证号码"
        v-model="addForm.idCardNumber"/>
        </el-form-item>
        <el-form-item
        label="身份证照片："
        >
         <div style="position:relative;top:-35px">
          <image-list/>
        </div>
        </el-form-item>
        <el-form-item
        label="户籍所在地："
        >
        <el-cascader
        style="width:100%"
        :options="addressData"
        v-model="addForm.permanentAddress"
        :props="permanentProp"
        @change="handleChange">
      </el-cascader>
        </el-form-item>
         <el-form-item
        label="服务地区："
        >
        <multipleCascader :address="address"/>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>
<script>
import { debounce } from 'lodash';
import imageList from '@/components/imageList.vue';
import { addressData } from '@/assets/js/address';
import multipleCascader from '@/components/MultipleCascader.vue';

export default {
  data() {
    return {
      addressData,
      addForm: {
        status: '',
        telephone: '',
        idCardNumber: '',
        idCardPhone1: '',
        idCardPhone2: '',
        permanentAddress: ['1263', '1285', '1287'],
      },
      permanentProp: {
        label: 'name',
        value: 'id',
        children: 'children',
      },
      address: ['1', '2', '3', '4', '5', '6', '7', '8'],
    };
  },
  components: {
    imageList,
    multipleCascader,
  },
  methods: {
    handleSubmit: debounce(function (e) {
      console.log(this.addForm);
    }, 500),
    handleChange(value) {
      console.log('value', value);
    },
  },
  created() {
    console.log('addressData', addressData);
  },
};
</script>
<style scoped lang="less">
</style>
