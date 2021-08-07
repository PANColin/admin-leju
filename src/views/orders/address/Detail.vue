<template>
  <div class="dialog-detail">
    <el-dialog title="编辑地址" :visible.sync="dialogVisible">
      <el-form :model="editAddressForm" ref="editAddressForm" :rules="rules">
        <el-row :gutter="20">
          <el-col :span="24" :offset="0">
            <el-form-item
              label="地址名称"
              :label-width="formLabelWidth"
              prop="addressName"
            >
              <el-col :span="24" :offset="0">
                <el-input
                  placeholder="请输入地址名称"
                  v-model.number="editAddressForm.addressName"
                  autocomplete="off"
                />
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" :offset="0">
            <el-form-item
              label="发货人姓名"
              :label-width="formLabelWidth"
              prop="name"
            >
              <el-input
                placeholder="请输入发货人姓名"
                v-model.number="editAddressForm.name"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" :offset="0">
            <el-form-item
              label="发货人手机号"
              :label-width="formLabelWidth"
              prop="phone"
            >
              <el-input
                placeholder="请输入发货人手机号"
                v-model.number="editAddressForm.phone"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" :offset="0">
            <el-form-item
              label="邮政编码"
              :label-width="formLabelWidth"
              prop="postCode "
            >
              <el-input
                placeholder="请输入邮政编码"
                v-model.number="editAddressForm.postCode"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-form-item label="收货地址" :label-width="formLabelWidth">
            <el-col :span="24" :offset="0">
              <el-cascader
                size="large"
                :options="reciveOptions"
                v-model="selectedRecive"
                @change="handleReciveChange"
              >
              </el-cascader>
            </el-col>
          </el-form-item>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" :offset="0">
            <el-form-item label="详细地址" :label-width="formLabelWidth">
              <el-input
                placeholder="请输入详细地址"
                v-model.number="editAddressForm.detailAddress"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="doSave">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { regionData, CodeToText } from "element-china-area-data";
export default {
  components: {},
  props: {
    editAddress: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {},
  created() {},
  mounted() {},
  data() {
    var checkphone = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入手机号"));
      } else if (!this.isCellPhone(value)) {
        //引入methods中封装的检查手机格式的方法
        callback(new Error("请输入正确的手机号!"));
      } else {
        callback();
      }
    };
    return {
      rules: {
        addressName: [
          { required: true, message: "地址名不能为空", trigger: "blur" },
          { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "发货人不能为空", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" }
        ],
        //自定义校验规则
        phone: [{ required: true, validator: checkphone, trigger: "blur" }],
        postCode: [
          { type: "number", message: "邮政编码必须是数字类型", trigger: "blur" }
        ]
      },
      reciveOptions: regionData,
      selectedRecive: [],
      editAddressForm: {},
      dialogVisible: false, // 用于控制弹窗是否打开
      formLabelWidth: "130px"
    };
  },
  methods: {
    //检查手机号
    isCellPhone(val) {
      if (!/^1(3|4|5|6|7|8)\d{9}$/.test(val)) {
        return false;
      } else {
        return true;
      }
    },
    handleReciveChange(value) {
      // console.log(value);
      this.editAddressForm.province = CodeToText[value[0]];
      this.editAddressForm.city = CodeToText[value[1]];
      this.editAddressForm.region = CodeToText[value[2]];
      this.editAddressForm.cityCode = value.join(",");
      // console.log(this.editAddressForm);
    },
    handleSendChange(value) {
      this.editAddressForm.addressName =
        CodeToText[value[0]] + CodeToText[value[1]] + CodeToText[value[2]];
      // console.log(this.editAddressForm);
    },
    // 弹窗关闭的时候触发
    handleClose() {
      this.dialogVisible = false;
      console.log("关闭...");
    },
    // 执行保存
    doSave() {
      this.$refs.editAddressForm.validate(valid => {
        if (valid) {
          this.dialogVisible = false;
          // 关闭之后需要刷新列表
          //  如果成功之后,需要刷新父列表
          this.$emit("refrush", this.editAddressForm);
        } else {
          this.$message.warning("请检查是否输入有误");
          return false;
        }
      });
    },
    // 打开弹窗
    openDialog() {
      this.$nextTick(() => {
        if (this.editAddress.id) {
          // console.log(this.editAddress);
          this.selectedRecive = this.editAddress?.cityCode?.split(",");
          // 直接赋值为浅拷贝
          // this.editAddressForm = this.editAddress;
          // 深拷贝
          this.editAddressForm = JSON.parse(JSON.stringify(this.editAddress));
        } else {
          this.editAddressForm = {};
          this.selectedRecive = [];
        }
      });
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped lang="scss">
.dialog-detail {
  .el-dialog {
    width: 60%;
  }
}
</style>
