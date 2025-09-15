<script setup>
    import { ref,onMounted } from 'vue';
    import { gsap } from 'gsap/gsap-core';

    const hbt = ref(null);
    onMounted(()=>{
        gsap.to(hbt.value,
            {y:120,
             opacity:1,
             duration: 1,
             ease: "power2.inOut"
            }
        )
    })
</script>

<template>
    <div class="hoverBt" ref="hbt">
        <span id="letter">Login</span>
        <div class="icon">
            
        </div>
    </div>
    
 
</template>

<style>
.icon{
    position: relative;
    width: 0px;
            height: 0px;
            right: 5px;
            margin: 0px;
            background-image: url("@/assets/Logo.png");
        background-size: cover;
        }

    .hoverBt {
        display: flex;
        transform-origin: right;
        justify-content: center;
        width: 110px;   /* 宽度需大于高度 */
        height: 45px;
        border-radius: 30px; /* 高度的一半 */
        border: 5px solid #211e1e;
        color:rgb(255, 255, 255);
        align-items: center;
        box-shadow: inset 0 0 5px 10px rgba(255, 130, 47, 0.5),
                    0 0 10px 5px rgba(182, 94, 12, 0.5);
    &:hover {
        background-color: #ffffff;
        cursor: pointer;
        color: rgb(0, 0, 0);
        transform: scale(1.1);
        width: 150px;
        transform-origin: right;
        transition: all 0.3s ease-in-out;
        .icon {
            width: 35px;
            height: 35px;
            right: -10px;

            transition: all 0.3s ease-in-out;
        }
    }
    transition: all 0.3s ease-in-out;

    
                }
    #letter {
        text-align: center;
        align-items: center;
        font-size: larger;
        font-weight: 700;
    }

</style>