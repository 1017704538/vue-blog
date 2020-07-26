<template>
  <div>
    <el-card>
      <el-form label-width="80px" :model="RegisterForm" label-position="left">
        <el-form-item label="用户名">
          <el-input v-model="RegisterForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="RegisterForm.password"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="RegisterForm.nickname"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="RegisterForm.email"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-upload class="upload-demo" :action="uploadUrl" :on-success="afterUpload">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="float: right" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      RegisterForm: {},
      imageUrl: "",
    };
  },
  methods: {
    //头像上传
    afterUpload(res) {
      this.$set(this.RegisterForm, "avatar", res.url);
    },
    //注册
    async register() {
      let res;
      res = await this.$http.post("user/create", this.RegisterForm);
      this.$router.push("/login");
    }
  },
};
</script>

<style>
</style>
