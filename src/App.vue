<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="home,about">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <main-tab-bar v-if="isShow"></main-tab-bar>
</template>

<script>
import MainTabBar from "./components/content/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  computed: {
    isShow() {
      return !(this.$route.path.indexOf('detail') > -1)
    }
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
