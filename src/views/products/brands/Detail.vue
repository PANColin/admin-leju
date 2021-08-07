<template>
  <div class="dialog-detail">
    <el-dialog title="品牌详情" :visible.sync="dialogVisible">
      <el-form :model="addBrandForm" ref="addBrandForm" :rules="rules">
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-form-item
              label="品牌名称"
              :label-width="formLabelWidth"
              prop="name"
            >
              <el-input
                placeholder="请输入品牌名称"
                v-model="addBrandForm.name"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item
              label="首字母"
              :label-width="formLabelWidth"
              prop="firstLetter"
            >
              <el-input
                placeholder="请输入首字母"
                v-model="addBrandForm.firstLetter"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
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
          <el-col :span="12" :offset="0">
            <el-form-item
              label="产品数量"
              :label-width="formLabelWidth"
              prop="productCount"
            >
              <el-input
                placeholder="请输入产品数量"
                v-model.number="addBrandForm.productCount"
                autocomplete="off"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" :offset="0">
            <el-form-item label="品牌故事" :label-width="formLabelWidth">
              <el-input
                type="textarea"
                :rows="3"
                placeholder="请输入品牌故事"
                v-model.number="addBrandForm.brandStory"
              >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="12" :offset="0">
            <el-form-item
              class="self-row"
              label="是否展示"
              :label-width="formLabelWidth"
            >
              <el-switch
                style="display: block"
                v-model="addBrandForm.showStatus"
                active-color="#13ce66"
                inactive-color="#999"
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              >
              </el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item
              class="self-row"
              label="是否为品牌制造商"
              :label-width="formLabelWidth"
            >
              <el-switch
                style="display: block"
                v-model="addBrandForm.factoryStatus"
                active-color="#13ce66"
                inactive-color="#999"
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              >
              </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="upload-row">
          <el-col :span="8" :offset="0" v-if="bigImg || addBrandForm.bigPic">
            <img
              :style="
                bigImg || addBrandForm.bigPic ? 'width:165px;height:162px' : ''
              "
              :src="bigImg ? bigImg : addBrandForm.bigPic"
              alt=""
            />
          </el-col>

          <el-col :span="8" :offset="0">
            <span>上传专区大图</span>
            <upload-img
              listType="picture-card"
              isWho="bigImg"
              @reciveImgSrc="handleImgSrc"
            />
          </el-col>
          <el-col :span="8" :offset="0" v-if="logo || addBrandForm.logo">
            <img
              :style="logo || addBrandForm.logo ? 'width:165px' : ''"
              :src="logo ? logo : addBrandForm.logo"
              alt=""
            />
          </el-col>
          <el-col :span="8" :offset="0">
            <span>上传logo</span>
            <upload-img
              :logo="logo"
              listType="picture-card"
              isWho="logo"
              @reciveImgSrc="handleImgSrc"
            />
          </el-col>
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
  created() {
    //   if (this.editBrand.id) {
    //   console.log('==================');
    //   this.addBrandForm = this.editBrand;
    // }
  },
  mounted() {},
  data() {
    return {
      addBrandForm: {
        logo: "",
        bigPic: ""
      },
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
      // console.log(e);
      // 赋值
      if (e.isWho === "bigImg") {
        this.addBrandForm.bigPic = e.url;
      } else {
        this.addBrandForm.logo = e.url;
      }
    },
    // clearAll() {
    //   this.addBrandForm = {
    //     logo: "",
    //     bigPic: ""
    //   };
    // },
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
          // this.addBrandForm = this.editBrand;
          // 深拷贝防止双向绑定页面表单会随着修改表单而变化
          this.addBrandForm = JSON.parse(JSON.stringify(this.editBrand));
        } else {
          this.addBrandForm = {
            logo: "",
            bigPic: ""
          };
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
