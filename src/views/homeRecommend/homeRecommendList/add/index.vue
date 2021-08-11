<template>
  <div>
    <sub-add ref="subAdd"></sub-add>
    <div class="dialog-detail">
      <el-dialog title="热销详情" :visible.sync="dialogVisible">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="功能使用介绍" name="1">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <p style="padding:20px">
                点击选择您需要编辑的热销商品，之后会弹出一个编辑框，您可以进行编辑，点击确定之后添加热销商品
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
            <el-table-column
              align="center"
              label="选择"
              width="100"
              fixed="left"
            >
              <template slot-scope="scope">
                <el-radio-group
                  v-model="isChecked"
                  @change="radioChange(scope.row)"
                >
                  <el-radio border :label="scope.row.id">选择</el-radio>
                </el-radio-group>
              </template>
            </el-table-column>

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
            <el-table-column
              align="center"
              prop="createTime"
              label="添加时间"
              width="100"
            />
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
            <el-table-column
              align="center"
              prop="sort"
              label="排序"
              width="100"
            />
            <el-table-column
              label="操作"
              width="180"
              align="center"
              fixed="right"
            >
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
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import subAdd from "./subAdd/Detail.vue";
import { del, productsByPage as productsByPageAPI } from "@/api/products/index";
import { findAllBrand } from "@/api/brand/index";
export default {
  name: "addR",

  components: { subAdd },

  data() {
    return {
      isChecked: true,
      dialogVisible: false, // 用于控制弹窗是否打开
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
    radioChange(item) {
      // console.log(item);
      // item.isChecked = !item.isChecked;
      this.$refs.subAdd.openDialog(item);
    },
    // 打开弹窗
    openDialog() {
      this.$nextTick(() => {
        this.list.forEach(el => {
          el.isChecked = false;
        });
        // console.log(this.list);
      });
      this.dialogVisible = true;
    },
    // 弹窗关闭的时候触发
    handleClose() {
      this.dialogVisible = false;
      console.log("关闭...");
    },
    //新增商品
    addProduct() {
      this.$router.push({ name: "productsListAdd" });
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
        // el.isChecked = false;
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
::v-deep .el-dialog {
  width: 85%;
}
</style>
