<template>
  <div class="dialog-detail">
    <el-dialog title="编辑用户" :visible.sync="dialogVisible">
      <el-form :model="adduserRoleForm" ref="adduserRoleForm" :rules="rules">
        <el-row :gutter="20">
          <el-col :span="24" :offset="0">
            <el-form-item
              label="用户名"
              :label-width="formLabelWidth"
              prop="username"
            >
              <el-input
                placeholder="请输入用户名称"
                v-model="adduserRoleForm.username"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" :offset="0">
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
          <el-col :span="24" :offset="0">
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
            <el-col :span="12" :offset="0">
              <upload-img
                listType="picture-card"
                @reciveImgSrc="handleImgSrc"
              />
            </el-col>
            <el-col
              :span="12"
              :offset="0"
              v-if="bigImg || adduserRoleForm.salt"
            >
              <img
                :style="
                  bigImg || adduserRoleForm.salt
                    ? 'width:165px;height:162px'
                    : ''
                "
                :src="bigImg ? bigImg : adduserRoleForm.salt"
                alt=""
              />
            </el-col>
          </el-form-item>
        </el-row>
        <el-row :gutter="20">
          <el-form-item
            label="用户角色"
            prop="roleIds"
            :label-width="formLabelWidth"
          >
            <el-col :span="24" :offset="0">
              <el-select
                @change="$forceUpdate()"
                multiple
                v-model="adduserRoleForm.roleIds"
                name="roleIds "
                clearable
                placeholder="用户角色"
              >
                <el-option
                  v-for="item in rolesList"
                  :key="item.id"
                  :label="item.roleName"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
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
    editRoles: {
      type: Object,
      default() {
        return {};
      }
    },
    bigImg: {
      type: String,
      default: ""
    }
  },
  computed: {},
  created() {
    this.showSelectVal();
  },
  mounted() {},
  data() {
    return {
      rolesList: [],
      adduserRoleForm: {
        salt: ""
      },
      dialogVisible: false, // 用于控制弹窗是否打开
      formLabelWidth: "130px",
      /**username
          nickName
          password
          roleIds */
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" }
        ],
        nickName: [
          { required: true, message: "用户昵称不能为空", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6到 10 个字符", trigger: "blur" }
        ],
        roleIds: [
          { required: true, message: "用户角色不能为空", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    async showSelectVal() {
      const { success, data, message } = await findAllRoles();
      if (!success) return this.$message.error(message);
      // console.log(data);
      this.rolesList = data.items.map(el => {
        return {
          id: el.id,
          roleName: el.roleName,
          value: el.id
        };
      });
    },
    // 处理子组件传来的结果
    handleImgSrc(e) {
      console.log(e);
      // 赋值
      this.adduserRoleForm.salt = e.url;
      console.log(this.adduserRoleForm);
    },
    clearAll() {
      // console.log(this.adduserRoleForm);
      this.adduserRoleForm = {
        salt: ""
      };
    },
    // 弹窗关闭的时候触发
    handleClose() {
      this.dialogVisible = false;
      console.log("关闭...");
    },
    // 执行保存
    doSave() {
      this.$refs.adduserRoleForm.validate(valid => {
        if (valid) {
          this.dialogVisible = false;
          // 关闭之后需要刷新列表
          //  如果成功之后,需要刷新父列表
          this.$emit("refrush", this.adduserRoleForm);
        } else {
          this.$message.warning("请检查是否输入有误");
          return false;
        }
      });
    },
    // 打开弹窗
    openDialog() {
      this.$nextTick(() => {
        if (this.editRoles.id) {
          console.log(this.editRoles.id);
          // this.adduserRoleForm = this.editRoles;
          // 深拷贝防止双向绑定页面表单会随着修改表单而变化
          this.adduserRoleForm = JSON.parse(JSON.stringify(this.editRoles));
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
