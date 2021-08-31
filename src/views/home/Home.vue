<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <scroll class="content"
            @scroll="homeScroll"
            :probe-type="3"
            :pull-up-load="true"
            ref="scroll"
            @pullingUp="loadMore">
      <home-swiper :banner="banner"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature></home-feature>
      <tab-control class="tab-control"
                   :title="['流行','新款','精选']"
                   @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top class="back-top" @click="backToTop" v-if="this.isUpToTop">
      <template v-slot:scrollTop>
        <img src="../../assets/img/top.png" alt="">
      </template>
    </back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/good/GoodsList";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backTop/BackTop";

import HomeSwiper from "./childComponents/HomeSwiper";
import HomeRecommend from "./childComponents/HomeRecommend";
import HomeFeature from "./childComponents/HomeFeature";
import {getHomeMultiData, getHomeGoodsXX} from "../../network/home/home";

export default {
  name: "home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,

    HomeFeature,
    HomeSwiper,
    HomeRecommend
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop',
      isUpToTop: false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    },
  },
  methods: {
    //事件监听
    tabClick(index) {
      switch (index) {
        case 1 :
          this.currentType = 'sell';
          break;
        case 2 :
          this.currentType = 'new';
          break;
        case 0 :
          this.currentType = 'pop';
          break;
      }
    },
    backToTop() {
      this.$refs.scroll.scrollTo(0,0)
    },
    homeScroll(position) {
      this.isUpToTop = (-position.y) > 1000
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    //网络请求
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        //箭头函数中的this会向外层寻找对象
        //函数执行完毕此时会回收res对象的引用 但是由于result的引用计数器不为0 res对象不会被回收掉
        //this.result = res
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoodsXX(type, page).then(res => {
        //console.log(res);
        //... ES6的结构语法
        this.goods[type].list.push(...res.data.list)
        // for(let item of res.data.list){
        //   this.goods[type].list.push(item)
        // }
        this.goods[type].page++
      })
    }
  },
  created() {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
  /*vh: view height 窗口高宽*/
  height: 100vh;
  position: relative;
}

.home-nav {
  color: white;
  background: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  /*position: sticky;*/
  /*top: 0;*/
  /*z-index: 999;*/
}

/*吸顶效果*/
.tab-control {
  position: sticky;
  top: 44px;
  background: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.back-top img{
  width: 50px;
  height: 50px;
}
</style>
