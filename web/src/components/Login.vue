<template>
  <div>
    <el-card>
      <el-form label-width="80px" :model="LoginForm" label-position="left">
        <el-form-item label="用户名">
          <el-input v-model="LoginForm.username"></el-input>
        </el-form-item>
        <el-form-item type="password" label="密码">
          <el-input v-model="LoginForm.password"></el-input>
        </el-form-item>
        <div style="text-align: center; font-size: 20px">
          <span>还没有账号的小可爱?赶紧  </span> 
          <router-link to="/register" tag="span" style="color: red; font-size: 20px">注册</router-link>
        </div>
        <el-form-item>
          <el-button type="primary" style="float: right" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
    data() {
        return {
            LoginForm: {}
        }
    },
    methods: {
        async login() {
          const res = await this.$http.post('login', this.LoginForm)
          localStorage.token = res.data.token
          this.$router.push("/homecontent");
        }
    },
};
</script>

<style>

</style>