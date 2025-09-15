<!-- 用if来判断是否处于登录还是注册,按钮是同一个按钮但触发事件不同 -->

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap/gsap-core';
import axios from 'axios';

const toggle = ref(null);
const inf = ref(null);
const realcover = ref(null);
const information = ref(null);

const greeting = ref('');
const lo = ref('');
const asker = ref('');
const nw = ref('');
const npassword = ref('');
const nusername = ref('');
const password = ref('');
const username = ref('');
const logc = ref(null);
const isLogin = ref(true);
const back = ref(null);

if (isLogin.value) {
  asker.value = '没有账号？点击注册';
  lo.value = '注册';
  greeting.value = 'Welcome Back!';
  nw.value = 'Login';
} else {
  asker.value = '已有账号？点击登录';
  lo.value = '登录';
  greeting.value = 'Hello!';
  nw.value = 'Registration';
}

const login = async () => {
  try {
    const requestBody = {
      username: username.value,
      password: password.value
    };

    const url = isLogin.value
      ? "http://localhost:8080/user/login"
      : "http://localhost:8080/user/register";

    const response = await axios.post(url, requestBody);

    if (isLogin.value) {
      const token = response.data.data.token;
      if (!token) throw new Error("Token 不存在，登录失败");

      // ✅ 保存 JWT 到本地
      localStorage.setItem("token", token);
      alert("登录成功");
    } else {
      alert("注册成功");
    }

    // ✅ 动画或跳转
    gsap.to(logc.value, {
      scale: 0,
      duration: 1,
      ease: "power2.inOut"
    });

  } catch (error) {
    alert("操作失败: " + (error.response?.data?.msg || error.message));
  }

  // 清空输入
  username.value = '';
  password.value = '';
};


axios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));
onMounted(() => {

  toggle.value.addEventListener('click', () => {
    if(isLogin.value){
    gsap.to(realcover.value, {
      duration: 0.5,
      x:1400,
      ease: "elastic.out(1, 0.7)"
    })
    gsap.to(inf.value, {
      duration: 0.5,
      x:620,
      ease: "back.out(1.7)"
    })
    gsap.to(information.value, {
      duration: 0.5,
      x:-400,
      ease: "elastic.out(1, 0.5)"
    })
    
    isLogin.value = false
}

else{
    gsap.to(realcover.value, { 
      duration: 0.5,
      x:0,
      ease: "elastic.out(1, 0.7)"
    })
    gsap.to(inf.value, {
      duration: 0.5,
      x:0,
      ease: "back.out(1.7)"
    })
    gsap.to(information.value, {
      duration: 0.5,
      x:0,
      ease: "elastic.out(1, 0.7)"
    })
    isLogin.value = true
}
if(isLogin.value){
  asker.value = '没有账号？点击注册'
  lo.value = '注册'
  greeting.value = 'Welcome Back!'
  nw.value = 'Login'
}else{
  asker.value = '已有账号？点击登录'
  lo.value = '登录'
  greeting.value = 'Hello!'
  nw.value = 'Registrate'
}
username.value='';
password.value='';
  
})

back.value.addEventListener('click',function(event){
   
      gsap.to(logc.value, {
          scale: 0,
          duration: 1,
          ease: "power2.inOut"
        })

    
    
  })})

</script>

<template>
  <div ref="logc" class="logc">
    <div ref="realcover" class="realcover"></div>
   <div ref="inf" class="inf">
      <div class="hello">{{ greeting }}</div>
      <div ref="ask" class="ask">{{ asker }}</div>
      <button ref="toggle" class="toggle">{{ lo }}</button>
    </div>

    <div ref="information" class="information">
        <div class="nowWhat">{{ nw }}</div>
        <input id="username" type="text" class="username" v-model="username" placeholder="请输入账号">
        <input id="password" type="password" class="password" v-model="password" placeholder="请输入密码">
        <button ref="submit" class="submit" @click="login">{{ nw }}</button>
    </div>
    <div ref="back" class="back"></div>
  </div>

  
</template>

<style>
.back{
    position: fixed;
    bottom: 2%;
    left: 55%;
    opacity: 80%;
    border-radius: 12%;
    transform: translate(-50%, -50%);
    background-color: rgb(185, 185, 185);
    width: 30%;
    height: 1%;
    transition: all 0.5s ease;
}
.back:hover{
  opacity: 100%;
  bottom: 3%;
  height: 2%;
  cursor: pointer;
}
.username{
  position: absolute;
  top: 40%;
  left: 53%;
  width: 60%;
  height: 5%;
  transform: translate(-50%, -50%);
  border: none;
  border-bottom: 2px solid #92b4ff;
  background-color: transparent;
  font-size: 20px;
  color: #92b4ff;
  font-weight: bolder;
  text-align: center;
}
.password{
  position: absolute;
  top: 50%;
  left: 53%;
  width: 60%;
  height: 5%;
  transform: translate(-50%, -50%);
  border: none;
  border-bottom: 2px solid #92b4ff;
  background-color: transparent;
  font-size: 20px;
  color: #92b4ff;
  font-weight: bolder;
  text-align: center;
}
.submit{
  position: absolute;
      width: 120px;
      height: 40px;
      border: #ffffff 2px solid;
      top: 70%;
      right: 38%;
      border-radius: 7%;
      background-color: #92b4ff;
      text-align: center;
    font-weight: bolder;
    font-size: 20px;
      color: aliceblue;
    }

.nowWhat{
  position: absolute;
    top: 10%;
    right: 10%;
    width: 80%;
    height: 30%;
    
    text-align: center;
    font-weight: bolder;
    font-size: 40px;
      color: rgb(0, 0, 0);
}
.information{
  position: absolute;
  height: 100%;
  width: 64%;
  right: 0%;
  
}
.ask{
  position: absolute;
    top: 63%;
    left: 20%;
    width: 50%;
    height: 30%;
    
    text-align: center;
    font-weight: bolder;
    font-size: 10px;
      color: aliceblue;
    
}
.realcover{
      position: absolute;
      width: 110%;
      height: 100%;
      left: -75%;
      background-color: #92b4ff;
      opacity: 1;
      z-index: -1;
      border-radius: 5%;
    }
   
    .toggle{
      position: absolute;
      width: 120px;
      height: 40px;
      border: #ffffff 2px solid;
      top: 70%;
      left: 30%;
      border-radius: 7%;
      background-color: #92b4ff;
      text-align: center;
    font-weight: bolder;
    font-size: 20px;
      color: aliceblue;
    }
    .hello{
      position: absolute;
    top: 30%;
    left: 5%;
    width: 80%;
    height: 30%;
    
    text-align: center;
    font-weight: bolder;
    font-size: 40px;
      color: aliceblue;
    }
    .logc{
      width: 1000px;
      height: 600px;
      position: fixed;
      background-color: aliceblue;
      top:20%;
      left: 23%;
      border-radius: 6%;
      overflow: hidden;
      z-index: 9999999;
      scale: 0;
    }
    .inf{
      width: 400px;
      height: 100%;
      top: 0%;
      left: 0%;
      top: 0%;
      
      position: absolute;
      border-radius: 5%;
    }
</style>