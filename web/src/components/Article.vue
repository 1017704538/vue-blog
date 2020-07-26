<template>
  <el-card>
    <!-- 文章内容 -->
    <div v-html="content" class="content"></div>
    <!-- 评论输入框 -->
    <div class="comment">
      <el-input type="textarea" autosize placeholder="请输入内容" v-model="comment"></el-input>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      content: "",
      comment: ''
    };
  },
  methods: {
    //获取文章信息
    async fetch() {
      const res = await this.$http.get(`article/${this.id}`);
      this.content = res.data.content;
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style>
.content img {
  width: 100%;
  display: block;
  border-radius: 4px;
}
</style>