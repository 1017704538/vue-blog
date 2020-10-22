<template>
  <div class="someArticle">
    <div class="some"><span class="title">随机文章</span></div>
    <van-card
      v-for="(item, index) in articleList"
      :key="index"
      :desc="item.introduction"
      :title="item.title"
      :thumb="item.cover"
      @click="linkTo(item._id)"
    >
      <template #tags>
        <van-tag
          plain
          type="danger"
          v-for="(item, index) in item.tags"
          :key="index"
          >{{ item }}</van-tag
        >
      </template>
      <template #footer>
        {{ item.date }}
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleList: [],
    };
  },
  methods: {
    //   获取随机文章列表
    async getArticleList() {
      const res = await this.$http.get("/some/articles");
      this.articleList = res.data;
    },
    // 文章详情跳转
    linkTo(id) {
      this.$router.push(`/mArticle/${id}`);
    },
  },
  created() {
    this.getArticleList();
  },
};
</script>

<style>
.some {
  text-align: center;
}
.someArticle {
  background-color: #f7f8fa;
  box-shadow: 0px 0px 6px black;
  margin: 0.8rem;
  font-size: 0.5rem;
  padding: 0.5rem;
}
.someArticle .title {
  font-size: 1.5rem;
  background: #1ec7e6;
  color: #fff;
}
.someArticle :hover {
  background: #fff;
  text-shadow: 0 0 10px #1ec7e6, 0 0 20px #1ec7e6, 0 0 30px #1ec7e6,
    0 0 40px #1ec7e6;
}
</style>