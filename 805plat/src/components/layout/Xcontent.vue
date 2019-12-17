<template>
  <div class="x-cont" :style="`top: ${top}px; height: ${height}; `">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    header: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },

  computed: {
    top() {
      return this.header ? 50 : 0;
    },
    height() {
      return `calc(100vh - ${this.top}px)`;
    }
  }
};
</script>
<style lang="stylus" scope>
.x-cont {
  position: absolute;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 14px;
}
</style>