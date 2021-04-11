<!--  -->
<template>
  <div class="item">
    <slot></slot>
  </div>
</template>

<script>
import {} from "vue";
export default {
  name: "menuItem",
  setup() {
    return {};
  },
};
</script>
<style scoped>
.item {
  width: 100%;
  line-height: 50px;
  height: 50px;
  background-color: rgba(100, 100, 100, 0.7);
}
</style>
