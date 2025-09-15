<script setup>
    import { ref } from 'vue';

    defineProps(['introduction'])
</script>
 
<template>
    <div ref="it" class="it">
        <div class="llt">Welcome to Steel Check </div>
        {{ introduction }}
        </div>
</template>

<style>
     .llt{
    position: absolute;
      top: 0%;
      right: 0%;
      width: 550px;
      height:  100px;
      z-index: 2;
      text-align: center;
      border-radius: 5%;
    font-weight:900;
    font-size: 50px;
    color: rgb(255, 195, 106);
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>