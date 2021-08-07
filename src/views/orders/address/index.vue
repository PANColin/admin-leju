<template>
  <div>
    <detail ref="editAddress" :editAddress="editAddress" @refrush="getList" />
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
          prop="addressName"
          label="地址名称"
          width="180"
          show-overflow-tooltip
        />
        <el-table-column align="center" label="默认发货地址" width="180">
          <template slot-scope="scope">
            <el-switch
              @change="changeSendDefault($event, scope.row)"
              v-model="scope.row.sendStatus"
              active-color="#13ce66"
              inactive-color="#999"
              active-text="是"
              inactive-text="否"
              :active-value="1"
              :inactive-value="0"
            >
            </el-switch>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="name"
          label="收货人姓名"
          width="160"
        />
        <el-table-column
          align="center"
          prop="phone"
          label="收货人电话"
          width="180"
        />
        <el-table-column align="center" prop="sort" label="排序" width="100" />

        <el-table-column
          align="center"
          label="收货人地址"
          show-overflow-tooltip
          width="210"
        >
          <template slot-scope="scope">
            <el-tag type="info">
              {{
                scope.row.city +
                  scope.row.province +
                  scope.row.region +
                  scope.row.detailAddress
              }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" label="默认收货地址" width="180">
          <template slot-scope="scope">
            <el-switch
              @change="changeReciveDefault($event, scope.row)"
              v-model="scope.row.receiveStatus"
              active-color="#13ce66"
              inactive-color="#999"
              active-text="是"
              inactive-text="否"
              :active-value="1"
              :inactive-value="0"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="createTime"
          label="创建时间"
          width="180"
        />
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
import copyright from "@/components/copyright/index.vue";
import Detail from "./Detail.vue";
import {
  addressList as addressListAPI,
  save,
  setReceiveOne,
  setSendOne,
  update,
  deleteAddress,
  addressDetail
} from "@/api/address/index";
export default {
  name: "Address",

  components: { copyright, Detail },

  data() {
    return {
      editAddress: {},
      loading: false,
      list: []
    };
  },

  async mounted() {
    this.addressList();
  },

  methods: {
    async changeSendDefault(e, item) {
      const { success, message } = await setSendOne({ id: item.id, status: e });
      if (!success) return this.$message.error(message);
      //重新获取列表
      this.addressList();
      this.$message.success("切换状态成功");
      // console.log(e, item);
    },
    async changeReciveDefault(e, item) {
      const { success, message } = await setReceiveOne({
        id: item.id,
        status: e
      });
      if (!success) return this.$message.error(message);
      //重新获取列表
      this.addressList();
      this.$message.success("切换状态成功");
      // console.log(e, item);
    },
    // 新增
    add() {
      this.editAddress = {};
      this.$refs.editAddress.openDialog();
    },
    // 点击确认按钮刷新列表
    async getList(e) {
      console.log(e);
      // console.log("执行刷新");
      // 有id 表示编辑否则添加
      let api = e.id ? update : save;

      const { success, message } = await api(e);
      if (!success) return this.$message.error(message);
      this.$message.success("保存成功");
      //刷新列表
      this.addressList();
    },
    // 编辑
    async edit(item) {
      //下拉框数据回显
      this.editAddress = item;
      this.$refs.editAddress.openDialog();
    },
    // 删除
    async del(item) {
      // console.log(item);
      const { success, message } = await deleteAddress(item.id);
      if (!success) return this.$message.error(message);
      this.$message.success("删除成功");
      this.addressList();
    },
    async addressList() {
      this.loading = true;
      const res = await addressListAPI();
      // console.log(res);
      if (!res.success) return this.$message.error(res.message);
      this.loading = false;
      this.list = res.data.items;
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
