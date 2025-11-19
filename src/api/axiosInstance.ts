import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  config => {
    // 필요시 토큰 추가 등의 로직
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // 에러 처리 로직
    return Promise.reject(error);
  }
);

export default axiosInstance;




