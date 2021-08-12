<template>
  <div class="dialog-detail">
    <el-dialog title="广告详情" :visible.sync="dialogVisible">
      <el-form :model="addBrandForm" ref="addBrandForm" :rules="rules">
        <el-row :gutter="20">
          <el-col :span="8" :offset="0">
            <el-form-item
              label="广告名称"
              :label-width="formLabelWidth"
              prop="name"
            >
              <el-input
                placeholder="请输入广告名称"
                v-model="addBrandForm.name"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8" :offset="0">
            <el-form-item
              label="备注"
              :label-width="formLabelWidth"
              prop="note"
            >
              <el-input
                placeholder="请输入备注"
                v-model="addBrandForm.note"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8" :offset="0">
            <el-form-item
              label="轮播位置"
              :label-width="formLabelWidth"
              prop="type "
            >
              <el-select
                v-model="addBrandForm.type"
                placeholder="轮播位置"
                clearable
                filterable
              >
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
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
                v-model.number="addBrandForm.sort"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8" :offset="0">
            <el-form-item
              label="产品数量"
              :label-width="formLabelWidth"
              prop="orderCount"
            >
              <el-input
                placeholder="请输入产品数量"
                v-model.number="addBrandForm.orderCount"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8" :offset="0">
            <el-form-item label="链接" :label-width="formLabelWidth" prop="url">
              <el-input
                type="url"
                placeholder="请输入链接"
                v-model.number="addBrandForm.url"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8" :offset="0">
            <el-form-item label="开始时间" :label-width="formLabelWidth">
              <!-- <el-date-picker
                :unlink-panels="true"
                v-model="timeValueArr"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker> -->
              <el-date-picker
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="addBrandForm.startTime"
                type="datetime"
                placeholder="选择日期时间"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :offset="0">
            <el-form-item label="结束时间" :label-width="formLabelWidth">
              <el-date-picker
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="addBrandForm.endTime"
                type="datetime"
                placeholder="选择日期时间"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :offset="0">
            <el-form-item
              label="上下线状态"
              size="normal"
              :label-width="formLabelWidth"
            >
              <el-switch
                v-model="addBrandForm.status"
                :active-value="0"
                :inactive-value="1"
              >
              </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" :offset="0">
            <el-form-item
              label="商品图片"
              size="normal"
              :label-width="formLabelWidth"
            >
              <upload-img
                :isFlex="true"
                :isShowImg="true"
                :imgSrcStr="brand.pic"
                listType="picture-card"
                @reciveImgSrc="handleRecivePic"
              ></upload-img>
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
import { addAds, delAds, adsList, updateAds } from "@/api/advertise/index";
import UploadImg from "@/components/UploadImg/UploadImg.vue";
export default {
  components: { UploadImg },
  computed: {},
  created() {},
  mounted() {},
  data() {
    return {
      addBrandForm: {},
      options: [
        { id: 1, label: "app首页轮播", value: 0 },
        { id: 2, label: "其他", value: 1 }
      ],
      brand: {},
      // timeValueArr: [],
      dialogVisible: false, // 用于控制弹窗是否打开
      formLabelWidth: "140px",
      rules: {
        name: [
          { required: true, message: "广告名不能为空", trigger: "blur" },
          { min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur" }
        ],
        sort: [
          {
            type: "number",
            message: "类型必须是数字类型",
            trigger: "blur"
          }
        ],
        orderCount: [
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
    handleRecivePic(e) {
      // console.log(e);
      this.addBrandForm.pic = e.url;
    },
    // 弹窗关闭的时候触发
    handleClose() {
      this.dialogVisible = false;
      // console.log("关闭...");
    },
    // 执行保存
    doSave() {
      console.log(this.addBrandForm);
      // this.addBrandForm.startTime = this.timeValueArr[0];
      // this.addBrandForm.endTime = this.timeValueArr[1];
      let api, msg;
      if (this.brand.id) {
        api = updateAds;
        msg = "修改成功";
      } else {
        api = addAds;
        msg = "添加成功";
      }
      this.$refs.addBrandForm.validate(async valid => {
        if (valid) {
          // this.dialogVisible = false;
          const { success, message } = await api(this.addBrandForm);
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
    // setEddTimer(item) {
    //   this.timeValueArr[0] = item.startTime;
    //   this.timeValueArr[1] = item.endTime;
    // },
    // 打开弹窗
    openDialog(val) {
      // console.log(val, "sbuAdd");
      this.$nextTick(() => {
        // 如果有开始限时的时间表示更新
        if (val?.id) {
          this.brand = val;
          this.addBrandForm = JSON.parse(JSON.stringify(val));
          // this.timeValueArr[0] = val.startTime;
          // this.timeValueArr[1] = val.endTime;
          // this.$set(this.timeValueArr, this.timeValueArr[0], val.startTime);
          // this.$set(this.timeValueArr, this.timeValueArr[1], val.endTime);
        } else {
          this.addBrandForm = {};
          this.brand = {};
          // if (val.name === "add") {
          //   this.timeValueArr = [];
          // }
        }
        // console.log(this.addBrandForm);
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
