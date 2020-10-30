<template>
  <div class="bg">
    <transition
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <img v-bind:src="showImg" v-if="show" />
      <!-- <img src="../static/bg/0.jpg" v-if="show" /> -->
    </transition>
  </div>
</template>

<script>
import Velocity from "velocity-animate";

export default {
  name: "background",
  data() {
    return {
      imgs: [
        {
          fileName: "0.jpg",
          imgURL: "http://qiniu.yukikazesama.cn/0.jpg",
        },
        {
          fileName: "1.jpg",
          imgURL: "http://qiniu.yukikazesama.cn/1.jpg",
        },
        {
          fileName: "2.jpg",
          imgURL: "http://qiniu.yukikazesama.cn/2.jpg",
        },
        {
          fileName: "3.jpg",
          imgURL: "http://qiniu.yukikazesama.cn/3.jpg",
        },
        {
          fileName: "4.jpg",
          imgURL: "http://qiniu.yukikazesama.cn/4.jpg",
        },
      ],
      isAnimate: false,
      showImg: "http://qiniu.yukikazesama.cn/0.jpg",
      showIndex: 0,
      show: true,
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      this.show = false;
    });
  },
  methods: {
    beforeEnter: function (name) {
      name.style.opacity = 0;
      name.style.transform = "scale(1) rotate(0deg)";
    },
    enter: function (name, done) {
      var vm = this;
      Velocity(
        name,
        { opacity: 1, scale: 1.2, rotateZ: "3deg" },
        {
          duration: 6000,
          complete: function () {
            done();
            vm.show = false;
          },
        }
      );
    },
    leave: function (name, done) {
      var vm = this;
      Velocity(
        name,
        { opacity: 0, scale: 1, rotateZ: "0deg" },
        {
          duration: 6000,
          complete: function () {
            done();
            vm.showImg =
              vm.imgs[
                vm.showIndex == 4 ? (vm.showIndex = 0) : (vm.showIndex += 1)
              ].imgURL;
            vm.show = true;
          },
        }
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  position: fixed;
  left: 0px;
  top: 0px;
  background-color: rgb(180, 180, 180);
  height: 100%;
  width: 100%;
  min-width: 1000px;
  z-index: -100;
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  zoom: 1;
}
img {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  z-index: -99;
  object-fit: cover;
  /*若图片不能全部显示,加上下面这条调节两个值可以设置要显示图片的哪个部分 */
  /* object-position: 5px 10%; */
}
.screen {
  width: 100%;
  height: 100%;
  background-color: #444;
  z-index: -98;
  opacity: 0.8;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=10);
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>
