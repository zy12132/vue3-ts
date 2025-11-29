import axios from 'axios';

// console.log('VITE_API_BASE_URL:', import.meta.env.VITE_API_BASE_URL); // 应输出 "/api"
// console.log('VITE_API_TIMEOUT:', import.meta.env.VITE_API_TIMEOUT); // 应输出 "5000"
const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT
});

export default http;