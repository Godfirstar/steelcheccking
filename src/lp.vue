<script setup>
import { ref, onMounted, watch } from 'vue';
import { gsap } from 'gsap/gsap-core';
import axios from 'axios';

const toggle = ref(null);
const inf = ref(null);
const realcover = ref(null);
const information = ref(null);
const logc = ref(null);
const back = ref(null);

// 表单数据
const greeting = ref('Welcome Back!');
const lo = ref('注册');
const asker = ref('没有账号？点击注册');
const nw = ref('Login');
const username = ref('');
const password = ref('');
const isLogin = ref(true);

// 监听isLogin变化，更新文本内容
watch(isLogin, (newVal) => {
  if (newVal) {
    asker.value = '没有账号？点击注册';
    lo.value = '注册';
    greeting.value = 'Welcome Back!';
    nw.value = 'Login';
  } else {
    asker.value = '已有账号？点击登录';
    lo.value = '登录';
    greeting.value = 'Hello!';
    nw.value = 'Registrate';
  }
  // 清空输入
  username.value = '';
  password.value = '';
});

// 登录/注册处理
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

      // 保存 JWT 到本地
      localStorage.setItem("token", token);
      alert("登录成功");
    } else {
      alert("注册成功");
    }

    // 动画关闭登录框
    gsap.to(logc.value, {
      scale: 0,
      duration: 1,
      ease: "power2.inOut"
    });

  } catch (error) {
    alert("操作失败: " + (error.response?.data?.msg || error.message));
  }
};

// 设置axios请求拦截器添加token
axios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));

// 初始化动画和事件监听
onMounted(() => {
  // 初始显示动画
  gsap.to(logc.value, {
    scale: 1,
    duration: 0.8,
    ease: "back.out(1.7)"
  });

  // 切换登录/注册视图
  toggle.value?.addEventListener('click', () => {
  const containerWidth = logc.value.offsetWidth;
  const containerHeight = logc.value.offsetHeight;

  // 判断是否小屏幕
  const isSmallScreen = window.innerWidth <= 768;

  if (isSmallScreen) {
    // 上下布局 → 使用 y 方向移动
    const moveDistance = containerHeight * 1.2; 
    if (isLogin.value) {
      gsap.to(realcover.value, {
        duration: 0.5,
        y: -moveDistance,
        ease: "elastic.out(1, 0.7)"
      });
      gsap.to(inf.value, {
        duration: 0.5,
        y: -moveDistance * 0.5,
        ease: "back.out(1.7)"
      });
      gsap.to(information.value, {
        duration: 0.5,
        y: moveDistance * 0.3,
        ease: "elastic.out(1, 0.5)"
      });
    } else {
      gsap.to([realcover.value, inf.value, information.value], {
        duration: 0.5,
        y: 0,
        ease: "elastic.out(1, 0.7)"
      });
    }
  } else {
    // 大屏幕 → 使用 x 方向移动
    const moveDistance = containerWidth * 1.4;
    if (isLogin.value) {
      gsap.to(realcover.value, {
        duration: 0.5,
        x: moveDistance,
        ease: "elastic.out(1, 0.7)"
      });
      gsap.to(inf.value, {
        duration: 0.5,
        x: moveDistance * 0.5,
        ease: "back.out(1.7)"
      });
      gsap.to(information.value, {
        duration: 0.5,
        x: -moveDistance * 0.3,
        ease: "elastic.out(1, 0.5)"
      });
    } else {
      gsap.to([realcover.value, inf.value, information.value], {
        duration: 0.5,
        x: 0,
        ease: "elastic.out(1, 0.7)"
      });
    }
  }

  isLogin.value = !isLogin.value;
});


  // 返回按钮事件
  back.value?.addEventListener('click', () => {
    gsap.to(logc.value, {
      scale: 0,
      duration: 1,
      ease: "power2.inOut"
    });
  });
});
</script>

<template>
  <div ref="logc" class="logc">
    <div ref="realcover" class="realcover"></div>
    
    <div ref="inf" class="inf">
      <div class="hello">{{ greeting }}</div>
      <div class="ask">{{ asker }}</div>
      <button ref="toggle" class="toggle">{{ lo }}</button>
    </div>

    <div ref="information" class="information">
      <div class="nowWhat">{{ nw }}</div>
      <input 
        type="text" 
        class="username" 
        v-model="username" 
        placeholder="请输入账号"
        autocomplete="username"
      >
      <input 
        type="password" 
        class="password" 
        v-model="password" 
        placeholder="请输入密码"
        autocomplete="current-password"
      >
      <button ref="submit" class="submit" @click="login">{{ nw }}</button>
    </div>
    
    <div ref="back" class="back"></div>
  </div>
</template>

<style>
/* 基础样式与变量定义 */
:root {
  --primary-color: #92b4ff;
  --secondary-color: aliceblue;
  --text-color: #000;
  --text-light: aliceblue;
  --border-radius: 6%;
  --transition-standard: all 0.3s ease;
}

/* 登录容器 */
.logc {
  width: 90vw;
  max-width: 900px;
  height: 70vh;
  min-height: 500px;
  position: fixed;
  background-color: var(--secondary-color);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  border-radius: var(--border-radius);
  overflow: hidden;
  z-index: 9999999;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* 左侧信息面板 */
.inf {
  width: 40%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: var(--border-radius);
  z-index: 2;
}

.hello {
  position: absolute;
  top: 30%;
  width: 90%;
  text-align: center;
  font-weight: bolder;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  color: var(--text-light);
}

.ask {
  position: absolute;
  top: 63%;
  left: 45%;
  transform: translateX(-50%);
  width: 80%;
  text-align: center;
  font-weight: bolder;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  color: var(--text-light);
}

.toggle {
  position: absolute;
  width: clamp(100px, 20vw, 140px);
  height: clamp(35px, 5vh, 45px);
  border: 2px solid var(--text-light);
  top: 70%;
  left: 45%;
  transform: translateX(-50%);
  border-radius: 7%;
  background-color: var(--primary-color);
  text-align: center;
  font-weight: bolder;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--text-light);
  cursor: pointer;
  transition: var(--transition-standard);
}

.toggle:hover {
  background-color: #7aa3e6;
  transform: translateX(-50%) scale(1.05);
}

/* 背景覆盖层 */
.realcover {
  position: absolute;
  width: 110%;
  height: 100%;
  left: -75%;
  background-color: var(--primary-color);
  z-index: 1;
  border-radius: var(--border-radius);
}

/* 右侧表单区域 */
.information {
  position: absolute;
  height: 100%;
  width: 60%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nowWhat {
  position: absolute;
  top: 15%;
  width: 80%;
  text-align: center;
  font-weight: bolder;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: var(--text-color);
}

.username, .password {
  width: 70%;
  padding: 12px 15px;
  margin: 15px 0;
  border: none;
  border-bottom: 2px solid var(--primary-color);
  background-color: transparent;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--text-color);
  font-weight: 500;
  text-align: center;
  transition: var(--transition-standard);
}

.username:focus, .password:focus {
  outline: none;
  width: 75%;
  border-color: #7aa3e6;
}

.username::placeholder, .password::placeholder {
  color: #bbb;
  font-weight: normal;
}

.submit {
  width: clamp(100px, 20vw, 140px);
  height: clamp(35px, 5vh, 45px);
  border: 2px solid var(--primary-color);
  margin-top: 30px;
  border-radius: 7%;
  background-color: var(--primary-color);
  text-align: center;
  font-weight: bolder;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--text-light);
  cursor: pointer;
  transition: var(--transition-standard);
}

.submit:hover {
  background-color: #7aa3e6;
  transform: scale(1.05);
}

/* 返回按钮 */
.back {
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.8;
  border-radius: 12%;
  background-color: #bbb;
  width: 25%;
  height: 3%;
  transition: var(--transition-standard);
  cursor: pointer;
}

.back:hover {
  opacity: 1;
  height: 3.5%;
  background-color: #999;
}

/* 平板设备适配 */
@media (max-width: 768px) {
  .logc {
    height: 80vh;
    min-height: 450px;
  }
  
  .inf, .information {
    width: 100%;
  }
  
  .inf {
    z-index: 3;
    background-color: rgba(146, 180, 255, 0.9);
    height: 40%;
    bottom: 0;
    top: auto;
  }
  
  .information {
    height: 60%;
    top: 0;
  }
  
  .realcover {
    width: 100%;
    height: 40%;
    left: 0;
    bottom: 0;
    top: auto;
  }
  
  .hello {
    top: 20%;
    font-size: clamp(1.2rem, 5vw, 1.8rem);
  }
  
  .ask {
    top: 50%;
  }
  
  .toggle {
    top: 70%;
  }
  
  .nowWhat {
    top: 10%;
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
}

/* 手机设备适配 */
@media (max-width: 480px) {
  .logc {
    width: 95vw;
    height: 85vh;
    min-height: 400px;
  }
  
  .username, .password {
    width: 85%;
    padding: 10px 12px;
  }
  
  .username:focus, .password:focus {
    width: 90%;
  }
  
  .back {
    width: 35%;
  }
}
</style>
