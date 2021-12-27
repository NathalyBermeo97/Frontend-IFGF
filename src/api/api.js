import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: false,
});

if(typeof window !== 'undefined'){
  api.defaults.headers.common['x-access-token'] = window.localStorage.getItem('jwt')
}

export default api;
