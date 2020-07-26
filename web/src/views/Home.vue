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
          <el-menu-item index="0">
            <img src="../assets/img/logo.png" style="width:15rem" />
          </el-menu-item>
          <el-menu-item index="/homecontent">
            <template slot="title">
              <i class="iconfont icon-shouye">首页</i>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <template slot="title">
              <i class="iconfont icon-16">文章</i>
            </template>
          </el-menu-item>
          <el-menu-item index="3">
            <template slot="title">
              <i class="iconfont icon-tupian">照片墙</i>
            </template>
          </el-menu-item>
          <el-menu-item index="4">
            <template slot="title">
              <i class="iconfont icon-biaoqian">标签墙</i>
            </template>
          </el-menu-item>
          <el-menu-item index="5">
            <template slot="title">
              <i class="iconfont icon-msg">留言板</i>
            </template>
          </el-menu-item>
          <el-submenu index="6">
            <template slot="title">
              <i class="iconfont icon-gongjuxiang">工具站</i>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="/login" style="float: right">
            <template slot="title">
              <i class="iconfont icon-yonghu">登录</i>
            </template>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="20%">
          <!-- <Player></Player> -->
        </el-aside>
        <el-container>
          <el-main><router-view></router-view></el-main>
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
import Player from 'zw-player'
export default {
  components: {
    /*其他组件*/
    Live2d,
    Background,
    Player
  },
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
</style>
