<template>
  <div>
    <el-container class="home_container">
      <!-- 顶部导航栏 -->
      <el-header>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#8eb0df"
          router
        >
          <el-menu-item index="/homecontent">
            <img src="../assets/img/logo.png" style="width:15rem" />
          </el-menu-item>
          <el-menu-item index="/homecontent">
            <template slot="title">
              <i class="iconfont icon-shouye">首页</i>
            </template>
          </el-menu-item>
          <el-menu-item index="/article/list">
            <template slot="title">
              <i class="iconfont icon-16">文章</i>
            </template>
          </el-menu-item>
          <el-menu-item index="/photo">
            <template slot="title">
              <i class="iconfont icon-tupian">照片墙</i>
            </template>
          </el-menu-item>
          <el-menu-item index="/tag">
            <template slot="title">
              <i class="iconfont icon-biaoqian">标签墙</i>
            </template>
          </el-menu-item>
          <el-menu-item index="/message">
            <template slot="title">
              <i class="iconfont icon-msg">留言板</i>
            </template>
          </el-menu-item>
          <el-submenu index="6">
            <template slot="title">
              <i class="iconfont icon-gongjuxiang">工具站</i>
            </template>
            <el-menu-item index key="http://www.galmoe.com">
              <a href="http://www.galmoe.com/" target="_self">b站视频封面提取</a>
            </el-menu-item>
            <el-menu-item index key="http://www.dianyinggou.com/linkNav/">
              <a href="http://www.dianyinggou.com/linkNav/" target="_self">电影狗</a>
            </el-menu-item>
            <el-menu-item index key="https://www.zoomeye.org/">
              <a href="https://www.zoomeye.org/" target="_self">钟馗之眼</a>
            </el-menu-item>
            <el-menu-item index key="https://www.luomapan.com/">
              <a href="https://www.luomapan.com/" target="_self">罗马盘</a>
            </el-menu-item>
            <el-menu-item index key="https://yandex.com/">
              <a href="https://yandex.com/" target="_self">yandex搜索</a>
            </el-menu-item>
            <el-menu-item index key="https://magi.com/">
              <a href="https://magi.com/" target="_self">AI学习引擎</a>
            </el-menu-item>
          </el-submenu>
          <el-submenu style="float: right" v-if="token" index="7">
            <template slot="title">
              <Avatar :avatar="userinfo.avatar" :nickname="userinfo.nickname"></Avatar>
            </template>
            <el-menu-item @click="logout">退出登录</el-menu-item>
          </el-submenu>
          <el-menu-item index="/login" style="float: right" v-if="!token">
            <template slot="title">
              <i class="iconfont icon-yonghu">登录</i>
            </template>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container style="height: 100%">
        <el-aside>
          <Search></Search>
          <Latest></Latest>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
      <el-footer>©️2020 By Yukikaze</el-footer>
    </el-container>
    <!-- live2d小人 -->
    <Live2d></Live2d>
    <!-- 背景渐变切换 -->
    <Background></Background>
  </div>
</template>

<script>
import Live2d from "@/components/Live2d";
import Background from "@/components/Background";
import Search from "@/components/Search";
import Avatar from "@/components/Avatar";
import Latest from "@/components/Latest";
export default {
  inject: ["reload"], //注入reload方法
  components: {
    /*其他组件*/
    Live2d,
    Background,
    Search,
    Avatar,
    Latest,
  },
  data() {
    return {
      token: "",
      userinfo: {},
      background: false,
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.userinfo = JSON.parse(localStorage.getItem("userPermission"));
      this.token = localStorage.getItem("token");
      // console.log(this.userinfo.isAdmin)
    },
    //登出
    logout() {
      localStorage.clear();
      this.$router.push("/homecontent");
      //刷新页面
      this.reload();
    },
  },
  mounted() {},
};
</script>

<style>
.home_container {
  height: 100%;
}
.el-header {
  padding: 0 !important;
  opacity: 0.8;
}
.el-menu {
  border: 0 !important;
}
.el-footer {
  font-size: 12px;
  text-align: center;
  color: #fff;
}
.el-menu a {
  text-decoration: none;
  color: #fff;
  display: inline-block;
  /*跟随父元素的宽高*/
  height: 100%;
  width: 100%;
}
</style>
