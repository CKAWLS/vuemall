<template>
  <swiper>
    <swiper-item v-for="item in swiperImg">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "../../../components/common/swiper";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    swiperImg: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
</style>
