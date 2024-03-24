import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://lizard-project-server-1gktrtdg3.vercel.app', 
});

export default axiosInstance;
