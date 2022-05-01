<template>
  <i>
    <img :src="imgSrc" />
  </i>
  <span>选择</span>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
const props = defineProps({
  isSelect: Boolean,
});
console.log(props.isSelect);
const imgSrc = ref(String(require("@/assets/images/menu/选择-black.svg")));
// if (props.isSelect) {
//   imgSrc.value = require("@/assets/images/menu/选择.svg");
// }
watch(
  () => props.isSelect,
  (cur: boolean) => {
    console.log("isSelect", cur);
    if (cur) {
      imgSrc.value = require("@/assets/images/menu/选择.svg");
    } else {
      imgSrc.value = require("@/assets/images/menu/选择-black.svg");
    }
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss">
</style>