<template>
  <div class="dialog-detail">
    <el-dialog title="编辑sku" :visible.sync="dialogVisible">
      <el-button type="primary" size="default" @click="addSku">新增</el-button>

      <el-table :data="editSku" border stripe>
        <el-table-column
          type="index"
          label="序号"
          width="80"
          align="center"
          fixed="left"
        ></el-table-column>
        <el-table-column label="图片" align="center" width="180">
          <template slot-scope="scope">
            <upload-img
              listType="text"
              @reciveImgSrc="handleImgSrc($event, scope.row)"
            />
            <img
              v-if="scope.row.pic"
              :src="scope.row.pic"
              alt=""
              width="100"
              height="100"
            />
          </template>
        </el-table-column>
        <el-table-column label="颜色" width="160" align="center">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.spData[0].value"
              placeholder="颜色"
              size="normal"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="规格" width="160" align="center">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.spData[1].value"
              placeholder="规格"
              size="normal"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="库存" width="160" align="center">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.stock"
              placeholder="库存"
              size="normal"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="预警库存" width="160" align="center">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.lowStock"
              placeholder="预警库存"
              size="normal"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="锁定库存" width="160" align="center">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.lockStock"
              placeholder="锁定库存"
              size="normal"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="sku编码" width="160" align="center">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.skuCode"
              placeholder="sku编码"
              size="normal"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="价格" width="160" align="center">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.price"
              placeholder="价格"
              size="normal"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="销量" width="160" align="center">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.sale"
              placeholder="销量"
              size="normal"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160" align="center" fixed="right">
          <template slot-scope="scope">
            <div v-if="scope.row.id">
              <el-button
                type="text"
                size="default"
                @click="editSkuFun(scope.row)"
                >修改编辑</el-button
              >
              <el-popconfirm
                title="亲,您确定要删除吗？"
                @onConfirm="delSku(scope.row)"
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
            <div v-else>
              <el-button
                type="text"
                size="default"
                @click="saveSkuFun(scope.row)"
                >保存</el-button
              >
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

      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  addProductSkus,
  delSku,
  getSkusByProductId,
  updateSkuInfo
} from "@/api/sku/index";
import UploadImg from "@/components/UploadImg/UploadImg.vue";
export default {
  components: { UploadImg },
  props: {
    editSku: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {},
  created() {},
  mounted() {},
  data() {
    return {
      productId: "",
      rules: {},
      dialogVisible: false // 用于控制弹窗是否打开
    };
  },
  methods: {
    //保存
    async saveSkuFun(item) {
      console.log(item);
      // spData (string, optional): 商品销售属性，json格式String类型 ,
      item.spData = JSON.stringify(item.spData);
      const { success, message } = await addProductSkus(item);
      if (!success) return this.$message.error(message);
      this.$message.success("保存成功");
      this.$emit("reload", success);
    },
    // 删除，不请求数据
    delSkuLocle(index, item) {
      console.log(index, item);
      this.editSku.splice(index, 1);
    },
    // 新增
    addSku() {
      this.editSku.push({
        lockStock: "",
        lowStock: "",
        pic: "",
        price: "",
        productId: this.productId,
        promotionPrice: "",
        sale: "",
        skuCode: "",
        spData: [
          { key: "颜色", value: "" },
          { key: "规格", value: "" }
        ],
        stock: ""
      });
    },
    //删除sku
    async delSku(item) {
      console.log(item);
      const { success, message } = await delSku(item.id);
      if (!success) this.$message.error(message);
      this.$message.success("删除成功");
      this.$emit("reload", success);
    },
    // 编辑sku
    async editSkuFun(item) {
      console.log(item);
      // spData (string, optional): 商品销售属性，json格式String类型 ,
      item.spData = JSON.stringify(item.spData);
      const { success, message } = await updateSkuInfo(item);
      if (!success) this.$message.error(message);
      this.$message.success("修改成功");
      this.$emit("reload", success);
    },
    // 处理子组件传来的结果
    handleImgSrc(e, item) {
      console.log(e, item);
      // 赋值
      item.pic = e.url;
    },
    // 弹窗关闭的时候触发
    handleClose() {
      this.dialogVisible = false;
      console.log("关闭...");
    },
    // 打开弹窗
    openDialog(productId) {
      console.log(productId);
      this.productId = productId;
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
