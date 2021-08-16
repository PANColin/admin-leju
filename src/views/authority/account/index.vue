<template>
  <div>
    <detail
      ref="editRoles"
      :logo="editRoles.logo"
      :bigImg="editRoles.bigPic"
      :editRoles="editRoles"
      @refrush="getBrandList"
      :key="key"
    />
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
            <el-form-item label="昵称" prop="nickName">
              <el-input
                v-model.trim="searchForm.nickName"
                placeholder="请输入昵称(支持模糊查询)"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0">
            <el-form-item label="用户名" prop="username">
              <el-input
                v-model.trim="searchForm.username"
                placeholder="请输入用户名(支持模糊查询)"
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
      <el-table v-loading="loading" fit border :data="list" style="width: 100%">
        <el-table-column
          align="center"
          type="index"
          label="序号"
          width="50"
          fixed="left"
        />
        <el-table-column
          align="center"
          prop="username"
          label="用户名"
          width="160"
        />
        <el-table-column
          align="center"
          prop="nick_name"
          label="昵称"
          width="100"
        />
        <el-table-column align="center" label="头像" width="110">
          <template slot-scope="scope">
            <img
              :src="scope.row.salt"
              width="100"
              height="110"
              @error="handleError(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column
          resizable
          align="center"
          prop="roles"
          label="角色"
          width="160"
        />
        <el-table-column
          align="center"
          prop="modify_time"
          label="修改日期"
          width="180"
        />
        <el-table-column
          align="center"
          prop="create_time"
          label="添加时间"
          width="180"
        />

        <el-table-column label="操作" align="center" fixed="right">
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
// import copyright from "@/components/copyright/index.vue";
import {
  getInitMenus,
  findUsersByPage as findUsersByPageAPI,
  removeUser,
  saveUserRoles,
  updateUserRoles,
  user
} from "@/api/user/admin/index";
export default {
  name: "Account",

  components: { Detail },
  computed: {
    key() {
      return new Date().getTime();
    }
  },
  data() {
    return {
      editRoles: {},
      loading: false,
      isShow: false,
      list: [],
      pageInfo: {
        start: 1,
        limit: 10
      },
      searchForm: {
        nickName: "",
        username: ""
      },
      rules: {
        nickName: [
          // {required: true, message: "请输入作者姓名", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        username: [
          // { required: true, message: "请选择请输入标题", trigger: "change" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ]
      },
      total: 0
    };
  },

  async mounted() {
    this.findUsersByPage();
  },

  methods: {
    // 新增
    add() {
      //清空编辑的信息
      this.editRoles = {};
      // console.log(this.$refs.editRoles)
      //清除缓存（只清空editRoles不起作用,子组件通过id进行判断了，可以改写，但是为了逻辑这样写看的更清晰一点）
      this.$refs.editRoles.clearAll();
      this.$refs.editRoles.openDialog();
    },
    // 点击确认按钮刷新列表
    async getBrandList(e) {
      // console.log(e);
      // console.log("执行刷新");
      // 有id 表示编辑否则添加
      let api = e.id ? updateUserRoles : saveUserRoles;

      const { success, message } = await api(e);
      if (!success) return this.$message.error(message);
      this.$message.success("保存成功");
      //刷新列表
      this.findUsersByPage();
    },
    // 编辑
    async edit(item) {
      // console.log(item);
      item.nickName = item.nick_name;
      const { success, data, message } = await user(item.id);
      if (!success) return this.$message.error(message);
      item.roleIds = data.user.roleIds;
      //下拉框数据回显
      this.editRoles = item;
      this.$refs.editRoles.openDialog();
      this.$refs.editRoles.showSelectVal();
    },
    // 删除
    async del(item) {
      // console.log(item);
      const { success, message } = await removeUser(item.id);
      if (!success) return this.$message.error(message);
      this.$message.success("删除成功");
      this.findUsersByPage();
    },
    async findUsersByPage(data) {
      this.loading = true;
      const res = await findUsersByPageAPI(
        this.pageInfo.start,
        this.pageInfo.limit,
        data && data
      );
      // console.log(res);
      if (!res.success) return this.$message.error(res.message);
      this.total = res.data.total;
      this.list = res.data.rows;
      this.loading = false;
      res.data.rows.forEach(el => {
        // console.log(el)
        el.icon ||=
          "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
      });
    },
    // 条件查询取消按钮
    onCancle(formName) {
      this.$refs[formName].resetFields();
      this.findUsersByPage();
    },
    // 条件查询确定按钮
    onSearch(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const { nickName, username } = this.searchForm;
          console.log(!nickName, !username);
          if (!nickName && !username) {
            console.log(!nickName, !username, "============");
            this.$message.warning("请至少输入一项进行查询");
          } else {
            this.findUsersByPage(this.searchForm);
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

    // 当前每页显示的条数变化的时候触发
    SizeChange(newsize) {
      // console.log("size",newsize);
      this.pageInfo.limit = newsize;
      this.findUsersByPage();
    },
    // 当前页码发生变化的时候触发
    CurrentChange(newcurrent) {
      // console.log("current",newcurrent);
      this.pageInfo.start = newcurrent;
      this.findUsersByPage();
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
