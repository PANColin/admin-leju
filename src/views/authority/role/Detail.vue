<template>
  <div class="dialog-detail">
    <el-dialog title="编辑用户" :visible.sync="dialogVisible">
      <el-form :model="addRoleForm" ref="addRoleForm" :rules="rules">
        <el-row :gutter="20">
          <el-col :span="24" :offset="0">
            <el-form-item
              label="角色名称"
              :label-width="formLabelWidth"
              prop="roleName"
            >
              <el-input
                placeholder="请输入角色名称"
                v-model="addRoleForm.roleName"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" :offset="0">
            <el-form-item
              label="角色编码"
              :label-width="formLabelWidth"
              prop="roleCode"
            >
              <el-input
                placeholder="请输入角色编码"
                v-model="addRoleForm.roleCode"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" :offset="0">
            <el-form-item
              label="角色描述"
              prop="remark"
              :label-width="formLabelWidth"
            >
              <el-input
                type="textarea"
                :rows="3"
                placeholder="请输入角色描述"
                v-model.number="addRoleForm.remark"
              >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-form-item label="选择菜单" :label-width="formLabelWidth">
            <el-col :span="24" :offset="0">
              <el-row :gutter="20" class="self-item">
                <el-col :span="8" :offset="0">
                  <el-switch
                    style="display: block"
                    v-model="isExtend"
                    active-color="#13ce66"
                    inactive-color="#999"
                    active-text="展开"
                    inactive-text="关闭"
                    :active-value="true"
                    :inactive-value="false"
                    @change="menuChange"
                  >
                  </el-switch>
                </el-col>
                <el-col :span="8" :offset="0">
                  <el-switch
                    style="display: block"
                    v-model="isAll"
                    active-color="#13ce66"
                    inactive-color="#999"
                    active-text="全选"
                    inactive-text="取消全部权限"
                    :active-value="true"
                    :inactive-value="false"
                    @change="handleTreeChange"
                  >
                  </el-switch>
                </el-col>
              </el-row>
              <el-tree
                :data="menu"
                show-checkbox
                :default-expand-all="isExtend"
                node-key="id"
                ref="tree"
                highlight-current
                :props="defaultProps"
              >
              </el-tree>
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
import {
  findAllPermissions,
  saveInitMenus,
  update,
  remove,
  save
} from "@/api/menu/admin/index";
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
  async mounted() {
    const { success, data, message } = await findAllPermissions();
    if (!success) return this.$message.error(message);
    // console.log(data);
    this.menu = data.menus;
  },
  // watch: {
  //   editRoles: {
  //     handler(newVal, oldVal) {
  //       this.editRoles = newVal;
  //       // console.log(newVal);
  //     },
  //     immediate: true,
  //     deep: true
  //   }
  // },
  data() {
    return {
      //switch开关控制是否展开
      isExtend: false,
      isAll: false, //是否全选
      defaultProps: {
        children: "children",
        label: "title"
      },
      checkedKeys: [], //tree选中的key数组
      menu: [],
      // rolesList: [],
      addRoleForm: {},
      dialogVisible: false, // 用于控制弹窗是否打开
      formLabelWidth: "130px",
      /**
isDeleted (boolean, optional): 逻辑删除 1（true）已删除， 0（false）未删除 ,
permissionIds (Array[string], optional): 权限id集合 ,
remark (string, optional): 备注 ,
roleCode (string, optional): 角色编码 ,
roleName (string, optional): 角色名称 */
      rules: {
        roleName: [
          { required: true, message: "角色名称不能为空", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" }
        ],
        roleCode: [
          { required: true, message: "角色编码不能为空", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" }
        ],
        remark: [
          { required: true, message: "备注不能为空", trigger: "blur" },
          { min: 2, max: 80, message: "长度在 2到 80 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 全选反选
    handleTreeChange(e) {
      // console.log(e);
      this.isAll = e;
      if (this.isAll) {
        this.$refs.tree.setCheckedNodes(this.menu);
      } else {
        this.$refs.tree.setCheckedNodes([]);
      }
    },
    // switch开关控制是否展开
    menuChange(e) {
      // console.log(e);
      this.isExtend = e;
      // console.log(this.$refs.tree);
      for (var i = 0; i < this.$refs.tree.store._getAllNodes().length; i++) {
        this.$refs.tree.store._getAllNodes()[i].expanded = this.isExtend;
      }
    },
    clearAll() {
      this.addRoleForm = {};
      this.isAll = false;
      //立即执行，保证页面挂载之前可以操作dom
      this.$nextTick(() => {
        this.$refs.tree.setCheckedNodes([]);
      });
    },
    // 弹窗关闭的时候触发
    handleClose() {
      this.dialogVisible = false;
      // console.log("关闭...");
      // this.$refs.tree.setCheckedNodes([]);
    },
    getCheckedKey() {
      let parentArr = this.$refs.tree.getHalfCheckedKeys(); //通过 key 获取 半选中
      let childeArr = this.$refs.tree.getCheckedKeys(); //通过 key 获取 选中的
      let roleIds = childeArr.concat(parentArr); //全部选中的
      return roleIds;
    },
    // 执行保存
    doSave() {
      this.addRoleForm.permissionIds = this.getCheckedKey();
      this.$refs.addRoleForm.validate(valid => {
        if (valid) {
          this.dialogVisible = false;
          // 关闭之后需要刷新列表
          //  如果成功之后,需要刷新父列表
          this.$emit("refrush", this.addRoleForm);
        } else {
          this.$message.warning("请检查是否输入有误");
          return false;
        }
      });
    },
    //数据回显 检查对于权限
    checked(id, data) {
      //循环判断id是否相同、是否有子级
      data.forEach(item => {
        if (item.id === id) {
          //id相同，且没有子级的时候，将值赋值给tree
          if (item.children.length === 0) {
            this.checkedKeys.push(item);
          }
        } else {
          //否则将继续循环判断
          if (item.hasOwnProperty("children")) {
            if (item.children.length !== 0) {
              this.checked(id, item.children);
            }
          }
        }
      });
    },
    // 打开弹窗
    openDialog() {
      //再次进来需要清空checkedKeys ，避免重复添加
      this.checkedKeys = [];
      this.$nextTick(() => {
        if (this.editRoles.id) {
          // this.addRoleForm = this.editRoles;
          // 深拷贝防止双向绑定页面表单会随着修改表单而变化
          this.addRoleForm = JSON.parse(JSON.stringify(this.editRoles));
          // console.log(this.menu);
          this.editRoles.permissionIds?.forEach(item => {
            this.checked(item, this.menu);
          });
          // this.$refs.tree.setCheckedNodes(this.editRoles.permissionIds);
          this.$refs.tree.setCheckedNodes(this.checkedKeys);
          // console.log(this.$refs.tree.store._getAllNodes().length);
          // console.log(this.$refs.tree.getCheckedNodes(this.menu).length);
          // console.log(this.$refs.tree.getNode);
          //总长度暂时写死
          if (this.checkedKeys.length === 76) {
            this.isAll = true;
          } else {
            this.isAll = false;
          }
          // console.log(this.checkedKeys);
        }
      });
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped lang="scss">
.dialog-detail {
  ::v-deep .el-dialog {
    width: 60%;
  }
  .self-item {
    margin: 10px 0;
  }
}
</style>
