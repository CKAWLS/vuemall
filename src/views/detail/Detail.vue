<template>
  <div id="detail">
    <detail-nav-bar :title=title
                    class="nav-bar"
                    @navClick="scrollToX"
                    ref="navBar"></detail-nav-bar>
    <scroll :pull-up-load="false"
            :probe-type="3"
            class="content"
            @scroll="detailScroll"
            ref="scroll">
      <detail-swiper :swiper-img="swiperImg" class="detail-swiper"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop :shop="shop" ref="shop"></detail-shop>
      <detail-goods-info :detail-info="goodsInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommendInfo" @imgLoad="imgLoad" ref="recommend"></goods-list>
    </scroll>
    <back-top class="back-top" @click="backToTop" v-show="this.isUpToTop">
      <template v-slot:scrollTop>
        <img src="../../assets/img/top.png" alt="">
      </template>
    </back-top>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShop from "./childComponents/DetailShop";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
import DetailCommentInfo from "./childComponents/DetailCommentInfo";
import DetailBottomBar from "./childComponents/DetailBottomBar";

import Scroll from "../../components/common/scroll/Scroll";
import {detailRequest, recommendRequest, Goods, Shop} from "../../network/detail/detail";
import GoodsList from "../../components/content/good/GoodsList";
import {scrollToTop} from "../../common/mixin";


export default {
  name: "detail",
  components: {
    DetailBottomBar,
    DetailCommentInfo,
    DetailGoodsInfo,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    Scroll,
    GoodsList
  },
  data() {
    return {
      id: null,
      title: ["商品", "参数", "评论", "推荐"],
      detailInfo: null,
      swiperImg: null,
      goods: {},
      shop: {},
      goodsInfo: {},
      commentInfo: {},
      recommendInfo: {},
      navClickPosition: [],
      getNavClickPosition: null,
      currIndex: 0
    }
  },
  mixins: [scrollToTop],
  computed: {},
  created() {
    // 获取iid
    this.id = this.$route.query.id;

    // 获取详情数据
    detailRequest(this.id).then((res) => {
      //console.log(res)
      this.detailInfo = res
      this.swiperImg = res.result.itemInfo.topImages
      // 获取商品信息
      this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
      // 获取商铺信息
      this.shop = new Shop(res.result.shopInfo)
      // 获取商品的详细信息
      this.goodsInfo = res.result.detailInfo
      // 获取评论信息
      if (res.result.rate.list) {
        this.commentInfo = res.result.rate.list[0];
      }

      // this.$nextTick(() => {
      //   // 根据最新的数据 DOM已经被渲染
      //   // 图片还没有加载完成
      //   this.navClickPosition = []
      //
      //   this.navClickPosition.push(0)
      //   this.navClickPosition.push(this.$refs.comment.$el.offsetTop)
      //   this.navClickPosition.push(this.$refs.shop.$el.offsetTop)
      //   this.navClickPosition.push(this.$refs.recommend.$el.offsetTop)
      //   console.log(this.navClickPosition)
      // })
    })

    // 获取推荐数据
    recommendRequest().then(res => {
      //console.log(res)
      this.recommendInfo = res.data.list
    })

  },
  updated() {
    this._getOffsetTop()
  },
  methods: {
    imageLoad() {
      if (this.$route.path.indexOf('detail') > -1) {
        this.$refs.scroll.refresh()
      }
    },
    imgLoad() {
      // 防抖函数 提高性能
      this.$refs.scroll.refresh()
    },
    scrollToX(index) {
      // switch (index){
      //   case 0: this.$refs.scroll.scrollTo(0, 0, 300);break
      //   case 1: this.$refs.scroll.scrollTo(0, -this.$refs.shop.$el.offsetTop, 300);break
      //   case 2: this.$refs.scroll.scrollTo(0, -this.$refs.comment.$el.offsetTop, 300);break
      //   case 3: this.$refs.scroll.scrollTo(0, -this.$refs.recommend.$el.offsetTop, 300);break
      // }
      this.$refs.scroll.scrollTo(0, -this.navClickPosition[index] + 44, 300)
    },
    detailScroll(position) {
      const length = this.navClickPosition.length
      let y = -position.y + 44
      for (let i = 0; i < this.navClickPosition.length; i++) {
        if (i !== this.currIndex && (i < length - 1 && y >= this.navClickPosition[i] && y < this.navClickPosition[i + 1])
          || (i === length - 1 && y >= this.navClickPosition[i])) {
          this.currIndex = i
          this.$refs.navBar.currentIndex = this.currIndex
        } else {
          this.index = 0
        }
      }

      // 监听滚动到顶部的图标是否出现
      this.isUpToTop = (-position.y) > 1000
    },
    _getOffsetTop() {
      this.navClickPosition = []

      this.navClickPosition.push(0)
      this.navClickPosition.push(this.$refs.comment.$el.offsetTop)
      this.navClickPosition.push(this.$refs.shop.$el.offsetTop)
      this.navClickPosition.push(this.$refs.recommend.$el.offsetTop)
    },
    addToCart(){
      // 获取添加到购物车的商品的信息
      const product = {};
      product.img = this.swiperImg[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.id = this.id;
      product.checked = false;
      // 将商品添加的购物车
      this.$store.dispatch('addCart', product)
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 3;
  background-color: #ffffff;
}

.nav-bar {
  position: relative;
  background-color: #ffffff;
  z-index: 100;
}

.content {
  height: calc(100% - 44px);
}

.detail-swiper {
  height: 350px;
  z-index: 0;
}

.back-top {
  width: 50px;
  height: 50px;
  bottom: 59px;
  z-index: 999;
  display: flex;
}

.back-top{
  bottom: 59px;
}
</style>
