<template>
  <div>
    <el-card style="width:95%;margin: 20px auto;">
      <el-table v-loading="loading" border :data="list" style="width: 100%">
        <el-table-column
          align="center"
          type="index"
          label="序号"
          width="50"
          fixed="left"
        />
        <el-table-column align="center" label="商品图片" width="110">
          <template slot-scope="scope">
            <img
              :src="scope.row.pic"
              width="100"
              height="110"
              @error="handleError(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column align="center" label="活动时间" width="220">
          <template slot-scope="scope">
            <el-tag type="success">
              开始时间:{{ scope.row.promotionStartTime }}
            </el-tag>
            <el-tag type="warning">
              结束时间:{{ scope.row.promotionEndTime }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" label="是否过期" width="220">
          <template slot-scope="scope">
            <el-tag type="info">
              {{ scope.row.sort == 2 ? "否" : "过期" }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          resizable
          align="center"
          prop="name"
          label="商品名称"
          width="160"
        />
        <el-table-column
          resizable
          align="center"
          prop="brandName"
          label="品牌名称"
          width="160"
        />
        <el-table-column
          resizable
          align="center"
          prop="price"
          label="商品价格"
          width="160"
        />
        <el-table-column
          resizable
          align="center"
          prop="productCategoryName"
          label="商品类别"
          width="160"
        />
        <el-table-column
          align="center"
          prop="createTime"
          label="创建时间"
          width="180"
        />
        <el-table-column
          label="操作"
          width="160px"
          align="center"
          fixed="right"
        >
          <template slot-scope="scope">
            <!-- <el-button type="primary" size="mini" @click="edit(scope.row)"
              >编辑</el-button
            > -->
            <el-button type="danger" size="mini" @click="del(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <copyright></copyright>
  </div>
</template>
<script>
import copyright from "@/components/copyright/index.vue";
import {
  addRecommend,
  delRecommend,
  findAllRecommends as findAllRecommendsAPI,
  updateRecommend,
  homeRecommend
} from "@/api/homeRecommend/index";
export default {
  name: "SaleList",

  components: { copyright },

  data() {
    return {
      loading: false,
      list: [],
      pageInfo: {
        start: 1,
        limit: 10
      },
      total: 0
    };
  },

  async mounted() {
    this.findAllRecommends();
  },

  methods: {
    // 编辑
    // edit(item) {
    //   console.log(item);
    // },
    // 删除
    del(item) {
      console.log(item);
    },
    //图片加载错误回调
    handleError(val) {
      // console.log(val)
      // console.log('error')
      val.icon =
        "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
    },
    async findAllRecommends() {
      this.loading = true;
      const res = await findAllRecommendsAPI();
      // console.log(res);
      if (!res.success) return this.$message.error(res.message);
      this.loading = false;
      this.list = res.data.items;
      res.data.items.forEach(el => {
        // console.log(el)
        el.icon ||=
          "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
      });
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
