<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>


<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
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
  box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: #ededed;
  border-radius: 5px;
}
</style>
