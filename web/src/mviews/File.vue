<template>
  <div class="wall">
    <vue-waterfall-easy
      :imgsArr="imgsArr"
      @scrollReachBottom="getPhotoList"
    ></vue-waterfall-easy>
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  components: {
    vueWaterfallEasy,
  },
  data() {
    return {
      imgsArr: [],
    };
  },
  methods: {
    async getPhotoList() {
      const res = await this.$http.get("/photo/list");
      this.imgsArr = this.imgsArr.concat(res.data);
    },
  },
  created() {
    this.getPhotoList();
  },
};
</script>

<style>
.wall {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 7rem;
  left: 50%;
  background-color: #f7f8fa;
  box-shadow: 0px 0px 6px black;
  transform: translateX(-50%);
}
</style>