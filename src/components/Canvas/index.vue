<template>
<div class="canvas-container" ref="container">
    <canvas id="canvas" ref="canvas" @click="showInput($event)" ></canvas>
    <input type="text" ref="Input" @keyup.enter="storeText()"/>
    <div class="words-container" ref="wordsContainer"></div>
</div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue'

import { useSelect } from '@/store/menu'
import { storeToRefs } from 'pinia'

const { isSelect } = storeToRefs(useSelect())
watch(isSelect,(cur,pre)=>{
    if(cur){
        console.log("isSelect.value is true")
    }
    else{
        console.log("isSelect.value is false")
    }
    return cur
})

const canvas = ref(null)
const context = ref(null)
const devicePixelRatio = ref(0)
const Input = ref(null)
const container = ref(null)
const wordsContainer = ref(null)
const posX=ref(0),posY=ref(0);
let isFocus = false;

const showInput = (e)=>{
    if(isFocus){
        storeText();
    }
    const {clientX,clientY}=e;
    handleInput(clientX,clientY)
}

const handleInput = (x,y)=>{
    Input.value.focus();
    isFocus = true;
    Input.value.style=
            `top:${y}px;
            left:${x}px;`
    posX.value=x;
    posY.value=y;
}

const storeText = ()=>{
    const label1 = document.createElement('label');
    label1.addEventListener('click',editInput)
    label1.style=`
        position:absolute;
        top:${posY.value}px;
        left:${posX.value}px;
        font-size:12px;
    `
    label1.innerText=Input.value.value;
    Input.value.value="";
    Input.value.blur();
    isFocus=false;
    wordsContainer.value.appendChild(label1);
}

const deleteLabel = (e)=>{
    e.target.remove();
}

const editInput = (e)=>{
    if(isFocus){
        storeText();
    }
    const inputValue = e.target.innerText;
    console.log('inputValue',e.target.style)
    deleteLabel(e);
    handleInput(parseInt(e.target.style.left),parseInt(e.target.style.top));
    Input.value.value = inputValue;
}

onMounted(()=>{
    context.value = canvas.value.getContext('2d')
    // devicePixelRatio.value = window.devicePixelRatio;
    context.value.width = context.value.width * 8;
    context.value.height = context.value.height * 8;
    context.value.font = 12+'px 微软雅黑'
    // makeHighRes(context.value);
    // console.log("the context is: ",context.value)
})

function makeHighRes(canvas) {
    console.log("canvas",canvas)
    
}



const addText = (e)=>{
    console.log("event",e)

    context.value.font = 16*devicePixelRatio.value+'px sans-serif';
   
}
</script>

<style lang="scss" scoped>
.canvas-container{
    width: 100vw;
    height: 100vh;
    background-color: #eee;
    #canvas{
        width: 100%;
        height: 100%;
    }
    input{
        position: absolute;
        top: 0;
        left: 0;
        background: transparent;
        border: 0;
        outline: 0;
    }
}
</style>