<template>
  <section class="freshman-process">
    <div v-if="!isMobile()">
      <div class="bg-element bg3"></div>
      <div class="bb"></div>
      <div class="LingRui">Steel Checking</div>
      <div class="line1"></div>
      <div class="line2"></div>
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
import { ref, reactive, onMounted, onBeforeUnmount, Ref, UnwrapRef } from 'vue'

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
    title: '自动化',
    text: '让流程更高效，减少人为干预',
    time: 'Auto',
    tn: '自动化',
    ti: '高效执行',
  },
  {
    title: '高精度',
    text: '精准识别与检测，误差率大幅降低',
    time: 'Accurate',
    tn: '高精度',
    ti: '精准结果',
  },
  {
    title: '数据驱动决策',
    text: '依托大数据与算法进行智能分析',
    time: 'Data',
    tn: '数据驱动',
    ti: '智能决策',
  },
  {
    title: '工业级抗干扰',
    text: '在复杂环境中依旧稳定可靠',
    time: 'Robust',
    tn: '抗干扰',
    ti: '工业级稳定性',
  },
  {
    title: '实时',
    text: '即时反馈与处理，毫秒级响应',
    time: 'Realtime',
    tn: '实时',
    ti: '快速响应',
  },
  {
    title: '跨学科',
    text: '融合机械、材料、AI、控制等多领域知识',
    time: 'Inter',
    tn: '跨学科',
    ti: '协同创新',
  },
  {
    title: '持续学习迭代',
    text: '系统不断优化，越用越聪明',
    time: 'Evolve',
    tn: '持续学习',
    ti: '迭代进化',
  },
])

const selectItem = (index: number): void => {
  selectedIndex.value = index
  updateDisplay(index)
}

const updateDisplay = (index: number): void => {
  const item = processItems[index]

  // 清空先淡出
  const elements: Ref<string>[] = [displayText, currentTime, currentTitle, currentTarget]
  elements.forEach((el) => (el.value = ''))

  // 延迟后更新
  setTimeout(() => {
    displayText.value = item.text
    currentTime.value = item.time
    currentTitle.value = item.tn
    currentTarget.value = item.ti
  }, 150)
}

let intervalId: number | null = null

onMounted(() => {
  selectItem(0)

  // 自动轮播，每 3 秒切换一个
  intervalId = window.setInterval(() => {
    const nextIndex = (selectedIndex.value + 1) % processItems.length
    selectItem(nextIndex)
  }, 3000)
})

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
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
  background-color: #cfcfcf;
  position: absolute;
  bottom: 48vh;
  right: 0;
  width: 70%;
  height: 3px;
  z-index: 999;
}
.line2 {
  background-color: #cfcfcf;
  position: absolute;
  top: 0;
  left: 82vw;
  width: 3px;
  height: 100%;
  z-index: 999;
}

.bb {
  background-color: #284679;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25vh;
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

/* 块容器样式 - 改为竖排时间轴 */
.blocks-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 2vh;
  left: 15%;
  transform: translateX(-50%);
  max-width: 260px;
  align-items: center;
}

/* 竖直连线 */
.blocks-container::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background-color: #165dff;
  transform: translateX(-50%);
  opacity: 0.3;
  z-index: -1;
}

/* 每个块样式保持 */
.block-item {
  position: relative;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #fff;
  min-width: 160px;
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
  font-size: 150px;
  font-weight: 800;
  color: #294f8c;
  position: absolute;
  right: 0vh;
  top: 30vh;
}

.ti {
  font-size: 50px;
  font-weight: 800;
  position: absolute;
  right: 0vh;
  top: 43vh;
  color: #ffffff;
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
