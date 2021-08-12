<template>
  <div>
    <el-card
      shadow="hover"
      :body-style="{ padding: '20px' }"
      v-if="orderReturnApply.id"
    >
      <div slot="header">
        <h2>退单详情</h2>
      </div>
      <div class="row1">
        <h3>
          订单信息:<el-tag>{{ orderReturnApply.status | statusText }}</el-tag>
        </h3>
        <el-row :gutter="20">
          <el-col :span="8" :offset="0"
            >退单人姓名:<span style="color:#f00">{{
              orderReturnApply.returnName
            }}</span></el-col
          >
          <el-col :span="8" :offset="0"
            >申请时间:<span style="color:#f00">{{
              orderReturnApply.createTime
            }}</span></el-col
          >
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" :offset="0"
            >订单编号:{{ orderReturnApply.orderSn }}
            <el-button type="text" size="default" @click="orderDetail"
              >查看订单详情</el-button
            >
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="24" :offset="0"
            >退单理由:{{ orderReturnApply.reason }}</el-col
          >
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" :offset="0"
            >退单描述:{{ orderReturnApply.description }}</el-col
          >
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <div>退单图片:</div>
            <img
              style="border:1px solid #999"
              :src="orderReturnApply.proofPics"
              alt=""
              width="200"
              height="150"
            />
          </el-col>
        </el-row>
      </div>
      <div class="row2">
        <h3>
          用户信息
        </h3>
        <el-row :gutter="20">
          <el-col :span="6" :offset="0"
            >联系人:<span style="color:#f00">{{
              orderReturnApply.memberUsername
            }}</span></el-col
          >
          <el-col :span="6" :offset="0"
            >联系电话:{{ orderReturnApply.returnPhone }}</el-col
          >
        </el-row>
      </div>
      <div class="row3">
        <h3>商品信息</h3>
        <el-table :data="returnItems" border stripe>
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
          <el-table-column align="center" label="商品属性">
            <template slot-scope="scope">
              <el-tag
                v-for="(item, index) in scope.row.productAttr"
                :key="index"
                >{{ item.key }}:{{ item.value }}</el-tag
              >
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
            prop="productCount"
            label="商品数量"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="productRealPrice"
            label="小计"
            fixed="right"
          ></el-table-column>
        </el-table>
      </div>
      <div class="row4">
        <h3>费用信息</h3>
        <el-row :gutter="20">
          <el-col :span="6" :offset="0"
            >运费总金额:<span style="color:#f00">0</span></el-col
          >
          <el-col :span="6" :offset="0"
            >退单金额:<span style="color:#f00">{{
              orderReturnApply.returnAmount
            }}</span></el-col
          >
        </el-row>
        <el-form
          v-if="orderReturnApply.status === 0"
          :model="handleForm"
          ref="form"
          :rules="rules"
          label-width="80px"
          :inline="false"
          size="normal"
        >
          <el-row :gutter="20">
            <el-col :span="8" :offset="0">
              <el-form-item label="退款金额" prop="returnAmount">
                <el-input v-model.number="handleForm.returnAmount"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="0">
              <el-form-item label="处理人" prop="handleMan">
                <el-input v-model.number="handleForm.handleMan"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="0">
              <el-form-item label="处理备注" prop="handleNote">
                <el-input v-model.number="handleForm.handleNote"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" :offset="0"
              ><el-form-item>
                <el-button type="primary" @click="onReturn('agree')"
                  >同意退款</el-button
                >
                <el-popconfirm
                  title="亲,您确定要拒绝退款吗？"
                  @onConfirm="onReturn('reject')"
                >
                  <el-button slot="reference" type="danger">拒绝退款</el-button>
                </el-popconfirm>
                <el-button @click="reset">重置</el-button>
              </el-form-item></el-col
            >
            <el-col :span="12" :offset="0"></el-col>
          </el-row>
        </el-form>
      </div>
      <div class="row6" v-if="orderReturnApply.status >= 1">
        <h3>处理结果</h3>
        <el-row :gutter="20">
          <el-col :span="6" :offset="0"
            >处理人:<span style="color:#f00">{{
              orderReturnApply.handleMan
            }}</span></el-col
          >
          <el-col :span="6" :offset="0"
            >处理备注:{{ orderReturnApply.handleNote }}</el-col
          >
          <el-col :span="6" :offset="0"
            >处理时间:{{ orderReturnApply.handleTime }}</el-col
          >
        </el-row>
        <el-form
          v-if="orderReturnApply.status === 1"
          :model="handleForm"
          ref="form"
          :rules="rules"
          label-width="80px"
          :inline="false"
          size="normal"
        >
          <el-row :gutter="20">
            <el-col :span="8" :offset="0">
              <el-form-item label="收货人" prop="receiveMan">
                <el-input v-model.number="handleForm.receiveMan"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="0">
              <el-form-item label="收货备注" prop="receiveNote">
                <el-input v-model="handleForm.receiveNote"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" :offset="0"
              ><el-form-item>
                <el-popconfirm
                  title="亲,您确定收到货物了吗？"
                  @onConfirm="onReturn('recive')"
                >
                  <el-button slot="reference" type="primary"
                    >确认收货</el-button
                  >
                </el-popconfirm>
                <el-button @click="reset">重置</el-button>
              </el-form-item></el-col
            >
            <el-col :span="12" :offset="0"></el-col>
          </el-row>
        </el-form>
      </div>
      <div class="row5" v-if="orderReturnApply.status === 2">
        <h3>收货信息</h3>
        <el-row :gutter="20">
          <el-col :span="6" :offset="0"
            >退单收货人:<span style="color:#f00">{{
              orderReturnApply.receiveMan
            }}</span></el-col
          >
          <el-col :span="6" :offset="0"
            >退单收货备注:{{ orderReturnApply.receiveNote }}</el-col
          >
          <el-col :span="6" :offset="0"
            >退单收货时间:{{ orderReturnApply.receiveTime }}</el-col
          >
        </el-row>
      </div>
    </el-card>
    <copyright></copyright>
  </div>
</template>

<script>
import copyright from "@/components/copyright/index.vue";
import {
  findReturnApply,
  agreeApply,
  receiveProduct,
  rejectApply,
  orderReturn
} from "@/api/orderReturn/index";
export default {
  name: "orderReturnDetail",
  components: { copyright },
  filters: {
    statusText(val) {
      if (val == 0) {
        return "待处理";
      } else if (val == 1) {
        return "退货中";
      } else if (val == 2) {
        return "已完成";
      } else if (val == 3) {
        return "已拒绝";
      } else {
        return "无效订单";
      }
    }
  },
  computed: {},
  data() {
    return {
      returnItems: [],

      rules: {
        handleMan: [
          { required: true, message: "请输入处理人姓名", trigger: "blur" }
        ],
        handleNote: [
          { required: true, message: "请输入备注", trigger: "blur" }
        ],
        receiveMan: [
          { required: true, message: "请输入收货人", trigger: "blur" }
        ],
        receiveNote: [
          { required: true, message: "请输入备注", trigger: "blur" }
        ],
        returnAmount: [
          { required: true, message: "请输入退款金额", trigger: "blur" },
          { type: "number", message: "必须是数字类型", trigger: "blur" }
        ]
      },
      orderReturnApply: {},

      handleForm: {}
    };
  },
  async created() {
    const id = this.$route.params.id;
    // console.log(id);
    const { success, data, message } = await orderReturn(id);
    if (!success) return this.$message.error(message);
    this.orderReturnApply = data.orderReturnApply;
    const product = {
      productId: this.orderReturnApply.productId,
      productName: this.orderReturnApply.productName,
      productPic: this.orderReturnApply.productPic,
      productBrand: this.orderReturnApply.productBrand,
      productPrice: this.orderReturnApply.productPrice,
      productAttr: JSON.parse(this.orderReturnApply.productAttr),
      productCount: this.orderReturnApply.productCount,
      productRealPrice: this.orderReturnApply.productRealPrice
    };
    this.returnItems.push(product);
    // console.log(data);
  },
  methods: {
    // 查看订单详情
    orderDetail() {
      this.$router.push({
        name: "orderDetail",
        params: { id: this.orderReturnApply.orderId }
      });
    },
    //重置表单
    reset() {
      this.$refs.form.resetFields();
    },

    //同意退款 // 拒绝退款 //确认收货
    onReturn(val) {
      // console.log(val);
      let api;
      if (val === "agree") {
        api = agreeApply;
      } else if (val === "reject") {
        api = rejectApply;
      } else {
        api = receiveProduct;
      }
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.handleForm.id = this.orderReturnApply.id;
          // console.log(this.handleForm);
          const { success, message } = await api(
            this.orderReturnApply.id,
            this.handleForm
          );
          if (!success) return this.$message.error(message);
          if (val === "agree") {
            this.$message.success("同意退款成功");
          } else if (val === "reject") {
            this.$message.success("拒绝退款成功");
          } else {
            this.$message.success("确认收货成功");
          }
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
