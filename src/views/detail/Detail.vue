<template>
  <div id="detail">
    <detail-nav-bar :title=title class="nav-bar"></detail-nav-bar>
    <scroll :pull-up-load="false"
            :probe-type="3"
            class="content"
            ref="scroll">
      <detail-swiper :swiper-img="swiperImg" class="detail-swiper"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods-info :detail-info="goodsInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShop from "./childComponents/DetailShop";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
import DetailCommentInfo from "./childComponents/DetailCommentInfo";

import Scroll from "../../components/common/scroll/Scroll";
import {detailRequest, Goods, Shop} from "../../network/detail/detail";

export default {
  name: "Detail",
  components: {
    DetailCommentInfo,
    DetailGoodsInfo,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    Scroll
  },
  data() {
    return {
      id: null,
      title: ["商品", "参数", "评论", "推荐"],
      detailInfo: null,
      swiperImg: null,
      goods: {},
      shop: {},
      goodsInfo:{},
      commentInfo: {}
    }
  },
  computed: {},
  created() {
    this.id = this.$route.query.id;

    detailRequest(this.id).then((res) => {
      console.log(res)
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
    })
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.refresh()
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

.nav-bar{
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
</style>
