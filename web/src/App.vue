<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>


<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    //刷新页面
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
    //设备判断
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
  },
  mounted() {
    if (this._isMobile()) {
      // alert("手机端");
      this.$router.replace("/m");
    } else {
      // alert("pc端");
      this.$router.replace("/");
    }
  },
};
</script>

<style>
/* 滚动条样式 */
::-webkit-scrollbar {
  width: 10px;
  height: 1px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #1ec7e6;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 5px;
}
</style>
