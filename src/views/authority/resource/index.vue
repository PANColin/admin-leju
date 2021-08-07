<template>
  <div>
    <el-card shadow="hover" :body-style="{ padding: '20px' }">
      <div slot="header">
        <el-button type="success" size="default" @click="initMenu"
          >初始化菜单</el-button
        >
        <el-button type="success" size="default" @click="addMenu"
          >新增菜单</el-button
        >
      </div>
      <el-table
        :data="menuList"
        style="width: 100%"
        row-key="id"
        border
        :tree-props="{ children: 'children' }"
        v-loading="loading"
      >
        <el-table-column
          align="left"
          fixed="left"
          prop="title"
          label="菜单名称"
          width="180"
        >
        </el-table-column>
        <el-table-column align="center" label="图标" width="80">
          <template slot-scope="scope">
            <i :class="scope.row.icon"></i>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="路由"
          width="160"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column align="center" prop="sort" label="排序">
        </el-table-column>
        <el-table-column align="center" prop="level" label="等级">
        </el-table-column>
        <el-table-column
          align="center"
          prop="permissionValue"
          label="权限标识"
          width="160"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="component"
          width="180"
          show-overflow-tooltip
          label="组件路径"
        >
        </el-table-column>
        <el-table-column align="center" label="是否可用" width="80">
          <template slot-scope="scope">
            <el-tag>{{ scope.row.status ? "可用" : "不可用" }}</el-tag>
          </template>
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
    </el-card>

    <copyright></copyright>
  </div>
</template>

<script>
import copyright from "@/components/copyright/index.vue";
import {
  findAllPermissions,
  saveInitMenus,
  update,
  remove,
  save
} from "@/api/menu/admin/index";
export default {
  name: "Resource",

  components: { copyright },
  data() {
    return {
      loading: false,
      menuList: []
    };
  },
  async created() {
    this.loading = true;
    const { success, message, data } = await findAllPermissions();
    if (!success) return this.$message.error(message);
    // data.menus.forEach(el => {
    //   el.meta = JSON.parse(el.meta);
    //   el.children.forEach(el => {
    //     el.meta = JSON.parse(el.meta);
    //   });
    // });
    // console.log(data);
    this.loading = false;
    this.checked(data.menus);
    this.menuList = data.menus;
    // console.log(this.menuList);
  },
  mounted() {},

  methods: {
    checked(data) {
      data.forEach(item => {
        if (item.hasOwnProperty("meta")) {
          item.meta = JSON.parse(item.meta);
        }
        //判断是否有孩子这个属性
        if (item.hasOwnProperty("children")) {
          if (item.children.length !== 0) {
            this.checked(item.children);
          } else {
            item.children.forEach(el => {
              el.meta = JSON.parse(el.meta);
            });
          }
        }
      });
    },
    // 初始化菜单
    initMenu() {},
    // 新增菜单
    addMenu() {}
  }
};
</script>

<style lang="scss" scoped></style>
