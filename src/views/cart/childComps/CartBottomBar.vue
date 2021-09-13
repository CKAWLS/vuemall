<template>
  <div class="bottom-bar">
    <div class="check-left">
      <check-button :value="false" class="check-button"></check-button>
      <span>全选</span>
    </div>
    <div class="check-center">
      {{'合计: ￥' + totalPrice}}
    </div>
    <div class="check-right">
      {{'去计算('+ cartLength +')'}}
    </div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return this.$store.state.product
        .filter(item => {
        return item.checked
      })
      .reduce((pre, item) => {
        return pre + item.price * item.count
      }, 0).toFixed(2)
    },
    cartLength() {
      return this.$store.state.product
        .filter(item => {
          return item.checked
        }).length
    }
  }

}
</script>

<style scoped>
.bottom-bar {
  display: flex;
  position: relative;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
}

.check-left {
  display: flex;
  align-items: center;
  margin-left: 5px;
}

.check-button {
  width: 20px;
  height: 20px;
  line-height: 22px;
  margin-right: 5px;
}

.check-center{
  margin-left: 35px;
}

.check-right{
  height: 100%;
  width: 80px;
  background-color: orange;
  margin-left: auto;
}
</style>
