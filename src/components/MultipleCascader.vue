<template>
  <div class="multi-cascader_box">
    <el-popover
    ref="popover"
    placement="bottom-start"
    trigger="click"
    v-model="showPopover"
    @show="showIcon=true"
    @hide="showIcon = false"
    >
    <div class="address-box">
      <div class="address-wrap" v-if="allProvinceies.length">
        <ul class="address-province_box">
        <li v-for="province in allProvinceies" :key="province.id"
        :class="province.active ? 'active ripple' : 'ripple'"
        @click="handleProvice(province)">
          {{province.name}}<i class="el-icon-arrow-right"></i>
        </li>
      </ul>
      </div>
      <div class="address-wrap" v-if="allCities.length">
        <ul class="address-city_box">
        <li v-for="city in allCities"
         :key="city.id"
         :class="city.active ? 'active ripple' : 'ripple'"
         @click="handleCity(city)"
         >
          {{city.name}}<i class="el-icon-arrow-right"></i>
        </li>
      </ul>
      </div>
      <div class="address-wrap" v-if="zones.length">
        <el-checkbox
        :indeterminate="isIndeterminate"
         v-model="checkAll" @change="handleCheckAllChange"
         style="padding:0 15px"
         >全选</el-checkbox>
        <el-checkbox-group v-model="checkedList" @change="handleCheckedFGroupChange">
          <dl>
            <dd v-for="zone in zones" :key="zone.value">
               <el-checkbox :value="zone.value" :label="zone.value">{{zone.label}}</el-checkbox>
            </dd>
          </dl>
      </el-checkbox-group>
      </div>
      <div class="check-btns">
           <el-button type="primary" size="mini" @click="handleSure">确认</el-button>
           <el-button size="mini" @click="showPopover= false">取消</el-button>
         </div>
    </div>
    <el-input slot="reference"
    style="cursor:pointer"
    :title="addressName"
    :suffix-icon="showIcon? 'el-icon-arrow-up': 'el-icon-arrow-down'"
    readonly
     placeholder="请选择地区" :value="addressName"></el-input>
  </el-popover>
  </div>
</template>
<script>
import {
  addressJson, transData, findAreaName, findAreaNames,
  addressData,
} from '@/assets/js/address';
import { cloneDeep } from 'lodash';

export default {
  name: 'multiCascader',
  props: {
    address: {
      type: Array,
    },
  },
  data() {
    return {
      showIcon: false,
      showPopover: false,
      allProvinceies: cloneDeep(addressJson).filter(x => x.level === '1').map(item => Object.assign({}, item, { active: this.address[0] ? this.address[0] === item.id : false })),
      allCities: [],
      addressValue: [],
      zones: [],
      checkedList: [],
      checkAll: false,
      isIndeterminate: false,
      addressName: '',
    };
  },
  methods: {
    handleProvice(province) {
      if (!province || this.checked) return;
      // if (this.checked) return
      this.allProvinceies.forEach((x) => {
        x.active = false;
      });
      province.active = true;
      const areaItem = addressData.find(x => x.id === province.id);
      this.allCities = areaItem.children.map(item => Object.assign({}, item, { active: false }));
      this.addressValue[0] = province.id;
      this.checkedList = [];
      this.zones = [];
    },
    handleCity(city) {
      if (!city || this.checked) return;
      // if (this.checked) return
      this.allCities.forEach((x) => {
        x.active = false;
      });
      city.active = true;
      if (this.allCities.length) {
        const areaItem = this.allCities.find(x => x.id === city.id);
        this.zones = areaItem.children.map(item => ({ label: item.name, value: item.id, disabled: this.checked === true }));
        this.addressValue[1] = city.id;
      }
      this.checkedList = [];
    },
    handleCheckAllChange(val) {
      this.checkedList = val ? this.zones.map(x => x.value) : [];
      this.isIndeterminate = false;
    },
    handleCheckedFGroupChange(value) {
      const checkedCount = value.length;
      this.checkAll = checkedCount === this.zones.length;
      this.isIndeterminate = checkedCount && (checkedCount < this.zones.length);
    },
    handleSure() {
      if (!this.checkedList.length) {
        this.$message.warning('请选择完整地址');
        return;
      }
      this.addressName = `${findAreaName(this.addressValue[0])} ${findAreaName(this.addressValue[1])} ${findAreaNames(this.checkedList)}`;
      // this.address.splice(2, this.checkedList)
      const cloneAddress = cloneDeep(this.addressValue).slice(0, 2);
      cloneAddress.push(...this.checkedList);
      this.addressValue = cloneAddress;
      this.showPopover = false;
      // this.address = this.addressValue
      this.address.splice(2);
      this.address[0] = this.addressValue[0];
      this.address[1] = this.addressValue[1];
      this.address.push(...this.addressValue.slice(2));
    },
    _setDefault() {
      this.addressValue = this.address;
      const findItem = this.allProvinceies.find(x => x.id === this.addressValue[0]);
      this.handleProvice(findItem);
      const findCityItem = this.allCities.find(x => x.id === this.addressValue[1]);
      this.handleCity(findCityItem);
      this.checkedList = this.addressValue.slice(2);
      this.handleCheckedFGroupChange(this.checkedList);
      // this.isIndeterminate = this.checkedList.length && (this.checkedList.length < this.zones.length);
      this.addressName = `${findAreaName(this.addressValue[0])} ${findAreaName(this.addressValue[1])} ${findAreaNames(this.addressValue.slice(2))}`;
    },
  },
  created() {
    this._setDefault();
  },
};
</script>
<style lang="less" scoped>
// @import '~@/assets/less/variable.less';
.multi-cascader_box{
  &/deep/ .el-popover__reference{
    input{
      cursor: pointer;
    }
  }
}
.address-box{
    width:100%;
    .address-wrap{
      height:200px;
      margin-bottom: 20px;
      overflow: auto;
      float:left;
      ul{
        overflow-y: hidden;
        li{
          line-height:36px;
          cursor: pointer;
          min-width:120px;
          box-sizing: border-box;
          position: relative;
          padding:0px 15px;
          margin-right:10px;
          i{
            position:absolute;
            right:0px;
            top:12px;
            color:#bfcbd9;
          }
          &.active{
            color:@base-color;
          }
        }
      }
      dl{
        dd{
           padding:0px 15px;
          line-height:36px;
          min-width:120px;
        }
      }
    }
  .check-btns{
    text-align:center;
   // padding:10px 0px;
    background: #fff;
  }
  }
</style>
