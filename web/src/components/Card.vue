<template>
  <div>
    <el-card :body-style="{ padding: '0px' }" class="card-article">
      <div class="card-header">
        <span>{{title}}</span>
      </div>
      <div class="card-info">
        <template>
          <i class="iconfont icon-rili">{{date}}</i>
        </template>
        <template>
          <i class="iconfont icon-biaoqian" v-for="(item, index) in tags" :key="index">{{item.name}}</i>
        </template>
        <template>
          <i class="iconfont icon-msg">{{comments}}</i>
        </template>
      </div>
      <router-link tag="div" v-popover:popover class="card-cover" :to="linkto">
          <img :src="cover"/>
      </router-link>
    </el-card>
    <el-popover
      ref="popover"
      placement="top-end"
      title="简介"
      width="200"
      trigger="hover"
      :content="introduction"
    ></el-popover>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, require: true },
    date: { type: String, require: true },
    tags: { type: Array, require: true },
    comments: { type: String, require: true },
    cover: { type: String, require: true },
    introduction: { type: String, require: true },
    linkto: { type: String, require: true },
  },
};
</script>

<style>
.card-article {
  margin-bottom: 10px;
  width: 100%;
}
.card-cover {
  padding: 20px;
  margin: 20px;
  border-radius: 4px;
  background-color: rgba(230, 238, 232, 0.65);
  box-shadow: 0px 0px 8px black;
}
.card-cover img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 4px;
  cursor: url("../assets/img/mouse2.png"), auto;
  transition: all 0.6s;
}
.card-cover :hover {
  transform: scale(1.2);
}
.card-header {
  padding: 10px 15px 0px 15px;
  text-align: center;
}
.card-header span {
  font-size: 32px;
  background: #1ec7e6;
  color: #fff;
}
.card-header :hover {
  background: #fff;
  text-shadow: 0 0 10px #1ec7e6, 0 0 20px #1ec7e6, 0 0 30px #1ec7e6,
    0 0 40px #1ec7e6;
  cursor: url("../assets/img/mouse2.png"), auto;
}
.card-info {
  text-align: center;
  padding: 10px 15px 0px 15px;
}

.card-info i {
  margin: 0 5px 0 5px;
}

.card-introduction {
  margin: 20px 20px;
  color: rgb(180, 180, 180);
  font-size: 24px;
}
</style>