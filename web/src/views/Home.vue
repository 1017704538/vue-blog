<template>
  <div>
    <el-container class="home_container">
      <el-header>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#8eb0df"
        >
          <el-menu-item index="0">
            <img src="../assets/img/logo.png" style="width:15rem" />
          </el-menu-item>
          <el-menu-item index="1">
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
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
    <Live2d></Live2d>
  </div>
</template>

<script>
import Live2d from "@/components/Live2d";
export default {
  components: {
    /*其他组件*/
    Live2d
  }
};
</script>

<style>
.home_container {
  height: 100%;
}
.el-header {
  padding: 0 !important;
}
.el-menu {
  display: flex;
}
.el-menu-item {
  flex: 1;
}
</style>
