<template>
  <div>
    <el-card
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
        label-width="80px"
        :inline="false"
        size="normal"
      >
        <el-row :gutter="20">
          <el-col :span="6" :offset="0">
            <el-form-item label="订单编号" prop="orderSn">
              <el-input
                v-model.trim="searchForm.orderSn"
                placeholder="请输入订单编号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0">
            <el-form-item label="订单类型" prop="orderType">
              <el-select
                v-model="searchForm.orderType"
                name="orderType"
                clearable
                placeholder="订单类型"
              >
                <el-option
                  v-for="(item, index) in orderTypeList"
                  :key="index"
                  :label="item.lable"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0">
            <el-form-item label="支付方式" prop="payType">
              <el-select
                v-model="searchForm.payType"
                name="payType"
                clearable
                placeholder="支付方式"
              >
                <el-option
                  v-for="item in payTypeList"
                  :key="item.id"
                  :label="item.lable"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0">
            <el-form-item label="订单状态" prop="status">
              <el-select
                v-model="searchForm.status"
                name="status"
                clearable
                placeholder="订单状态"
              >
                <el-option
                  v-for="(item, index) in statusList"
                  :key="index"
                  :label="item.lable"
                  :value="item.value"
                >
                </el-option>
              </el-select>
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

    <el-card>
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        border
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
          prop="orderSn"
          label="订单编号"
          show-overflow-tooltip
          width="180"
        />

        <el-table-column align="center" label="支付方式" width="110">
          <template slot-scope="scope">
            <el-tag :type="scope.row.payType == 0 ? 'info' : 'success'">
              {{
                scope.row.payType == 0
                  ? "未支付"
                  : scope.row.payType == 1
                  ? "支付宝"
                  : "微信"
              }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" label="订单状态" width="160">
          <template slot-scope="scope">
            <el-tag type="danger" effect="dark" v-if="scope.row.status == 0">
              待付款
            </el-tag>
            <el-tag type="warning" effect="light" v-if="scope.row.status == 1">
              待发货
            </el-tag>
            <el-tag type="info" effect="plain" v-if="scope.row.status == 2">
              已发货
            </el-tag>
            <el-tag type="success" effect="dark" v-if="scope.row.status == 3">
              已完成
            </el-tag>
            <el-tag type="danger" effect="dark" v-if="scope.row.status == 4">
              已关闭
            </el-tag>
            <el-tag type="danger" effect="dark" v-if="scope.row.status == 5">
              无效订单
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="createTime"
          label="添加时间"
          width="160"
        />
        <el-table-column
          align="center"
          prop="memberUsername"
          label="用户账号"
          width="160"
        />
        <el-table-column align="center" label="订单类型" width="110">
          <template slot-scope="scope">
            <el-tag :type="scope.row.payType == 0 ? 'success' : 'danger'">
              {{ scope.row.payType == 0 ? "正常订单" : "秒杀订单" }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="note"
          show-overflow-tooltip
          label="备注"
          width="160"
        />

        <el-table-column
          align="center"
          prop="modifyTime"
          label="修改时间"
          width="160"
        />
        <el-table-column
          label="操作"
          width="160px"
          align="center"
          fixed="right"
        >
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-view"
              size="mini"
              @click="checkOrder(scope.row)"
              >查看订单</el-button
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
  findOrdersByPage as findOrdersByPageAPI,
  finishOrder,
  orderDetail,
  receiveProductsForce,
  sendDone
} from "@/api/order/index";
export default {
  name: "orderList",

  components: { copyright },

  data() {
    return {
      loading: false,
      //是否显示条件介绍卡片
      isShowDec: false,
      //是否显示条件查询卡片
      isShow: false,
      list: [],
      pageInfo: {
        start: 1,
        limit: 10
      },
      // 搜索部分选择的订单类型列表
      orderTypeList: [
        { id: 1, lable: "正常订单", value: "0" },
        { id: 2, lable: "秒杀订单", value: "1" }
      ],
      // 搜索部分选择的支付类型状态列表
      payTypeList: [
        { id: 1, lable: "未支付", value: "0" },
        { id: 2, lable: "支付宝", value: "1" },
        { id: 3, lable: "微信", value: "2" }
      ],
      // 搜索部分选择的订单状态列表
      statusList: [
        {
          id: 1,
          lable: "待付款",
          value: "0"
        },
        {
          id: 2,
          lable: "待发货",
          value: "1"
        },
        {
          id: 3,
          lable: "已发货",
          value: "2"
        },
        {
          id: 4,
          lable: "已完成",
          value: "3"
        },
        {
          id: 5,
          lable: "已关闭",
          value: "4"
        },
        {
          id: 6,
          lable: "无效订单",
          value: "5"
        }
      ],
      searchForm: {
        orderSn: "",
        orderType: "",
        payType: "",
        status: ""
      },
      total: 0
    };
  },

  async mounted() {
    this.findOrdersByPage();
  },

  methods: {
    //查看订单
    checkOrder(item) {
      console.log(item);
      this.$router.push({ name: "orderDetail", params: { id: item.id } });
    },
    // 条件查询取消按钮
    onCancle(formName) {
      this.$refs[formName].resetFields();
      this.findOrdersByPage();
    },
    // 条件查询确定按钮
    onSearch(formName) {
      console.log(formName);
      this.findOrdersByPage();
      // 重置分页数据
      this.pageInfo.start = 1;
      this.pageInfo.limit = 10;
    },
    //图片加载错误回调
    handleError(val) {
      // console.log(val)
      // console.log('error')
      val.icon =
        "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
    },
    async findOrdersByPage() {
      this.loading = true;
      const res = await findOrdersByPageAPI(
        this.pageInfo.start,
        this.pageInfo.limit,
        this.searchForm
      );
      if (!res.success) return this.$message.error(res.message);
      this.loading = false;
      // console.log(res);
      this.total = res.data.total;
      this.list = res.data.rows;
      res.data.rows.forEach(el => {
        // console.log(el)
        el.icon ||=
          "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
      });
    },
    // 当前每页显示的条数变化的时候触发
    SizeChange(newsize) {
      // console.log("size",newsize);
      this.pageInfo.limit = newsize;
      this.findOrdersByPage();
    },
    // 当前页码发生变化的时候触发
    CurrentChange(newcurrent) {
      // console.log("current",newcurrent);
      this.pageInfo.start = newcurrent;
      this.findOrdersByPage();
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
