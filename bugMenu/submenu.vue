<!--  -->
<template>
  <div class="sub-menu">
    <div class="title">
      <slot name="title"></slot>
      <p></p>
    </div>
    <div class="child">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {} from "vue";
export default {
  name: "subMenu",
  setup() {
    return {};
  },
};
</script>
<style scoped>
.sub-menu {
  width: 100%;
  background-color: rgba(100, 100, 100, 0.7);
  color: white;
}
.title {
  width: 100%;
  position: relative;
  line-height: 50px;
}
.title > p {
  position: absolute;
  top: calc(50% - 5px);
  left: 80%;
  width: 10px;
  height: 10px;
  border-right: 1px solid white;
  border-top: 1px solid white;
  transform: rotate(45deg);
  transition: all .1s linear;
}
.child {
  width: 100%;
  display: none;
}
.child > * {
  width: 100%;
}
.sub-menu:hover > .child {
  display: block;
}
.sub-menu:hover > .title > p {
  transform: rotate(135deg);
}
</style>
