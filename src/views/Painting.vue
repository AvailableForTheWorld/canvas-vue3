<template>
  <menu>
    <el-menu mode="horizontal">
      <el-menu-item index="1"><movement></movement></el-menu-item>
      <el-menu-item index="2"><selection></selection></el-menu-item>

      <brush></brush>
      <text></text>
      <trash></trash>
      <undo></undo>
      <redo></redo>
      <fullscreen></fullscreen>
    </el-menu>
  </menu>
  <canvas id="canvas" ref="canvas"> </canvas>
</template>

<script lang="ts" setup>
import Menu from "@/components/Menu/index.vue";
import Movement from "@/components/Canvas/Movement.vue";
import Selection from "@/components/Canvas/Selection.vue";
import Brush from "@/components/Canvas/Brush.vue";
import Text from "@/components/Canvas/Text.vue";
import Trash from "@/components/Canvas/Trash.vue";
import Undo from "@/components/Canvas/Undo.vue";
import Redo from "@/components/Canvas/Redo.vue";
import Fullscreen from "@/components/Canvas/Fullscreen.vue";

import { ref, onMounted } from "vue";

const canvas: any = ref(null);
const context = ref(null);

onMounted(() => {
  console.log("canvas", canvas.value);
  context.value = canvas.value?.getContext("2d");
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
});
</script>

<style lang="scss">
</style>