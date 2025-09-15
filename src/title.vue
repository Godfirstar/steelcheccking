<script setup>
    import { ref,onMounted } from 'vue';
    import {gsap} from 'gsap';
    import { ScrollTrigger } from 'gsap/all';

    //一定要组件注册
    gsap.registerPlugin(ScrollTrigger)
    defineProps(['title'])
    

   
        
</script>


<template>
    <div ref="bigtitle" class="titler">{{ title }}</div>
</template>

<style>
/* 可能把div样式交给App.vue处理 */
    
</style>