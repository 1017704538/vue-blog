<template>
  <el-card :body-style="{ padding: '0px' }">
    <div slot="header">
      <span>标签墙</span>
    </div>
    <el-tag
      v-for="(item, index) in tagList"
      :key="index"
      class="tag"
      @click="findByTag($event)"
    >{{item.name}}</el-tag>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tagList: [],
      key: ''
    };
  },
  methods: {
    async getTagList() {
      const res = await this.$http.get("tag/list");
      this.tagList = res.data;
    },
    async findByTag(e) {
        // console.log(e.target.innerHTML)
        this.key = e.target.innerHTML
        const res = await this.$http.get(`/search?key=${this.key}`);
        var arr = JSON.stringify(res.data.data);
        this.$router.push("/result?obj=" + encodeURIComponent(arr));
        this.key = ''
    }
  },

  created() {
    this.getTagList();
  },
};
</script>


