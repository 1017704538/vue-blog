<template>
  <el-card>
    <m-card
      :title="article.title"
      :date="article.date"
      :tags="article.tags"
      :cover="article.cover"
      :introduction="article.introduction"
      :linkto="`article/${article._id}`"
      :comments="commentNum"
    ></m-card>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      article: {},
      commentNum: "",
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`article/5f1d360d78b85c57c03e1463`);
      this.article = res.data;
    },
    //获取评论列表
    async getCommentList() {
      const res = await this.$http.get(`comment/list/5f1d360d78b85c57c03e1463`);
      this.commentNum = res.data.length.toString();
    },
  },
  created() {
    this.fetch();
    this.getCommentList();
  },
};
</script>

<style>
</style>