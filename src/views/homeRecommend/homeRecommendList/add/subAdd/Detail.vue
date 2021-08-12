<template>
  <div class="dialog-detail">
    <el-dialog title="编辑限时活动" :visible.sync="dialogVisible">
      <el-form :model="addHForm" ref="addHForm" :rules="rules">
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-form-item
              label="品牌名称"
              :label-width="formLabelWidth"
              prop="brandName"
            >
              <el-input
                disabled
                placeholder="请输入品牌名称"
                v-model="addHForm.brandName"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item
              label="商品名称"
              :label-width="formLabelWidth"
              prop="name"
            >
              <el-input
                disabled
                placeholder="请输入商品名称"
                v-model="addHForm.name"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8" :offset="0">
            <el-form-item
              label="排序"
              :label-width="formLabelWidth"
              prop="sort"
            >
              <el-input
                placeholder="请输入排序大小(数字越大越靠前)"
                v-model.number="addHForm.sort"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8" :offset="0">
            <el-form-item
              label="促销价格"
              :label-width="formLabelWidth"
              prop="promotionPrice"
            >
              <el-input
                placeholder="请输入促销价格"
                v-model.number="addHForm.promotionPrice"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8" :offset="0">
            <el-form-item
              label="活动限购数量"
              :label-width="formLabelWidth"
              prop="promotionPerLimit"
            >
              <el-input
                placeholder="请输入活动限购数量"
                v-model.number="addHForm.promotionPerLimit"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="16" :offset="0">
            <el-form-item label="期限" :label-width="formLabelWidth">
              <el-date-picker
                v-model="timeValueArr"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :offset="0">
            <el-form-item label="商品图片" size="normal">
              <img
                style="width:165px;height:162px"
                :src="addHForm.pic"
                alt=""
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="doSave">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  addRecommend,
  delRecommend,
  findAllRecommends as findAllRecommendsAPI,
  updateRecommend,
  homeRecommend
} from "@/api/homeRecommend/index";
export default {
  components: {},
  computed: {},
  created() {},
  mounted() {},
  data() {
    return {
      addHForm: {},
      product: {},
      timeValueArr: [],
      dialogVisible: false, // 用于控制弹窗是否打开
      formLabelWidth: "140px",
      rules: {
        sort: [
          {
            type: "number",
            message: "类型必须是数字类型",
            trigger: "blur"
          }
        ],
        promotionPrice: [
          {
            type: "number",
            message: "类型必须是数字类型",
            trigger: "blur"
          }
        ],
        promotionPerLimit: [
          {
            type: "number",
            message: "类型必须是数字类型",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 弹窗关闭的时候触发
    handleClose() {
      this.dialogVisible = false;
      // console.log("关闭...");
    },
    // 执行保存
    doSave() {
      this.addHForm.promotionStartTime = this.timeValueArr[0];
      this.addHForm.promotionEndTime = this.timeValueArr[1];
      this.addHForm.type = 0;
      let api, msg;
      if (this.product.promotionStartTime) {
        this.addHForm.productId = this.addHForm.productId;
        api = updateRecommend;
        msg = "修改限时品牌商品成功";
      } else {
        this.addHForm.productId = this.addHForm.id;
        api = addRecommend;
        msg = "添加限时品牌商品成功";
      }
      this.$refs.addHForm.validate(async valid => {
        if (valid) {
          // this.dialogVisible = false;
          const { success, message } = await api(this.addHForm);
          if (!success) return this.$message.error(message);
          this.$message.success(msg);
          // this.$router.replace({ path: "/homeRecommend" });
          // 刷新
          this.$router.go(0);
        } else {
          this.$message.warning("请检查是否输入有误");
          return false;
        }
      });
    },
    // 打开弹窗
    openDialog(val) {
      // console.log(val, "sbuAdd");
      this.product = val;
      this.$nextTick(() => {
        this.addHForm = JSON.parse(JSON.stringify(val));
        // 如果有开始限时的时间表示更新
        if (val.promotionStartTime) {
          this.timeValueArr[0] = val.promotionStartTime;
          this.timeValueArr[1] = val.promotionEndTime;
        }
        // console.log(this.addHForm);
      });
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped lang="scss">
.dialog-detail {
  ::v-deep .el-dialog {
    width: 75%;
  }
  .self-row {
    // display: flex;
    // flex-wrap: nowrap;
    // flex: none;
    // justify-content: space-around;
    // align-items: center;
    .el-switch {
      margin-top: 10px;
    }
  }
  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: none;
  }
}
</style>
