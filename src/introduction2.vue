<!-- introduction2.vue 修正后 -->
<script setup>
import { ref,onMounted, defineProps } from 'vue';

const props = defineProps({
  introduction: {
    type: String,
    default: ''
  }
});

// 创建动态 HTML 容器
const it = ref(null);

// 在挂载后插入 HTML
onMounted(() => {
  if (it.value) {
    it.value.innerHTML = props.introduction;
  }
});
</script>

<template>
  <div ref="it" class="it"></div>
</template>

<style scoped>
.it {
  position: relative;
  width: 100%;
  height: 100%;
}

/* 文字样式 */
:deep(.word) {  
  position: absolute;
  font-size: 34px;
  font-weight: bold;
  white-space: nowrap;
  animation: float 3s ease-in-out infinite;
  opacity: 0.9;
  pointer-events: none;
  z-index: 9999999999999999999;
}

/* 动画延迟 */
:deep(.word:nth-child(1)) { animation-delay: 0s; }
:deep(.word:nth-child(2)) { animation-delay: 0.4s; }
:deep(.word:nth-child(3)) { animation-delay: 0.8s; }
:deep(.word:nth-child(4)) { animation-delay: 1.2s; }
:deep(.word:nth-child(5)) { animation-delay: 1.6s; }
:deep(.word:nth-child(6)) { animation-delay: 2.0s; }
:deep(.word:nth-child(7)) { animation-delay: 2.4s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
</style>