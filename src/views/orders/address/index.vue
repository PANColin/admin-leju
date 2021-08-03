<template>
  <div>
    <el-card style="width:95%;margin: 20px auto;">
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
          width="160"
        />
        <el-table-column align="center" label="默认发货地址" width="180">
          <template slot-scope="scope">
            <el-switch
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

  components: { copyright },

  data() {
    return {
      loading: false,
      list: []
    };
  },

  async mounted() {
    this.addressList();
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
    //图片加载错误回调
    handleError(val) {
      // console.log(val)
      // console.log('error')
      val.icon =
        "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
    },
    async addressList() {
      this.loading = true;
      const res = await addressListAPI();
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
