<template>
  <div class="commentItem">
    <div class="user">
      <img :src="avatar" alt />
      <span>{{nickname}}</span>
    </div>
    <div class="comment_content">{{content}}</div>
    <div class="comment_date">{{date}}</div>
  </div>
</template>


<script>
export default {
  props: {
    avatar: { type: String, require: true },
    nickname: { type: String, require: true },
    content: { type: String, require: true },
    date: { type: String, require: true },
  },
};
</script>

<style>
.commentItem {
  background-color: rgba(230, 238, 232, 0.65);
  margin: 10px;
  border-radius: 4px;
  padding: 5px;
}
.user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px;
  display: inline-block;
  vertical-align: middle;
}
.user span {
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
}
.comment_content {
  margin: 10px;
}
.comment_date {
  margin: 10px;
  text-align: right;
}
</style>