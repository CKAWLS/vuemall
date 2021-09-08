<template>
  <nav-bar>
    <template v-slot:left>
      <div class="back">
        <img src="../../../assets/img/fanhui.png"
             alt=""
             @click="backTo">
      </div>
    </template>
    <template v-slot:center>
      <div class="title">
        <div class="title-item"
             v-for="(item, index) in title"
             :class="{active: this.currentIndex === index}"
             @click="titleClick(index)">
          {{ item }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    title: null
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('navClick', index)
    },
    backTo() {
      // this.$router.back()
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-tint);
}

.back img{
  width: 44px;
  height: 44px;
  text-align: center;
  padding-top: 3px;
}
</style>
