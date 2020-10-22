<template>
  <div>
    <van-form @submit="onSubmit" :model="LoginForm">
      <van-field
        v-model="LoginForm.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="LoginForm.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div style="text-align: center; font-size: 1rem">
      <span>还没有账号?赶紧</span>
      <router-link
        to="/mRegister"
        tag="span"
        style="color: red; font-size: 1rem"
        >注册</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"], //注入reload方法
  data() {
    return {
      LoginForm: {},
    };
  },
  methods: {
    async onSubmit() {
      const res = await this.$http.post("login", this.LoginForm);
      //token值
      localStorage.token = res.data.token;
      //当前用户信息
      localStorage.userPermission = JSON.stringify(res.data.userinfo);
      //跳转首页
      this.$router.push("/homeCard");
      //刷新页面
      this.reload();
    },
  },
};
</script>