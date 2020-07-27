<template>
  <el-card>
    <!-- 文章内容 -->
    <div v-html="content" class="content"></div>
    <!-- 评论输入框 -->
    <div class="comment">
      <el-input type="textarea" autosize placeholder="请输入内容" v-model="comment.content"></el-input>
      <el-button type="primary" round @click="addComment">发布</el-button>
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
      //文章内容
      content: "",
      //评论
      comment: {},
      nowTime: "", // 当前时间
    };
  },
  methods: {
    //获取时间
    formatDateTime(date) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      var h = date.getHours();
      h = h < 10 ? "0" + h : h;
      var minute = date.getMinutes();
      minute = minute < 10 ? "0" + minute : minute;
      var second = date.getSeconds();
      second = second < 10 ? "0" + second : second;
      return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
    },
    //获取文章信息
    async fetch() {
      const res = await this.$http.get(`article/${this.id}`);
      this.content = res.data.content;
    },
    //发布评论
    addComment() {
      this.nowTime = new Date();
      this.comment.date = this.formatDateTime(this.nowTime);
      this.comment.aid = this.id
      this.comment.uid = JSON.parse(localStorage.getItem("userPermission"))._id
      
      const res = this.$http.post('/comment/create', this.comment)
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

.comment {
  margin: 10px;
  text-align: right;
}

.comment button {
  margin-top: 5px;
}
</style>