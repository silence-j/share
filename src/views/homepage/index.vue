<template>
  <div>
    我是首页

 <el-dialog
  title="提示"
  :visible.sync="bigPictureVisible"
  width="30%"
  >
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="bigPictureVisible = false">取 消</el-button>
    <el-button type="primary" @click="bigPictureVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bigPictureVisible: true,
    };
  },
};
</script>
