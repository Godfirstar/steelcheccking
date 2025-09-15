<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap';

// 写视差动画
const props = defineProps(['change'])
const container = ref(null);
document.addEventListener('mousemove',(e)=>{
    const x = e.clientX;
    const y = e.clientY;
    gsap.to(container.value, {    
        x: -x/80,
        y: -y/80,
        duration: 0.1,
        ease: 'power2.inOut'
})
})
const rrrotate =()=>{
        gsap.to(container.value,
            {rotation:60,
             duration: 1,
             opacity:1,
             ease: "elastic.out(1.2, 0.5)",
            }
        )
    }
const rrrotateback =()=>{
        gsap.to(container.value,
            {rotation:-60,
             duration: 1,
             opacity:0,
             ease: "power2.inOut"
            }
        )
    }
    const rrrotateback2 =()=>{
        gsap.to(container.value,
            {rotation:-60,
             duration: 1,
             ease: "elastic.out(1.2, 0.5)"
            }
        )
    }
const bigger = ()=> {
    gsap.to(container.value, {
  scale: 1,
  rotation: 360,
  duration: 1,
  ease: "elastic.out(1.2, 0.3)",
  
});
        }
const smaller = ()=> {
    gsap.to(container.value,{
        scale:0,
        rotation:-360,
        duration:1,
        ease: "elastic.out(1.2, 0.3)",
    })
}
  
    //定义函数然后暴露,之后在父组件内直接调用函数
    defineExpose({
        rrrotate,
        rrrotateback,
        rrrotateback2,
        bigger,
        smaller
    })

</script>

<template>
    <div ref="container" >
        <slot />
    </div>
</template>

<style>
   
</style>