<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return{}
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
.tab-bar-item {
  text-align: center;
  height: 49px;
  /*平均分配元素*/
  flex: 1;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  /*去除图片下方的3px距离*/
  vertical-align: middle;
  margin-top: 2px;
  margin-bottom: 3px;
}
</style>
