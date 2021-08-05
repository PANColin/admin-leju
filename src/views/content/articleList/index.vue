<template>
  <div>
    <el-card
      style="width:95%;margin:10px auto"
      shadow="hover"
      :body-style="{ paddingTop: '20px', paddingBottom: '0' }"
    >
      <div slot="header" @click="isShow = !isShow" style="cursor: pointer;">
        <span>条件查询</span>
      </div>
      <el-form
        v-show="isShow"
        :model="searchForm"
        ref="ruleForm"
        :rules="rules"
        label-width="80px"
        :inline="false"
        size="normal"
      >
        <el-row :gutter="20">
          <el-col :span="6" :offset="0">
            <el-form-item label="作者" prop="author">
              <el-input
                v-model.trim="searchForm.author"
                placeholder="请输入作者(不支持模糊查询)"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0">
            <el-form-item label="标题" prop="title">
              <el-input
                v-model.trim="searchForm.title"
                placeholder="请输入标题(支持模糊查询)"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" :offset="18">
            <el-form-item>
              <el-button type="primary" @click="onSearch('ruleForm')"
                >查询</el-button
              >
              <el-button @click="onCancle('ruleForm')">取消</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <el-card style="width:95%;margin: 20px auto;">
      <el-button type="primary" icon="el-icon-plus" @click="add"
        >新增</el-button
      >
      <el-table v-loading="loading" border :data="list" style="width: 100%">
        <el-table-column
          align="center"
          type="index"
          label="序号"
          width="50"
          fixed="left"
        />
        <el-table-column
          align="center"
          prop="title"
          show-overflow-tooltip
          label="文章标题"
          width="160"
        />
        <el-table-column align="center" label="展示图片" width="110">
          <template slot-scope="scope">
            <img
              :src="scope.row.coverImg"
              width="100"
              height="110"
              @error="handleError(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="createTime"
          label="添加时间"
          width="100"
        />
        <el-table-column
          align="center"
          prop="author"
          label="文章作者"
          width="100"
        />
        <el-table-column align="center" label="文章是否展示" width="120">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.isShow"
              active-color="#13ce66"
              inactive-color="#999"
              :active-value="1"
              :inactive-value="0"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          resizable
          align="center"
          prop="summary"
          show-overflow-tooltip
          label="文章简介"
          width="160"
        />
        <el-table-column
          align="center"
          label="浏览量/点赞量/收藏量"
          width="160"
        >
          <template slot-scope="scope">
            <el-tag type="info" hit effect="dark">
              浏览数量:{{ scope.row.viewCount }}
            </el-tag>
            <el-tag type="danger" effect="light">
              点赞数量:{{ scope.row.zanCount }}
            </el-tag>
            <el-tag type="success" effect="plain">
              收藏数量:{{ scope.row.collectCount }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="modifyTime"
          label="修改日期"
          width="180"
        />
        <el-table-column
          label="操作"
          width="160px"
          align="center"
          fixed="right"
        >
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="edit(scope.row)"
              >编辑</el-button
            >
            <!-- <el-button type="danger" size="mini" @click="del(scope.row)"
              >删除</el-button> -->
            <el-popconfirm
              title="亲,您确定要删除吗？"
              @onConfirm="del(scope.row)"
            >
              <el-button slot="reference" size="mini">删除</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页效果 -->
      <el-pagination
        class="pagination"
        background
        :current-page="pageInfo.start"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageInfo.limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="SizeChange"
        @current-change="CurrentChange"
      />
    </el-card>
    <copyright></copyright>
  </div>
</template>
<script>
import copyright from "@/components/copyright/index.vue";
import {
  addArticle,
  changeShowStatus,
  del,
  productArticle,
  findArticles as findArticlesAPI,
  updateArticle
} from "@/api/productArticle/index";
export default {
  name: "ArticleList",

  components: { copyright },

  data() {
    return {
      isShow: false,
      loading: false,
      list: [],
      pageInfo: {
        start: 1,
        limit: 10
      },
      searchForm: {
        author: "",
        title: ""
      },
      rules: {
        author: [
          // {required: true, message: "请输入作者姓名", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        title: [
          // { required: true, message: "请选择请输入标题", trigger: "change" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ]
      },
      total: 0
    };
  },

  async mounted() {
    this.findArticles();
  },

  methods: {
    // 新增
    add() {
      // console.log(111);
      this.$router.push({ name: "articleListAdd" });
    },
    // 编辑
    edit(item) {
      console.log(item);
      this.$router.push({ name: "articleListEdit", params: { id: item.id } });
    },
    // 删除
    async del(item) {
      console.log(item);
      const { success, message } = await del(item.id);
      if (!success) return this.$message.error(message);
      this.$message.success("删除成功");
      //重新刷新当前页面
      // this.$router.go(0);
      this.findArticles();
    },
    // 条件查询取消按钮
    onCancle(formName) {
      this.$refs[formName].resetFields();
      this.findArticles();
    },
    // 条件查询确定按钮
    onSearch(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const { author, title } = this.searchForm;
          // console.log(!author, !title);
          if (!author && !title) {
            this.$message.warning("请至少输入一项进行查询");
          } else {
            this.findArticles();
            // 重置分页数据
            this.pageInfo.start = 1;
            this.pageInfo.limit = 10;
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //图片加载错误回调
    handleError(val) {
      // console.log(val)
      // console.log('error')
      val.icon =
        "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
    },
    async findArticles() {
      this.loading = true;
      const res = await findArticlesAPI(
        this.pageInfo.start,
        this.pageInfo.limit,
        this.searchForm
      );
      console.log(res);
      if (!res.success) return this.$message.error(res.message);
      this.loading = false;
      this.total = res.data.total;
      this.list = res.data.rows;
      res.data.rows.forEach(el => {
        // console.log(el)
        el.icon ||=
          "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
      });
    },
    // 当前每页显示的条数变化的时候触发
    SizeChange(newsize) {
      // console.log("size",newsize);
      this.pageInfo.limit = newsize;
      this.findArticles();
    },
    // 当前页码发生变化的时候触发
    CurrentChange(newcurrent) {
      // console.log("current",newcurrent);
      this.pageInfo.start = newcurrent;
      this.findArticles();
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  margin-bottom: 80px;
  margin-top: 10px;
}
</style>
