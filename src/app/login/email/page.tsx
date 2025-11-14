"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";

export default function EmailLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = { email: "", password: "" };
    
    if (!email) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!validateEmail(email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }
    
    if (!password) {
      newErrors.password = "비밀번호를 입력해주세요.";
    } else if (password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상이어야 합니다.";
    }
    
    setErrors(newErrors);
    
    if (!newErrors.email && !newErrors.password) {
      console.log("로그인 시도:", { email, password });
      // TODO: 실제 로그인 API 호출
    }
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
          이메일 로그인
        </h2>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex-1 px-6 pt-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 이메일 입력 */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              이메일
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className={`w-full h-14 px-4 bg-gray-800/50 border ${
                errors.email ? "border-red-500" : "border-gray-700"
              } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          {/* 비밀번호 입력 */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="8자 이상 입력해주세요"
              className={`w-full h-14 px-4 bg-gray-800/50 border ${
                errors.password ? "border-red-500" : "border-gray-700"
              } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-400">{errors.password}</p>
            )}
          </div>

          {/* 비밀번호 찾기 */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => router.push("/login/reset-password")}
              className="text-sm text-gray-400 hover:text-gray-300"
            >
              비밀번호를 잊으셨나요?
            </button>
          </div>

          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
          >
            로그인
          </button>

          {/* 회원가입 링크 */}
          <div className="text-center pt-4">
            <p className="text-gray-400 text-sm">
              아직 회원이 아니신가요?{" "}
              <button
                type="button"
                onClick={() => router.push("/signup")}
                className="text-blue-400 hover:text-blue-300 font-semibold underline"
              >
                회원가입
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

