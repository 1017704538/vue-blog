<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文件管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{id ? '编辑' : '新建'}}图片</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图 -->
    <el-card :body-style="{ padding: '10px' }">
      <!-- 表单部分 -->
      <el-form ref="form" label-width="80px">
        <el-form-item label="上传图片">
          <el-upload class="upload-demo" drag :action="uploadUrl" :on-success="afterUpload">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
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
      photos: {},
      nowTime: "", // 当前时间
    };
  },
  created() {},
  methods: {
    async save() {
      this.nowTime = new Date();
      this.photos.date = this.formatDateTime(this.nowTime);
      // this.photos.uid = JSON.parse(localStorage.getItem("userPermission"))._id;
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/photos/${this.id}`, this.photos);
      } else {
        res = await this.$http.post("rest/photos", this.photos);
      }
      this.$router.push("/photos/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    //获取时间
    formatDateTime(date) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      var h = date.getHours();
      h = h < 10 ? "0" + h : h;
      var minute = date.getMinutes();
      minute = minute < 10 ? "0" + minute : minute;
      var second = date.getSeconds();
      second = second < 10 ? "0" + second : second;
      return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
    },
    afterUpload(res) {
      this.$set(this.photos, "src", res.url);
    },
  },
};
</script>

