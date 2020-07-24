<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 表格区域 -->
      <el-table :data="articles.slice((currentPage-1)*pagesize,currentPage*pagesize)">
        <el-table-column prop="title" label="文章标题"></el-table-column>
        <el-table-column prop="tagid" label="标签">
          <template slot-scope="scope">
            <!-- {{scope.row.tagid}} -->
            <el-tag v-for="(item, index) in scope.row.tagid" :key="index">{{item.name}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="cover" label="封面">
          <template slot-scope="scope">
            <img :src="scope.row.cover" style="height:4rem;" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="更新日期"></el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              @click="$router.push(`/articles/edit/${scope.row._id}`)"
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
        :page-sizes="[1, 2, 4, 10]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="articles.length"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      tags: [],
      // 当前的页数
      currentPage: 1,
      // 当前每页显示多少条数据
      pagesize: 4
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("article/list");
      this.articles = res.data;
    },
    // 删除文章
    remove(row) {
      this.$confirm(`是否确定要删除文章 "${row.title}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`rest/articles/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    },
    //监听pageSize改变
    handleSizeChange(newSize) {
      this.pagesize = newSize;
    },
    //监听页码值改变的事件
    handleCurrentChange(newPage) {
      this.currentPage = newPage;
    }
  },
  created() {
    this.fetch();
  }
};
</script>