<template>
  <div>
    <div v-html="content"></div>
  </div>
</template>

<script>
import marked from "marked";

export default {
  data() {
    return {
      content: ` `
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(
        `rest/articles/5f182103324537b37898486c`
      );
      this.content = marked(res.data.content);
    }
  },
  created() {
    this.fetch();
  }
};
</script>
