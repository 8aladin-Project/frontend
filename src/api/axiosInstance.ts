import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 쿠키를 포함하여 요청 전송
});

// 쿠키에서 accessToken을 읽어오는 유틸리티 함수
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  return null;
}

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  config => {
    // 쿠키에서 accessToken을 읽어서 Authorization 헤더에 추가
    const accessToken = getCookie("accessToken");
    
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    
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
    // 401 에러 처리
    if (error.response?.status === 401) {
      // 인증이 필요한 경우에만 로그인 페이지로 리다이렉트
      // 채팅방 생성 API는 permitAll이므로 여기서 리다이렉트하지 않음
      console.error("인증 오류:", error.response?.data);
      
      // 로그인이 필요한 API에 대해서만 리다이렉트
      // 현재 요청 URL이 인증이 필요하지 않은 엔드포인트인지 확인
      const url = error.config?.url || "";
      const isPublicEndpoint = 
        url.includes("/api/v1/chatrooms") ||
        url.includes("/api/v1/products") ||
        url.includes("/api/v1/images");
      
      // 공개 엔드포인트가 아니고, 로그인 페이지가 아닌 경우에만 리다이렉트
      if (!isPublicEndpoint && typeof window !== "undefined" && !window.location.pathname.startsWith("/login")) {
        // 로그인 페이지로 리다이렉트할 때 현재 URL을 저장
        const currentUrl = window.location.pathname + window.location.search;
        window.location.href = `/login?redirect=${encodeURIComponent(currentUrl)}`;
      }
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;





