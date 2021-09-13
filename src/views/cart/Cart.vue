<template>
  <nav-bar class="nav-bar">
    <template v-slot:center>
      <span>购物车({{ length }})</span>
    </template>
  </nav-bar>
  <!-- 商品列表 -->
  <cart-list></cart-list>
  <!-- 底部汇总 -->
  <cart-bottom-bar></cart-bottom-bar>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

import Scroll from "../../components/common/scroll/Scroll";

import {mapGetters} from 'vuex'

export default {
  name: "cart",
  components: {
    Scroll,
    CartList,
    CartBottomBar,
    NavBar
  },
  computed: {
    ...mapGetters({
      length: 'cartLength'
    })
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>

