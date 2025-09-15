<template>
    <div ref="containerRef" class="three-container" />
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
  
  const containerRef = ref(null)
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  let model = null
  let controls = null
  let animationFrameId = null
  
  // 鼠标参数
  const mouse = {
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
    deltaX: 0,
    deltaY: 0,
    isDown: false
  }
  
  // 初始化场景
  function initScene() {
    // 添加环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)
    scene.background = new THREE.Color(0x1e576d) // 可修改颜色值
    // 添加平行光
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)
  
    // 设置相机位置
    camera.position.z = 5
  }
  
  // 加载模型
  async function loadModel() {
    const loader = new GLTFLoader()
    const gltf = await loader.loadAsync('/models/scene.gltf')
    model = gltf.scene
    scene.add(model)
  }
  
  // 处理窗口大小变化
  function handleResize() {
    const container = containerRef.value
    const width = container.clientWidth
    const height = container.clientHeight
  
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }
  
// 动画循环
function animate() {
  if (model) {
    model.rotation.y += 0.01 // 调整这个值可以改变旋转速度
  }
  renderer.render(scene, camera)
  animationFrameId = requestAnimationFrame(animate)
}
  
  onMounted(async () => {
    const container = containerRef.value
  
    // 初始化渲染器
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)
  
    // 初始化场景和模型
    initScene()
    await loadModel()
  
    // 添加事件监听
    window.addEventListener('resize', handleResize)
  
  
    // 启动动画循环
    animate()
  })
  
  onUnmounted(() => {
    // 清理资源
    window.removeEventListener('resize', handleResize)
    containerRef.value?.removeEventListener('mousedown', onMouseDown)
    containerRef.value?.removeEventListener('mouseup', onMouseUp)
    containerRef.value?.removeEventListener('mouseleave', onMouseUp)
    containerRef.value?.removeEventListener('mousemove', onMouseMove)
    cancelAnimationFrame(animationFrameId)
    scene.clear()
    renderer.dispose()
  })
  </script>
  
  <style>
 
  </style>