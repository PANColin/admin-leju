<template>
  <div class="dialog-detail">
    <el-dialog title="编辑用户" :visible.sync="dialogVisible">
      <el-form :model="addBrandForm" ref="adduserRoleForm" :rules="rules">
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-form-item
              label="用户名"
              :label-width="formLabelWidth"
              prop="username"
            >
              <el-input
                placeholder="请输入用户名称"
                v-model="addBrandForm.username"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-form-item
              label="用户昵称"
              :label-width="formLabelWidth"
              prop="nickName"
            >
              <el-input
                placeholder="请输入用户昵称"
                v-model.number="adduserRoleForm.nickName"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-form-item
              label="密码"
              :label-width="formLabelWidth"
              prop="password "
            >
              <el-input
                placeholder="请输入密码"
                v-model.number="adduserRoleForm.password"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="upload-row">
          <el-form-item label="头像" :label-width="formLabelWidth">
            <el-col :span="8" :offset="0">
              <img style="width:165px;height:162px" :src="bigImg" alt="" />
            </el-col>
            <el-col :span="8" :offset="0">
              <upload-img
                listType="picture-card"
                isWho="bigImg"
                @reciveImgSrc="handleImgSrc"
              />
            </el-col>
          </el-form-item>
        </el-row>
      
        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="doBrandSave">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import UploadImg from "@/components/UploadImg/UploadImg.vue";
import {
  findAllRoles,
  findRolePermissions,
  findRolesByPage,
  removeRole,
  saveRolePermissions,
  updateRolePermissions
} from "@/api/role/admin/index";
export default {
  components: { UploadImg },
  props: {
    editBrand: {
      type: Object,
      default() {
        return {};
      }
    },
    bigImg: {
      type: String,
      default: ""
    },
    logo: {
      type: String,
      default: ""
    }
  },
  computed: {},
  async created() {
    const { success, data, message } = await findAllRoles();
    if (!success) return this.$message.error(message);
    console.log(data);
    // this.brandList = data.items.map(el => {
    //   return {
    //     brandId: el.id,
    //     brandName: el.name,
    //     value: el.id
    //   };
  },
  mounted() {},
  data() {
    return {
      adduserRoleForm: {},
      dialogVisible: false, // 用于控制弹窗是否打开
      formLabelWidth: "130px",
      rules: {
        name: [
          { required: true, message: "品牌不能为空", trigger: "blur" },
          { min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur" }
        ],
        sort: [
          {
            type: "number",
            message: "类型必须是数字类型",
            trigger: "blur"
          }
        ],
        productCount: [
          {
            type: "number",
            message: "类型必须是数字类型",
            trigger: "blur"
          }
        ],
        firstLetter: [{ max: 1, message: "长度必须为一位", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 处理子组件传来的结果
    handleImgSrc(e) {
      console.log(e);
      // 赋值
      e.isWho === "bigImg"
        ? (this.addBrandForm.bigPic = e.url)
        : (this.addBrandForm.logo = e.url);
    },
    // 弹窗关闭的时候触发
    handleClose() {
      this.dialogVisible = false;
      console.log("关闭...");
    },
    // 执行保存
    doBrandSave() {
      this.$refs.addBrandForm.validate(valid => {
        if (valid) {
          this.dialogVisible = false;
          // 关闭之后需要刷新列表
          // 2. 如果成功之后,需要刷新父列表
          this.$emit("refrush", this.addBrandForm);
        } else {
          this.$message.warning("请检查是否输入有误");
          return false;
        }
      });
    },
    // 打开弹窗
    openDialog() {
      this.$nextTick(() => {
        if (this.editBrand.id) {
          // console.log("==================");
          this.addBrandForm = this.editBrand;
        }
      });
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped lang="scss">
.dialog-detail {
  .self-row {
    display: flex;
    flex-wrap: nowrap;
    flex: none;
    justify-content: space-around;
    align-items: center;
  }
  .upload-row {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: none;
  }
}
</style>
