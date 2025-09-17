<script setup>
  //lp.vue里面去添加登陆验证和历史记录
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import service from './main.js';
import LittleButton from './head.vue';
import Title from './title.vue';
import pictureContainer from './picture.vue';
import Lbt from './Logoin.vue';
import modell2 from "./modol.vue";
 
import introduction from './introduction.vue';
import introduction2 from './introduction2.vue';
import logdiv from './lp.vue';
import axios from 'axios';
import lun from './lunbo.vue';

  
  const box = ref(null);
  const teamLogo = ref(null);
  const container1 = ref(null);
  const container2 = ref(null);
  const container3 = ref(null);
  const container4 = ref(null);
  const t1 =ref(null);
  const t2 =ref(null);
  const monitor = ref(null);
  const enter = ref(false);
  const red = ref(null);
  const ts = ref(null);
  const i1 = ref(null)
  const ld = ref(null)
  const lbt1 = ref(null)
  const isBigger = ref(true)
  const sm = ref(null)
  const pt = ref(null)
  const result = ref(null)
  const headBar = ref(null)
  const bpic = ref(null)
  const bpicback = ref(null)
  const tn = ref(null)
  const lines = ref(null)
  const isgoing = ref(false)
  const pg2s = ref(null)
  const pg3s = ref(null)
  const kuai1 = ref(null)
  const kuai2 = ref(null)
  const lines2 = ref(null)
  const lines3 = ref(null)
  const jiantou = ref(null)
  const left = ref(null)
  const right = ref(null)
  const ts2 = ref(null)
  const t3 = ref(null)
  const tiao1 = ref(null)
  const tiao2 = ref(null)
  const tiao3 = ref(null)
  const load = ref(null)
  
onMounted(()=>{
  const tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: jiantou.value,
      start: "top top", // 当容器顶部碰到视口顶部时触发
      end: "+=300",     // 滚动300px后结束
      
      
     }
  })
  tl8.to([left.value], {
   
   x:1400,
   
    duration: 0.2,
    ease:"power4.inOut"
  },"<")
  tl8.to([t3.value.$el], {
   
   x:-1400,
   
    duration: 0.2,
    ease:"power4.inOut"
  },"<")
  tl8.to([right.value], {
   
   x:-1400,
   
    duration: 0.2,
    ease:"back.inOut"
  },"<")
  tl8.to([ts2.value.$el], {
   
   x:1600,
   
    duration: 0.2,
    ease:"back.inOut"
  },"<")
  const tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: pg2s.value,
      start: "top top", // 当容器顶部碰到视口顶部时触发
      end: "+=300",     // 滚动300px后结束
      
      
     }
  })
  const tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: pg3s.value,
      start: "top top", // 当容器顶部碰到视口顶部时触发
      end: "+=500",     // 滚动300px后结束
      
      
     }
  })
  tl7.to([kuai1.value], {
    scale: 0,
    opacity: 0,
    rotate: 15,
    y:-1000,
   
    duration: 4,
    ease: "power2.inOut"
  },"<")
  const tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: pg2s.value,
      start: "top top", // 当容器顶部碰到视口顶部时触发
      end: "+=7500",     // 滚动300px后结束
      scrub: true,      // 动画与滚动联动
      
     }
  })
  tl5.to([lines.value], {
    height:"100%",
    duration: 8,
  })
  tl6.to([kuai1.value], {
    scale: 1,
    opacity: 1,
    rotate: 15,
    y:1000,
   
    duration: 4,
    ease: "power2.inOut"
  },"<")
  tl6.to([lines2.value], {
   
   height:"179%",
    duration: 2,

  },"<")
  tl6.to([lines3.value], {
   
   height:"180%",
    duration: 2,

  },"+1")
})
  // 直接定义 HTML 字符串
const introText = `
  <span class="word" style="left: -50%; top: 10%;">自动化</span>
  
  <span class="word" style="left: -85%; top: 40%;">高精度,</span>

  <span class="word" style="left: -60%; top: 70%;">数据驱动决策</span>

  <span class="word" style="left: -70%; top: 100%;">工业级抗干扰.</span>
`;
const introText2 = `
  <span class="word" style="left: 100%; top: 20%;">实时</span>
  <span class="word" style="left: 150%; top: 50%;">跨学科</span>
  <span class="word" style="left: 100%; top: 80%;">持续学习迭代</span>
`;
const tl9 = gsap.timeline({
      })
      const tl10 = gsap.timeline({
      })
      const tl11 = gsap.timeline({
      })
      const tl12 = gsap.timeline({
      })
     
//组件注册,滚动来了,不知道可不可以在子组件弄
  gsap.registerPlugin(ScrollTrigger)
  onMounted(()=>{
    //  sm.value.addEventListener('click',()=>{
      
    bpicback.value.addEventListener('click',()=>{
    gsap.to(result.value, {
      scale: 0
    })
  })
    lbt1.value.$el.addEventListener('click',()=>{
      if(isBigger.value){
      gsap.to(ld.value.$el, {
        scale: 1,
        duration: 1,
        ease: "bounce.out(1, 0.7)"
      })
      isBigger.value = false}
      else{
        gsap.to(ld.value.$el, {
          scale: 0,
          duration: 1,
          ease: "power2.inOut"
        })
        isBigger.value = true
      }
    })
    

    const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: document.body.value,
      start: "top top", // 当容器顶部碰到视口顶部时触发
      end: "+=300",     // 滚动300px后结束
      scrub: true,      // 动画与滚动联动
      pin: [red.value],        // 固定容器
     
      
      
    }
  })
  
  // 添加缩小动画
  tl1.to([t1.value.$el], {
    scale: 2.2,
    x:50,
    y:1300,
    color:'rgb(109, 108, 108)',
    duration: 8,
  })

  
  tl1.to(red.value, {
    opacity: 0,
    duration: 1
  },"<")
  ScrollTrigger.create({
    trigger: t1.value.$el,
    
            // 固定容器
    scrub:true,
   
    start:"+=400",
    end:"+=1000"
})
tl1.to([monitor.value], {
    scale:0,
    duration: 1,
})
  
})
onMounted(()=>{
    const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ts.value,
      start: "-=200", 
      end: "+=700",     // 滚动300px后结束
      scrub: true,      // 动画与滚动联动
      pin:[i1.value.$el],
     
      
      
    }
  })
  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ts.value,
      start: "-=200", 
      end: "+=700",     // 滚动300px后结束
      scrub: true,      // 动画与滚动联动
      pin:[ts.value,t1.value.$el],
     
     
      
    }
  })

  tl3.to([t1.value.$el], {
    
    y:500,
    duration: 6,
    })
    tl4.to([i1.value.$el], {
   
   duration: 6,
   })
 
  })
  
  onMounted(()=>{
    const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: document.body.value,
      start: "top top", // 当容器顶部碰到视口顶部时触发
      end: "+=300",     // 滚动300px后结束
      scrub: true,      // 动画与滚动联动
            
     
      
      
    }
  })
  tl2.to([t2.value.$el], {
    scale: 0.2,
    x:-200,
    y:1000,
    opacity:0,
    duration: 6,
    })
  })

  onMounted(()=>{
        gsap.to(teamLogo.value,
            {y:100,
             opacity:1,
             duration: 1,
             ease: "power2.inOut"
            }
        )
        gsap.to(tn.value,
            {y:100,
             opacity:1,
             duration: 0.3,
             ease:"ease.inOut"
            },
        )
    })
    
   
    const previewImage = ref(new URL('./assets/up.png', import.meta.url).href)
    const resultImage = ref(new URL('./assets/result.png', import.meta.url).href)
const fileInput = ref(null)
const selectedFile = ref(null)

// 触发文件选择对话框
const triggerFileInput = () => {
    fileInput.value.click()
}

// 处理文件选择
const handleFileSelect = (event) => {
    const file = event.target.files[0]
    if (!file) return

    // 验证文件类型
    const allowedTypes = [
        'image/png',
        'image/jpeg',
        'image/jpg',
        'image/bmp',
        'image/tiff'
    ]

    if (!allowedTypes.includes(file.type)) {
        alert('仅支持 PNG、JPEG、JPG、BMP、TIFF 格式')
        return
    }

    // 显示预览
    const reader = new FileReader()
    reader.onload = (e) => {
        previewImage.value = e.target.result
    }
    reader.readAsDataURL(file)

    // 保存文件对象
    selectedFile.value = file
}
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`; // 使用反引号
    }
    return config;
});

const uploadFile = async () => {
  tl12.to([load.value], {
   
   x:-2200,
   
    duration: 2,
    ease:"power4.inOut"
  },"<")
  tl12.to([load.value], {
   
   backgroundColor:'#fff',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl12.to([load.value], {
   
   backgroundColor:'#00091f',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl12.to([load.value], {
   
   backgroundColor:'#fff',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl12.to([load.value], {
   
   backgroundColor:'#00091f',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl12.to([load.value], {
   
   backgroundColor:'#fff',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl12.to([load.value], {
   
   x:2200,
   
    duration: 2,
    ease:"power4.inOut"
  },)




  tl11.to([tiao2.value], {
   
   x:-2200,
   
    duration: 2,
    ease:"power4.inOut"
  },"<")
  tl11.to([tiao2.value], {
   
   backgroundColor:'#fff',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl11.to([tiao2.value], {
   
   backgroundColor:'#00091f',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl11.to([tiao2.value], {
   
   backgroundColor:'#fff',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl11.to([tiao2.value], {
   
   backgroundColor:'#00091f',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl11.to([tiao2.value], {
   
   backgroundColor:'#fff',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl11.to([tiao2.value], {
   
   x:2200,
   
    duration: 2,
    ease:"power4.inOut"
  },)






  tl10.to([tiao3.value], {
   
   x:2200,
   
    duration: 2,
    ease:"power4.inOut"
  },"<")
  tl10.to([tiao3.value], {
   
   backgroundColor:'#fff',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl10.to([tiao3.value], {
   
   backgroundColor:'#00091f',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl10.to([tiao3.value], {
   
   backgroundColor:'#fff',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl10.to([tiao3.value], {
   
   backgroundColor:'#00091f',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl10.to([tiao3.value], {
   
   backgroundColor:'#fff',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl10.to([tiao3.value], {
   
   x:-2200,
   
    duration: 2,
    ease:"power4.inOut"
  },)


  tl9.to([tiao1.value], {
   
   x:2200,
   
    duration: 2,
    ease:"power4.inOut"
  },"<")
  tl9.to([tiao1.value], {
   
   backgroundColor:'#fff',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl9.to([tiao1.value], {
   
   backgroundColor:'#00091f',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl9.to([tiao1.value], {
   
   backgroundColor:'#fff',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl9.to([tiao1.value], {
   
   backgroundColor:'#00091f',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl9.to([tiao1.value], {
   
   backgroundColor:'#fff',
   
    duration: 0.2,
    ease:"power4.inOut"
  },)
  tl9.to([tiao1.value], {
   
   x:-2200,
   
    duration: 2,
    ease:"power4.inOut"
  },)
 
  if (!selectedFile.value) {
    alert('请先选择文件');
    return;
  }

  const formData = new FormData(); // 修正变量名拼写
  formData.append('image', selectedFile.value);

  try {
    const response = await service.post( // 使用service实例而不是axios
      '/upload/picture',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          
        },
        withCredentials: true
      }
    );
   
 
   

    resultImage.value = response.data.oss_image_url;
    gsap.to(result.value, { 
      scale: 1,
      duration: 1,
      ease: "bounce.out(1, 0.7)"
    });
    selectedFile.value = null;
    previewImage.value = new URL('./assets/up.png', import.meta.url).href; // 重置预览图
    fileInput.value.value = ''; // 清空文件输入框
  } catch (error) {
    console.error('上传失败:', error);
    alert('操作失败: ' + (error.response?.data?.message || error.message));
  }
};
function scrollToSection1() {
    const target = document.getElementById('p1');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
function scrollToSection2() {
    const target = document.getElementById('i1');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
function scrollToSection3() {
    const target = document.getElementById('pg5');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
  function scrollToSection4() {
    const target = document.getElementById('pg4');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleScroll = () => {
  const headBarEl = headBar.value
  const scrollY = window.scrollY || window.pageYOffset
  
  if (scrollY > 100) {
    headBarEl.classList.add('vertical')
    tn.value.classList.add('vertical')
    teamLogo.value.classList.add('vertical')
    lbt1.value.$el.classList.add('vertical')
    gsap.to(headBarEl, {
      duration: 0.8,
      ease: "power2.out",
      left: "2%",
      top: "50%",
      transform: "translateY(-50%)"
    })
  } else {
    headBarEl.classList.remove('vertical')
    tn.value.classList.remove('vertical')
    teamLogo.value.classList.remove('vertical')
    lbt1.value.$el.classList.remove('vertical')
    gsap.to(headBarEl, {
      duration: 0.8,
      ease: "power2.out",
      left: "50%",
      top: "3%",
      transform: "translateX(-50%)"
    })
  }
}

// 在onMounted中添加滚动监听
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// 在beforeUnmount中移除
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
// 新增响应式数据
const track = ref(null);
const scrollPos = ref(0);
const itemWidth = 130; // 120px图片 + 10px间距

// 计算是否滚动到最右端
const isEnd = computed(() => {
  if (!track.value) return true;
  return scrollPos.value >= track.value.scrollWidth - track.value.clientWidth;
});

// 滚动控制方法
const scroll = (direction) => {
  if (!track.value) return;
  
  const newPos = scrollPos.value + (direction * 5 * itemWidth); // 每次滚动5个项
  track.value.scrollTo({
    left: newPos,
    behavior: 'smooth'
  });
};

// 滚动位置追踪
const handleScroll1 = () => {
  if (!track.value) return;
  scrollPos.value = track.value.scrollLeft;
};
const historyImages = ref([]); // 存储历史图片URL
const showModal = ref(false); // 控制模态框显示
const selectedImage = ref(''); // 当前选中大图的URL

// 获取历史记录
const fetchHistory = async () => {
  try {
    const response = await axios.get('http://localhost:8080/upload/historychecks', {
      withCredentials: true
    });
    // 假设返回数据结构为 { code: 200, data: [...] }
    if (response.data.code === 200) {
      historyImages.value = response.data.data;
    }
  } catch (error) {
    console.error('获取历史记录失败:', error);
    alert('加载失败: ' + (error.response?.data?.message || error.message));
  }
};

// 点击图片放大
const showFullImage = (url) => {
  selectedImage.value = url;
  showModal.value = true;
};

// 组件加载时自动获取历史记录
onMounted(() => {
  fetchHistory();
});
  </script>

<template> 

  <logdiv ref="ld" class="logdiv" />
  <pictureContainer :change="enter" id="picture1" ref="container1">
  </pictureContainer>

    
    <pictureContainer id="picture2" ref="container2" >
  </pictureContainer>
  <pictureContainer id="picture3" ref="container3" >

  </pictureContainer>
  <pictureContainer id="picture4" ref="container4" ></pictureContainer>
    <Title ref="t1" id="title1" title="Steel"></Title>
    <Title ref="t2" id="title2" title="Check"></Title>
  <div class="teamlogo" ref="teamLogo">
    <img  class="teamLogo" src="@/assets/teamlogo.png" alt="Logo">
    <div class="tn" ref="tn">Z M T Y</div>
    <!-- 左上角图标,fixed,做两个变色?加文字? -->
  </div>
  <Lbt ref="lbt1" class="Lbt1" />
  
  <div class="monitor" ref="monitor" @mouseenter="container1?.rrrotate(),container2?.bigger(),container3?.rrrotateback2(),container4?.bigger()" @mouseleave="container1?.rrrotateback(),container2?.smaller(),container3.rrrotate(),container4?.smaller()"></div>

    <div ref="headBar" class="headBarer" @scroll.passive="handleScroll">
        <div ref="innerBar" class="innerBarer">
            <LittleButton lead="Home" @click="scrollToSection1"/>
            <LittleButton lead="介绍" @click="scrollToSection2" />
            <LittleButton lead="检测" @click="scrollToSection4"/>
            <LittleButton lead="记录" @click="scrollToSection3"/>
            <!-- 改正中,交互动画 -->
        </div>
    </div>

   <!-- 添加介绍div -->
    <!-- 之后就是重复几次介绍的出现 -->
     <!-- 然后是检测和结果界面直接接在后面 -->
      <!-- 最后做一个假登录界面 -->
       <!-- 还有加载界面哦 -->
    
   
    <div ref="pg1" class="pg1" id="pg1">

    </div>
   
    
    <div ref="pg2" class="pg2" id="pg2"></div> 
<div ref="ts" class="ts">
  <div class="llt">Welcome to Steel Check </div>
      <introduction ref="i1" id="i1" introduction="在本项⽬中，我们设计了⼀个基于机器视觉的钢铁表面检测平台，旨在应对工业质检场景中复杂多样的缺陷。
      我们的系统经过精⼼设计，不仅能够有效识别出缺陷的类型，如补丁，划痕，夹杂物等，还能对缺陷进行像素级精确定位；该模型的构建包括但不限于Mask-RCNN，ROI Align 
      ，FPN（特征金字塔网络） ，RPN（区域生成网络）等先进算法。这样的设计考虑了深度学习技术的快速发展，以及工业部件缺陷检测不断演进的现实情况。随着技术的不断进步，
      实时检测的需求也不断增长。因此，构建⼀个高效精准的轻量化检测模型成为了必然的选择。"/>
</div>
    
    
  
   <!-- 修改后的 HTML 结构 -->
<div ref="pg3" class="pg3" id="pg3">
  <div class="left" ref="left"><introduction2 ref="i2" id="i2" :introduction="introText"/></div>
  <div class="right" ref="right"><introduction2 ref="i3" id="i3" :introduction="introText2"/></div>
  <Title ref="t3" id="title3" title="Check"></Title>
  <modell2 ref="ts2" class="ts2"/>
  
</div>
    <div ref="pg4" class="pg4" id="pg4">
      <div class="tiao1" ref="tiao1"></div>
      <div class="tiao2" ref="tiao2"></div>
      <div class="tiao3" ref="tiao3"></div>
      <div class="loading" ref="load">LOADING...</div>

     
      <div class="kuang"></div>
      <div ref="result" class="result">
        <div ref="bpic" class="bpic" :style="{ backgroundImage: `url(${resultImage})` }">
          <div ref="bpicback" class="bpicback"></div>
        </div>
      </div>
        <div class="pic"
        :style="{ backgroundImage: `url(${previewImage})` }"
         @click="triggerFileInput"></div>
         <input ref="fileInput"
           type="file"
           accept="image/png, image/jpeg, image/jpg, image/bmp, image/tiff"
           hidden
           @change="handleFileSelect">
        <div class="ty">请上传图片或文件   →</div>
        <div class="file">(PNG,JPEG,JPG,BMP,TIFF,RAW)</div>
        <div ref="sm" class="sm" @click="uploadFile">submit</div>




        <div class="progress-container" ref="ps">
      <!-- 背景轨道 -->
      <div ref="pt" class="progress-track">
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
    
   
    </div>
    <lun />
    
   <div class="jiantou" ref="jiantou">

   </div>
   <div ref="pg5" class="pg5" id="pg5">
    <div class="carousel-container">
    <h3 id="history">History</h3>
    
    <!-- 轮播主体 -->
    <div class="carousel-wrapper">
      <button 
        class="arrow left-arrow" 
        
        @click="scroll(-1)"
      >❮</button>

      <div 
        class="carousel-track" 
        ref="track"
        @scroll.passive="handleScroll1"
      >
        <div 
          v-for="(imgUrl, index) in historyImages" 
          :key="index" 
          class="carousel-item"
          @click="showFullImage(imgUrl)"
        >
          <img :src="imgUrl" alt="历史图片" />
        </div>
      </div>

      <button 
        class="arrow right-arrow" 
       
        @click="scroll(1)"
      >❯</button>
    </div>

    <!-- 放大图片的模态框 -->
    <div v-if="showModal" class="image-modal" @click.self="showModal = false">
      <img :src="selectedImage" alt="大图" />
      <button @click="showModal = false">关闭</button>
    </div>
  </div>
   </div>
   <div class="lines" ref="lines" id="lines"></div>
   <div class="pg2s" ref="pg2s"></div>
   <div class="pg3s" ref="pg3s"></div>
   <div class="kuai1" ref="kuai1"><span class="w">在本项⽬中，我们设计了⼀个</span>基于机器视觉的钢铁表面检测平台，旨在应对工业质检场景中复杂多样的缺陷。我们的系统经过精⼼设计，不仅能够有效识别出缺陷的类型，如
    补丁，划痕，夹杂物等，还能对缺陷进行像素级精确定位；该模型的构建包括但不限于Mask-RCNN，ROI Ali
    <div class="zhuangshi"></div></div>
   <div class="kuai2" ref="kuai2"></div>
   <div class="kuai3" ref="kuai3"></div>
   <div class="lines2" ref="lines2" id="lines2"></div>
   <div class="lines3" ref="lines3" id="lines3"></div>
  </template>
  
  
  
  <style>
html, body {
  height: 100%;
  margin: 0;
  scroll-behavior: smooth; /* 平滑滚动 */
  overflow-y: scroll;
  overflow-x: hidden; /* 禁止横向滚动 */
  scroll-snap-type: y mandatory; /* 开启纵向吸附 */
}


.pg1,.pg2,.pg3, .pg4, .pg5 {
  height: 100vh;               /* 每页占满一屏 */
  scroll-snap-align: start;    /* 滚动时对齐到顶 */
}


  .loading{
    position: absolute;
    width:40%;
    height: 34%;
    font-size: 380px;
    color:#fff;
    top: 30%;
    left: 110%;
    z-index: 9999999;
  }
  .tiao1{
    position: absolute;
    width:120%;
    height: 34%;
    background-color: #00091f;
    top: 0%;
    left: -120%;
    z-index: 99999;
  }
  .tiao3{
    position: absolute;
    width:120%;
    height: 34%;
    background-color: #00091f;
    top: 67%;
    left: -120%;
    z-index: 99999;
  }
  .tiao2{
    position: absolute;
    width:120%;
    height: 34%;
    background-color: #00091f;
    top: 34%;
    left: 100%;
    z-index: 99999;
  }
  .left{
    position: relative;
    height: 150%;
    left: -100%;
    top: -10%;
    width: 80%;
    background-color: #1e576d;
    rotate: 25deg;
    transform-origin: right;
  }
  .right{
    position: relative;
    height: 150%;
    left: 120%;
    top: -120%;
    width: 80%;
    background-color: rgb(255, 155, 48);
    rotate: 25deg;
    transform-origin: right;
  }
  .w{
    color:#fcfc48 ;
  }
  .zhuangshi{
    position: inherit;
    width: 100%;
    height:10%;
    background-color: #060606;
    top: 8%;
    left: 0%;
    border-radius: 5px;
    z-index: -1;
  }
  .pg2s{
    position: absolute;
    
    top:110% ;
    right: 0%;
    width: 5%;
    height: 5%;
  }
  .pg3s{
    position: absolute;
    
    top:200% ;
    right: 0%;
    width: 5%;
    height: 5%;
  }
  .lines{
    background-color: #00091f;
    height:0%;
    position: fixed;
    top:0%;
    width: 0.3%;
    right: 10%;
  }
  .lines2{
    background-color: #fcfc48;
    height:0%;
    position: fixed;
    top:-2%;
    width: 0.3%;
    left: 8%;
    rotate:-80deg;
    transform-origin: top;
    z-index: -5;
  }
  .lines3{
    background-color: #fcfc48;
    height:0%;
    position: fixed;
    top:10%;
    width: 0.3%;
    right: -5%;
    rotate:40deg;
    transform-origin: top;
    z-index: -5;
  }
  .kuai1{
      position: fixed;
      top: 80%;
      opacity: 0;
      right: 4%;
      width: 13%;
      height:  auto;
      background-color: #fcfc48;
      padding: 30px;
      z-index: 0;
      text-align: center;
      border-radius: 5%;
      scale: 0;
    font-weight: 900px;
    font-size: 100%;
    color: #000000;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
  .kuai1{
      position: fixed;
      top: -60%;
      opacity: 0;
      right: 4%;
      width: 13%;
      height:  auto;
      background-color: #fcfc48;
      padding: 30px;
      z-index: 0;
      text-align: center;
      border-radius: 5%;
      scale: 0;
    font-weight: 900px;
    font-size: 100%;
    color: #000000;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
  #history{
    position: relative;
    top: 3%;
    left: 33%;
    font-size: 200px;
    font-weight: 900px;
  }
  .carousel-wrapper {
  display: flex;
  align-items: center;
  gap: 25px;
  margin: 0px 0;
  position: relative;
  width: 80%;
  left: 10%;
  
}

.carousel-track {
  flex: 1;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none; /* 隐藏默认滚动条 */
  -ms-overflow-style: none;
}

.carousel-track::-webkit-scrollbar {
  display: none;
}

.carousel-item {
  flex: 0 0 520px;
  height: 520px;
  cursor: pointer;
  transition: transform 0.2s;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.arrow {
  background: rgba(255,255,255,0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s;
}





  .history-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  margin-top: 15px;
}

.history-item img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 4px;
  transition: transform 0.2s;
}

.history-item img:hover {
  transform: scale(1.05);
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.image-modal img {
  max-width: 80%;
  max-height: 80%;
  border-radius: 8px;
}

.image-modal button {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8px 16px;
  background: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
  .kuang{
    position: absolute;
    width: 70%;   /* 宽度需大于高度 */
        height: 60%;
        border-radius: 30px; /* 高度的一半 */
        top: 18%;
        left: 15%;
        border: 5px solid #ffffff;
        
        align-items: center;
        box-shadow: inset 0 0 300px 80px rgba(0,0,0,0.5);
    &:hover {
        
        cursor: pointer;
        color: aliceblue;
        transform: scale(1.1);
        

        transition: all 0.3s ease-in-out;
       
    }
    transition: all 0.3s ease-in-out;

    
                }
  .jiantou{
    position: absolute;
    
    top: 258%;
    width: 500px;
    height:150px;
    border-radius: 50px;
    left: 40%;
    text-align: center;
    font-weight: 900px;
    font-size: 40px;

  }
 .introduction2 {
  position: relative;
  width: 100%;
  height: 100%;
}
  .bpicback{
    position: fixed;
    bottom: 2%;
    left: 50%;
    opacity: 80%;
    border-radius: 12%;
    transform: translate(-50%, -50%);
    background-color: rgb(185, 185, 185);
    width: 30%;
    box-shadow: 20px rgba(0, 0, 0, 0.691); /* 扩散半径为 2px 的红色阴影 */
  border-radius: 10px;        /* 圆角会同步作用于阴影 */
    height: 1%;
    transition: all 0.5s ease;
}
.bpicback:hover{
  opacity: 100%;
  box-shadow: 0 0 0 20px rgba(194, 194, 194, 0.39); /* 扩散半径为 2px 的红色阴影 */
  border-radius: 10px;        /* 圆角会同步作用于阴影 */
  cursor: pointer;
}
  #p1{
    position: absolute;
    top: 0%;
    left: 0%;
    width: 5px;
    height: 5px;
    z-index:-99999999;
  }
  
  .bpic{
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
  }
  .result{
    position: absolute;
    top: 19%;
    left: 15.5%;
    width: 69%;
    height: 58%;
    
    z-index: 9999999;
    scale: 0;
    border-radius: 2%;
   
  }
  .progress-container {
    width: 80%;
    max-width: 600px;
    top: 66%;
    left: 34%;
    position: absolute;
    z-index: 9999;
    opacity: 0;
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
    transition: width 0.3s ease-out;
    background: linear-gradient(90deg, #00ff88, #00ffee);
    background-size: 200% auto;
    animation: flare 2s infinite linear;
}

@keyframes flare {
    0% { background-position: 0 0; }
    100% { background-position: 200% 0; }
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
  .sm{
   position: absolute;
    display: flex;
        
        justify-content: center;
        width: 110px;   /* 宽度需大于高度 */
        height: 45px;
        border-radius: 30px; /* 高度的一半 */
        top: 70%;
        left: 75%;
        border: 5px solid #ffb048;
        color:rgb(255, 255, 255);
        align-items: center;
        box-shadow: inset 0 0 5px 10px rgba(0,0,0,0.5),
                    0 0 10px 5px rgba(0,0,0,0.5);
    &:hover {
        background-color: #ffb048;
        cursor: pointer;
        color: aliceblue;
        transform: scale(1.1);
        width: 150px;
        transform-origin: right;
        transition: all 0.3s ease-in-out;
       
    }
    transition: all 0.3s ease-in-out;

    
                }
    .ty{
      position: absolute;
    top: 21%;
    left: 1%;
    width: 50%;
    height: 5%;
    
    text-align: center;
    font-weight: bolder;
    font-size: 30px;
    color: rgb(165, 191, 214);
    }
    .file{
      position: absolute;
    top: 30%;
    left: 5%;
    width: 50%;
    height: 5%;
    
    text-align: center;
    font-weight: bolder;
    font-size: 30px;
    color: rgb(139, 173, 202);
    }
    .pic{
      position: absolute;
      width: 5.5%;
      height: 12%;
      background-image: url(./assets/up.png);
      background-size: cover;
      background-repeat: no-repeat;
      top: 18.5%;
      left: 34%;
      z-index: 100;
      background-size: contain;  /* 保持图片完整显示 */
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;  /* 显示手型光标 */
    transition: 0.3s;
}

.pic:hover {
    transform: scale(1.1);  /* 悬停放大效果 */
}
.pg1{
      z-index: -9999999;
      position: absolute;
      left: 0%;
      top: 0%;
      width: 100vw;
      height: 120vh;
    }
     .pg2{
      z-index: -99999999999999999999;
      position: absolute;
      left: 0%;
      top: 100%;
      width: 100vw;
      height: 120vh;
    }
    .pg3{
      background-color:#d9d6da ;
      position: absolute;
      left: 0%;
      top: 200%;
      width: 100vw;
      height: 100vh;
      border-bottom: #00091f 5px solid;
      overflow: hidden;
    }
    .pg4{
      background-color:rgba(74, 118, 168, 0.87) ;
      position: absolute;
      left: 0%;
      top: 361%;
      width: 100vw;
      height: 100vh;
    }
    .pg5{
      background-color:rgba(102, 168, 74, 0.87) ;
      position: absolute;
      left: 0%;
      top: 461%;
      width: 100vw;
      height: 120vh;
    }
    
    .ts{
      position: absolute;
      top: 100%;
      left: 30%;
      width: 22vw;
      height: 50vh;
      z-index: -100;
      border-radius: 5%;
      background-image: url("./assets/black.png");
    }
    .ts2 {
  position: absolute;
  top: 5%;
  left: -60%;
  width: 360px;
  height: 360px;
  z-index: 2; /* 确保模型在文字上方 */
}
    #i1{
  position: absolute;
  top: 0%;
  right: 30%;
  width: 33vw;
  height: auto;
  background-color: #00091f;
  padding: 80px;
  z-index: 999999;
  text-align: center;
  border-radius: 5%;
  /* 使用clamp()函数设置字体大小范围，随视口宽度变化 */
  font-size: clamp(0.5rem, 2vw, 1.2rem);
  /* 使用calc()和vw单位使字体粗细随页面缩放变化 */
  font-weight: calc(100 + 0.5vw * 10);
  color: #ffffff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
@media (max-width: 1500px) {
  #i1 {
    padding: 10px;
  }
}

    #i2 {
  position: absolute;
  top: 40%;
  left: 100%;
  width: 600px;
  height: 600px;
  pointer-events: none; /* 防止干扰模型交互 */
  z-index: 20;
}

#i3 {
  position: absolute;
  top: 20%;
  left: -30%;
  width: 600px;
  height: 600px;
  pointer-events: none; /* 防止干扰模型交互 */
  z-index: 1;
}
  
  .monitor{
    position: fixed;
    top: 15%;
    left: 20%;
    width: 60%;
    height: 60%;
    z-index: 999;
    pointer-events: auto; 
  }
  .innerBarer{
    position: fixed;
    min-width: 40%;
        right: 30%;
        height: 100px;
        width: 30%;
        display: grid;
        grid-auto-flow: column;  /* 横向排列 */
        grid-template-columns: 0.1br 0.1br 0.1br 0.1br;  /* 左右两边留白 */
        grid-column-gap: 0px;  /* 列间距 */
        align-items: center;    /* 垂直居中 */
}
  .headBarer.vertical .innerBarer {
  grid-auto-flow: row;
  left: 0%;
  min-width: 10px; /* 现在这个设置会生效 */
  top: 0%;
  padding: 0%;
  width: 100%; /* 相对于父元素的最小宽度 */
  height: 100%;
  gap: 1rem;
  /* 移除过大的内边距，这也可能导致布局问题 */
  padding: 20px 0;
  background-color: #2222226b;
}
    .headBarer{
        position: fixed;
        top: 0%;
        left: 0%;
        height: 10vh;
        width: 100%;
        transition: all 0.5 cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
        z-index: 200;
        
     }
     .headBarer.vertical {
  left: 0% !important;
  top: 0%;
  height: 100%;
  /* 将固定的4vw改为最小宽度，允许扩展 */
  min-width: 10vw;
  max-width: 13vw;
  width: auto; /* 让宽度根据内容自动调整 */
  transform: translateY(-50%);
  padding: 80px 0;
}
    .tn{
    top: -80%;
    position: relative;
    width: 80%;
    height: 20%;
    left: 10%;
    text-align: center;
    justify-content: center;
    font-family: "Aceh SoftRegular","Silk Serif", sans-serif;
    font-weight: clamp(400, 2vw, 600);
    color: rgb(219, 227, 234);
    font-size: clamp(0.8rem, 2vw, 1.5rem);
    transition: all 0.3s ease-in-out;
    z-index: 999999999999;
    }

    
    @media (max-width: 1000px){
      .tn{
    top: -80%;
    width: 20vw;
    height: 5vh;
    left: -33%;
    font-weight: 500;
    font-size: 20px;
    
    }
  }
    @media (max-width: 800px){
      .tn{
    top: -100%;
    width: 20vw;
    height: 5vh;
    left: -40%;
    font-weight: 500;
    font-size: 13px;
    
    }
    

    }
    .teamlogo{
      position: fixed;
      top: -100px;
      left: 20vw;
      height: 20vh;
      width: 12vw;
      margin: 0;
      padding: 0;
      z-index: 201;
      background-color: #adadad4f;
      background-clip: calc(100% - 10px);
      transition: all 0.3s ease-in-out;
      border-radius: 2%;
    }
    .teamLogo{
      position: relative;
      
      left: 0vw;
      height: 100%;
      width: 100%;
      margin: 0;
     
      border-radius: 2%;
    }
    .teamlogo.vertical{
      left: -1%;
      width: 12%;
      height: 10%;
      top: 0%;
      background-color: transparent;
    }
    
    body::-webkit-scrollbar {
  width: 0; /* 隐藏滚动条轨道 */
  background: transparent; /* WebKit 浏览器 */
}
    body{
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        font-family: 'Aceh SoftRegular', 'Microsoft YaHei', sans-serif;
        background-color: #d6d7d4;
        height: 600vh;
    }
    #title1{
    
   
    position: absolute;
    top: 44%;
    left: 0%;
    width: 50%;
    height: 30%;
    
    text-align: center;
    font-weight: bolder;
    font-size: 80px;
    color: #8a8383;
    z-index: 99;
    }
    #title2{
    position: absolute;
    top: 44%;
    left: 13%;
    width: 50%;
    height: 30%;
    
    text-align: center;
    font-weight: bolder;
    font-size: 80px;
    color: #8a8383;
    z-index: 99;
    }
    @media (max-width: 1500px){
      #title1{
    top: 45%;
    font-size: 4rem;
    }
    #title2{
    position: absolute;
    top: 45%;
    left: 16%;
    width: 50%;
    height: 30%;
    font-size: 4rem;
    }
    }
    @media (max-width: 1000px){
      #title1{
    
   
    position: absolute;
    top: 45%;
    left: 0%;
    width: 50%;
    height: 30%;
    
    text-align: center;
    font-weight: bolder;
    font-size: 3rem;
    color: #8a8383;
    z-index: 99;
    }
    #title2{
    position: absolute;
    top: 45%;
    left: 16%;
    width: 50%;
    height: 30%;
    
    text-align: center;
    font-weight: bolder;
    font-size: 3rem;
    color: #8a8383;
    z-index: 99;
    }
    }
    @media (max-width: 800px){
      #title1{
    
   
    position: absolute;
    top: 48%;
    left: 0%;
    width: 50%;
    height: 30%;
    
    text-align: center;
    font-weight: bolder;
    font-size: 2rem;
    color: #8a8383;
    z-index: 99;
    }
    #title2{
    position: absolute;
    top: 48%;
    left: 16%;
    width: 50%;
    height: 30%;
    
    text-align: center;
    font-weight: bolder;
    font-size: 2rem;
    color: #8a8383;
    z-index: 99;
    }
    }
    @media (max-width: 500px){
      #title1{
    
   
    position: absolute;
    top: 50%;
    left: 0%;
    width: 50%;
    height: 30%;
    
    text-align: center;
    font-weight: bolder;
    font-size: 1rem;
    color: #8a8383;
    z-index: 99;
    }
    #title2{
    position: absolute;
    top: 50%;
    left: 30%;
    width: 50%;
    height: 30%;
    
    text-align: center;
    font-weight: bolder;
    font-size: 1rem;
    color: #8a8383;
    z-index: 99;
    }
    }
    #title3{
    
   
    position: absolute;
    top: 60%;
    left: 116%;
    width: 50%;
    height: 30%;
    
    text-align: center;
    font-weight: bolder;
    font-size: 350px;
    color: rgb(47, 64, 79);
    z-index: 99;
    }
    
    .Lbt1{
      position: fixed;
      top: -6vh;
      right: 20%;
      margin: 0;
      padding: 0;
      z-index: 201;
      color: #ffffff;
      
    
    }
    .Lbt1.vertical{
      left:-4vw;
      top: -10%;
      font-size: smaller;
      width: 6%;
      
    }
    @media (max-width: 1500px){
      .Lbt1.vertical{
      left:-8vw;
      top: -10%;
      font-size: smaller;
      width: 6%;
      
    }
    }
    @media (max-width: 1000px){
      .Lbt1.vertical{
      left:-9vw;
      top: -10%;
      font-size: smaller;
      width: 6%;
      
    }
    
    }
    @media (max-width: 735px){
    
      .Lbt1.vertical{
      left:-13vw;
      top: -10%;
      font-size: smaller;
      width: 8%;
      
    }
    
    }
    @media (max-width: 675px){
    
      .Lbt1.vertical{
      left:-15vw;
      top: -10%;
      font-size: smaller;
      width: 8%;
      
    }
    
    }
    
    #picture1{
      position: absolute;
        width: 250px;
        height: 250px;
        overflow: hidden;
        z-index: 10;
        top: 100%;
        left: 2%;
        background-color: #cb5c16;
        border-radius: 10%;
        rotate: 60deg;
        opacity: 0;
        transform: rotate(180deg);
        transform-origin: 500px;
    }
    #picture2{
      position: absolute;
        width: 150px;
        height: 150px;
        overflow: hidden;
        z-index: 10;
        top: 50%;
        left: 75%;
        background-color: #3843e3;
        border-radius: 10%;
        rotate: 25deg;
        scale: 0;
    }
    #picture3{
      position: absolute;
        width: 250px;
        height: 250px;
        overflow: hidden;
        z-index: 10;
        top: -23%;
        left: 75%;
        background-color: #63e338;
        border-radius: 10%;
        rotate: -25deg;
        transform: rotate(150deg);
        transform-origin: 400px;
    }#picture4{
      position: absolute;
        width: 150px;
        height: 150px;
        overflow: hidden;
        z-index: 10;
        top: 20%;
        left: 15%;
        background-color: #e3e038;
        border-radius: 10%;
        rotate: 25deg;
        scale: 0;
    }
    

  </style>