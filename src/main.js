import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  timeout: 10000
});

// 请求拦截器（修改这里）
service.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; // 使用反引号
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截器
service.interceptors.response.use(response => {
  return response.data;
}, error => {
  if (error.response?.status === 401) {
    router.push('/login');
  }
  return Promise.reject(error);
});




export default service;

createApp(App).mount('#app')
