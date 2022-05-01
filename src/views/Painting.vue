<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="0"
      ><movement :isSelect="isSelectIndex == 0"></movement
    ></el-menu-item>
    <el-menu-item index="1"
      ><selection :isSelect="isSelectIndex == 1"></selection
    ></el-menu-item>
  </el-menu>

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

import { ref, onMounted, onUnmounted } from "vue";

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const canvas: any = ref(null);
const context = ref(null);
const isSelectIndex = ref(0);
const selectItem = (index) => {
  isSelectIndex.value = index - 0;
};

onMounted(() => {
  console.log("canvas", canvas.value);
  context.value = canvas.value?.getContext("2d");
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
});

const canvasChange = (e) => {
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
  console.log("resize: ", window.innerWidth, window.innerHeight);
};

window.addEventListener("resize", canvasChange);

onUnmounted(() => {
  window.removeEventListener("resize", canvasChange);
});
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
#menu-container {
  height: auto;
  position: fixed;
}
</style>