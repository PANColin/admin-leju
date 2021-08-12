<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <div slot="header">
        <span>分类管理</span>
      </div>
      <div>
        <h3>乐居分类</h3>
        <div class="wrapper-card">
          <el-card
            class="item"
            shadow="hover"
            v-for="(item, index) in categoryList"
            :key="index"
            :body-style="{ padding: '20px' }"
          >
            <div slot="header">
              <span>{{ item.title }}</span>
            </div>
            <img :src="item.url" alt="" />
          </el-card>
        </div>
      </div>
      <div>
        <h3>全部分类</h3>
        <div class="wrapper-table">
          <el-table
            v-loading="loading"
            :data="allCategoryList"
            style="width: 100%"
            row-key="id"
            border
            :tree-props="{ children: 'children' }"
          >
            <el-table-column
              align="left"
              fixed="left"
              prop="name"
              label="菜单名称"
              width="180"
            >
            </el-table-column>
            <el-table-column align="center" label="图标" width="180">
              <template slot-scope="scope">
                <img :src="scope.row.icon" alt="" width="100" height="100" />
              </template>
            </el-table-column>
            <el-table-column align="center" prop="name" label="分类名称">
            </el-table-column>
            <el-table-column align="center" prop="sort" label="排序">
            </el-table-column>
            <el-table-column align="center" label="显示状态">
              <template slot-scope="scope">
                <el-tag type="info" effect="light">{{
                  scope.row.showStatus ? "显示" : "不显示"
                }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column align="center" label="导航栏展示">
              <template slot-scope="scope">
                <el-tag type="success" effect="light">{{
                  scope.row.navStatus ? "展示" : "不展示"
                }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="description"
              width="120"
              show-overflow-tooltip
              label="描述"
            >
            </el-table-column>
            <el-table-column
              prop="createTime"
              label="创建时间"
              width="160"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="modifyTime"
              label="修改时间"
              width="160"
              align="center"
            >
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-card>

    <copyright></copyright>
  </div>
</template>

<script>
import {
  addCategory,
  delCategory,
  getAllCategory,
  updateCategory
} from "@/api/category/index";
import copyright from "@/components/copyright/index.vue";

export default {
  name: "goodsCategry",
  components: { copyright },
  async created() {
    this.loading = true;
    const { success, message, data } = await getAllCategory();
    if (!success) return this.$message.error(message);
    this.loading = false;
    // console.log(data);
    data.items.forEach(el => {
      // console.log(el);
      el.category.children = el.children;
    });
    this.allCategoryList = data.items.map(el => el.category);
    // console.log(this.allCategoryList);
  },
  data() {
    return {
      loading: false,
      allCategoryList: [],
      categoryList: [
        {
          title: "创意",
          url:
            "https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201118203732237creativity.png"
        },
        {
          title: "风格",
          url:
            "https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201113162204152fengge.png"
        },
        {
          title: "饰品",
          url:
            "https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201113162219971zhuangshipin.png"
        },
        {
          title: "灯具",
          url:
            "https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20201118165103745dengju.png"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.wrapper-card {
  height: 400px;
  display: flex;
  // align-items: center;
  justify-content: space-around;
  flex: none;
  .item {
    width: 285px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
