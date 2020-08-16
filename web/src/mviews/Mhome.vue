<template>
  <div>
    <quick-menu
      :menu-count="getCount"
      :icon-class="icons"
      :menu-url-list="list"
      :background-color="backgroundColor"
      :color="color"
      :position="position"
      :is-open-new-tab="getIsOpenNewTab"
      @process="print"
    ></quick-menu>
  </div>
</template>

<script>
import quickMenu from "vue-quick-menu";

export default {
  components: {
    quickMenu,
  },
  data() {
    return {
      count: 4,
      icons: ["fa fa-github", "fa fa-comment", "fa fa-code", "fa fa-envelope"],
      list: [
        { isLink: false },
        { isLink: true, url: "/doo" },
        { isLink: true, url: "/foo" },
        { isLink: false },
      ],
      backgroundColor: "#17c4c5",
      color: "#ffffff",
      position: "top-left",
      isOpenNewTab: false,
    };
  },
};
</script>