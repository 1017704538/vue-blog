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
  background-color: rgba(230, 238, 232, 0.65);
  margin: 10px;
  font-size: 14px;
  padding: 5px;
}
.item_content {
  background-color: #fff;
  text-align: center;
}
</style>