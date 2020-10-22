<template>
  <div>
    <van-form @submit="onSubmit" :model="RegisterForm">
      <van-field
        v-model="RegisterForm.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="RegisterForm.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="RegisterForm.nickname"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
        v-model="RegisterForm.email"
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
        :rules="[
          { required: true, message: '请填写您的邮箱！' },
          {
            pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
            message: '邮箱格式错误！',
          },
        ]"
      />
      <van-field name="uploader" label="上传头像">
        <template #input>
          <van-uploader :after-read="afterRead" />
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      RegisterForm: {},
    };
  },
  methods: {
    //头像上传
    async afterRead(file) {
      var formData = new FormData();
      formData.append("file", file.file);
      const res = await this.$http.post("upload", formData);
      this.$set(this.RegisterForm, "avatar", res.data.url);
      console.log(res);
    },
    async onSubmit() {
      let res;
      res = await this.$http.post("user/create", this.RegisterForm);
      this.$router.push("/mLogin");
    },
  },
};
</script>

<style>
</style>