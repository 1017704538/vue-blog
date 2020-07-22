<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-table :data="articles">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      tags: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("article/list");
      this.articles = res.data;
    },
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
    }
  },
  created() {
    this.fetch();
  }
};
</script>