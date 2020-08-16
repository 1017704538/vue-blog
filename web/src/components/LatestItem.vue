<template>
  <div>
    <router-link
      tag="div"
      class="latest_comment_list"
      :to="linkto"
      placement="right"
      v-popover:popover
    >
      <div class="item_content">{{content}}</div>
      <el-popover ref="popover" placement="right" width="100" trigger="hover" :content="title"></el-popover>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, require: true },
    content: { type: String, require: true },
    linkto: { type: String, require: true },
  },
};
</script>

<style>
.latest_comment_list {
  border-radius: 4px;

  margin: 10px;
  font-size: 14px;
  padding: 5px;
}
.item_content {
  border-radius: 4px;
  background: #1ec7e6;
  color: #fff;
  text-align: center;
}
.latest_comment_list :hover {
  background: #fff;
  text-shadow: 0 0 10px #1ec7e6, 0 0 20px #1ec7e6, 0 0 30px #1ec7e6,
    0 0 40px #1ec7e6;
}
</style>