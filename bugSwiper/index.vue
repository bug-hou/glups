<!-- -->
<template>
  <div class="swiper" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="inner">
      <slot></slot>
    </div>
    <dots v-if="hasDot" :itemLens="length" @changeIndex="changeIndex"></dots>
    <director v-if="hasDirector" @pre="toPre" @next="toNext"></director>
  </div>
</template>

<script>
import dots from "./dots.vue";
import director from "./direcor.vue";
import {
  reactive,
  toRefs,
  onMounted,
  onUnmounted,
  getCurrentInstance,
} from "vue";
export default {
  name: "swiperIndex",
  props: {
    autoplay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    initial: {
      type: Number,
      default: 0,
    },
    hasDot: {
      type: Boolean,
      default: true,
    },
    hasDirector: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    dots,
    director,
  },
  setup(props) {
    const install = getCurrentInstance();
    let status = reactive({
      currentIndex: props.initial,
      length: install.slots.default()[0].children.length,
      duration: props.duration,
    });
    function autoplay() {
      if (props.autoplay) {
        window.t = setInterval(() => {
          setIndex("next");
        }, status.duration);
      }
    }
    function setIndex(direction) {
      switch (direction) {
        case "next":
          status.currentIndex += 1;
          if (status.currentIndex == status.length) {
            status.currentIndex = 0;
          }
          break;
        case "prev":
          if (status.currentIndex == 0) {
            status.currentIndex = status.length;
          }
          status.currentIndex -= 1;
        default:
          break;
      }
    }
    function changeIndex(index) {
      status.currentIndex = index;
    }
    function mouseEnter() {
      clearInterval(t);
      t = null;
    }
    function mouseLeave() {
      autoplay();
    }
    function toPre() {
      setIndex("prev");
    }
    function toNext() {
      setIndex("next");
    }
    onMounted(() => {
      autoplay();
    });
    onUnmounted(() => {
      clearInterval(t);
      t = null;
    });
    return {
      ...toRefs(status),
      changeIndex,
      mouseLeave,
      mouseEnter,
      toPre,
      toNext,
    };
  },
};
</script>
<style scoped>
.inner {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>
