<template>
  <div>
    <van-card
      v-for="(item, index) in result.slice(
        (currentPage - 1) * pagesize,
        currentPage * pagesize
      )"
      :key="index"
      :desc="item.introduction"
      :title="item.title"
      :thumb="item.cover"
      @click="linkTo(item._id)"
    >
      <template #tags>
        <van-tag
          plain
          type="danger"
          v-for="(item, index) in item.tags"
          :key="index"
          >{{ item }}</van-tag
        >
      </template>
      <template #footer>
        {{ item.date }}
      </template>
    </van-card>
    <!-- 分页 -->
    <van-pagination
      v-model="currentPage"
      :items-per-page="4"
      :total-items="result.length"
      :show-page-size="3"
      force-ellipses
      @change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: [],
      // 当前的页数
      currentPage: 1,
      // 当前每页显示多少条数据
      pagesize: 4,
    };
  },
  methods: {
    fetch() {
      var list = decodeURIComponent(this.$route.query.obj);
      this.result = JSON.parse(list);
      // console.log(this.result);
    },
    // 文章详情跳转
    linkTo(id) {
      this.$router.push(`/mArticle/${id}`);
    },
    //监听页码值改变的事件
    handleCurrentChange(newPage) {
      this.currentPage = newPage;
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style>
</style>