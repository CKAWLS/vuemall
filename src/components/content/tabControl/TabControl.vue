<template>
  <div class="tab-control">
    <div class="tab-control-item" :class="{active: index === currentIndex}" v-for="(item, index) in title"
         @click="controlClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    },
  },
  methods: {
    controlClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }

}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
  z-index: 998;
}

.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}

.active {
  color: var(--color-tint);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>
