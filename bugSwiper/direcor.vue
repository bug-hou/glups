<!--  -->
<template>
  <div class="director">
    <div class="left" @click="$emit('pre')">
      <p></p>
    </div>
    <div class="right" @click="$emit('next')">
      <p></p>
    </div>
  </div>
</template>

<script>
import {} from "vue";
export default {
  name: "director",
  setup() {
    return {};
  },
};
</script>
<style scoped>
.director {
  position: absolute;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.director > div {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
div > p {
  width: 10px;
  height: 10px;
  border-top: 1px solid white;
  border-right: 1px solid white;
  transform: rotate(45deg);
  margin: 15px auto;
}
div:nth-child(1) > p {
  transform: rotate(-135deg);
}
</style>
