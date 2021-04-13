<!--  -->
<template>
  <div class="img" @mousemove="move" ref="box">
    <div class="small" @mouseenter="enter">
      <img :src="smallImg" alt="" />
    </div>
    <div
      class="mantle"
      ref="mantle"
      v-show="isMantle"
      @mouseleave="leave"
    ></div>
    <div class="big" v-show="isMantle">
      <img :src="bgImg" alt="" ref="img" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
export default {
  name: "loupeItem",
  props: {
    smallImg: {
      type: String,
      require: true,
    },
    bigImg: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    // 操作放大的图片
    let img = ref("");
    // 操作小图片中的蒙层
    let mantle = ref();
    // 操作最外层的盒子，获取宽高
    let box = ref();
    let options = reactive({
      left: 0,
      top: 0,
    });
    let isMantle = ref(false);
    onMounted(() => {
      window.width = box.value.offsetWidth;
      window.height = box.value.offsetHeight;
    });
    let bgImg = computed(() => (props.bigImg ? props.bigImg : props.smallImg));
    function judge(x, y) {
      x += options.left;
      y += options.top;
      if (x + window.width / 4 > window.width) {
        x = window.width / 2;
      } else if (x - window.width / 4 < 0) {
        x = 0;
      } else {
        x -= window.width / 4;
      }
      if (y + window.height / 4 > window.height) {
        y = window.height / 2;
      } else if (y - window.height / 4 < 0) {
        y = 0;
      } else {
        y -= window.height / 4;
      }
      options.left = x;
      options.top = y;
      return {
        x,
        y,
      };
    }
    function enter(e) {
      options.left = 0;
      options.top = 0;
      isMantle.value = true;
      const left = e.offsetX;
      const top = e.offsetY;
      let { x, y } = judge(left, top);
      mantle.value.style.left = x + "px";
      mantle.value.style.top = y + "px";
      img.value.style.left = -x * 2 + "px";
      img.value.style.top = -y * 2 + "px";
    }
    function leave(e) {
      isMantle.value = false;
      options.left = 0;
      options.top = 0;
    }
    function move(e) {
      const left = e.offsetX;
      const top = e.offsetY;
      let { x, y } = judge(left, top);
      mantle.value.style.left = x + "px";
      mantle.value.style.top = y + "px";
      img.value.style.left = -x * 2 + "px";
      img.value.style.top = -y * 2 + "px";
    }
    return {
      enter,
      leave,
      move,
      img,
      mantle,
      box,
      isMantle,
      bgImg,
    };
  },
};
</script>
<style scoped>
.img {
  width: 100%;
  height: 100%;
  position: relative;
}
.small {
  width: 100%;
  height: 100%;
}
.mantle {
  display: block;
  width: 50%;
  height: 50%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  /* pointer-events: none; */
}
.big {
  position: absolute;
  left: 100%;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: block;
}
.big > img {
  width: 200%;
  height: 200%;
  position: absolute;
  display: block;
}
img {
  width: 100%;
  height: 100%;
}
</style>
