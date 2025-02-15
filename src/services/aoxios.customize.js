import axios from "axios";

// Lấy URL từ biến môi trường hoặc dùng giá trị mặc định
const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'https://api.example.com'
});

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// Add a request interceptor
instance.interceptors.request.use(function (config) { 
  if (typeof window !== "undefined" && window.localStorage?.getItem('access_token')) { 
    config.headers.Authorization = `Bearer ${window.localStorage.getItem('access_token')}`;
  } 
  return config; 
}, function (error) { 
  return Promise.reject(error); 
}); 

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    console.log(">>> check inside response: ", response);
    return response.data?.data || response;
}, function (error) {
    return error.response?.data || Promise.reject(error);
});

export default instance;
