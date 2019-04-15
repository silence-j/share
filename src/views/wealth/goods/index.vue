<template>
<div>
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
  <el-table
    :data="tableData"
    border
    max-width="500px"
    style="width: 100%">
      <el-table-column
          type="index"
          label="序号"
          align="center"
          width="60">
      </el-table-column>
      <el-table-column
          prop="物品状态"
          label="物品状态"
          align="center"
          width="100">
      </el-table-column>
      <el-table-column
          prop="物品编号"
          label="物品编号"
          align="center"
          width="160">
      </el-table-column>
      <el-table-column
          prop="所属机构"
          label="所属机构"
          align="center"
          width="260">
      </el-table-column>
      <el-table-column
          prop="物品名称"
          label="物品名称"
          align="center"
          width="180">
      </el-table-column>
    <el-table-column
          prop="兑换单位"
          label="兑换单位"
          align="center"
          width="100">
      </el-table-column>
      <el-table-column
          prop="物品库存"
          align="center"
          label="物品库存"
          width="120">
      </el-table-column>
      <el-table-column
          prop="剩余库存"
          align="center"
          label="剩余库存"
          width="120">
      </el-table-column>
      <el-table-column
          prop="消耗贡献分"
          align="center"
          label="消耗贡献分"
          width="120">
      </el-table-column>
      <el-table-column
          prop="兑换限制"
          align="center"
          label="兑换限制"
          width="120">
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        fixed="right">
        <template slot-scope="scope">
            <div class="operate-div">
              <span class="click-active ripple">查看</span>
              <span class="click-active ripple">补充库存</span>
              <span class="click-active ripple">上架</span>
              <span class="click-active ripple">下架</span>
               <span class="click-active ripple">上移</span>
              <span class="click-active ripple">下移</span>
            </div>
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
      },
      options: [
      ],
      options1: [
      ],
      options3: [
      ],
      tableData: [{
        物品状态: '上架',
        物品编号: 'xx1234556',
        所属机构: '所属机构',
        物品名称: '物品名称',
        兑换单位: '个',
        物品库存剩余库存: '20',
        消耗贡献分: '2200',
        兑换限制: '3',
        id: 1,
      }],
    };
  },
  components: {

  },
  methods: {
    addMsg() {

    },

  },
};
</script>
<style scoped lang="less">
</style>
