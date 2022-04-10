<template>
<div class="canvas-container" ref="container">
    <canvas id="canvas" ref="canvas" @click="showInput($event)" ></canvas>
    <input type="text" ref="Input" @keyup.enter="storeText()"/>
</div>
</template>

<script setup>
import { onMounted, ref, render } from 'vue'
const canvas = ref(null)
const context = ref(null)
const devicePixelRatio = ref(0)
const Input = ref(null)
const container = ref(null)
const posX=ref(0),posY=ref(0);

const showInput = (e)=>{
    const {clientX,clientY}=e;
    console.log(clientX,clientY)
    Input.value.focus();
    Input.value.style=
            `top:${clientY}px;
            left:${clientX}px;`
    posX.value=clientX;
    posY.value=clientY;
}

const storeText = ()=>{
    const label1 = document.createElement('label');
    label1.addEventListener('click',deleteLabel)
    label1.style=`
        position:absolute;
        top:${posY.value}px;
        left:${posX.value}px;
        font-size:12px;
    `
    label1.innerText=Input.value.value;
    Input.value.value="";
    Input.value.blur();
    console.log("label1",label1);
    container.value.appendChild(label1);
}

const deleteLabel = (e)=>{
    console.log("e.target",e.target)
    e.target.remove();
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