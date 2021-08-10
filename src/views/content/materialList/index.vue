<template>
  <div>
    <div class="box">
      <upload-img
        :isFlex="false"
        upload-url="/lejuAdmin/material/uploadFileOssSave"
        @reciveImgSrc="handleImgSrc"
      />
      <div class="wrapper">
        <el-carousel
          class="item-wrapper"
          loop
          :interval="4000"
          type="card"
          height="500px"
        >
          <el-carousel-item v-for="item in list" :key="item.id" class="item">
            <img :src="item.ossUrl" alt="" />
            <p>创建时间:{{ item.createTime }}</p>
            <el-popconfirm
              title="亲,您确定要删除吗？"
              @onConfirm="delMaterial(item.id)"
            >
              <el-button
                slot="reference"
                type="danger"
                size="default"
                icon="el-icon-delete"
                >删除</el-button
              >
            </el-popconfirm>
          </el-carousel-item>
        </el-carousel>
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
      </div>
    </div>
    <copyright />
  </div>
</template>

<script>
import UploadImg from "@/components/UploadImg/UploadImg.vue";
import {
  findMaterialByPage as findMaterialByPageAPI,
  uploadFileOss,
  uploadFileOssSave,
  delMaterial
} from "@/api/material/index";
import copyright from "@/components/copyright/index.vue";
export default {
  name: "MaterialList",
  components: { copyright, UploadImg },
  data() {
    return {
      list: [],
      pageInfo: {
        start: 1,
        limit: 10
      },
      total: 0
    };
  },
  created() {
    this.findMaterialByPage();
  },
  methods: {
    // 处理子组件传来的结果
    handleImgSrc(e) {
      // console.log(e)
      this.findMaterialByPage();
    },
    // 删除素材
    async delMaterial(id) {
      // console.log(id)
      const { success, message } = await delMaterial(id);
      if (!success) return this.$message.error(message);
      this.$message.success("删除成功");
      this.findMaterialByPage();
    },
    async findMaterialByPage() {
      const res = await findMaterialByPageAPI(
        this.pageInfo.start,
        this.pageInfo.limit
      );
      // console.log(res)
      if (!res.success) return this.$message.error(res.message);
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
      this.findMaterialByPage();
    },
    // 当前页码发生变化的时候触发
    CurrentChange(newcurrent) {
      // console.log("current",newcurrent);
      this.pageInfo.start = newcurrent;
      this.findMaterialByPage();
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 80%;
  background-color: #fff;
  padding: 20px;
  margin: 20px auto;
  .wrapper {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    .item-wrapper {
      // background-color: #f00;
      margin: 0 auto;
      text-align: center;
      .item {
        // background-color: #999;
        padding: 20px;
        border-radius: 50%;
        box-shadow: 1px 10px 28px #957e7e;
        width: 30%;
        margin: 0 92px;

        img {
          margin-top: 20px;
          width: 100%;
          height: 250px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
