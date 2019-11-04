<template>
  <div class="container" style="margin-top:50px;width:800px;margin:50px auto;">
    <el-row style="display:flex;">
      <el-button type="primary" @click="handleAddPic()">新增</el-button>
      <div class="bg-pic-prompt">最多上传10张，图片不得超过100K，大小为100*100</div>
    </el-row>
    <el-form ref="form" style="padding:20px;">
      <!-- 上传图片 -->
      <div style="width:50%;float:left;margin-bottom:50px;" v-for="(item, key) in arrList" :key="key">
        <el-form-item style="margin-bottom:0;">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="item.imageUrl" :src="item.imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item style="width:245px;margin: 0 auto;" label="URL:" label-width="40px">
          <el-input placeholder="请输入内容" v-model="item.inputValue">
            <!-- <template slot="prepend">URL:</template> -->
          </el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arrList: []
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleAddPic () {
      console.log('新增')
      console.log('arrList')
      let obj = {}
      obj.imageUrl = ''
      obj.inputValue = ''
      this.arrList.push(obj)
      console.log(this.arrList)
    }
  }
}
</script>
<style>
  .container .avatar-uploader-icon {
    width: 245px;
    height: 150px;
    line-height: 150px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
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
  .bg-pic-prompt {
  display: inline-block;
  color: #999999;
  font-weight: 400;
  font-size: 14px;
  margin-left: 20px;
}
</style>
