<template>
    <div class="progress-container" ref="ps">
      <!-- 背景轨道 -->
      <div class="progress-track">
        <!-- 进度填充条 -->
        <div class="progress-bar" ref="progressBar">
          <div class="bar-flare"></div>
        </div>
        
        <!-- 进度终点的小球 -->
        <div class="end-ball" ref="endBall"></div>
      </div>
  
      <!-- 百分比显示 -->
      <div class="percentage" ref="percentage">0%</div>
  
      <!-- 动态粒子 -->
      <div v-for="(particle, index) in particles" 
           :key="index"
           class="particle"
           :style="particle.style"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  
  const progressBar = ref(null)
  const endBall = ref(null)
  const percentage = ref(null)
  const particles = ref([])
  const ps = ref(null)
  
  // 创建粒子
  const createParticle = () => {
    if(Math.random() > 0.6) return // 控制粒子密度
    
    const progressWidth = progressBar.value.clientWidth
    const particle = {
      style: {
        left: `${Math.random() * progressWidth}px`,
        background: `hsl(${gsap.utils.random(160, 200)}, 70%, 60%)`
      }
    }
    
    particles.value.push(particle)
    
    // 粒子动画
    gsap.to(particle, {
      duration: 1,
      y: -30,
      opacity: 0,
      onComplete: () => {
        particles.value = particles.value.filter(p => p !== particle)
      }
    })
  }
  
  onMounted(() => {
    // 主进度条动画
    const tl = gsap.timeline()
    
    tl.to(progressBar.value, {
      width: '100%',
      duration: 10,
      ease: 'power2.inOut',
      onUpdate: () => {
        const progress = Math.round( progressBar.value.clientWidth * 100/ps.value.clientWidth)
        percentage.value.textContent = `${progress}%`
      }
    })
    .to(endBall.value, { // 终点小球跳动
      y: -15,
      duration: 0.3,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    }, '<')
    
    // 粒子生成器
    const particleInterval = setInterval(createParticle, 50)
    
    // 清理
    tl.then(() => clearInterval(particleInterval))
    
    // 颜色变化动画
    gsap.to(progressBar.value, {
      backgroundPosition: '100%',
      duration: 3,
      ease: 'none'
    })
  })
  </script>
  
  <style scoped>
  .progress-container {
    width: 80%;
    max-width: 600px;
    top: 75%;
    left: 34%;
    position: fixed;
    z-index: 9999;
  }
  
  .progress-track {
    height: 25px;
    background: #2a2a2a;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }
  
  .progress-bar {
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, #00ff88, #00ffee);
    background-size: 200% auto;
    position: relative;
    transition: 0.3s ease;
  }
  
  .bar-flare {
    position: absolute;
    right: 0;
    height: 100%;
    width: 20px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4));
  }
  
  .end-ball {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(0,255,238,0.8);
  }
  
  .percentage {
    position: absolute;
    right: -50px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }
  
  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #fff;
    border-radius: 50%;
    bottom: 5px;
    pointer-events: none;
  }
  </style>