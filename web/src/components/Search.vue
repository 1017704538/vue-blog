<template>
  <el-card class="search">
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="key"
      @keyup.enter.native="onSubmit"
    ></el-input>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      key: "",
    };
  },
  methods: {
    async onSubmit() {
      // 回车键查询
      const res = await this.$http.get(`/search?key=${this.key}`);
      //路由跳转并传递对象
      var arr = JSON.stringify(res.data.data);
      this.$router.push("/result?obj=" + encodeURIComponent(arr));
    },
  },
};
</script>

<style>
.search {
  margin-top: 20px;
  margin-left: 15%;
}
.search .el-card__body {
  padding: 5px;
}
</style>