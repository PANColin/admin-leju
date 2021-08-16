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
        <el-table-column align="center" label="退单状态" width="160">
          <template slot-scope="scope">
            <el-tag type="danger" effect="dark" v-if="scope.row.status == 0">
              待处理
            </el-tag>
            <el-tag type="warning" effect="light" v-if="scope.row.status == 1">
              退货中
            </el-tag>
            <el-tag type="success" effect="dark" v-if="scope.row.status == 2">
              已完成
            </el-tag>
            <el-tag type="danger" effect="dark" v-if="scope.row.status == 3">
              已拒绝
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="description"
          show-overflow-tooltip=""
          label="描述"
          width="160"
        />
        <el-table-column
          align="center"
          prop="reason"
          show-overflow-tooltip=""
          label="退货原因"
          width="160"
        />

        <el-table-column
          align="center"
          prop="productName"
          show-overflow-tooltip
          label="商品名称"
          width="160"
        />
        <el-table-column align="center" label="商品属性" width="160">
          <template slot-scope="scope">
            <el-tag
              :type="index == 0 ? 'success' : 'warning'"
              v-for="(item, index) in scope.row.productAttr"
              :key="index"
            >
              {{ item.key }}:{{ item.value }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="handleMan"
          label="处理人"
          width="160"
        />
        <el-table-column
          align="center"
          prop="handleNote"
          label="商家备注"
          width="160"
        />

        <el-table-column
          align="center"
          prop="handleTime"
          label="处理时间"
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
// import copyright from "@/components/copyright/index.vue";
import {
  findReturnApply as findReturnApplyAPI,
  agreeApply,
  receiveProduct,
  rejectApply,
  orderReturn
} from "@/api/orderReturn/index";
export default {
  name: "returnsList",

  components: { },

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
      // 搜索部分选择的订单状态列表
      statusList: [
        {
          id: 1,
          lable: "待处理",
          value: "0"
        },
        {
          id: 2,
          lable: "退货中",
          value: "1"
        },
        {
          id: 3,
          lable: "已完成",
          value: "2"
        },
        {
          id: 4,
          lable: "已拒绝",
          value: "3"
        }
      ],
      searchForm: {
        orderSn: "",
        status: ""
      },
      total: 0
    };
  },

  async mounted() {
    this.findReturnApply();
  },

  methods: {
    //查看订单
    checkOrder(item) {
      // console.log(item);
      this.$router.push({ name: "orderReturnDetail", params: { id: item.id } });
    },
    // 条件查询取消按钮
    onCancle(formName) {
      this.$refs[formName].resetFields();
      this.findReturnApply();
    },
    // 条件查询确定按钮
    onSearch(formName) {
      // console.log(formName);
      this.findReturnApply();
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
    async findReturnApply() {
      this.loading = true;
      const res = await findReturnApplyAPI(
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
        el.productAttr = JSON.parse(el.productAttr);
        el.icon ||=
          "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
      });
    },
    // 当前每页显示的条数变化的时候触发
    SizeChange(newsize) {
      // console.log("size",newsize);
      this.pageInfo.limit = newsize;
      this.findReturnApply();
    },
    // 当前页码发生变化的时候触发
    CurrentChange(newcurrent) {
      // console.log("current",newcurrent);
      this.pageInfo.start = newcurrent;
      this.findReturnApply();
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
