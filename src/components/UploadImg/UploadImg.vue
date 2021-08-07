<template>
  <div>
    <el-upload
      ref="uploadCoverImg"
      :list-type="listType"
      class="upload-demo"
      :headers="{ token }"
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
      :show-file-list="false"
      :action="uploadUrl"
    >
      <el-button v-if="listType == 'text'" size="small" type="primary"
        >点击上传</el-button
      >
      <el-button
        icon="el-icon-plus"
        v-if="listType == 'picture-card' || listType == 'picture'"
        size="small"
        style="border:none"
        plain
      ></el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传图片格式文件，且不超过1.5M
      </div>
    </el-upload>
    <div v-if="isShowImg" class="icon-wrapper">
      <img v-if="imgSrc" class="cover-img" :src="imgSrc" alt="" />
      <i
        v-if="imgSrc"
        slot="reference"
        class="el-icon-circle-close"
        @click="removeCoverImg"
      />
    </div>
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";
export default {
  name: "UploadImg",
  props: {
    isShowImg: {
      type: Boolean,
      default: false
    },
    uploadUrl: {
      type: String,
      default: "/lejuAdmin/material/uploadFileOss"
    },
    listType: {
      type: String,
      default: "text"
    },
    isWho: {
      type: String,
      default: ""
    }
  },
  mounted() {},
  data() {
    return {
      imgSrc: "" //https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20210805143648153img.jpg
    };
  },
  computed: {
    token() {
      return getToken();
    }
  },
  methods: {
    // 上传成功的回调
    handleSuccess(response, file, fileList) {
      const { success, data, message: errMsg } = response;
      if (success) {
        const { fileUrl } = data;
        this.$message.success("上传成功!");
        // console.log(fileUrl);
        const params = { url: fileUrl, isWho: this.isWho };
        this.$emit("reciveImgSrc", params);
        this.imgSrc = fileUrl;
        // 清除上传列表
        this.$refs.uploadCoverImg.clearFiles();
      } else {
        this.$message.error(errMsg);
      }
    },
    // 上传类型判断
    beforeUpload(file) {
      // 正则表达式
      var reg = /image\/(jpeg|png|jpg)/g;
      const isImg = reg.test(file.type);
      const isOver = file.size / 1024 / 1024 < 1.5;
      if (!isImg) {
        this.$message.error("只能上传图片格式");
      }
      if (!isOver) {
        this.$message.error("上传头像图片大小不能超过1.5MB!");
      }
      return isImg && isOver;
    },
    // 删除图片
    removeCoverImg() {
      // 只用执行本地删除
      this.$confirm("此操作将永久删除该文件, 是否继续?", "系统提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.imgSrc = "";
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-wrapper {
  width: fit-content;
  height: fit-content;
  position: relative;
  .cover-img {
    width: 200px;
  }
  i {
    cursor: pointer;
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 33px;
    color: #f00;
  }
}
.changeStyle {
  display: flex;
  align-items: center;
}
</style>
