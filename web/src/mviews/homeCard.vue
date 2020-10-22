<template>
  <div>
    <div class="homeCard">
      <span>公告</span>
      <p>这里是Yukikaze的个人博客，总结自己在前端领域的所学</p>
      <p>如果内容对您有所帮助，欢迎点赞评论</p>
      <div class="myInformation">
        <p>联系我: 1017704538@qq.com</p>
        <a href="https://github.com/1017704538"
          ><img src="../assets/img/github.jpg" alt=""
        /></a>
        <a href="https://juejin.im/user/4195392103127512"
          ><img src="../assets/img/jue.svg" alt=""
        /></a>
      </div>
    </div>
    <SomeArticle></SomeArticle>
  </div>
</template>

<script>
import SomeArticle from "./SomeArticle";
export default {
  components: {
    SomeArticle,
  },
};
</script>

<style>
.homeCard {
  background-color: #f7f8fa;
  text-align: center;
  box-shadow: 0px 0px 6px black;
  margin: 0.8rem;
  font-size: 0.5rem;
  padding: 0.5rem;
}
.homeCard span {
  font-size: 1.5rem;
  background: #1ec7e6;
  color: #fff;
}
.homeCard :hover {
  background: #fff;
  text-shadow: 0 0 10px #1ec7e6, 0 0 20px #1ec7e6, 0 0 30px #1ec7e6,
    0 0 40px #1ec7e6;
}
.myInformation img {
  width: 1.25rem;
  height: 1.25rem;
  padding: 0.5rem;
}
</style>