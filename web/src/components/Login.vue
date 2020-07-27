<template>
  <div>
    <el-card>
      <el-form
        label-width="80px"
        ref="loginFormRef"
        :model="LoginForm"
        label-position="left"
        :rules="loginFormRules"
        status-icon
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="LoginForm.username" prefix-icon="iconfont icon-yonghu"></el-input>
        </el-form-item>
        <el-form-item type="password" label="密码" prop="password">
          <el-input v-model="LoginForm.password" type="password" prefix-icon="iconfont icon-mima"></el-input>
        </el-form-item>
        <div style="text-align: center; font-size: 20px">
          <span>还没有账号的小可爱?赶紧</span>
          <router-link to="/register" tag="span" style="color: red; font-size: 20px">注册</router-link>
        </div>
        <el-form-item>
          <el-button type="primary" style="float: right" @click="login" round>登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  inject: ["reload"], //注入reload方法
  data() {
    return {
      LoginForm: {},
      // 这是表单验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async login() {
      //登录预验证
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return;
        const res = await this.$http.post("login", this.LoginForm);
        //token值
        localStorage.token = res.data.token;
        //当前用户信息
        localStorage.userPermission = JSON.stringify(res.data.userinfo);
        this.$message({
          type: "success",
          message: "登录成功",
        });
        //跳转首页
        this.$router.push("/homecontent");
        //刷新页面
        this.reload();
      });
    },
  },
};
</script>

<style>
</style>