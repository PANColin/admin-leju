<template>
  <div>
    <div class="detail-main">
      <!-- 卡片 -->
      <el-card shadow="always" style="margin: 30px">
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
            <upload-img
              :isFlex="false"
              :is-show-img="true"
              @reciveImgSrc="handleImgSrc"
            />
          </el-form-item>
          <el-form-item class="changeStyle" label="切换类型">
            <el-switch
              v-model="isMarkDown"
              style="display: block"
              active-color="#13ce66"
              inactive-color="#999"
              active-text="富文本"
              inactive-text="markdown"
            />
          </el-form-item>
          <el-form-item v-show="isMarkDown" label="文章内容">
            <Tinymce v-model="tinContent" :height="400" />
          </el-form-item>
          <el-form-item v-show="!isMarkDown" label="文章内容">
            <markdown-editor ref="markdownEditor" v-model="markdownContent" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doSave">立即保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <copyright />
  </div>
</template>

<script>
import copyright from "@/components/copyright/index.vue";
import UploadImg from "@/components/UploadImg/UploadImg.vue";
import Tinymce from "@/components/Tinymce";
import MarkdownEditor from "@/components/MarkdownEditor";
import {
  addArticle as addArticleAPI,
  productArticle as productArticleAPI,
  updateArticle as updateArticleAPI
} from "@/api/productArticle/index";
export default {
  components: {
    Tinymce,
    copyright,
    MarkdownEditor,
    UploadImg
  },
  data() {
    return {
      isMarkDown: false,
      markdownContent: "",
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
  computed: {},
  created() {
    this.article.id = this.$route.params.id;
    if (this.article.id) {
      this.getArticle();
    }
  },
  mounted() {},
  methods: {
    // 处理子组件传来的结果
    handleImgSrc(e) {
      // console.log(e);
      // 赋值
      this.article.coverImg = e.url;
    },
    // 执行提交
    doSave() {
      // 集成富文本内容 对富文本来说,接口的content1和content2都是转换后的html内容
      // 判断是不是markdown类型
      if (this.isMarkDown) {
        // 进入不是markdown类型
        this.article.content1 = this.tinContent;
        this.article.content2 = this.tinContent;
        this.article.editorType = 0;
      } else {
        // console.log('mdContent', this.mdContent)
        var editor = this.$refs.markdownEditor;
        this.article.content1 = editor.getValue();
        this.article.content2 = editor.getHtml();
        this.article.editorType = 1;
        // console.log('getValue', editor.getValue())
        // console.log('getHtml', editor.getHtml())
      }
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
        // console.log(productArticle)
        this.article = productArticle;
        // 针对富文本手动处理
        if (productArticle.editorType) {
          // 进入是markdown类型
          this.isMarkDown = false;
          this.markdownContent = this.article.content1;
          // this.markdownContent = this.article.content2
        } else {
          this.isMarkDown = true;
          this.tinContent = this.article.content1;
          this.tinContent = this.article.content2;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
