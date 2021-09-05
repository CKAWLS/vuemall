<template>
  <div id="detail">
    <detail-nav-bar :title=title></detail-nav-bar>
    <detail-swiper :swiper-img="swiperImg" class="detail-swiper"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop :shop="shop"></detail-shop>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShop from "./childComponents/DetailShop";

import {detailRequest, Goods, Shop} from "../../network/detail/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop
  },
  data() {
    return {
      id: null,
      title: ["商品", "参数", "评论", "推荐"],
      detailInfo: null,
      swiperImg: null,
      goods: {},
      shop:{}
    }
  },
  computed: {
  },
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
    })
  }
}
</script>

<style scoped>
.detail-swiper{
  height: 350px;
  z-index: 9;
  background-color: #ffffff;
}
</style>
