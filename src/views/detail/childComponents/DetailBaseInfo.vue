<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>

    <div class="info-services">
      <span class="info-services-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: null
  }
}
</script>

<style scoped>
.info-title {
  margin: 10px 0;
  padding: 0 4px;
  font-size: 16px;
  line-height: 20px;
}

.info-price {
  display: flex;
  padding: 0 4px 10px;
}

.n-price {
  color: var(--color-high-text);
  font-size: 18px;
}

.o-price {
  color: #999;
  font-size: 12px;
  margin: 0 4px;
  text-decoration: line-through;
  bottom: 0px;
}

.discount {
  color: #fff;
  font-size: 12px;
  border-radius: 100px;
  padding: 2px 6px;
  background-color: var(--color-high-text);
}

.info-other {
  display: flex;
  color: #999;
  font-size: 12px;
  padding: 10px 6px;
  border-bottom: 1px solid #ededed;
  border-top: 1px solid #ededed;
}

.info-other span {
  flex: 1;
  text-align: left;
}

.info-services {
  display: flex;
  font-size: 12px;
  color: #333;
  padding: 10px 4px;
  justify-content: space-between;
  border-bottom: 4px solid #ededed;
}

img {
  width: 12px;
  height: 12px;
  vertical-align: middle;
}
</style>
