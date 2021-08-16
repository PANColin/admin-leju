<template>
  <div>
    <el-card style="width:95%;margin: 20px auto;">
      <el-table v-loading="loading" :data="list" style="width: 100%">
        <el-table-column
          fixed="left"
          align="center"
          type="index"
          label="序号"
        />
        <el-table-column
          align="center"
          prop="username"
          label="用户名"
          width="160"
        />
        <el-table-column align="center" label="头像" width="110">
          <template slot-scope="scope">
            <img
              :src="scope.row.icon"
              width="100"
              height="110"
              @error="handleError(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="nickname"
          label="昵称"
          width="100"
        />
        <el-table-column
          align="center"
          prop="realname"
          label="真实姓名"
          width="100"
        />
        <el-table-column align="center" prop="sex" label="性别" width="60" />
        <el-table-column align="center" prop="phone" label="电话" width="160" />
        <el-table-column align="center" prop="email" label="邮箱" width="160" />
        <el-table-column
          align="center"
          prop="birthday"
          label="生日"
          width="160"
        />
        <el-table-column
          align="center"
          prop="createTime"
          label="注册日期"
          width="180"
        />
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
// import copyright from "@/components/copyright/index.vue";
import { findMembersByPage } from "@/api/user/index";
export default {
  name: "Account",

  components: { },

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
    this.init();
  },

  methods: {
    handleError(val) {
      // console.log(val)
      // console.log('error')
      val.icon =
        "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
    },
    async init() {
      this.loading = true;
      const res = await findMembersByPage(
        this.pageInfo.start,
        this.pageInfo.limit
      );
      // console.log(res)
      if (!res.success) return this.$message.error(res.message);
      this.loading = false;
      this.total = res.data.total;
      this.list = res.data.rows;
      res.data.rows.forEach(el => {
        // console.log(el)
        (el.sex = el.sex ? "女" : "男"),
          (el.icon ||=
            "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg");
      });
    },
    // 当前每页显示的条数变化的时候触发
    SizeChange(newsize) {
      // console.log("size",newsize);
      this.pageInfo.limit = newsize;
      this.init();
    },
    // 当前页码发生变化的时候触发
    CurrentChange(newcurrent) {
      // console.log("current",newcurrent);
      this.pageInfo.start = newcurrent;
      this.init();
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
