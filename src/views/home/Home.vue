<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childComponents/HomeSwiper";
import HomeRecommend from "./childComponents/HomeRecommend";
import {getHomeMultiData} from "../../network/home/home";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  created() {
    getHomeMultiData().then(res => {
      //箭头函数中的this会向外层寻找对象
      //函数执行完毕此时会回收res对象的引用 但是由于result的引用计数器不为0 res对象不会被回收掉
      //this.result = res
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
.home-nav {
  color: white;
  background: var(--color-tint);
}
</style>
