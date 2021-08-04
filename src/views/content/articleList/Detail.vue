<template>
  <div>
    <div class="detail-main">
      <!-- 卡片 -->
      <el-card shadow="always" style="margin: 30px;">
        <div slot="header">
          <span>{{ article.id ? "编辑文章" : "新增文章" }}</span>
        </div>
        <!-- 表单 -->
        <el-form
          ref="form"
          :model="article"
          :rules="rules"
          label-width="80px"
          :inline="false"
          size="normal"
        >
          <el-row :gutter="20">
            <el-col :span="8" :offset="0">
              <el-form-item label="标题" prop="title">
                <el-input v-model="article.title" />
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="0">
              <el-form-item label="作者" prop="author">
                <el-input v-model="article.author" />
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="0">
              <el-form-item label="是否显示">
                <el-switch
                  v-model="article.isShow"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  :active-value="1"
                  :inactive-value="0"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="文章概要">
            <el-input
              v-model="article.summary"
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
            />
          </el-form-item>
          <el-form-item label="封面图片">
            <el-upload
              ref="uploadCoverImg"
              class="upload-demo"
              :headers="{ token }"
              :on-success="handleSuccess"
              :before-upload="beforeUpload"
              action="/lejuAdmin/material/uploadFileOss"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传图片格式文件，且不超过1.5M
              </div>
            </el-upload>
            <div class="icon-wrapper">
              <img
                v-if="article.coverImg"
                class="cover-img"
                :src="article.coverImg"
                alt=""
              />
              <el-popconfirm
                title="亲,您确定要删除吗？"
                @onConfirm="removeCoverImg"
              >
                <i
                  slot="reference"
                  class="el-icon-circle-close"
                  v-if="article.coverImg"
                ></i
              ></el-popconfirm>
            </div>
          </el-form-item>
          <el-form-item label="文章内容">
            <Tinymce v-model="tinContent" :height="400" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doSave">立即保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <copyright></copyright>
  </div>
</template>

<script>
import copyright from "@/components/copyright/index.vue";
import { getToken } from "@/utils/auth";
import Tinymce from "@/components/Tinymce";
import {
  addArticle as addArticleAPI,
  productArticle as productArticleAPI,
  updateArticle as updateArticleAPI
} from "@/api/productArticle/index";
export default {
  components: {
    Tinymce,
    copyright
  },
  data() {
    return {
      article: {
        isShow: 1, // 默认值
        coverImg: ""
      }, // 表单的数据对象
      tinContent: "", // 富文本内容
      rules: {
        title: [
          { required: true, message: "标题不能为空", trigger: "blur" },
          { min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur" }
        ],
        author: [{ required: true, message: "作者不能为空", trigger: "blur" }]
      }
    };
  },
  computed: {
    token() {
      return getToken();
    }
  },
  created() {
    this.article.id = this.$route.params.id;
    if (this.article.id) {
      this.getArticle();
    }
  },
  mounted() {},
  methods: {
    // 执行提交
    doSave() {
      // 集成富文本内容 对富文本来说,接口的content1和content2都是转换后的html内容
      this.article.content1 = this.tinContent;
      this.article.content2 = this.tinContent;
      this.$refs.form.validate(async valid => {
        if (valid) {
          // 需要根据情况判断是更新还是新增!!
          var api = this.article.id ? updateArticleAPI : addArticleAPI;
          const { success, message: errMsg } = await api(this.article);
          if (!success) return this.$message.error(errMsg);
          this.$message.success("提交成功!");
          this.$router.push({ name: "articleList" });
        } else {
          this.$message.error("请注意表单验证!");
          return false;
        }
      });
    },
    // 根据id获取文章明细
    getArticle() {
      productArticleAPI(this.article.id).then(res => {
        const { success, data, message: errMsg } = res;
        if (!success) return this.$message.error(errMsg);
        const { productArticle } = data;
        this.article = productArticle;
        // 针对富文本手动处理
        this.tinContent = this.article.content1;
        this.tinContent = this.article.content2;
      });
    },
    // 上传成功的回调
    handleSuccess(response, file, fileList) {
      const { success, data, message: errMsg } = response;
      if (success) {
        const { fileUrl } = data;
        this.$message.success("上传成功!");
        // console.log(fileUrl);
        // 赋值
        this.article.coverImg = fileUrl;
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
      this.article.coverImg = "";
    }
  }
};
</script>

<style scoped lang="scss">
.detail-main {
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
}
</style>
