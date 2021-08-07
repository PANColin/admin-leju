<template>
  <div>
    <detail
      ref="editBrand"
      :logo="editBrand.logo"
      :bigImg="editBrand.bigPic"
      :editBrand="editBrand"
      @refrush="getBrandList"
    />
    <!-- <detail ref="editBrand" :editBrand="editBrand" @refrush="getBrandList" /> -->
    <el-card style="width:95%;margin: 20px auto;">
      <el-button type="primary" icon="el-icon-plus" @click="add"
        >新增</el-button
      >
      <el-table v-loading="loading" fit border :data="list" style="width: 100%">
        <el-table-column
          align="center"
          type="index"
          label="序号"
          width="50"
          fixed="left"
        />
        <el-table-column
          align="center"
          prop="name"
          label="品牌名称"
          width="160"
        />
        <el-table-column align="center" label="是否展示" width="180">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.showStatus"
              active-color="#13ce66"
              inactive-color="#999"
              active-text="展示"
              inactive-text="不展示"
              :active-value="1"
              :inactive-value="0"
              @change="showStatusChange($event, scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column align="center" label="logo" width="120">
          <template slot-scope="scope">
            <img
              :src="scope.row.logo"
              width="100"
              height="110"
              @error="handleError(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column align="center" label="大图展示" width="180">
          <template slot-scope="scope">
            <img
              :src="scope.row.bigPic"
              width="180"
              height="160"
              @error="handleError(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="brandStory"
          show-overflow-tooltip
          label="品牌故事"
          width="180"
        />
        <el-table-column
          align="center"
          prop="createTime"
          label="创建时间"
          width="100"
        />
        <el-table-column align="center" prop="sort" label="排序" width="100" />

        <el-table-column
          align="center"
          prop="productCommentCount"
          label="产品评论数量"
          width="120"
        />
        <el-table-column align="center" label="是否品牌制造商" width="160">
          <template slot-scope="scope">
            <el-tag type="success" effect="plain">
              {{ scope.row.factoryStatus ? "是" : "不是" }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="modifyTime"
          label="修改日期"
          width="180"
        />
        <el-table-column
          label="操作"
          width="160px"
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
    <copyright />
  </div>
</template>
<script>
import Detail from "./Detail.vue";
import copyright from "@/components/copyright/index.vue";
import {
  addBrand,
  delBrand,
  findAllBrand,
  findBrandByPage as findBrandByPageAPI,
  switchShowStatus,
  updateBrand
} from "@/api/brand/index";
export default {
  name: "Brands",

  components: { copyright, Detail },

  data() {
    return {
      loading: false,
      list: [],
      pageInfo: {
        start: 1,
        limit: 10
      },
      total: 0,
      // 点击编辑赋予的对象
      editBrand: {}
    };
  },

  async mounted() {
    this.findBrandByPage();
  },

  methods: {
    //是否展示
    async showStatusChange(e, item) {
      console.log(e, item);
      const { success, message } = await switchShowStatus({
        id: item.id,
        status: e
      });
      if (!success) return this.$message.error(message);
      this.$message.success("状态改变成功");
    },
    // 新增
    add() {
      //清空编辑的信息
      this.editBrand = {};
      // console.log(this.$refs.editBrand)
      // this.$refs.editBrand.clearAll();
      this.$refs.editBrand.openDialog();
    },
    // 点击确认按钮刷新列表
    async getBrandList(e) {
      // console.log(e);
      // console.log("执行刷新");
      //有id 表示编辑否则添加
      let api = e.id ? updateBrand : addBrand;

      const { success, message } = await api(e);
      if (!success) return this.$message.error(message);
      this.$message.success("保存成功");
      //刷新列表
      this.findBrandByPage();
    },
    // 编辑
    edit(item) {
      // console.log(item);
      this.editBrand = item;
      this.$refs.editBrand.openDialog();
    },
    // 删除
    async del(item) {
      // console.log(item);
      const { success, message } = await delBrand(item.id);
      if (!success) return this.$message.error(message);
      this.$message.success("删除成功");
      this.findBrandByPage();
    },
    // 图片加载错误回调
    handleError(val) {
      // console.log(val)
      // console.log('error')
      val.icon =
        "https://img0.baidu.com/it/u=59285992,513800291&fm=26&fmt=auto&gp=0.jpg";
    },
    async findBrandByPage() {
      this.loading = true;
      const res = await findBrandByPageAPI(
        this.pageInfo.start,
        this.pageInfo.limit
      );
      // console.log(res);
      if (!res.success) return this.$message.error(res.message);
      this.loading = false;
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
      this.findBrandByPage();
    },
    // 当前页码发生变化的时候触发
    CurrentChange(newcurrent) {
      // console.log("current",newcurrent);
      this.pageInfo.start = newcurrent;
      this.findBrandByPage();
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
