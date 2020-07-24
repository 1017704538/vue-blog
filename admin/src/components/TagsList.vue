<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>标签列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card>
      <el-table :data="tags.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe>
        <el-table-column prop="_id" label="ID" width="240"></el-table-column>
        <el-table-column prop="name" label="标签名称"></el-table-column>
        <el-table-column prop="date" label="更新日期"></el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              @click="$router.push(`/tags/edit/${scope.row._id}`)"
            >编辑</el-button>
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
        :total="tags.length"
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
      tags: [],
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/tags");
      this.tags = res.data;
    },
    remove(row) {
      this.$confirm(`是否确定要删除标签 "${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`rest/tags/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
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