"use client";

import React from "react";
import { useRouter } from "next/navigation";

// 백엔드 API URL (환경 변수에서 가져오거나 프로덕션 기본값 사용)
const BACKEND_API_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.8aladin.shop";

export default function LoginPage() {
  const router = useRouter();

  const handleKakaoLogin = () => {
    try {
      if (typeof window === "undefined") {
        throw new Error(
          "브라우저 환경에서만 카카오 로그인을 사용할 수 있습니다."
        );
      }

      // 리다이렉트할 프론트엔드 URL (성공 후 돌아올 페이지)
      const redirectUrl = encodeURIComponent(
        `${window.location.origin}/mainpage`
      );

      // 백엔드의 OAuth2 인증 엔드포인트로 리다이렉트
      // next 파라미터로 성공 후 리다이렉트할 URL 전달
      const oauth2Url = `${BACKEND_API_URL}/oauth2/authorization/kakao?next=${redirectUrl}`;

      window.location.href = oauth2Url;
    } catch (error) {
      console.error(error);
      alert("카카오 로그인 설정이 올바르지 않습니다. 관리자에게 문의해주세요.");
    }
  };

  const handleGoogleLogin = () => {
    console.log("구글 로그인 시작");
    // TODO: 구글 OAuth 연동
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex flex-col">
      {/* 상단 영역 - 로고 및 타이틀 */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-10">
        <div className="text-center mb-12">
          {/* 로고 영역 */}
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <span className="text-white text-4xl font-bold">8</span>
            </div>
          </div>

          {/* 타이틀 */}
          <h1 className="text-4xl font-bold text-white mb-3">8aladin</h1>
          <p className="text-gray-400 text-lg">안전하고 편리한 중고거래</p>
        </div>

        {/* 설명 텍스트 */}
        <div className="text-center space-y-2 mb-8">
          <p className="text-gray-300 text-sm">간편하게 로그인하고</p>
          <p className="text-gray-300 text-sm">다양한 중고 상품을 만나보세요</p>
        </div>
      </div>

      {/* 하단 영역 - 로그인 버튼 */}
      <div className="px-6 pb-12 space-y-4">
        {/* 카카오 로그인 버튼 */}
        <button
          onClick={handleKakaoLogin}
          className="w-full h-14 bg-[#FEE500] hover:bg-[#FDD835] text-[#000000] font-semibold rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="flex items-center justify-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.477 0 0 3.58 0 8c0 2.745 1.777 5.157 4.448 6.578-.186.72-.7 2.59-.81 3.003-.13.49.18.483.379.351.156-.104 2.545-1.75 3.506-2.407A11.55 11.55 0 0 0 10 16c5.523 0 10-3.58 10-8s-4.477-8-10-8Z"
                fill="#000"
              />
            </svg>
            <span>카카오로 시작하기</span>
          </div>
        </button>

        {/* 구글 로그인 버튼 */}
        <button
          onClick={handleGoogleLogin}
          className="w-full h-14 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="flex items-center justify-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.805 10.227c0-.709-.064-1.39-.182-2.045H10.1v3.868h5.438a4.648 4.648 0 0 1-2.016 3.049v2.508h3.265c1.91-1.759 3.018-4.35 3.018-7.38Z"
                fill="#4285F4"
              />
              <path
                d="M10.1 20c2.73 0 5.018-.904 6.691-2.453l-3.264-2.509c-.905.609-2.064.968-3.427.968-2.636 0-4.868-1.781-5.664-4.173H1.064v2.59A9.996 9.996 0 0 0 10.1 20Z"
                fill="#34A853"
              />
              <path
                d="M4.436 11.833A6.006 6.006 0 0 1 4.123 10c0-.636.113-1.254.313-1.833V5.577H1.064A9.996 9.996 0 0 0 0 10c0 1.614.386 3.14 1.064 4.423l3.372-2.59Z"
                fill="#FBBC04"
              />
              <path
                d="M10.1 3.994c1.486 0 2.82.51 3.868 1.513l2.9-2.9C15.113.972 12.826 0 10.1 0A9.996 9.996 0 0 0 1.064 5.577l3.372 2.59c.796-2.392 3.028-4.173 5.664-4.173Z"
                fill="#EA4335"
              />
            </svg>
            <span>구글로 시작하기</span>
          </div>
        </button>

        {/* 구분선 */}
        <div className="flex items-center gap-4 py-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="text-gray-500 text-sm">또는</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* 이메일 로그인 버튼 */}
        <button
          onClick={() => router.push("/login/email")}
          className="w-full h-14 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] border border-gray-700"
        >
          이메일로 로그인
        </button>

        {/* 회원가입 링크 */}
        <div className="text-center pt-4">
          <p className="text-gray-400 text-sm">
            아직 회원이 아니신가요?{" "}
            <button
              onClick={() => router.push("/signup")}
              className="text-blue-400 hover:text-blue-300 font-semibold underline"
            >
              회원가입
            </button>
          </p>
        </div>

        {/* 약관 동의 */}
        <div className="text-center pt-6">
          <p className="text-gray-500 text-xs leading-relaxed">
            로그인 시{" "}
            <button className="text-gray-400 underline hover:text-gray-300">
              이용약관
            </button>
            과{" "}
            <button className="text-gray-400 underline hover:text-gray-300">
              개인정보처리방침
            </button>
            에<br />
            동의하는 것으로 간주됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
