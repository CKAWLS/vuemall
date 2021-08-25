<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 10px 0 15px;
  border-bottom: 8px solid #eee;
  font-size: 10px;
}

.recommend img{
  width: 65px;
  height: 65px;
  margin-bottom: 8px;
}

.recommend-item {
  flex: 1;
}
</style>
