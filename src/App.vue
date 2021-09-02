<template>
  <main-tab-bar></main-tab-bar>
  <router-view v-slot="{ Component }">
    <keep-alive include="home,about" exclude="Detail">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
import MainTabBar from "./components/content/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
