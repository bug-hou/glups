<!--  -->
<template>
  <div class="dots">
    <li
      :class="{ active: index == currentIndex }"
      v-for="(item, index) in itemLens"
      :key="index"
      @click="pushItem(index)"
    ></li>
  </div>
</template>

<script>
import { getCurrentInstance, reactive, toRefs, watch } from "vue";
export default {
  name: "dots",
  props: {
    itemLens: {
      type: Number,
      require: true,
    },
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    let status = reactive({
      currentIndex: instance.parent.proxy.currentIndex,
    });
    watch(
      () => instance.parent.proxy.currentIndex,
      (newValue) => {
        status.currentIndex = newValue;
      }
    );
    function pushItem(index) {
      emit("changeIndex", index);
    }
    return {
      pushItem,
      ...toRefs(status),
    };
  },
};
</script>
<style scoped>
.dots {
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}
.dots > li {
  margin: 0px 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #f1f1f1;
}
.dots > .active {
  background-color: #ff2500;
}
</style>
