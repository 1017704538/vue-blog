<template>
  <div class="mHome">
    <Header></Header>
    <div class="main"><router-view></router-view></div>
    <div class="goTop" @click="backTop">
      <van-icon name="upgrade" size="2.5rem"/>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  components: {
    Header,
  },
  methods: {
    //回到顶部
    backTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },
};
</script>

<style>
.mHome {
  background-color: #f7f8fa;
}
.goTop {
  position: fixed;
  bottom: 2.5rem;
  right: 1.5rem;
  border-radius: 50%;
  top: auto;
  display: block;
  cursor: pointer;
  z-index: 999;
}
.main {
  width: 100%;
  height: 100%;
}
</style>