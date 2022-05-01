<template>
  <i>
    <img :src="imgSrc" />
  </i>
  <span>移动</span>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
const props = defineProps({
  isSelect: Boolean,
});
console.log(props.isSelect);
const imgSrc = ref(String(require("@/assets/images/menu/移动-black.svg")));
// if (props.isSelect) {
//   imgSrc.value = require("@/assets/images/menu/移动.svg");
// }
watch(
  () => props.isSelect,
  (cur: boolean) => {
    if (cur) {
      imgSrc.value = require("@/assets/images/menu/移动.svg");
    } else {
      imgSrc.value = require("@/assets/images/menu/移动-black.svg");
    }
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss">
i {
  img {
    width: 18px;
  }
}
</style>