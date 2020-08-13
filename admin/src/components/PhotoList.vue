<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文件管理</el-breadcrumb-item>
      <el-breadcrumb-item>图片列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <!-- 卡片视图区域 -->
    <el-card>
      <el-table :data="photos.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe>
        <el-table-column prop="_id" label="ID" width="240"></el-table-column>
        <el-table-column prop="uid.username" label="上传用户"></el-table-column>
        <el-table-column prop="src" label="图片">
          <template slot-scope="scope">
            <img :src="scope.row.src" style="height:4rem;" />
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="danger" size="small" @click="remove(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="photos.length"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前的页数
      currentPage: 1,
      // 当前每页显示多少条数据
      pagesize: 5,
      photos: [],
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("photo/list");
      this.photos = res.data;
    },
    remove(row) {
      this.$confirm(`是否确定要删除图片`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        const res = await this.$http.delete(`rest/photos/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!",
        });
        this.fetch();
      });
    },
    //监听pageSize改变
    handleSizeChange(newSize) {
      // console.log(newSize)
      this.pagesize = newSize;
    },
    //监听页码值改变的事件
    handleCurrentChange(newPage) {
      // console.log(newPage)
      this.currentPage = newPage;
    },
  },
  created() {
    this.fetch();
  },
};
</script>