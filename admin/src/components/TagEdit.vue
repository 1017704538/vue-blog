<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{id ? '编辑' : '新建'}}标签</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图 -->
    <el-card :body-style="{ padding: '10px' }">
      <!-- 表单部分 -->
      <el-form ref="form" label-width="80px">
        <el-form-item label="标签名称">
          <el-input v-model="tags.name"></el-input>
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
    id: {}
  },
  data() {
    return {
      tags: {},
      nowTime: "" // 当前时间
    };
  },
  created() {
    
  },
  methods: {
    async save() {
      this.nowTime = new Date();
      this.tags.date = this.formatDateTime(this.nowTime)
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/tags/${this.id}`, this.tags);
      } else {
        res = await this.$http.post("rest/tags", this.tags);
      }
      this.$router.push("/tags/list");
      this.$message({
        type: "success",
        message: "保存成功"
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
    }
  }
};
</script>

