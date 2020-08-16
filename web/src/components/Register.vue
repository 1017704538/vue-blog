<template>
  <div>
    <el-card>
      <el-form
        label-width="80px"
        :model="RegisterForm"
        label-position="left"
        :rules="RegisterFormRules"
        ref="RegisterFormRef"
        status-icon
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="RegisterForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="RegisterForm.password"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="RegisterForm.nickname"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="RegisterForm.email"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-upload class="upload-demo" :action="uploadUrl" :on-success="afterUpload">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="float: right" @click="register" round>注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    // 验证邮箱的规则
    var checkEmail = (rule, value, cb) => {
      // 验证邮箱的正则表达式
      const regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (regEmail.test(value)) {
        return cb();
      }

      cb(new Error("请输入合法的邮箱"));
    };

    return {
      RegisterForm: {},
      imageUrl: "",
      //注册表单的数据验证规则对象
      RegisterFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "用户名长度在3-10个字符之间",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "密码长度在6-15个字符之间",
            trigger: "blur",
          },
        ],
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "昵称长度在3-15个字符之间",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    //头像上传
    afterUpload(res) {
      this.$set(this.RegisterForm, "avatar", res.url);
    },
    //注册
    async register() {
      //注册预验证
      this.$refs.RegisterFormRef.validate(async (valid) => {
        if (!valid) return;
        let res;
        res = await this.$http.post("user/create", this.RegisterForm);
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style>
</style>
