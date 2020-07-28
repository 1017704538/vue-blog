<template>
  <el-card>
    <!-- 文章内容 -->
    <div v-html="content" class="content"></div>
    <!-- 评论输入框 -->
    <div class="comment">
      <el-input type="textarea" autosize placeholder="请输入内容" v-model="comment.content"></el-input>
      <el-button type="primary" round @click="addComment">发布</el-button>
    </div>
    <!-- 评论列表 -->
    <div class="commentList">
      <commentitem
        v-for="(item, index) in commentList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        :key="index"
        :avatar="item.uid.avatar"
        :nickname="item.uid.nickname"
        :content="item.content"
        :date="item.date"
      ></commentitem>
    </div>
    <!-- 分页区域 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="commentList.length"
    ></el-pagination>
  </el-card>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      // 当前的页数
      currentPage: 1,
      // 当前每页显示多少条数据
      pagesize: 5,
      //文章内容
      content: "",
      //评论
      comment: {},
      nowTime: "", // 当前时间
      commentList: [],
      title: "",
      article: {
        comment:''
      }
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
      this.title = res.data.title;
    },
    //获取评论列表
    async getCommentList() {
      const res = await this.$http.get(`comment/list/${this.id}`);
      this.commentList = res.data;
      this.article.comment = this.commentList.length.toString()
      const comment = await this.$http.put(`article/edit/${this.id}`, this.article);
    },
    //发布评论
    async addComment() {
      const token = localStorage.getItem("token");
      if (token) {
        if (this.comment.content) {
          this.nowTime = new Date();
          this.comment.date = this.formatDateTime(this.nowTime);
          this.comment.aid = this.id;
          this.comment.title = this.title;
          this.comment.uid = JSON.parse(
            localStorage.getItem("userPermission")
          )._id;
          const res = await this.$http.post("/comment/create", this.comment);
          this.getCommentList();
        } else {
          this.$message.error("评论不能为空");
        }
      } else {
        this.$message.error("请先登录");
      }
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
    this.getCommentList();
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