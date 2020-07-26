<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{id ? '编辑' : '新建'}}文章</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图 -->
    <el-card :body-style="{ padding: '10px' }">
      <!-- 表单部分 -->
      <el-form ref="form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="article.title"></el-input>
        </el-form-item>

        <el-form-item label="文章简介">
          <el-input v-model="article.introduction"></el-input>
        </el-form-item>
        <!-- 标签选择 -->
        <el-form-item label="所含标签">
          <el-select v-model="article.tagid" multiple>
            <el-option
              v-for="item in tagsList"
              :key="item._id"
              :label="item.name"
              :value="item._id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 封面上传 -->
        <el-form-item label="上传封面">
          <el-upload class="upload-demo" :action="uploadUrl" :on-success="afterUpload">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <!-- Markdown 编写-->
        <mavon-editor v-model="article.body" ref="md" @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>


        <el-form-item>
          <el-button type="primary" @click="save" style="float: right; margin-top: 15px">保存</el-button>
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
      article: {},
      tagsList: [],
      nowTime: "" // 当前时间
    };
  },
  created() {
    this.fetchTags();
    // this.fetch();
    this.id && this.fetch();
  },
  methods: {
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
    //获取所有标签
    async fetchTags() {
      const res = await this.$http.get(`rest/tags`);
      this.tagsList = res.data;
    },
    //发布
    async save() {
      this.nowTime = new Date();
      this.article.date = this.formatDateTime(this.nowTime);
      this.article.content = this.$refs.md.d_render //html
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/articles/${this.id}`, this.article);
      } else {
        res = await this.$http.post("rest/articles", this.article);
      }
      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },  
    //加载文章信息
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`);
      this.article = res.data;
    },

    afterUpload(res) {
      this.$set(this.article, "cover", res.url);
    },

    async $imgAdd(pos, file) {
      var _this = this;
      // 将图片上传到服务器.
      var formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post("upload", formData)
      // console.log(res.data.url)
      this.$refs.md.$img2Url(pos, res.data.url)
    },
    $imgDel() {

    }
  }
};
</script>

