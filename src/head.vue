<script setup>
    import { ref } from 'vue';
    import gsap from 'gsap';
    import { onMounted } from 'vue';
    defineProps(['lead'])

    const littleButtoner = ref(null)
    onMounted(()=>{
        gsap.to(littleButtoner.value,
            {y:100,
             opacity:1,
             duration: 0.5,
             ease: "power2.inOut"
            }
        )
    })
    
</script>

<template>
 <div ref="littleButtoner"  class="littleButton">{{ lead }}</div>
</template>


<style>
.littleButton {
    opacity: 0;
    top: -100px;
    position: relative;
    width: 70px;
    height: 32px;
    margin: 0px;
    padding: 4px;
    
    /* 文字样式 */
    text-align: center;
    font-family: "Aceh SoftRegular","Silk Serif", sans-serif;
    font-weight: 900;
    color: rgb(219, 227, 234);
    font-size: 18px;
    
    /* 初始状态 */
    transition: all 0.3s ease-in-out;
    border-radius: 10%;
    z-index: 999999999999;

    /* 添加下划线伪元素 */
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: currentColor;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease-in-out;
    }
}

.littleButton:hover {
    /* 移除原hover中导致元素消失的样式 */
   
    scale: 1;

    /* 下划线动画 */
    &::after {
        transform: scaleX(1);
    }
}

</style>