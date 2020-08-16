<template>
  <el-container class="home_container">
    <el-header>
      <span>个人博客后台</span>
      <el-button type="primary" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="202px">
        <el-menu background-color="#F5F5F5" router unique-opened>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>文章管理
            </template>
            <el-menu-item index="/articles/create">
              <template slot="title">
                <i class="el-icon-document"></i>新建文章
              </template>
            </el-menu-item>
            <el-menu-item index="/articles/list">
              <template slot="title">
                <i class="el-icon-tickets"></i>文章列表
              </template>
            </el-menu-item>
            <el-menu-item index="/tags/create">
              <template slot="title">
                <i class="el-icon-document"></i>新建标签
              </template>
            </el-menu-item>
            <el-menu-item index="/tags/list">
              <template slot="title">
                <i class="el-icon-tickets"></i>标签列表
              </template>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>评论管理
            </template>
            <el-menu-item index="/comments/list">
              <template slot="title">
                <i class="el-icon-tickets"></i>文章评论
              </template>
            </el-menu-item>
            <el-menu-item index="/messages/list">
              <template slot="title">
                <i class="el-icon-tickets"></i>留言
              </template>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>文件管理
            </template>
            <el-menu-item index="/photos/add">
              <template slot="title">
                <i class="el-icon-tickets"></i>上传图片
              </template>
            </el-menu-item>
            <el-menu-item index="/photos/list">
              <template slot="title">
                <i class="el-icon-tickets"></i>图片列表
              </template>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>系统管理
            </template>
            <el-menu-item index="/users/list">
              <template slot="title">
                <i class="el-icon-tickets"></i>用户列表
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      // 是否折叠
      isCollapse: false,
    };
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
    // 点击按钮切换菜单的折叠与展开
    toggleCollapse() {
      this.iscollapse = !this.iscollapse;
    },
  },
};
</script>

<style>
.home_container {
  height: 100%;
}

.el-header {
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: black;
  font-size: 20px;
  border: #fff solid 2px;
}

.el-main {
  background-color: #f5f5f5;
}
.el-aside {
  background-color: #f5f5f5;
  border-right: #fff solid 2px;
}
</style>
