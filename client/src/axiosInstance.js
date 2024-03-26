import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://lizard-project-server.vercel.app/', 
  timeout: 1000,
  headers: { 'X-Custom-Header': 'custom value' },
});

export default axiosInstance;
