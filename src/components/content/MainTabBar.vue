<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="pink">
      <template v-slot:item-icon>
        <img src="../../assets/img/tarbar/home.svg" alt="home">
      </template>
      <template v-slot:item-icon-active>
        <img src="../../assets/img/tarbar/home_active.svg" alt="home">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:item-icon>
        <img src="../../assets/img/tarbar/class.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="../../assets/img/tarbar/class_active.svg" alt="category">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template v-slot:item-icon>
        <img src="../../assets/img/tarbar/cart.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="../../assets/img/tarbar/cart_active.svg" alt="cart">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:item-icon>
        <img src="../../assets/img/tarbar/mime.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="../../assets/img/tarbar/mime_active.svg" alt="profile">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../common/tabbar/TabBar";
import TabBarItem from "../common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {TabBarItem, TabBar}
}
</script>

<style scoped>

</style>
