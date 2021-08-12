<template>
  <div>
    <!-- 防止闪烁 -->
    <el-card
      shadow="hover"
      :body-style="{ padding: '20px' }"
      v-if="orderBase.id"
    >
      <div class="row1">
        <el-steps
          v-if="orderBase.status !== 5"
          class="steps"
          :active="orderBase.status + 1"
          finish-status="success"
        >
          <el-step
            class="step-item"
            v-for="(item, index) in 5"
            :key="index"
            :title="index | statusText"
            :description="index <= orderBase.status ? statusTime(index) : ''"
          ></el-step>
        </el-steps>
      </div>
      <div class="row2">
        <h3>
          订单信息:<el-tag>{{ orderBase.status | statusText }}</el-tag>
        </h3>
        <el-row :gutter="20">
          <el-col :span="6" :offset="0"
            >订单金额:<span style="color:#f00"
              >￥{{ orderBase.totalAmount }}</span
            ></el-col
          >
          <el-col :span="6" :offset="0"
            >订单编号:{{ orderBase.orderSn }}</el-col
          >
          <el-col :span="6" :offset="0"
            >用户账号:{{ orderBase.memberUsername }}</el-col
          >
          <el-col :span="6" :offset="0">备注:{{ orderBase.note }}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" :offset="0">下单时间:{{ statusTime(0) }}</el-col>
          <el-col :span="6" :offset="0">付款时间:{{ statusTime(1) }}</el-col>
          <el-col :span="6" :offset="0">发货时间:{{ statusTime(2) }}</el-col>
          <el-col :span="6" :offset="0">收货时间:{{ statusTime(3) }}</el-col>
        </el-row>
      </div>
      <div class="row3">
        <h3>
          收货人信息
        </h3>
        <el-row :gutter="20">
          <el-col :span="6" :offset="0"
            >收货人:<span style="color:#f00">{{
              orderBase.receiverName
            }}</span></el-col
          >
          <el-col :span="6" :offset="0"
            >用户账号:{{ orderBase.memberUsername }}</el-col
          >
          <el-col :span="6" :offset="0"
            >手机号码:{{ orderBase.receiverPhone }}</el-col
          >
          <el-col :span="6" :offset="0"
            >邮政编码:{{ orderBase.receiverPostCode }}</el-col
          >
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="0"
            >地址:{{
              `${orderBase.receiverProvince}${orderBase.receiverCity}${orderBase.receiverRegion}`
            }}</el-col
          >
          <el-col :span="12" :offset="0"
            >详细地址:{{ orderBase.receiverDetailAddress }}</el-col
          >
        </el-row>
      </div>
      <div class="row4">
        <h3>商品信息</h3>
        <el-table :data="orderItems" border stripe>
          <el-table-column
            align="center"
            prop="productName"
            label="商品名称"
            fixed="left"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column align="center" label="商品图片">
            <template slot-scope="scope">
              <img
                :src="scope.row.productPic"
                alt=""
                width="120"
                height="120"
              />
            </template>
          </el-table-column>
          <el-table-column align="center" label="是否退货">
            <template slot-scope="scope">
              <el-tag :type="scope.row.isReturn ? 'danger' : 'info'">{{
                scope.row.isReturn ? "是" : "否"
              }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="productBrand"
            label="品牌"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="productPrice"
            label="价格"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="productQuantity"
            label="商品数量"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="giftGrowth"
            label="促销优惠金额"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="giftIntegration"
            label="运费金额"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="totalPrice"
            label="小计"
            fixed="right"
          ></el-table-column>
        </el-table>
      </div>
      <div class="row5">
        <h3>费用信息</h3>
        <el-row :gutter="20">
          <el-col :span="6" :offset="0"
            >运费总金额:<span style="color:#f00">{{
              totalGiftIntegration
            }}</span></el-col
          >
          <el-col :span="6" :offset="0"
            >订单总金额:<span style="color:#f00">{{
              orderBase.totalAmount
            }}</span></el-col
          >
          <el-col :span="6" :offset="0"
            >实际金额:<span style="color:#f00">{{
              orderBase.payAmount
            }}</span></el-col
          >
          <el-col :span="6" :offset="0"
            >促销优惠总金额:<span style="color:#f00">{{
              totalGiftGrowth
            }}</span></el-col
          >
        </el-row>
      </div>
      <div class="row6" v-if="orderBase.status === 1">
        <el-form
          :model="wuliuForm"
          ref="form"
          :rules="rules"
          label-width="80px"
          :inline="false"
          size="normal"
        >
          <el-row :gutter="20">
            <el-col :span="8" :offset="0">
              <el-form-item label="物流公司" prop="deliveryCompany">
                <el-select
                  v-model="wuliuForm.deliveryCompany"
                  name="deliveryCompany"
                  clearable
                  placeholder="物流公司"
                >
                  <el-option
                    v-for="(item, index) in wuliuList"
                    :key="index"
                    :label="item.lable"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="0">
              <el-form-item label="物流单号" size="normal" prop="deliverySn">
                <el-input
                  v-model.number="wuliuForm.deliverySn"
                  placeholder="亲输入物流单号"
                  size="normal"
                  clearable
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="0">
              <el-form-item>
                <el-button type="primary" @click="onSureSend"
                  >确认发货</el-button
                >
                <el-button @click="reset">重置</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="row7" v-if="orderBase.status >= 2 && orderBase.status !== 5">
        <h3>
          物流信息:{{
            `${orderBase.deliveryCompany} [${orderBase.deliverySn}]`
          }}
        </h3>
        <el-table :data="tableData" style="width: 100%" fit>
          <el-table-column label="日期" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="detailStatus"
            label="状态"
            show-overflow-tooltip
          ></el-table-column>

          <el-table-column label="备注" width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" v-if="scope.row.name">
                <p>姓名: {{ scope.row.name }}</p>
                <p>联系电话: {{ scope.row.phone }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">投递人:{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
        <div
          class="btm"
          v-if="orderBase.status === 2 && forceSendShow"
          style="text-align:center;margin:10px"
        >
          <el-popconfirm
            title="亲,您确定要强制确认收货吗？"
            @onConfirm="forceReciveOrder"
          >
            <el-button slot="reference" type="danger" round size="default"
              >强制确认收货</el-button
            >
          </el-popconfirm>
        </div>
        <div
          class="btm"
          v-if="orderBase.status === 3"
          style="text-align:center;margin:10px"
        >
          <el-popconfirm
            title="亲,您确定要关闭当前订单吗？"
            @onConfirm="closeOrder"
          >
            <el-button slot="reference" type="danger" round size="default"
              >关闭订单</el-button
            >
          </el-popconfirm>
        </div>
      </div>
    </el-card>

    <copyright></copyright>
  </div>
</template>

<script>
import copyright from "@/components/copyright/index.vue";
import {
  findOrdersByPage,
  finishOrder,
  orderDetail,
  receiveProductsForce,
  sendDone
} from "@/api/order/index";
export default {
  name: "orderDetail",
  components: { copyright },
  filters: {
    statusText(val) {
      if (val == 0) {
        return "待付款";
      } else if (val == 1) {
        return "待发货";
      } else if (val == 2) {
        return "已发货";
      } else if (val == 3) {
        return "已完成";
      } else if (val == 4) {
        return "已关闭";
      } else {
        return "无效订单";
      }
    }
  },
  computed: {
    // 运费总金额
    totalGiftIntegration() {
      return this.orderItems.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.giftIntegration;
      }, 0);
    },
    // 促销优惠总金额
    totalGiftGrowth() {
      return this.orderItems.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.giftGrowth;
      }, 0);
    },
    statusTime() {
      return function(val) {
        if (val == 0) {
          // console.log(this);
          return this.orderBase.createTime;
        } else if (val == 1) {
          return this.orderBase.paymentTime;
        } else if (val == 2) {
          return this.orderBase.deliveryTime;
        } else if (val == 3) {
          return this.orderBase.receiveTime;
        } else if (val == 4) {
          return this.orderBase.finishTime;
        } else {
          return "无效订单";
        }
      };
    }
  },
  data() {
    return {
      forceSendShow: true,
      // 物流信息详情：假数据
      tableData: [
        {
          date: "2021-05-02 21:16:58",
          detailStatus: "深圳市横岗速递营销部已收件",
          name: "王虎",
          phone: "18546378912"
        },
        {
          date: "2021-05-03 01:16:58",
          detailStatus: "离开深圳市 发往广州市"
        },
        {
          date: "2021-05-03 11:16:58",
          detailStatus: "到达广东速递物流公司广航中心处理中心（经转）"
        },
        {
          date: "2021-05-04 04:16:58",
          detailStatus: "呼和浩特市邮政速递物流分公司金川揽投部安排投递",
          name: "潘安",
          phone: "13356779954"
        }
      ],
      rules: {
        deliveryCompany: [
          { required: true, message: "请选择物流公司", trigger: "change" }
        ],
        deliverySn: [
          { required: true, message: "请输入物流单号", trigger: "blur" },
          { type: "number", message: "单号必须是数字类型", trigger: "blur" }
        ]
      },
      // 物流公司
      wuliuList: [
        {
          id: 1,
          lable: "顺丰快递",
          value: "顺丰快递"
        },
        {
          id: 2,
          lable: "韵达快递",
          value: "韵达快递"
        },
        {
          id: 3,
          lable: "中国邮政",
          value: "中国邮政"
        },
        {
          id: 4,
          lable: "申通快递",
          value: "申通快递"
        },
        {
          id: 5,
          lable: "中通快递",
          value: "中通快递"
        },
        {
          id: 6,
          lable: "极兔快递",
          value: "极兔快递"
        }
      ],
      orderBase: {},
      orderItems: [],
      wuliuForm: {}
    };
  },
  async created() {
    const id = this.$route.params.id;
    // console.log(id);
    const { success, data, message } = await orderDetail(id);
    if (!success) return this.$message.error(message);
    // console.log(data);
    data.orderDetail.orderBase.note ??= "无";
    data.orderDetail.orderBase.receiverPostCode ||= "无";
    this.orderBase = data.orderDetail.orderBase;
    this.orderItems = data.orderDetail.orderItems;
    this.judgeForce();
  },
  methods: {
    // 判断是否显示强势退货按钮
    judgeForce() {
      this.orderItems.forEach(element => {
        if (element.isReturn === 0) {
          this.forceSendShow = false;
        }
      });
    },
    // 强制确认收货
    async forceReciveOrder() {
      const orderId = this.orderBase.id;
      const { success, message } = await receiveProductsForce(orderId);
      if (!success) return this.$message.error(message);
      this.$message.success("强制确认收货成功");
      this.$router.go(0);
    },
    // 关闭订单
    async closeOrder() {
      const orderId = this.orderBase.id;
      const { success, message } = await finishOrder(orderId);
      if (!success) return this.$message.error(message);
      this.$message.success("关闭订单成功");
      this.$router.go(0);
    },
    //重置表单
    reset() {
      this.$refs.form.resetFields();
    },
    //确认发货
    onSureSend() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.wuliuForm.orderId = this.orderBase.id;
          // console.log(this.wuliuForm);
          const { success, message } = await sendDone(this.wuliuForm);
          if (!success) return this.$message.error(message);
          this.$message.success("确认发货成功");
          this.$router.go(0);
        } else {
          this.$message.warning("请注意输入的内容是否有误!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
