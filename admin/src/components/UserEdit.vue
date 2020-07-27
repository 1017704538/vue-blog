<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{id ? '编辑' : '新建'}}用户</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图 -->
    <el-card :body-style="{ padding: '10px' }">
      <!-- 表单部分 -->
      <el-form ref="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="users.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="text" v-model="users.password"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="users.nickname"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="users.email"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <img :src="users.avatar" style="width:50px;height:50px;" />
        </el-form-item>
        <el-form-item label="管理员">
            <el-radio v-model="users.isAdmin" label="true">是</el-radio>
            <el-radio v-model="users.isAdmin" label="false">否</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      users: {},
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/users/${this.id}`, this.users);
      } else {
        res = await this.$http.post("rest/users", this.users);
      }
      this.$router.push("/users/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/users/${this.id}`);
      this.users = res.data;
    },
  },
};
</script>

