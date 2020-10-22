<template>
<div class="header">
  <van-search
  v-model="value"
  show-action
  placeholder="请输入搜索关键词"
  @search="onSearch"
>
  <template #action>
    <div @click="onSearch">搜索</div>
  </template>
</van-search>
<van-tabs v-model="active" swipeable >
  <van-tab title="首页" to="/m"></van-tab>
  <van-tab title="文章" to="/mArticle/list"></van-tab>
  <van-tab title="照片墙" to="/file"></van-tab>
  <van-tab title="留言版" to="/mMessage"></van-tab>
</van-tabs>
</div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      active: 0,
    };
  },
  methods: {
      async onSearch() {
      // 回车键查询
      const res = await this.$http.get(`/search?key=${this.value}`);
      //路由跳转并传递对象
      var arr = JSON.stringify(res.data.data);
      this.$router.push("/mResult?obj=" + encodeURIComponent(arr));
      //清空搜索框内容
      this.value = ''
    },
  },
};
</script>

<style>
</style>