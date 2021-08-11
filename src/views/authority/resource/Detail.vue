<template>
  <div class="dialog-detail">
    <el-dialog
      title="资源管理"
      :visible.sync="dialogVisible"
      :custom-class="init ? 'init' : ''"
    >
      <div class="init" v-if="init">
        <el-alert title="请谨慎操作! 初始化菜单会覆盖之前记录!" type="warning">
        </el-alert>
        <el-row :gutter="20">
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
            </el-row>
            <el-tree
              :data="menu"
              :default-expand-all="isExtend"
              node-key="id"
              ref="tree"
              highlight-current
              :props="defaultProps"
            >
            </el-tree>
          </el-col>
        </el-row>
      </div>
      <div class="addMenu" v-else>
        <el-form :model="addResourceForm" ref="addResourceForm" :rules="rules">
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-form-item
                label="菜单类型"
                size="normal"
                :label-width="formLabelWidth"
              >
                <el-radio-group v-model="radio">
                  <el-radio :label="0">顶级目录</el-radio>
                  <el-radio :label="1">菜单</el-radio>
                  <el-radio :label="2">按钮</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20" v-if="radio == 1 || radio == 2">
            <el-col :span="24" :offset="0">
              <el-form-item
                :label="radio == 1 ? '上级菜单' : '所在页面'"
                size="normal"
                :label-width="formLabelWidth"
                prop="pid"
              >
                <el-cascader
                  :props="{
                    value: 'id',
                    label: 'title',
                    checkStrictly: true,
                    disabled: 'hiden'
                  }"
                  v-model="addResourceForm.pid"
                  :options="menu"
                  clearable
                ></el-cascader>
              </el-form-item>
            </el-col>
          </el-row>
          <div v-if="radio != 2">
            <el-row :gutter="20">
              <el-col :span="24" :offset="0">
                <el-form-item
                  label="路由名称"
                  :label-width="formLabelWidth"
                  prop="name"
                >
                  <el-input
                    placeholder="前端路由name,唯一"
                    v-model="addResourceForm.name"
                    autocomplete="off"
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24" :offset="0">
                <el-form-item
                  label="路径"
                  :label-width="formLabelWidth"
                  prop="path"
                >
                  <el-input
                    placeholder="前端路由path，忽略父节点路径"
                    v-model.trim="addResourceForm.path"
                    autocomplete="off"
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24" :offset="0">
                <el-form-item
                  label="组件路径"
                  prop="component"
                  :label-width="formLabelWidth"
                >
                  <el-input
                    placeholder="前端路由组件路径,例如@/views/..."
                    v-model.trim="addResourceForm.component"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24" :offset="0">
                <el-form-item
                  label="重定向"
                  :label-width="formLabelWidth"
                  prop="redirect"
                >
                  <el-input
                    placeholder="redirect属性"
                    v-model.trim="addResourceForm.redirect"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
          <div v-if="radio == 2">
            <el-row :gutter="20">
              <el-col :span="24" :offset="0">
                <el-form-item
                  label="按钮名称"
                  :label-width="formLabelWidth"
                  prop="title"
                >
                  <el-input
                    placeholder="title属性"
                    v-model.trim="addResourceForm.title"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24" :offset="0">
                <el-form-item
                  label="权限标识"
                  :label-width="formLabelWidth"
                  prop="permissionValue"
                >
                  <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="按钮权限标识,比如: productList.list"
                    v-model.trim="addResourceForm.permissionValue"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-form-item
                label="排序"
                :label-width="formLabelWidth"
                prop="sort"
              >
                <el-input
                  placeholder="排序，数值越大越靠前"
                  v-model.number="addResourceForm.sort"
                >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :offset="0" v-if="radio == 1 || radio == 2">
              <el-form-item
                label="层级"
                :label-width="formLabelWidth"
                prop="level"
              >
                <el-input
                  placeholder="层级"
                  v-model.number="addResourceForm.level"
                >
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8" :offset="0">
              <el-form-item
                label="是否隐藏"
                size="normal"
                :label-width="formLabelWidth"
              >
                <el-switch
                  style="display: block;margin-top:10px"
                  v-model="addResourceForm.hidden"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  :active-value="1"
                  :inactive-value="0"
                  active-text="是"
                  inactive-text="否"
                >
                </el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="0">
              <el-form-item
                label="是否展开"
                size="normal"
                :label-width="formLabelWidth"
              >
                <el-switch
                  style="display: block;margin-top:10px"
                  v-model="addResourceForm.alwaysShow"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  :active-value="1"
                  :inactive-value="0"
                  active-text="是"
                  inactive-text="否"
                >
                </el-switch>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20" v-if="radio != 2">
            <el-form-item
              label="meta属性"
              size="normal"
              :label-width="formLabelWidth"
            >
              <el-button type="primary" size="default" @click="addMeta"
                >新增</el-button
              >
              <el-table :data="addMetaList" border stripe>
                <el-table-column
                  type="index"
                  label="序号"
                  width="80"
                  align="center"
                  fixed="left"
                ></el-table-column>
                <el-table-column label="meta的key" width="160" align="center">
                  <template slot-scope="scope">
                    <el-input
                      v-model="scope.row.key"
                      placeholder="meta的key"
                      size="normal"
                      clearable
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="meta的value" width="160" align="center">
                  <template slot-scope="scope">
                    <el-input
                      v-model="scope.row.value"
                      placeholder="meta的value"
                      size="normal"
                      clearable
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="160"
                  align="center"
                  fixed="right"
                >
                  <template slot-scope="scope">
                    <div>
                      <el-popconfirm
                        title="亲,您确定要删除吗？"
                        @onConfirm="delSkuLocle(scope.$index, scope.row)"
                      >
                        <el-button
                          style="color:#f00"
                          type="text"
                          size="default"
                          slot="reference"
                          >删除</el-button
                        >
                      </el-popconfirm>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </el-form-item>
          </el-row>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="doSave" v-if="!init">确 定</el-button>
        <el-popconfirm
          v-if="init"
          title="亲,您确定初始化菜单吗？"
          @onConfirm="initMenu"
        >
          <el-button slot="reference" type="primary">初始化菜单</el-button>
        </el-popconfirm>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import UploadImg from "@/components/UploadImg/UploadImg.vue";
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
    }
  },
  computed: {},
  async mounted() {
    const { success, data, message } = await findAllPermissions();
    if (!success) return this.$message.error(message);
    // console.log(data);
    this.menu = data.menus;
  },
  data() {
    return {
      init: false, //是否点击初始化菜单
      radio: 0,
      //switch开关控制是否展开
      isExtend: false,
      isAll: false, //是否全选
      defaultProps: {
        children: "children",
        label: "title"
      },
      addMetaList: [
        { key: "title", value: "更多" },
        { key: "icon", value: "el-icon-more" }
      ],
      menu: [],
      addResourceForm: {},
      dialogVisible: false, // 用于控制弹窗是否打开
      formLabelWidth: "130px",
      /**
       * pid
        name
        path
        component
        redirect
        title
        permissionValue
        sort
        level
       */
      rules: {
        pid: [
          { required: true, message: "所属上级不能为空", trigger: "change" }
        ],
        name: [
          { required: true, message: "名称不能为空", trigger: "blur" },
          { min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur" }
        ],
        path: [
          { required: true, message: "path路径不能为空", trigger: "blur" }
        ],
        component: [
          { required: true, message: "component组件不能为空", trigger: "blur" }
        ],
        title: [
          { required: true, message: "按钮名称不能为空", trigger: "blur" }
        ],
        permissionValue: [
          { required: true, message: "权限标识不能为空", trigger: "blur" }
        ],
        sort: [{ type: "number", message: "必须是数字类型", trigger: "blur" }],
        level: [
          { required: true, message: "层级不能为空", trigger: "blur" },
          { type: "number", message: "必须是数字类型", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 初始化菜单
    async initMenu() {
      const { success, message } = await saveInitMenus(this.menu);
      if (!success) return this.$message.error(message);
      this.$message.success("初始化菜单成功");
      // 刷新
      this.$router.go(0);
    },
    // 删除，不请求数据
    delSkuLocle(index, item) {
      // console.log(index, item);
      this.addMetaList.splice(index, 1);
    },
    // 新增
    addMeta() {
      this.addMetaList.push({
        key: "",
        value: ""
      });
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
    // 弹窗关闭的时候触发
    handleClose() {
      this.dialogVisible = false;
      // console.log("关闭...");
      // this.$refs.tree.setCheckedNodes([]);
    },
    // 执行保存
    doSave() {
      console.log(this.addResourceForm);
      console.log(this.addMetaList);
      const meta = this.addMetaList.map(el => {
        return {
          [el.key]: el.value
        };
      });
      if (this.addResourceForm.pid) {
        const length = this.addResourceForm?.pid?.length;
        this.addResourceForm.pid = this.addResourceForm?.pid[length - 1];
      }
      this.addResourceForm.meta = JSON.stringify(meta);
      this.addResourceForm.type = this.radio;
      this.$refs.addResourceForm.validate(async valid => {
        if (valid) {
          const { success, message } = await save(this.addResourceForm);
          if (!success) return this.$message.error(message);
          this.$message.success("添加成功");
          // 刷新
          this.$router.go(0);
        } else {
          this.$message.warning("请检查是否输入有误");
          return false;
        }
      });
    },
    // 打开弹窗
    openDialog(item) {
      // console.log(this.menu);
      this.$nextTick(() => {
        if (item.name == "init") {
          this.init = true;
        } else {
          this.init = false;
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
  ::v-deep .el-dialog.init {
    width: 45%;
  }
  .self-item {
    margin: 10px 0;
  }
}
</style>
