<template>
  <el-card class="article_list">
    <m-card
      v-for="(item, index) in articleList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      :key="index"
      :title="item.title"
      :date="item.date"
      :tags="item.tags"
      :cover="item.cover"
      :introduction="item.introduction"
      :linkto="`${item._id}`"
      :comments="item.comment"
    ></m-card>
    <!-- 分页区域 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="articleList.length"
    ></el-pagination>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      // 当前的页数
      currentPage: 1,
      // 当前每页显示多少条数据
      pagesize: 5,
      articleList: [],
      commentNum: "",
    };
  },
  methods: {
    async getArticleList() {
      const res = await this.$http.get("article/list");
      this.articleList = res.data;
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
    this.getArticleList();
  },
};
</script>

<style>

</style>