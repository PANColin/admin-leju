<template>
  <div class="dialog-detail">
    <el-dialog
      title="编辑sku"
      :visible.sync="dialogVisible"
      custom-class="dialog"
    >
      <el-button type="primary" size="default" @click="addSku">新增</el-button>

      <el-table :data="addSkuList" border stripe>
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

      <div slot="footer" class="dialog-footer">
        <el-button
          v-if="addSkuList.length > 0"
          type="primary"
          size="default"
          @click="getskuList"
          >获取skuList</el-button
        >

        <el-button @click="handleClose">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import UploadImg from "@/components/UploadImg/UploadImg.vue";
export default {
  components: { UploadImg },
  props: {
    showSkuList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {},
  created() {},
  mounted() {
    // console.log(this.showSkuList);
    this.addSkuList = this.showSkuList;
    // this.addSkuList = JSON.parse(JSON.stringify(this.showSkuList));
  },
  data() {
    return {
      addSkuList: [],
      dialogVisible: false // 用于控制弹窗是否打开
    };
  },
  methods: {
    // 删除，不请求数据
    delSkuLocle(index, item) {
      // console.log(index, item);
      this.addSkuList.splice(index, 1);
    },
    // 获取skuList
    getskuList() {
      this.addSkuList.forEach(el => {
        el.spData = JSON.stringify(el.spData);
      });
      const isAllFull = this.addSkuList.every(el => {
        console.log(el);
        let count = 0;
        for (let val in el) {
          if (
            val === "spData" ||
            val === "createTime" ||
            val === "id" ||
            val === "productId" ||
            val === "promotionPrice" ||
            val === "modifyTime"
          ) {
            continue;
          }
          // console.log(Object.keys(el).length);
          if (el[val]) {
            count++;
          }
          // console.log(count, val);
          //判断是否是编辑
          if (this.$route.meta.isEdit) {
            if (count == Object.keys(el).length - 6) {
              return true;
            }
          } else {
            if (count == Object.keys(el).length - 1) {
              return true;
            }
          }
        }
      });
      if (!isAllFull)
        return this.$message.warning("请注意是否还有未输入的内容");
      this.$message.success("获取skuList成功");
      this.$emit("getskuList", this.addSkuList);
      this.handleClose();
    },
    // 新增
    addSku() {
      this.addSkuList.push({
        lockStock: "",
        lowStock: "",
        pic: "",
        price: "",
        sale: "",
        skuCode: "",
        spData: [
          { key: "颜色", value: "" },
          { key: "规格", value: "" }
        ],
        stock: ""
      });
    },
    // 处理子组件传来的结果
    handleImgSrc(e, item) {
      // console.log(e, item);
      // 赋值
      item.pic = e.url;
    },
    // 弹窗关闭的时候触发
    handleClose() {
      this.dialogVisible = false;
      console.log("关闭...");
    },
    // 打开弹窗
    openDialog() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped lang="scss">
.dialog-detail {
  .el-dialog__wrapper {
    ::v-deep .dialog.el-dialog {
      width: 80% !important;
    }
  }
}
</style>
