<template>
  <div>
    <m-card
      :title="article.title"
      :date="article.date"
      :tags="article.tagid"
      :cover="article.cover"
      :introduction="article.introduction"
      :linkto="`article/${article._id}`"
    ></m-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {},
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`article/5f1d360d78b85c57c03e1463`);
      this.article = res.data;
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style>
</style>