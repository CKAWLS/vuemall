<template>
  <div id="detail">
    <detail-nav-bar :title=title></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
export default {
  name: "Detail",
  components: {
    DetailNavBar
  },
  data() {
    return {
      id: null,
      title: ["商品","参数","评论","推荐"]
    }
  },
  mounted() {
    this.id = this.$route.query.id
  }
}
</script>

<style scoped>

</style>
