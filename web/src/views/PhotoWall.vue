<template>
  <div class="photoWall">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getPhotoList"></vue-waterfall-easy>
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
.photoWall {
  background-color: #545c64;
  opacity: 0.8;
  padding: 20px;
  position: absolute;
  top: 0;
  bottom: 10%;
  width: 60%;
  border-radius: 4px;
}
.photoWall img {
    border-radius: 4px;
}
</style>