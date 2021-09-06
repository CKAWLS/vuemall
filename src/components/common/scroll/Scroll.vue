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
      scroll: null,
      tabControlOffset: 0
    }
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: this.pullUpLoad,
      //observe-dom，开启对scroll区域dom改变的监听；当dom改变时，触发对应的函数--refresh
      // refresh 方法来重新计算可滚动的宽度或者高度 scroll.refresh()
      observeDOM: true,
      observeImage: true,
      click: true,
      probeType: this.probeType
    })
    //console.log(this.scroll);
    //监听上拉加载更多功能
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
        this.scroll.finishPullUp()
      })
    }
    //监听整个组件的滚动
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })
  },
  methods: {
    scrollTo(x, y, time = 300) {
      //逻辑与运算 当this.scroll为null时就不进行下面的运算了
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
