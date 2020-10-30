<template>
  <div>
    <el-card class="latest">
      <el-collapse accordion @change="change">
        <el-collapse-item>
          <template slot="title">
            最新评论
            <i class="header-icon el-icon-info"></i>
          </template>
          <m-item
            v-for="(item, index) in commentList"
            :key="index"
            :content="item.content"
            :title="item.aid.title"
            :linkto="`/article/${item.aid._id}`"
          ></m-item>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            最新留言
            <i class="header-icon el-icon-info"></i>
          </template>
          <m-item
            v-for="(item, index) in messageList"
            :key="index"
            :content="item.content"
            :linkto="toMessage"
            :title="item.uid.nickname"
          ></m-item>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            随机文章
            <i class="header-icon el-icon-refresh"></i>
          </template>
          <m-item
            v-for="(item, index) in articleList"
            :key="index"
            :content="item.title"
            :title="item.introduction"
            :linkto="`/article/${item._id}`"
          ></m-item>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentList: [],
      messageList: [],
      articleList: [],
      toMessage: "message",
    };
  },
  methods: {
    //获取最新评论列表
    async getCommentList() {
      const res = await this.$http.get("/latest/comment");
      this.commentList = res.data;
    },
    //
    async getMessageList() {
      const res = await this.$http.get("/latest/message");
      this.messageList = res.data;
    },
    //获取随机文章列表
    async getArticleList() {
      const res = await this.$http.get("/some/articles");
      this.articleList = res.data;
    },
    //监听折叠面板的激活
    change() {
      this.getCommentList();
      this.getArticleList();
    },
  },
  created() {
    this.getCommentList();
    this.getArticleList();
    this.getMessageList();
  },
};
</script>

<style>
.latest {
  margin-top: 20px;
  margin-left: 15%;
  box-shadow: 0px 0px 8px black;
}
.latest :hover {
  cursor: url("http://qiniu.yukikazesama.cn/mouse2.png"), auto;
}
.latest .el-card__body {
  padding: 5px;
}
</style>

