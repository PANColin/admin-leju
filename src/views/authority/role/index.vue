<template>
  <div>
    <detail
      ref="editRoles"
      :logo="editRoles.logo"
      :bigImg="editRoles.bigPic"
      :editRoles="editRoles"
      @refrush="getBrandList"
    />
    <el-card style="width:95%;margin: 20px auto;">
      <el-button type="primary" icon="el-icon-plus" @click="add"
        >新增</el-button
      >
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
        <el-table-column
          align="center"
          prop="remark"
          label="备注"
          show-overflow-tooltip
          width="300"
        />

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
import Detail from "./Detail.vue";
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

  components: { copyright, Detail },

  data() {
    return {
      editRoles: {},
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
    // 新增
    add() {
      //清空编辑的信息
      this.editRoles = {};
      // console.log(this.$refs.editRoles)
      this.$refs.editRoles.clearAll();
      this.$refs.editRoles.openDialog();
    },
    // 点击确认按钮刷新列表
    async getBrandList(e) {
      // console.log(e);
      // console.log("执行刷新");
      //有id 表示编辑否则添加
      let api = e.id ? updateRolePermissions : saveRolePermissions;

      const { success, message } = await api(e);
      if (!success) return this.$message.error(message);
      this.$message.success("保存成功");
      //刷新列表
      //  this.findRolesByPage();
      this.$router.go(0); //强制刷新，避免子组件不刷新的问题
    },
    // 编辑
    async edit(item) {
      // console.log(item);
      const { success, data, message } = await findRolePermissions(item.id);
      if (!success) return this.$message.error(message);
      // console.log(data);
      item.permissionIds = data.role.permissionIds;
      this.editRoles = item;
      this.$refs.editRoles.openDialog();
    },
    // 删除
    async del(item) {
      // console.log(item);
      const { success, message } = await removeRole(item.id);
      if (!success) return this.$message.error(message);
      this.$message.success("删除成功");
      this.findRolesByPage();
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
