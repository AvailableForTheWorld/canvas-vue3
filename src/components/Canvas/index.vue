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


const canvas = ref(null)
const context = ref(null)
const devicePixelRatio = ref(0)
const Input = ref(null)
const container = ref(null)
const wordsContainer = ref(null)
const posX=ref(0),posY=ref(0);
let isFocus = false;
let isSelectWords = false;

const showInput = (e)=>{
    if(!isSelect.value.bool||isSelect.value.index!==4||isSelectWords){
        return;
    }
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

const handleWordsDown = (e)=>{
    isSelectWords = true;
    Input.value.blur();
    posX.value = e.offsetX;
    posY.value = e.offsetY;
    e.target.addEventListener('mousemove',handleWordsMove);
}

const handleWordsMove = (e)=>{
    e.target.style.top= `${e.clientY-posY.value}px`
    e.target.style.left=`${e.clientX-posX.value}px`

    e.target.addEventListener('mouseup',removeWordsMove);
}

const removeWordsMove = (e)=>{
    isSelectWords = false;
    e.target.removeEventListener('mousemove',handleWordsMove);
}

const storeText = ()=>{
    const label1 = document.createElement('label');
    label1.addEventListener('click',editInput)
    label1.addEventListener('mousedown',handleWordsDown);
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
    if(isSelect.value.bool&&isSelect.value.index===5){
        deleteLabel(e);
        return;
    }
    else if(!isSelect.value.bool||isSelect.value.index!==2||isSelectWords){
        return;
    }

    if(isFocus){
        storeText();
    }
    const inputValue = e.target.innerText;
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
})

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