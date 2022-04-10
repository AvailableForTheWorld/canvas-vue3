<template>
  <div class="menu">
    <ul>
      <li>
        <el-icon >
          <Rank />
        </el-icon>
      </li>
      <li>
          <el-icon >
          <Pointer />
        </el-icon>
      </li>
      <li>
        <el-icon >
          <EditPen />
        </el-icon>
      </li>
      <li>
        <el-icon >
          <Tickets />
        </el-icon>
      </li>
      
      <li>
          <el-icon >
          <Delete />
        </el-icon>
      </li>
      <li>
        <el-icon >
          <Crop />
        </el-icon>
      </li>
      <li>
        <el-icon >
          <RefreshLeft />
        </el-icon>
      </li>
      <li>
        <el-icon >
          <RefreshRight />
        </el-icon>
      </li>
      
      <li>
          <el-icon >
          <FullScreen />
        </el-icon>
      </li>

    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Tickets, Crop, EditPen, Pointer, Delete, FullScreen, Rank, RefreshLeft, RefreshRight } from "@element-plus/icons-vue";
</script>
<style lang="scss" scoped>
.menu{
    ul{
        background-color: #f5f5f5;
        display: flex;
        max-width: 1200px;
        padding: 0 10px;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        border-radius:25px ;
        box-shadow: 0 0 6px #c7c7c7;
        li{
            width: 50px;
            height: 50px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>