<template>
<div>
  <div class="image-list_box">
    <ul class="clearfix">
      <li v-for="(item,index) in imageList" :key="index">
        <el-upload
          class="avatar-uploader"
          action="http://172.16.9.172:8091/backend/public/index.php/admin/attachment/api_upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess(item)"
         >
          <img v-if="item.url" :src="item.url" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div class="mask" v-if="item.url">
          <span title="查看" @click="lookBigPicture(item.url)"><i class="el-icon-zoom-in"/></span>
          <span title="删除" @click="delItemPic(item)"><i class="el-icon-delete"/></span>
        </div>
      </li>
    </ul>
  </div>
  <el-dialog
      :visible.sync="bigPictureVisible"
      width="600px"
      >
     <img :src="bigImgSrc" style="width:100%;height:100%"/>
</el-dialog>
</div>
</template>
<script>
export default {
  data() {
    return {
      imageList: [{ id: '', url: '' }, { id: '', url: '' }],
      bigPictureVisible: false,
      bigImgSrc: '',
    };
  },
  methods: {
    handleAvatarSuccess(item) {
      return (res, file) => {
        const result = res.data;
        item.url = result.path;
        item.id = result.result;
      };
    },
    lookBigPicture(url) {
      this.bigImgSrc = url;
      this.bigPictureVisible = true;
    },
    delItemPic(item) {
      setTimeout(() => {
        item.url = '';
      }, 200);
    },
  },
};
</script>
<style scoped lang="less">
.image-list_box{
  ul{
    li{
    float:left;
    position: relative;
    &:not(:nth-of-type(1)){
      margin-left:30px;
    }
    .mask{
      height:178px;
      width:178px;
      background:rgba(0,0,0,.4);
      position: absolute;
      top:0px;
      text-align:center;
      line-height:178px;
      opacity: 0;
      transition: all .5s;
      span{
        &:not(:nth-of-type(1)){
          margin-left:20px;
        }
        i{
          font-size:24px;
          color:#fff;
          cursor: pointer;
        }
      }
    }
    }
  }
}
.avatar-uploader{
    width: 178px;
    height: 178px;
  }
  .avatar-uploader /deep/ .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }
  .avatar-uploader /deep/ .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .image-list_box ul li:hover .mask{opacity: 1;}
</style>
