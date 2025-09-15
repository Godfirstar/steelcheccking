<script setup>
    import { ref, onMounted } from 'vue'
    const container = ref(null)
    const p1 = ref(null)
    const p2 = ref(null)
    const d1 = ref(null)
    const d2 = ref(null)
    const index = ref(1)
    const content = ref("准确")
    const itt = ref("像素级精确定位")
    const orgt = ref("生产级系统")

    function change() {
        if(index.value === 1){
            p1.value.classList.add('pp1')
            p2.value.classList.remove('pp1')
            d1.value.classList.add('dd')
            d2.value.classList.remove('dd')
            content.value = "准 确"
            itt.value = "像素级精确定位"
            orgt.value = "生产级系统"
        }
        else{
            p2.value.classList.add('pp1')
            p1.value.classList.remove('pp1')
            d2.value.classList.add('dd')
            d1.value.classList.remove('dd')
            content.value = "高 效"
            itt.value = "毫米级缺陷捕捉"
            orgt.value = "Mask-RCNN"
        }
    }
    onMounted(() => {
        d1.value.addEventListener('click', () => {
            p1.value.classList.add('pp1')
            p2.value.classList.remove('pp1')
            d1.value.classList.add('dd')
            d2.value.classList.remove('dd')
            content.value = "准 确"
            itt.value = "像素级精确定位"
            orgt.value = "生产级系统"
        })
        d2.value.addEventListener('click', () => {
            p2.value.classList.add('pp1')
            p1.value.classList.remove('pp1')
            d2.value.classList.add('dd')
            d1.value.classList.remove('dd')
            content.value = "高 效"
            itt.value = "毫米级缺陷捕捉"
            orgt.value = "Mask-RCNN"
        })
      function time() { setTimeout(() => {
            if(index.value === 1)
        {
            index.value = 2
            change()
            time()
        }
        else
        {
            index.value = 1
            change()
            time()
        }},4000)
      }
      time()
      })
</script>

<template>
    <div class="container" ref="container">
        <div ref="p1" class="p pp1"><img class="img" src="/images/pic1.png" alt=""></div>
        <div ref="p2" class="p "><img class="img" src="/images/pic2.png" alt=""></div>
        <div class="in">{{ content }}</div>
        <div class="it">{{ itt }}</div>
        <div class="org">{{ orgt }}</div>
    </div>
    <div class="dots">
        <div ref="d1" class="dot dd" id="1"></div>
        <div ref="d2" class="dot " id="2"></div>
        
    </div>
</template>

<style scoped>
.org{
    width: auto;
    height: auto;
    border-radius: 4px;
    background-color: rgb(255, 195, 106);
    position: absolute;
    top: 80%;
    left: 20%;
    font-size: 1.5rem;
    font-weight: 900;
    z-index: 999999;
    padding: 0 20px;
}

.img{
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}
    .container{
    width: 100%;
    height: 80%;
    border-radius: 5%;
    overflow: hidden;
    position: absolute;
    top: -5%;
    left: 0%;
    z-index: 0;
   
}
.p{
    position: absolute;
    height: 100%;
    width: 100%;
    background-size: cover;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    right: 0%;
    top: 0%;
    z-index: 1; /* 图片在最上层 */
    
}
.p::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 100px 100px rgba(0, 0, 0, 0.864) inset;
    z-index: 2; /* 伪元素在图片上方 */
}
.pp1{
   
    opacity: 1;
    
}
.dots{
    position: absolute;
    bottom: 30%;
    right: 5%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 2%;
}
.dot{
    width: 5%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
    margin: 0 5%;
    border: 5px solid rgb(79, 78, 77);
    
}
/* 选中后的样式 */
.dd{
    width: 5%;
    height: 100%;
    border-radius: 50%;
    background-color: rgb(255, 197, 5);
    margin: 0 5%;
    border: 5px solid rgb(57, 56, 56);
}
.dot:hover{
    background-color: white;
    opacity: 0.5;
}
.in{
    position: absolute;
    top: 58%;
    width: auto;
    height: auto;
    font-size: 1.5rem;
    color: #fff;
    left: 20%;
    border: #fff 5px solid;
    border-radius: 5%;
    padding:0 50px ;
    z-index: 10000000;
}
.it{
    position: absolute;
    top: 75%;
    width: auto;
    height: auto;
    font-size: 1rem;
    color: #fff;
    left: 18%;
    
    padding:0 50px ;
    z-index: 10000000;
}
</style>