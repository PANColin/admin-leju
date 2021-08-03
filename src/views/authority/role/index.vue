<template>
  <div>
    <el-card style="width:95%;margin: 20px auto;">
      <el-table
        v-loading="loading"
        border
        stripe
        fit
        :data="list"
        style="width: 100%"
      >
        <el-table-column
          align="center"
          type="index"
          label="序号"
          width="50"
          fixed="left"
        />
        <el-table-column
          align="center"
          prop="roleName"
          label="角色名称"
          width="160"
        />
        <el-table-column
          align="center"
          prop="roleCode"
          label="角色编码"
          width="100"
        />
        <el-table-column align="center" label="头像">
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
          prop="modifyTime"
          label="修改日期"
          width="180"
        />
        <el-table-column
          align="center"
          prop="createTime"
          label="添加时间"
          width="180"
        />
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="edit(scope.row)"
              >编辑</el-button
            >
            <el-button type="danger" size="mini" @click="del(scope.row)"
              >删除</el-button
            >
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
  findAllRoles,
  findRolePermissions,
  findRolesByPage as findRolesByPageAPI,
  removeRole,
  saveRolePermissions,
  updateRolePermissions
} from "@/api/role/admin/index";
export default {
  name: "Role",

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
    this.findRolesByPage();
  },

  methods: {
    // 编辑
    edit(item) {
      console.log(item);
    },
    // 删除
    del(item) {
      console.log(item);
    },
    async findRolesByPage() {
      this.loading = true;
      const res = await findRolesByPageAPI(
        this.pageInfo.start,
        this.pageInfo.limit
      );
      // console.log(res);
      if (!res.success) return this.$message.error(res.message);
      this.loading = false;
      this.total = res.data.total;
      this.list = res.data.rows;
      if (!res.success) return this.$message.error(res.message);
      res.data.rows.forEach(el => {
        // console.log(el)
        el.icon ||=
          "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
      });
    },

    //图片加载错误回调
    handleError(val) {
      // console.log(val)
      // console.log('error')
      val.icon =
        "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
    },
    // 当前每页显示的条数变化的时候触发
    SizeChange(newsize) {
      // console.log("size",newsize);
      this.pageInfo.limit = newsize;
      this.findRolesByPage();
    },
    // 当前页码发生变化的时候触发
    CurrentChange(newcurrent) {
      // console.log("current",newcurrent);
      this.pageInfo.start = newcurrent;
      this.findRolesByPage();
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
