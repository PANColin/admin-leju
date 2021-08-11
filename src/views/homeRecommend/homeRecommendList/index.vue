<template>
  <div>
    <add-r ref="addR"></add-r>
    <sub-add ref="subAdd"></sub-add>
    <el-card style="width:95%;margin: 20px auto;">
      <el-button type="primary" size="default" @click="add">新增</el-button>
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
              {{ scope.row.stale }}
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
            <el-button type="primary" size="mini" @click="edit(scope.row)"
              >编辑</el-button
            >
            <el-popconfirm
              title="亲,您确定要删除吗？"
              @onConfirm="del(scope.row)"
            >
              <el-button slot="reference" type="danger" size="mini"
                >删除</el-button
              >
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <copyright></copyright>
  </div>
</template>
<script>
import subAdd from "./add/subAdd/Detail.vue";
import copyright from "@/components/copyright/index.vue";
import addR from "./add/index.vue";
import {
  addRecommend,
  delRecommend,
  findAllRecommends as findAllRecommendsAPI,
  updateRecommend,
  homeRecommend
} from "@/api/homeRecommend/index";
export default {
  name: "SaleList",

  components: { copyright, addR, subAdd },
  computed: {},
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
    judgeTime(endTime) {
      // console.log(new Date(endTime).getTime())
      var num = new Date().getTime() - new Date(endTime).getTime();
      return num > 0 ? "过期" : "否";
    },
    add() {
      this.$refs.addR.openDialog();
    },
    // 编辑
    edit(item) {
      console.log(item);
      this.$refs.subAdd.openDialog(item);
    },
    // 删除
    async del(item) {
      console.log(item);
      const { success, message } = await delRecommend(item.recommendId);
      if (!success) return this.$message.error(message);
      this.$message.success("删除成功");
      //重新刷新当前页面
      // this.$router.go(0);
      this.findAllRecommends();
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
        el.stale = this.judgeTime(el.promotionEndTime);
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
