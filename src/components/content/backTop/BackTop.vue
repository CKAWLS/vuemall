<template>
  <div class="scroll-top">
      <slot name="scrollTop"></slot>
  </div>
</template>

<script>
export default {
  name: "BackTop",
}
</script>

<style scoped>
.scroll-top{
  position: fixed;
  bottom: 44px;
  right: 6px;
}
</style>
