<!--  -->
<template>
  <transition :name="direct">
    <div class="swiperItem" v-if="itemIndex === initial">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import {
  onMounted,
  ref,
  getCurrentInstance,
  reactive,
  toRefs,
  watch,
} from "vue";
export default {
  name: "swiperItem",
  setup() {
    const install = getCurrentInstance();
    let direct = ref("left");
    const itemIndex = install.vnode.key;
    let status = reactive({
      initial: install.parent.ctx.initial,
    });
    watch(
      () => {
        return install.parent.proxy.currentIndex;
      },
      (newValue, oldValue) => {
        if (newValue > oldValue) {
          direct.value = "left";
        } else {
          direct.value = "right";
        }
        // setTimeout(() => {
          status.initial = newValue;
        // }, 0);
      }
    );
    return {
      itemIndex,
      ...toRefs(status),
      direct,
    };
  },
};
</script>
<style scoped>
.swiperItem {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  /* transition: all 1s linear; */
}
.left-enter-active {
  transform: translateX(100%);
  transition: all 1s linear;
}
.left-enter-to {
  transform: translateX(0);
}
.left-leave-active {
  transition: all 1s linear;
}
.left-leave-to {
  transform: translateX(-100%);
}

.right-enter-active {
  transform: translateX(-100%);
  transition: all 1s linear;
}
.right-enter-to {
  transform: translateX(0);
}
.right-leave-active {
  transition: all 1s linear;
}
.right-leave-to {
  transform: translateX(100%);
}
</style>
