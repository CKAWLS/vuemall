<template>
  <div class="goods-list-item">
    <img class="goods-list-img" :src="goodsItem.show.img" alt="">
    <div class="item-info">
      <p>{{ goodsItem.title }}</p>
      <span class="goods-list-price">{{ goodsItem.price }}</span>
      <span class="collect-icon">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  /*子绝父相*/
  position: relative;
  width: 49%;
  height: auto;
  padding-top: 6px;
  font-size: 14px;
  padding-bottom: 40px;
}

.goods-list-img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.item-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.item-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-list-price {
  color: var(--color-tint);
  margin-right: 20px;
}

.collect-icon {
  position: relative;
}

.collect-icon::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/home/collect_icon.png") 0 0/14px 14px;
}
</style>
