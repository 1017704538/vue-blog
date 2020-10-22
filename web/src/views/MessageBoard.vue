<template lang="">
  <el-card>
    <div class="message">
      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="message.content" :rows="2" clearable></el-input>
      <el-button type="primary" round @click="addMessage">发布</el-button>
    </div>
    <!-- 留言列表 -->
    <div class="messageList">
      <commentitem
        v-for="(item, index) in messageList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
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
      :total="messageList.length"
    ></el-pagination>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      message: {},
      messageList: [],
      // 当前的页数
      currentPage: 1,
      // 当前每页显示多少条数据
      pagesize: 5,
    };
  },
  methods: {
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
    //发布留言
    async addMessage() {
      const token = localStorage.getItem("token");
      if (token) {
        if (this.message.content) {
          this.nowTime = new Date();
          this.message.date = this.formatDateTime(this.nowTime);
          this.message.uid = JSON.parse(
            localStorage.getItem("userPermission")
          )._id;
          const res = await this.$http.post("/message/create", this.message);
            this.getMessageList();
            this.message.content = "";
        } else {
          this.$message.error("留言不能为空");
        }
      } else {
        this.$message.error("请先登录");
      }
    },
    //获取留言列表
    async getMessageList() {
      const res = await this.$http.get(`message/list`);
      this.messageList = res.data;
    },
  },
  created() {
      this.getMessageList()
  },
};
</script>

<style>
.message {
  margin: 10px;
  text-align: right;
}
.message button {
  margin-top: 10px;
}
</style>