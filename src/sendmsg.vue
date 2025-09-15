<script setup>
import { ref } from 'vue'
import axios from 'axios';
async () => {
    try {
      const jsonString = JSON.stringify(account.value,password.value)
      console.log(jsonString);
      const response = await axios.post(`http://localhost:8080/user/registry`,jsonString,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
      
    
</script>

<template>

</template>

<style>

</style>