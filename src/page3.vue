<template>
  <section class="freshman-process">
    <div v-if="!isMobile()">
      <div class="bg-element bg3"></div>
      <div class="bb"></div>
      <div class="LingRui">LINGRUI</div>
      <div class="line1"></div>
    </div>

    <!-- 外部黑框容器 -->
    <div class="outer-container">
      <div class="display-text">{{ displayText }}</div>
    </div>

    <!-- 三个块的容器 -->
    <div class="blocks-container" v-if="!isMobile()">
      <div
        v-for="(item, index) in processItems"
        :key="index"
        class="block-item"
        :class="{ selected: selectedIndex === index }"
        @click="selectItem(index)"
      >
        <div class="decorative-dot"></div>
        <span>{{ item.title }}</span>
      </div>
    </div>

    <!-- 移动端布局 -->
    <div class="mobile-blocks-container" v-else>
      <div
        v-for="(item, index) in processItems"
        :key="index"
        class="mobile-block-item"
        :class="{ selected: selectedIndex === index }"
        @click="selectItem(index)"
      >
        <div class="mobile-decorative-dot"></div>
        <span>{{ item.title }}</span>
      </div>
    </div>

    <!-- 动态变化的文字区域 -->
    <transition name="fade" mode="out-in">
      <div class="time" :key="currentTime">{{ currentTime }}</div>
    </transition>
    <transition name="slide-up" mode="out-in">
      <div class="tn" :key="currentTitle">{{ currentTitle }}</div>
    </transition>
    <transition name="slide-up" mode="out-in" :style="{ transitionDelay: '0.1s' }">
      <div class="ti" :key="currentTarget">{{ currentTarget }}</div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, Ref, UnwrapRef } from 'vue'
// Simple isMobile implementation
const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

interface ProcessItem {
  title: string
  text: string
  time: string
  tn: string
  ti: string
}

const selectedIndex: Ref<number> = ref(0)
const displayText: Ref<string> = ref('')
const currentTime: Ref<string> = ref('')
const currentTitle: Ref<string> = ref('')
const currentTarget: Ref<string> = ref('')

const processItems: UnwrapRef<ProcessItem[]> = reactive([
  {
    title: '第一轮笔试',
    text: '大二的同学，请先联系对应方向管理员',
    time: '9.19',
    tn: '第一轮笔试',
    ti: '任一方向',
  },
  {
    title: '第一轮面试',
    text: '大概在十月底，对第一轮笔试优秀的同学进行面试，通过者即可以正式加入凌睿工作室大家庭',
    time: '暂定',
    tn: '第一轮面试',
    ti: '通过笔试的同学',
  },
  {
    title: 'Offer',
    text: '邮件或招新群公告发放',
    time: '面试后',
    tn: 'Offer发放',
    ti: '通过面试的同学',
  },
])

const selectItem = (index: number): void => {
  selectedIndex.value = index
  updateDisplay(index)
}

const updateDisplay = (index: number): void => {
  const item = processItems[index]

  // 添加淡入淡出效果
  const elements: Ref<string>[] = [displayText, currentTime, currentTitle, currentTarget]

  // 淡出
  elements.forEach((el) => {
    el.value = ''
  })

  // 延迟后淡入新内容
  setTimeout(() => {
    displayText.value = item.text
    currentTime.value = item.time
    currentTitle.value = item.tn
    currentTarget.value = item.ti
  }, 150)
}

onMounted(() => {
  // 初始选中第一个项目
  selectItem(0)
})
</script>

<style scoped>
.freshman-process {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.line1 {
  background-color: #8f8f8f;
  position: absolute;
  bottom: 48vh;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 999;
}

.bb {
  background-color: #284679;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15vh;
  z-index: 999;
}

.LingRui {
  position: absolute;
  color: #888888;
  bottom: 0;
  left: 0;
  font-size: 30rem;
  font-weight: 800;
  opacity: 0.5;
}

/* 外部黑框容器 */
.outer-container {
  background-color: rgb(0, 0, 0);
  padding: 50px 40px;
  /* 固定上边缘位置，从顶部向下偏移 */
  top: 52vh; /* 根据需要调整这个值 */
  width: 100%;
  max-width: 480px;
  transition: all 0.3s ease;
  position: absolute;
  left: 10vh;
}

/* 显示文字样式 */
.display-text {
  text-align: center;
  font-size: 2vh;
  font-weight: 600;
  color: #b9b8b8;
  transition: opacity 0.3s ease;
}

/* 块容器样式 */
.blocks-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  width: 100%;
  max-width: 480px;
  position: absolute;
  bottom: 20vh;
  left: 10vh;
}

@media (min-width: 768px) {
  .blocks-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

/* 选项块基础样式 */
.block-item {
  position: relative;
  border-radius: 1px;
  padding: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #fff;
}

/* 选项块文字样式 */
.block-item span {
  font-size: 18px;
  font-weight: 500;
  color: #1e293b;
}

/* 装饰小黑块 */
.decorative-dot {
  position: absolute;
  bottom: 8px;
  left: 8px;
  width: 8px;
  height: 8px;
  background-color: #1e293b;
  border-radius: 2px;
}

/* 选中状态样式 */
.block-item.selected {
  border-color: #165dff;
  background-color: #eff6ff;
}

/* 选中状态右上角三角形 */
.block-item.selected::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-top: 24px solid #165dff;
  border-left: 24px solid transparent;
}

/* 悬停效果 */
.block-item:hover {
  border-color: #165dff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 时间和说明文字样式 */
.time,
.tn,
.ti {
  text-align: center;
  margin: 10px auto;
  max-width: 800px;
  position: relative;
  z-index: 10;
}

/* Vue过渡动画样式 */
/* 淡入淡出动画 - 用于time元素 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(1.2);
}

/* 向上滑动动画 - 用于tn和ti元素 */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.time {
  font-size: 180px;
  font-weight: 800;
  color: #294f8c;
  position: absolute;
  right: 0vh;
  top: 25vh;
}

.tn {
  font-size: 50px;
  font-weight: 800;
  color: #ffffff;
  position: absolute;
  left: 10vh;
  top: 35vh;
}

.ti {
  font-size: 30px;
  font-weight: 800;
  position: absolute;
  left: 10vh;
  top: 45vh;
  color: #4b5563;
}

/* 背景装饰元素 */
.bg-element {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  z-index: 0;
}

.bg3 {
  width: 150px;
  height: 150px;
  top: 100px;
  left: 200px;
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .time {
    font-size: 150px;
    right: 1vh;
  }

  .LingRui {
    font-size: 25rem;
  }
}

@media (max-width: 992px) {
  .time {
    font-size: 130px;
    right: 2vh;
  }

  .tn {
    font-size: 45px;
    left: 8vh;
  }

  .ti {
    font-size: 25px;
    left: 8vh;
  }

  .LingRui {
    font-size: 20rem;
  }

  .outer-container {
    left: 8vh;
    max-width: 350px;
  }

  .blocks-container {
    left: 8vh;
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .LingRui {
    font-size: 15rem;
    z-index: 999;
  }

  .time {
    font-size: 100px;
    right: 2vh;
    top: 20vh;
  }

  .tn {
    font-size: 30px;
    left: 5vh;
    top: 30vh;
  }

  .ti {
    font-size: 18px;
    left: 5vh;
    top: 38vh;
  }

  .outer-container {
    left: 38vh;
    max-width: 280px;
    bottom: 20vh;
    padding: 30px 20px;
  }

  .blocks-container {
    left: 5vh;
    max-width: 320px;
    grid-template-columns: 1fr;
    gap: 12px;
    bottom: 25vh;
  }

  .block-item {
    padding: 16px;
  }

  .block-item span {
    font-size: 16px;
  }

  .display-text {
    font-size: 1.8vh;
  }
}

@media (max-width: 576px) {
  .LingRui {
    font-size: 12rem;
  }

  .time {
    font-size: 80px;
    right: 1vh;
    top: 15vh;
  }
  .bb {
    width: 100%;
    height: 18vh;
    z-index: 999;
  }
  .tn {
    font-size: 24px;
    left: 3vh;
    top: 25vh;
  }

  .ti {
    font-size: 16px;
    left: 3vh;
    top: 32vh;
  }

  .outer-container {
    left: 3vh;
    max-width: 250px;
    bottom: 45vh;
    padding: 20px 15px;
  }

  .blocks-container {
    left: 3vh;
    max-width: 280px;
    gap: 10px;
    bottom: 25vh;
  }

  .block-item {
    padding: 12px;
    padding: 4px;
  }

  .block-item span {
    font-size: 14px;
  }

  .display-text {
    font-size: 1.6vh;
  }

  .line1 {
    bottom: 20vh;
  }

  /* 移动端专属样式 */
  .mobile-blocks-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 280px;
    position: absolute;
    bottom: 15vh;
    left: 3vh;
    max-height: 40vh;
    overflow-y: auto;
  }

  .mobile-block-item {
    position: relative;
    border-radius: 1px;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #fff;
    width: 100%;
  }

  .mobile-block-item span {
    font-size: 16px;
    font-weight: 500;
    color: #1e293b;
  }

  .mobile-decorative-dot {
    position: absolute;
    bottom: 6px;
    left: 6px;
    width: 6px;
    height: 6px;
    background-color: #1e293b;
    border-radius: 2px;
  }

  .mobile-block-item.selected {
    border-color: #165dff;
    background-color: #eff6ff;
  }

  .mobile-block-item.selected::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-top: 20px solid #165dff;
    border-left: 20px solid transparent;
  }

  .mobile-block-item:hover {
    border-color: #165dff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}

@media (max-width: 375px) {
  .LingRui {
    font-size: 10rem;
  }

  .time {
    font-size: 60px;
    right: 1vh;
    top: 12vh;
  }

  .tn {
    font-size: 20px;
    left: 2vh;
    top: 22vh;
  }

  .ti {
    font-size: 14px;
    left: 2vh;
    top: 28vh;
  }

  .outer-container {
    left: 2vh;
    max-width: 220px;
    bottom: 47vh;
    padding: 15px 10px;
  }

  .blocks-container {
    left: 2vh;
    max-width: 250px;
    gap: 8px;
    bottom: 30vh;
  }
}
</style>
