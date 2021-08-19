<template>
  <div>
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
      <el-steps :active="active" finish-status="success">
        <el-step title="商品基本信息"></el-step>
        <el-step title="添加库存信息"></el-step>
        <el-step title="添加移动端详情"></el-step>
      </el-steps>
    </el-card>
    <el-card
      shadow="hover"
      :body-style="{ paddingTop: '20px', paddingBottom: '0' }"
    >
      <el-form
        :model="product"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        :inline="false"
        size="normal"
      >
        <div class="row1" v-if="active == 1">
          <div class="header">
            基本信息
          </div>

          <el-row :gutter="20">
            <el-col :span="6" :offset="0">
              <el-form-item label="商品名称" prop="name">
                <el-input
                  v-model.trim="product.name"
                  placeholder="请输入商品名称"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="0">
              <el-form-item label="商品编码" prop="productSn">
                <el-input
                  v-model.trim="product.productSn"
                  placeholder="请输入商品编码"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="0">
              <el-form-item label="品牌" prop="brandId">
                <el-select
                  v-model="product.brandId"
                  name="brandId"
                  clearable
                  placeholder="品牌"
                >
                  <el-option
                    v-for="item in brandList"
                    :key="item.brandId"
                    :label="item.brandName"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="0">
              <el-form-item label="上架状态" prop="publishStatus">
                <el-select
                  v-model="product.publishStatus"
                  name="publishStatus"
                  clearable
                  placeholder="上架状态"
                >
                  <el-option
                    v-for="(item, index) in publishStatusList"
                    :key="index"
                    :label="item.lable"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6" :offset="0">
              <el-form-item label="审核状态" prop="verifyStatus">
                <el-select
                  v-model="product.verifyStatus"
                  name="verifyStatus"
                  clearable
                  placeholder="审核状态"
                >
                  <el-option
                    v-for="(item, index) in verifyStatusList"
                    :key="index"
                    :label="item.lable"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="0">
              <el-form-item label="商品分类" prop="productCategoryName">
                <el-select
                  v-model="product.productCategoryName"
                  name="productCategoryName"
                  clearable
                  placeholder="商品分类"
                >
                  <el-option
                    v-for="(item, index) in categoryList"
                    :key="index"
                    :label="item.lable"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-form-item label="商品描述">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入商品描述"
                  v-model="product.description"
                >
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="row2" v-if="active == 1">
          <div class="header">
            商品属性
          </div>
          <el-row :gutter="20">
            <el-col :span="6" :offset="0">
              <el-form-item label="商品原价" prop="originalPrice">
                <el-input
                  v-model.number="product.originalPrice"
                  placeholder="请输入商品原价"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="0">
              <el-form-item label="商品现价" prop="price">
                <el-input
                  v-model.number="product.price"
                  placeholder="请输入商品现价"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="0">
              <el-form-item label="商品重量" prop="weight">
                <el-input
                  v-model.number="product.weight"
                  placeholder="请输入商品重量"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="0">
              <el-form-item label="促销类型">
                <el-select
                  v-model="product.promotionType"
                  placeholder="没有促销，使用原价"
                  clearable
                  filterable
                  disabled
                >
                  <el-option value=""></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="0">
              <el-form-item label="活动价格">
                <el-input
                  disabled
                  value="0"
                  placeholder="请输入活动价格"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-form-item label="缩略图">
                <upload-img
                  :imgSrcStr="showPic"
                  :isFlex="true"
                  :isShowImg="true"
                  listType="picture-card"
                  @reciveImgSrc="handleImgSrc($event)"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="row3" v-if="active == 1">
          <div class="header">其他信息</div>
          <el-row :gutter="20">
            <el-col :span="8" :offset="0">
              <el-form-item label="推荐状态" size="normal">
                <el-switch
                  v-model="product.recommendStatus"
                  active-color="#13ce66"
                  inactive-color="#999"
                  :active-value="1"
                  :inactive-value="0"
                >
                </el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="0">
              <el-form-item label="新品状态" size="normal">
                <el-switch
                  v-model="product.newStatus"
                  active-color="#13ce66"
                  inactive-color="#999"
                  :active-value="1"
                  :inactive-value="0"
                >
                </el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="0">
              <el-form-item label="预告商品" size="normal">
                <el-switch
                  v-model="product.previewStatus"
                  active-color="#13ce66"
                  inactive-color="#999"
                  :active-value="1"
                  :inactive-value="0"
                >
                </el-switch>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8" :offset="0">
              <el-form-item label="搜索关键词" size="normal">
                <el-input
                  v-model="product.keywords"
                  placeholder="搜索关键词"
                  size="normal"
                  clearable
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="0">
              <el-form-item label="库存预警" size="normal" prop="lowStock">
                <el-input
                  v-model.number="product.lowStock"
                  placeholder="库存预警"
                  size="normal"
                  clearable
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="0">
              <el-form-item label="商品排序" size="normal" prop="sort">
                <el-input
                  v-model.number="product.sort"
                  placeholder="商品排序"
                  size="normal"
                  clearable
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-form-item label="产品服务" size="normal">
                <el-checkbox-group v-model="product.serviceIds">
                  <el-checkbox label="1">无忧退货</el-checkbox>
                  <el-checkbox label="2">快速退款</el-checkbox>
                  <el-checkbox label="3">免费包邮</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="row4" v-if="active == 2">
          <div class="header">商品sku信息</div>
          <el-row :gutter="20">
            <el-col :span="8" :offset="0">
              <el-form-item label="标题" prop="title">
                <el-input
                  v-model.trim="product.detailTitle"
                  placeholder="请输入标题"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="0">
              <el-form-item label="副标题" prop="subTitle ">
                <el-input
                  v-model.trim="product.subTitle"
                  placeholder="请输入副标题"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="0"
              ><span style="color:#f00;font-size:18px">*</span
              ><el-button type="text" size="medium" @click="addSku"
                >sku设置</el-button
              >
            </el-col>
          </el-row>
          <sku-detail
            ref="sku"
            :showSkuList="pmsSkuStockList"
            @getskuList="getpmsSkuStockList"
          ></sku-detail>
          <el-row :gutter="20">
            <el-col :span="24" :offset="0">
              <el-form-item label="画册图片">
                <upload-img
                  :imgSrcList="showPicList"
                  :isMultiple="true"
                  :limitNumber="5"
                  :isFlex="true"
                  :isShowImg="true"
                  listType="picture-card"
                  @reciveImgSrcList="handleImgSrcList"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="row5" v-if="active == 3">
          <!-- <div class="header"></div> -->
          <el-form-item label="详情描述">
            <Tinymce v-model="tinContent" :height="400" />
          </el-form-item>
          <el-form-item label="备注" size="normal">
            <el-input
              v-model="product.note"
              placeholder="请输入备注"
              size="normal"
              clearable
            ></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div class="footer">
        <el-button style="margin-top: 12px;" @click="pre" v-if="active > 1"
          >返回上一步</el-button
        >
        <el-button
          type="primary"
          style="margin-top: 12px;"
          @click="next"
          v-if="active == 1"
          >下一步,填写库存信息</el-button
        >
        <el-button
          type="primary"
          style="margin-top: 12px;"
          @click="next"
          v-if="active == 2"
          >下一步,填写移动端详情</el-button
        >
        <el-button
          type="primary"
          style="margin-top: 12px;"
          @click="doSave"
          v-if="active == 3"
          >提交保存</el-button
        >
      </div>
    </el-card>
    <copyright></copyright>
  </div>
</template>
<script>
import Tinymce from "@/components/Tinymce";
// import MarkdownEditor from "@/components/MarkdownEditor";
import skuDetail from "./sku/index.vue";
import UploadImg from "@/components/UploadImg/UploadImg.vue";
// import copyright from "@/components/copyright/index.vue";
import { findAllBrand } from "@/api/brand/index";
import {
  addProductAndSkus,
  del,
  productSkusDetail,
  productsByPage,
  switchNewStatus,
  switchPreviewStatus,
  switchPublishStatus,
  switchRecommandStatus,
  switchVerifyStatus,
  updateProductAndSkus
} from "@/api/products/index";
export default {
  name: "productDetail",

  components: {  UploadImg, skuDetail, Tinymce },

  data() {
    return {
      showPic: "", //缩略图回显
      showPicList: [], //图片画册回显
      tinContent: "", // 富文本内容
      checkList: [],
      active: 1, //步骤条当前激活的
      id: "", //商品id
      activeName: 1,
      loading: false,
      list: [],
      // 搜索部分选择的审核状态列表
      verifyStatusList: [
        { id: 1, lable: "未审核", value: "0" },
        { id: 1, lable: "已审核", value: "1" }
      ],
      // 搜索部分选择的上架状态列表
      publishStatusList: [
        { id: 1, lable: "未上架", value: "0" },
        { id: 1, lable: "已上架", value: "1" }
      ],
      // 搜索部分选择的上架状态列表
      categoryList: [
        { id: 1, lable: "创意", value: "创意" },
        { id: 1, lable: "风格", value: "风格" },
        { id: 1, lable: "饰品", value: "饰品" },
        { id: 1, lable: "灯具", value: "灯具" }
      ],
      // 搜索部分选择的品牌列表
      brandList: [],
      skuList: [],
      pmsSkuStockList: [],
      product: {
        name: "",
        pic: "",
        serviceIds: [],
        brandId: "",
        productSn: "",
        publishStatus: "",
        verifyStatus: "",
        detailHtml: "",
        detailDesc: ""
      },
      rules: {
        name: [
          { required: true, message: "商品名不能为空", trigger: "blur" },
          { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" }
        ],
        originalPrice: [
          { required: true, message: "商品原价不能为空", trigger: "blur" },
          { type: "number", message: "必须是数字类型", trigger: "blur" }
        ],
        price: [
          { required: true, message: "商品现价不能为空", trigger: "blur" },
          { type: "number", message: "必须是数字类型", trigger: "blur" }
        ],
        weight: [
          { type: "number", message: "必须是数字类型", trigger: "blur" }
        ],
        lowStock: [
          { type: "number", message: "必须是数字类型", trigger: "blur" }
        ],
        sort: [{ type: "number", message: "必须是数字类型", trigger: "blur" }],
        productCategoryName: [
          { required: true, message: "请选择分类商品", trigger: "change" }
        ],
        publishStatus: [
          { required: true, message: "请选择上架状态", trigger: "change" }
        ],
        verifyStatus: [
          { required: true, message: "请选择审核状态", trigger: "change" }
        ]
      },
      total: 0
    };
  },
  async created() {
    if (this.$route.meta.isEdit) {
      // console.log(this.$route.meta.isEdit);
      const id = this.$route.params.id;
      const { success, data, message } = await productSkusDetail(id);
      if (!success) return this.$message.error(message);
      this.product = data.product;
      this.pmsSkuStockList = data.skus;
      this.tinContent = this.product.detailDesc;
      this.product.albumPics = this.product.albumPics.split(",");
      this.product.serviceIds = this.product.serviceIds.split(",");
      this.showPic = this.product.pic;
      this.showPicList = this.product.albumPics;
      this.pmsSkuStockList.forEach(el => {
        el.spData = JSON.parse(el.spData);
      });
      // console.log(data);
    }
  },
  async mounted() {
    const { success, data, message } = await findAllBrand();
    if (!success) return this.$message.error(message);
    // console.log(data);
    this.brandList = data.items.map(el => {
      return {
        brandId: el.id,
        brandName: el.name,
        value: el.id
      };
    });
  },

  methods: {
    async doSave() {
      // 富文本赋值
      this.product.detailDesc = this.tinContent;
      this.product.detailHtml = this.tinContent;
      // 保存之前检查sku是否填写
      if (this.pmsSkuStockList.length <= 0) return this.$message.warning("请检查sku列表是否填写");

      let params, api, msg;
      if (this.$route.meta.isEdit) {
        // console.log( this.product);
        api = updateProductAndSkus;
        if(Array.isArray(this.product.albumPics) && Array.isArray(this.product.serviceIds) ){

          this.product.albumPics = this.product?.albumPics?.join(",");
          this.product.serviceIds = this.product?.serviceIds.join(",");
        }
        this.pmsSkuStockList.forEach(el => {
          el.spData = JSON.stringify(el.spData);
        });
        msg = "修改成功";
        params = {
          pmsSkuStockList: this.pmsSkuStockList,
          product: this.product
        };
      } else {
        api = addProductAndSkus;
        msg = "添加成功";
        params = {
          pmsSkuStockList: this.pmsSkuStockList,
          product: this.product
        };
      }
      // console.log(api);
      // console.log(params);
      const { success, message } = await api(params);
      if (!success) return this.$message.error(message);
      this.$message.success(msg);
      this.$router.push({ name: "productsList" });
    },
    // getpmsSkuStockList
    getpmsSkuStockList(e) {
      // console.log(e);
      // e.forEach(el => {
      //   el.spData = JSON.stringify(el.spData);
      // });
      // e.spData = JSON.stringify(e.spData);
      this.pmsSkuStockList = e;
      // console.log(this.pmsSkuStockList);
    },
    // sku弹框
    addSku() {
      this.$refs.sku.openDialog();
    },
    //图片组件的回调
    handleImgSrc(e) {
      // console.log(e);
      this.product.pic = e.url;
    },
    // 处理多选的图片
    handleImgSrcList(e) {
      // console.log(e);
      this.product.albumPics = e.join(",");
      // console.log(this.product);
    },
    //步骤条的下一步
    next() {
      const brand = this.brandList.find(el => el.value == this.product.brandId);
      // console.log(brand);
      // console.log(this.product);
      if (!brand) return this.$message.warning("请注意选择品牌分类");
      this.product.brandName = brand.brandName;
      if (this.product.serviceIds.length > 0 && this.active == 2) {
        if (!this.$route.meta.isEdit) {
          this.product.serviceIds = this.product.serviceIds.join(",");
        }
      }

      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          // console.log(this.product);
          // console.log(this.pmsSkuStockList);
        } else {
          this.$message.warning("请注意表单验证");
          return false;
        }
        if (this.active++ > 2) return (this.active = 3);
      });
      // console.log(this.product);
    },
    //步骤条的上一步
    pre() {
      if (this.active-- <= 1) return (this.active = 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-steps--horizontal {
  width: 80%;
  margin: 20px auto;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
