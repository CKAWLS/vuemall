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

<style>
.scroll-top{
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 44px;
  right: 6px;
}
</style>
