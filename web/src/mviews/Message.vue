<template>
  <div class="message">
    <van-field
      v-model="message.content"
      rows="1"
      autosize
      label="留言"
      type="textarea"
      placeholder="请输入留言"
    />
    <van-button round type="info" size="large" @click="addMessage" style="margin: 0.45rem"
    >发布</van-button
    >
    <!-- 评论列表 -->
    <div class="messageList">
      <commentitem
        v-for="(item, index) in messageList.slice(
          (currentPage - 1) * pagesize,
          currentPage * pagesize
        )"
        :key="index"
        :avatar="item.uid.avatar"
        :nickname="item.uid.nickname"
        :content="item.content"
        :date="item.date"
      ></commentitem>
    </div>
    <!-- 分页 -->
    <van-pagination
      v-model="currentPage"
      :items-per-page="4"
      :total-items="messageList.length"
      :show-page-size="3"
      force-ellipses
      @change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前的页数
      currentPage: 1,
      // 当前每页显示多少条数据
      pagesize: 4,
      // 评论列表
      messageList: [],
      //评论
      message: {},
      nowTime: "", // 当前时间
    };
  },
  methods: {
    //监听页码值改变的事件
    handleCurrentChange(newPage) {
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
    async getMessageList() {
      const res = await this.$http.get(`message/list`);
      this.messageList = res.data;
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
  },
  created() {
    this.getMessageList();
  },
};
</script>

<style>
.message {
  background-color: #f7f8fa;
  box-shadow: 0px 0px 6px black;
  margin: 0.8rem;
  font-size: 0.5rem;
  padding: 0.5rem;
}
</style>