<template>
  <div class="menu">
    <ul @click="handleClick($event)" ref="menuUl">
      <li>
        <el-icon :color="isSelect.index===1?'#fff':''">
          <Rank />
        </el-icon>
      </li>
      <li>
        <el-icon :color="isSelect.index===2?'#fff':''">
          <Pointer />
        </el-icon>
      </li>
      <li>
        <el-icon :color="isSelect.index===3?'#fff':''">
          <EditPen />
        </el-icon>
      </li>
      <li>
        <el-icon :color="isSelect.index===4?'#fff':''">
          <Tickets />
        </el-icon>
      </li>
      
      <li>
          <el-icon :color="isSelect.index===5?'#fff':''">
          <Delete />
        </el-icon>
      </li>
      <li>
        <el-icon :color="isSelect.index===6?'#fff':''">
          <Crop />
        </el-icon>
      </li>
      <li>
        <el-icon :color="isSelect.index===7?'#fff':''">
          <RefreshLeft />
        </el-icon>
      </li>
      <li>
        <el-icon :color="isSelect.index===8?'#fff':''">
          <RefreshRight />
        </el-icon>
      </li>
      
      <li>
        <el-icon :color="isSelect.index===9?'#fff':''" @click="handleFullScreen()">
          <FullScreen />
        </el-icon>
      </li>

    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Tickets, Crop, EditPen, Pointer, Delete, FullScreen, Rank, RefreshLeft, RefreshRight } from "@element-plus/icons-vue";
import { useSelect } from '@/store/menu'
import { storeToRefs } from 'pinia'

const { isSelect } = storeToRefs(useSelect())

let isFullScreen = false;
const menuUl = ref(null)


const handleClick = (e)=>{
  const parentNode = e.target.parentNode;
  const selfNode = e.target;
  const childNode = e.target.children[0];
  const targetNode = ref(null);
  if(parentNode?.tagName==='I'){
    targetNode.value = parentNode;
  }
  else if(selfNode?.tagName === 'I'){
    targetNode.value = selfNode;
  }
  else if(childNode?.tagName === 'I'){
    targetNode.value = childNode;
  }
  else if(parentNode?.tagName === 'svg'){
    targetNode.value = parentNode.parentNode;
  }
  const childrenList = Array.from(menuUl.value.children)
  childrenList.map((item,index)=>{
    item.children[0].style.backgroundColor='transparent'
    if(item.children[0]===targetNode.value){
     
      if(isSelect.value.bool && isSelect.value.index===index+1){
        isSelect.value.bool = false;
        isSelect.value.index = 0;
      }
      else{
        item.children[0].style.backgroundColor='#666666'
        isSelect.value.bool = true;
        isSelect.value.index = index+1;
      }
      
    }
  })
}

const handleFullScreen = ()=>{
  if(!isSelect.value.bool){
    requestFullscreen();
  }
  else{
    exitFullscreen();
  }
  
}


// 进入全屏
const requestFullscreen = (el = null) => {
    const ele = el || document.documentElement;
    const rfs = ele.requestFullscreen || ele.webkitRequestFullscreen || ele.mozRequestFullScreen || ele.msRequestFullscreen;

    // 如果全屏，返回
    if (isSelect.value.bool) return;

    if (rfs) {
        rfs.call(ele);
    } 
};


// 退出全屏
const exitFullscreen = () => {
    const ele = document;
    const efs = ele.exitFullscreen || ele.webkitExitFullscreen || ele.mozCancelFullScreen;
    // 如果不是全屏，返回
    if (!isSelect.value.bool) return;

    if (efs) {
        efs.call(ele);
    }
};





</script>
<style lang="scss" scoped>
.menu{
    ul{
        background-color: #f5f5f5;
        display: flex;
        max-width: 1200px;
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
            i{
              display: block;
              background-color: transparent;
              padding: 7px;
              border-radius: 50%;
            }
        }
    }
}
</style>