<template>
  <el-card class="articleContent">
    <!-- 文章内容 -->
    <div v-html="content" class="content"></div>
    <!-- 评论输入框 -->
    <div class="comment">
      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="comment.content"></el-input>
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
        comment: "",
        tags: [],
      },
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
      for (let index = 0; index < res.data.tagid.length; index++) {
        this.article.tags.push(res.data.tagid[index].name);
      }
    },
    //获取评论列表
    async getCommentList() {
      const res = await this.$http.get(`comment/list/${this.id}`);
      this.commentList = res.data;
      this.article.comment = this.commentList.length.toString();
      const comment = await this.$http.put(
        `article/edit/${this.id}`,
        this.article
      );
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
          this.comment.content = "";
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
  margin-top: 10px;
}

h1,
h2,
h3,
h4 {
  color: #111111;
  font-weight: 400;
  margin-top: 1em;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: Georgia, Palatino, serif;
}
h1,
h2,
h3,
h4,
h5,
p,
dl {
  margin-bottom: 16px;
  padding: 0;
}
h1 {
  font-size: 48px;
  line-height: 54px;
}
h2 {
  font-size: 36px;
  line-height: 42px;
}
h1,
h2 {
  border-bottom: 1px solid #efeaea;
  padding-bottom: 10px;
}
h3 {
  font-size: 24px;
  line-height: 30px;
}
h4 {
  font-size: 21px;
  line-height: 26px;
}
h5 {
  font-size: 18px;
  list-style: 23px;
}

code,
pre {
  border-radius: 3px;
  background-color: #f7f7f7;
  color: inherit;
}

code {
  font-family: Consolas, Monaco, Andale Mono, monospace;
  margin: 0 2px;
}

pre {
  line-height: 1.7em;
  overflow: auto;
  padding: 6px 10px;
  border-left: 5px solid #6ce26c;
}

pre > code {
  border: 0;
  display: inline;
  max-width: initial;
  padding: 0;
  margin: 0;
  overflow: initial;
  line-height: inherit;
  font-size: 0.85em;
  white-space: pre;
  background: 0 0;
}

code {
  color: #666555;
}

table {
  *border-collapse: collapse; /* IE7 and lower */
  border-spacing: 0;
  width: 100%;
}
table {
  border: solid #ccc 1px;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  /*-webkit-box-shadow: 0 1px 1px #ccc;
    -moz-box-shadow: 0 1px 1px #ccc;
    box-shadow: 0 1px 1px #ccc;   */
}
table tr:hover {
  background: #fbf8e9;
  -o-transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}
table td,
.table th {
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

table th {
  background-color: #dce9f9;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#ebf3fc),
    to(#dce9f9)
  );
  background-image: -webkit-linear-gradient(top, #ebf3fc, #dce9f9);
  background-image: -moz-linear-gradient(top, #ebf3fc, #dce9f9);
  background-image: -ms-linear-gradient(top, #ebf3fc, #dce9f9);
  background-image: -o-linear-gradient(top, #ebf3fc, #dce9f9);
  background-image: linear-gradient(top, #ebf3fc, #dce9f9);
  /*-webkit-box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;
    -moz-box-shadow:0 1px 0 rgba(255,255,255,.8) inset;
    box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;*/
  border-top: none;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  padding: 5px;
}

table td:first-child,
table th:first-child {
  border-left: none;
}

table th:first-child {
  -moz-border-radius: 6px 0 0 0;
  -webkit-border-radius: 6px 0 0 0;
  border-radius: 6px 0 0 0;
}
table th:last-child {
  -moz-border-radius: 0 6px 0 0;
  -webkit-border-radius: 0 6px 0 0;
  border-radius: 0 6px 0 0;
}
table th:only-child {
  -moz-border-radius: 6px 6px 0 0;
  -webkit-border-radius: 6px 6px 0 0;
  border-radius: 6px 6px 0 0;
}
table tr:last-child td:first-child {
  -moz-border-radius: 0 0 0 6px;
  -webkit-border-radius: 0 0 0 6px;
  border-radius: 0 0 0 6px;
}
table tr:last-child td:last-child {
  -moz-border-radius: 0 0 6px 0;
  -webkit-border-radius: 0 0 6px 0;
  border-radius: 0 0 6px 0;
}
aside {
  display: block;
  float: right;
  width: 390px;
}
blockquote {
  border-left: 0.5em solid #eee;
  padding: 0 0 0 2em;
  margin-left: 0;
}
blockquote cite {
  font-size: 14px;
  line-height: 20px;
  color: #bfbfbf;
}
blockquote cite:before {
  content: "\2014 \00A0";
}

blockquote p {
  color: #666;
}
hr {
  text-align: left;
  color: #999;
  height: 2px;
  padding: 0;
  margin: 16px 0;
  background-color: #e7e7e7;
  border: 0 none;
}

dl {
  padding: 0;
}

dl dt {
  padding: 10px 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: bold;
}

dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}

dd {
  margin-left: 0;
}
.content{
    margin: 0 auto;
    font-family: "Microsoft YaHei", arial,sans-serif;
    color: #444444;
    line-height: 1;
    padding: 30px;
}
p  {
  margin: 16px 0 16px 0;
}
</style>