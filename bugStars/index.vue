<!--  -->
<template>
  <div class="icon">
    <p
      v-for="(item, index) in amount"
      :key="index"
      :class="['iconfont', 'icon-xingzhuang60kaobei2-copy']"
      :style="[{ color: index < active ? activeColor : color }]"
    ></p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "starIndex",
  props: {
    amount: {
      type: Number,
      default: 5,
    },
    active: {
      type: Number,
      default: 5,
    },
    activeColor: {
      type: String,
      default: "hotpink",
    },
    color: {
      type: String,
      default: "#666",
    },
  },
  setup(props) {
    return {};
  },
};
</script>
<style scoped>
@import url(./iconfont.css);
.icon {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
}
</style>
