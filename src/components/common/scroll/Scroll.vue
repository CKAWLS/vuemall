<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: true,
      //observe-dom，开启对scroll区域dom改变的监听；当dom改变时，触发对应的函数；
      observeDOM: true,
      click: true
    })
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多');
    })
  }
}
</script>

<style scoped>

</style>
