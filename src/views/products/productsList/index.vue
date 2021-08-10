<template>
  <div>
    <sku-detail ref="sku" :editSku="skuList" @reload="reloadSku"></sku-detail>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="商品管理介绍" name="1">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <p style="padding:20px">
            商品管理模块可以对客户端的商品进行增删改查等相关操作,来控制客户端商品的列表展示和商品详情
          </p>
        </el-card>
      </el-collapse-item>
      <el-collapse-item title="条件查询" name="2">
        <el-card
          shadow="hover"
          :body-style="{ paddingTop: '20px', paddingBottom: '0' }"
        >
          <div slot="header" style="cursor: pointer;"></div>
          <el-form
            :model="searchForm"
            ref="ruleForm"
            label-width="80px"
            :inline="false"
            size="normal"
          >
            <el-row :gutter="20">
              <el-col :span="6" :offset="0">
                <el-form-item label="商品名称" prop="name">
                  <el-input
                    v-model.trim="searchForm.name"
                    placeholder="请输入商品名称"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6" :offset="0">
                <el-form-item label="商品货号" prop="productSn">
                  <el-input
                    v-model.trim="searchForm.productSn"
                    placeholder="请输入商品货号"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6" :offset="0">
                <el-form-item label="品牌" prop="brandId">
                  <el-select
                    v-model="searchForm.brandId"
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
                    v-model="searchForm.publishStatus"
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
                    v-model="searchForm.verifyStatus"
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
              <el-col :span="8" :offset="10">
                <el-form-item>
                  <el-button type="primary" @click="onSearch('ruleForm')"
                    >查询</el-button
                  >
                  <el-button @click="onCancle('ruleForm')">取消</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-card>
      </el-collapse-item>
    </el-collapse>

    <el-card>
      <el-button type="primary" size="default" @click="addProduct"
        >新增</el-button
      >
      <el-button type="primary" size="default" @click="exportExcel"
        >导出excel列表</el-button
      >
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        border
        :data="list"
        style="width: 100%"
      >
        <el-table-column
          align="center"
          type="index"
          label="序号"
          width="50"
          fixed="left"
        />

        <el-table-column align="center" label="商品图片" width="110">
          <template slot-scope="scope">
            <img
              :src="scope.row.pic"
              width="100"
              height="110"
              @error="handleError(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="商品名称"
          show-overflow-tooltip
          width="160"
        />
        <el-table-column
          align="center"
          prop="brandName"
          label="品牌名称"
          width="160"
        />
        <el-table-column
          align="center"
          prop="description"
          show-overflow-tooltip
          label="商品描述"
          width="160"
        />
        <el-table-column align="center" label="商品价格" width="160">
          <template slot-scope="scope">
            <el-tag type="info" effect="dark">
              原价: {{ scope.row.originalPrice }}
            </el-tag>
            <el-tag type="danger" effect="dark">
              现价: {{ scope.row.price }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="productCategoryName"
          label="商品类别"
          width="100"
        />
        <el-table-column align="center" label="标签" width="180">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.newStatus"
              active-color="#13ce66"
              inactive-color="#999"
              active-text="最新"
              inactive-text="过时"
              :active-value="1"
              :inactive-value="0"
              @change="newStatusChange($event, scope.row)"
            />
            <el-switch
              v-model="scope.row.recommendStatus"
              active-color="#13ce66"
              inactive-color="#999"
              active-text="推荐"
              inactive-text="不推荐"
              :active-value="1"
              :inactive-value="0"
              @change="recommendStatusChange($event, scope.row)"
            />
            <el-switch
              v-model="scope.row.publishStatus"
              active-color="#13ce66"
              inactive-color="#999"
              active-text="发布"
              inactive-text="未发布"
              :active-value="1"
              :inactive-value="0"
              @change="publishStatusChange($event, scope.row)"
            />
            <el-switch
              v-model="scope.row.verifyStatus"
              active-color="#13ce66"
              inactive-color="#999"
              active-text="审核"
              inactive-text="未审核"
              :active-value="1"
              :inactive-value="0"
              @change="verifyStatusChange($event, scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column align="center" label="sku" width="100">
          <template slot-scope="scope">
            <el-button type="text" @click="editSku(scope.row.id)"
              >编辑sku</el-button
            >
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="createTime"
          label="添加时间"
          width="100"
        />

        <el-table-column align="center" label="是否展示" width="120">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.isShow"
              active-color="#13ce66"
              inactive-color="#999"
              :active-value="1"
              :inactive-value="0"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="浏览量/点赞量/收藏量"
          width="160"
        >
          <template slot-scope="scope">
            <el-tag type="info" hit effect="dark">
              浏览数量:{{ scope.row.viewCount }}
            </el-tag>
            <el-tag type="danger" effect="light">
              点赞数量:{{ scope.row.zanCount }}
            </el-tag>
            <el-tag type="success" effect="plain">
              收藏数量:{{ scope.row.collectCount }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="weight"
          label="重量"
          width="100"
        />
        <el-table-column align="center" prop="sort" label="排序" width="100" />
        <el-table-column label="操作" width="180" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="edit(scope.row)"
              >编辑</el-button
            >
            <el-popconfirm
              title="亲,您确定要删除吗？"
              @onConfirm="del(scope.row)"
            >
              <el-button type="danger" slot="reference" size="mini"
                >删除</el-button
              >
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页效果 -->
      <el-pagination
        class="pagination"
        background
        :current-page="pageInfo.start"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageInfo.limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="SizeChange"
        @current-change="CurrentChange"
      />
    </el-card>
    <copyright></copyright>
  </div>
</template>
<script>
import skuDetail from "./sku/index.vue";
import copyright from "@/components/copyright/index.vue";
import {
  addProductAndSkus,
  del,
  productSkusDetail,
  productsByPage as productsByPageAPI,
  switchNewStatus,
  switchPreviewStatus,
  switchPublishStatus,
  switchRecommandStatus,
  switchVerifyStatus,
  updateProductAndSkus
} from "@/api/products/index";
import { findAllBrand } from "@/api/brand/index";
export default {
  name: "goodsList",

  components: { copyright, skuDetail },

  data() {
    return {
      id: "", //商品id
      activeName: 1,
      loading: false,
      list: [],
      pageInfo: {
        start: 1,
        limit: 10
      },
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
      // 搜索部分选择的品牌列表
      brandList: [],
      skuList: [],
      searchForm: {
        name: "",
        brandId: "",
        productSn: "",
        publishStatus: "",
        verifyStatus: ""
      },
      total: 0
    };
  },

  async mounted() {
    this.productsByPage();
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
    //新增商品
    addProduct() {
      this.$router.push({ name: "productsListAdd" });
    },
    // 到处excel列表
    exportExcel() {},
    //是否最新状态改变
    async newStatusChange(e, item) {
      // console.log(e, item);
      const params = { productId: item.id, status: e };
      const { success, message } = await switchNewStatus(params);
      if (!success) return this.$message.error(message);
      this.$message.success("修改状态成功");
    },
    //是否推荐状态改变
    async recommendStatusChange(e, item) {
      // console.log(e, item);
      const params = { productId: item.id, status: e };
      const { success, message } = await switchRecommandStatus(params);
      if (!success) return this.$message.error(message);
      this.$message.success("修改状态成功");
    },
    //是否发布状态改变
    async publishStatusChange(e, item) {
      // console.log(e, item);
      const params = { productId: item.id, status: e };
      const { success, message } = await switchPublishStatus(params);
      if (!success) return this.$message.error(message);
      this.$message.success("修改状态成功");
    },
    //是否审核状态改变
    async verifyStatusChange(e, item) {
      // console.log(e, item);
      const params = { productId: item.id, status: e };
      const { success, message } = await switchVerifyStatus(params);
      if (!success) return this.$message.error(message);
      this.$message.success("修改状态成功");
    },
    reloadSku(e) {
      // console.log(e);
      if (e) {
        this.editSku(this.id);
      }
    },
    // 编辑sku
    async editSku(id) {
      // console.log("skuId", id);
      this.id = id;
      const { success, data, message } = await productSkusDetail(id);
      if (!success) return this.$message.error(message);
      // console.log(data);
      data.skus.forEach(el => {
        el.spData = JSON.parse(el.spData);
      });
      // console.log(data.skus);
      this.skuList = data.skus;
      this.$refs.sku.openDialog(data.product.id);
      // console.log(data);
    },
    // 编辑
    edit(item) {
      // console.log(item);
      this.$router.push({ name: "productsListEdit", params: { id: item.id } });
    },
    // 删除
    async del(item) {
      // console.log(item);
      const { success, message } = await del(item.id);
      if (!success) return this.$message.error(message);
      this.$message.success("删除成功");
      //重新刷新当前页面
      // this.$router.go(0);
      this.productsByPage();
    },
    // 条件查询取消按钮
    onCancle(formName) {
      this.$refs[formName].resetFields();
      this.productsByPage();
    },
    // 条件查询确定按钮
    onSearch() {
      let isAllEmpty = true;
      for (let key in this.searchForm) {
        if (this.searchForm[key]) {
          isAllEmpty = false;
        }
      }
      if (isAllEmpty) return this.$message.warning("请至少输入一项进行查询");
      // console.log("是否进入");
      this.productsByPage();
      // 重置分页数据
      this.pageInfo.start = 1;
      this.pageInfo.limit = 10;
    },
    //图片加载错误回调
    handleError(val) {
      // console.log(val)
      // console.log('error')
      val.icon =
        "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
    },
    async productsByPage() {
      this.loading = true;
      const res = await productsByPageAPI(
        this.pageInfo.start,
        this.pageInfo.limit,
        this.searchForm
      );
      if (!res.success) return this.$message.error(res.message);
      this.loading = false;
      // console.log(res);
      this.total = res.data.total;
      this.list = res.data.rows;
      res.data.rows.forEach(el => {
        // console.log(el)
        el.icon ||=
          "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
      });
    },
    // 当前每页显示的条数变化的时候触发
    SizeChange(newsize) {
      // console.log("size",newsize);
      this.pageInfo.limit = newsize;
      this.productsByPage();
    },
    // 当前页码发生变化的时候触发
    CurrentChange(newcurrent) {
      // console.log("current",newcurrent);
      this.pageInfo.start = newcurrent;
      this.productsByPage();
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  margin-bottom: 80px;
  margin-top: 10px;
}
</style>
