<template>
  <div>
    <add-b ref="addB"></add-b>
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
            <el-tag type="success"> 开始时间:{{ scope.row.startTime }} </el-tag>
            <el-tag type="warning"> 结束时间:{{ scope.row.endTime }} </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          resizable
          align="center"
          prop="name"
          label="广告名称"
          width="160"
        />
        <el-table-column
          resizable
          align="center"
          prop="clickCount"
          label="点击数"
          width="100"
        />
        <el-table-column
          resizable
          align="center"
          prop="orderCount"
          label="下单数"
          width="100"
        />
        <el-table-column resizable align="center" label="轮播位置" width="160">
          <template slot-scope="scope">
            <el-tag type="info">{{
              scope.row.type >= 0 ? "首页轮播" : ""
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="链接地址"
          width="180"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <el-link
              :href="scope.row.url ? scope.row.url : '#'"
              :disabled="scope.row.url ? false : true"
              target="_blank"
            >
              {{ scope.row.url || "无链接" }}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="note" label="备注" width="180" />
        <el-table-column
          resizable
          align="center"
          label="上下线状态"
          width="160"
        >
          <template slot-scope="scope">
            <el-tag type="info">{{
              scope.row.status ? "上线" : "下线"
            }}</el-tag>
          </template>
        </el-table-column>
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
              <el-button type="danger" size="mini" slot="reference"
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
import addB from "./add/Detail.vue";
import copyright from "@/components/copyright/index.vue";
import {
  addAds,
  delAds,
  adsList as adsListAPI,
  updateAds
} from "@/api/advertise/index";
export default {
  name: "BannerList",

  components: { copyright, addB },

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
    this.adsList();
  },

  methods: {
    add() {
      this.$refs.addB.openDialog();
    },
    // 编辑
    edit(item) {
      // console.log(item);
      this.$refs.addB.openDialog(item);
    },
    // 删除
    async del(item) {
      // console.log(item);
      const { success, message } = await delAds(item.id);
      if (!success) return this.$message.error(message);
      this.$message.success("删除成功");
      //重新刷新当前页面
      // this.$router.go(0);
      this.adsList();
    },
    //图片加载错误回调
    handleError(val) {
      // console.log(val)
      // console.log('error')
      val.icon =
        "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
    },
    async adsList() {
      this.loading = true;
      const res = await adsListAPI();
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
