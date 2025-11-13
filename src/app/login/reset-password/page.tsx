"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, message } from "antd";
import { LeftOutlined, MailOutlined } from "@ant-design/icons";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("이메일을 입력해주세요.");
      return;
    }

    if (!validateEmail(email)) {
      setError("올바른 이메일 형식이 아닙니다.");
      return;
    }

    console.log("비밀번호 재설정 요청:", email);
    message.success("비밀번호 재설정 이메일이 발송되었습니다.");
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex flex-col">
      {/* 헤더 */}
      <div className="sticky top-0 z-10 flex items-center px-4 py-4 bg-black/50 backdrop-blur-sm">
        <Button
          type="text"
          icon={<LeftOutlined className="text-white text-lg" />}
          onClick={() => router.back()}
          className="!text-white hover:!bg-white/10"
        />
        <h2 className="flex-1 text-center text-lg font-semibold text-white mr-10">
          비밀번호 재설정
        </h2>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex-1 px-6 pt-12 flex flex-col">
        {!isSubmitted ? (
          <>
            {/* 아이콘 */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <MailOutlined className="text-4xl text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                비밀번호를 잊으셨나요?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                가입하신 이메일 주소를 입력해주세요.
                <br />
                비밀번호 재설정 링크를 보내드립니다.
              </p>
            </div>

            {/* 폼 */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="example@email.com"
                  className={`w-full h-14 px-4 bg-gray-800/50 border ${
                    error ? "border-red-500" : "border-gray-700"
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                />
                {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
              </div>

              <button
                type="submit"
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              >
                재설정 링크 보내기
              </button>

              <div className="text-center pt-4">
                <button
                  type="button"
                  onClick={() => router.push("/login")}
                  className="text-sm text-gray-400 hover:text-gray-300"
                >
                  로그인으로 돌아가기
                </button>
              </div>
            </form>
          </>
        ) : (
          /* 성공 메시지 */
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-green-600 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                이메일이 발송되었습니다
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-blue-400 font-semibold">{email}</span>
                <br />
                위 주소로 비밀번호 재설정 링크를 보내드렸습니다.
                <br />
                이메일을 확인해주세요.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-4 text-left">
              <p className="text-gray-400 text-xs leading-relaxed">
                <span className="font-semibold text-gray-300">
                  이메일이 오지 않았나요?
                </span>
                <br />• 스팸 메일함을 확인해주세요
                <br />• 입력하신 이메일 주소가 정확한지 확인해주세요
                <br />• 몇 분 후에 다시 시도해주세요
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full h-14 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-200 border border-gray-700"
              >
                다시 보내기
              </button>

              <button
                onClick={() => router.push("/login")}
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              >
                로그인으로 돌아가기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

