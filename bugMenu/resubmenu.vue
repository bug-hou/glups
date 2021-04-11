<!--  -->
<template>
  <div>
    <subMenu>
      <template #title>{{ data.data }} </template>
      <template v-for="(item, index) in data.children">
        <menuItem :key="item.id" v-if="!item.isChildren">{{
          item.data
        }}</menuItem>
        <reSubMenu v-else :data="item" :key="item.id"></reSubMenu>
      </template>
    </subMenu>
  </div>
</template>

<script>
import {} from "vue";
export default {
  name: "reSubMenu",
  props: {
    data: Object,
  },
  setup() {
    return {};
  },
};
</script>
<style scoped></style>
