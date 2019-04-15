<template>
<div>
<el-row class="mt20">
    <el-table :data="tableData" border max-width="500px" style="width: 100%">
        <el-table-column
            type="index"
            label="序号"
            align="center"
            width="60">
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
            label="终止原因">
        </el-table-column>
        <el-table-column
            align="center"
            label="操作"
            width="200"
            fixed="right">
            <template slot-scope="scope">
                <div class="operate-div">
                    <span class="click-active ripple" @click="detailMsg()">详情</span>
                    <span class="click-active ripple">指派</span>
                    <span class="click-active ripple">重新指派</span>
                    <span class="click-active ripple">取消</span>
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

    };
  },
  methods: {
    detailMsg() {
      this.$router.push('/business/workManagement/detail');
    },
  },
  created() {
  },
};
</script>
