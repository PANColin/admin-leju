<template>
  <div>
    <div class="wrapper">
      <div class="left">
        <div class="info">
          <div class="row1">
            <img :src="userInfo.icon" alt="" />
            <p>{{ userInfo.username }}</p>
          </div>
          <div class="row2">
            <h2><i class="el-icon-s-check" />没有最好，只有更好</h2>
            <h3>
              <i
                class="el-icon-s-opportunity"
              />闲看花开，静待花落;冷暖自知，干净如始
            </h3>
            <h4>
              <i class="el-icon-location-information" />河南省郑州市绿地新都会
            </h4>
          </div>
          <div class="row3">
            <p>标签</p>
            <div>
              <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)"
              >
                {{ tag }}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              >
              </el-input>
              <el-button
                icon="el-icon-plus"
                v-else
                class="button-new-tag"
                size="small"
                @click="showInput"
              ></el-button>
            </div>
          </div>
          <div class="row4">
            <el-row :gutter="20">
              <el-col :span="12" :offset="0"
                ><h2>
                  <i class="el-icon-location-information" />UI设计
                </h2></el-col
              >
              <el-col :span="12" :offset="0"
                ><h2><i class="el-icon-help" />前端设计</h2></el-col
              >
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12" :offset="0"
                ><h2>
                  <i class="el-icon-picture-outline-round" />JAVA设计
                </h2></el-col
              >
              <el-col :span="12" :offset="0"
                ><h2>
                  <i class="el-icon-location-information" />MYSQL设计
                </h2></el-col
              >
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12" :offset="0"
                ><h2>
                  <i class="el-icon-video-camera-solid" />NODE设计
                </h2></el-col
              >
              <el-col :span="12" :offset="0"
                ><h2><i class="el-icon-s-ticket" />PHP设计</h2></el-col
              >
            </el-row>
          </div>
        </div>
      </div>
      <div class="right">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="轮播文章" name="article" class="article">
            <h1>文章管理</h1>
            <el-carousel
              loop
              :interval="4000"
              type="card"
              height="500px"
              @change="changeEvent"
            >
              <el-carousel-item
                class="item"
                v-for="item in list"
                :key="item.id"
              >
                <img :src="item.coverImg" alt="" />
                <h3 class="medium">标题:{{ item.title }}</h3>
                <h2>作者:{{ item.author }}</h2>
                <p>创建时间:{{ item.createTime }}</p>
                <p v-html="item.content1" class="content"></p>
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>
          <el-tab-pane label="card文章" name="project">
            <h1>文章大图管理</h1>
            <el-card
              shadow="hover"
              class="card"
              v-for="item in list"
              :key="item.id"
              :body-style="{ padding: '0px' }"
            >
              <img :src="item.coverImg" class="image" />
              <div style="padding: 14px">
                <span>{{ item.title }}</span>
                <div class="bottom clearfix">
                  <h3 class="medium">标题:{{ item.title }}</h3>
                  <h2>作者:{{ item.author }}</h2>
                  <p>创建时间:{{ item.createTime }}</p>
                  <p v-html="item.content1" class="content"></p>
                  <el-button type="text" class="button" @click="edit(item.id)"
                    >编辑</el-button
                  >
                </div>
              </div>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <copyright></copyright>
  </div>
</template>

<script>
import { getUserInfo } from "@/utils/auth";
import copyright from "@/components/copyright/index.vue";
import { findArticles as findArticlesAPI } from "@/api/productArticle/index";
export default {
  name: "Main",
  components: { copyright },
  data() {
    return {
      activeName: "article",
      dynamicTags: ["学霸", "无敌", "宇宙第一帅"],
      inputVisible: false,
      inputValue: "",
      list: [],
      pageInfo: {
        start: 1,
        limit: 10
      },
      totalPage: 0
    };
  },
  computed: {
    userInfo() {
      return getUserInfo();
    }
  },
  created() {
    this.findArticles();
  },
  methods: {
    // 编辑
    edit(id) {
      // console.log(id);
      this.$router.push({ name: "articleListEdit", params: { id } });
    },
    changeEvent(e) {
      // console.log(e)
      // 当e大于数组长度是再一次发送请求
      if (e == this.list.length - 1) {
        if (this.totalPage > this.pageInfo.start) {
          this.pageInfo.start++;
          // console.log(this.totalPage, '==================', this.pageInfo.start)
          this.findArticles();
        } else {
          this.$message.warning("没有更多数据了");
        }
      }
    },
    async findArticles() {
      this.loading = true;
      const res = await findArticlesAPI(
        this.pageInfo.start,
        this.pageInfo.limit
      );
      // console.log(res)
      if (!res.success) return this.$message.error(res.message);
      this.totalPage = Math.ceil(res.data.total / this.pageInfo.limit);
      this.loading = false;
      this.total = res.data.total;
      this.list = [...this.list, ...res.data.rows];
    },
    // tabs点击事件
    handleClick(tab, event) {
      // console.log(tab, event)
    },
    // tag标签关闭事件
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    //新增tag展示input输入框
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
