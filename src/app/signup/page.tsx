"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Checkbox, message } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { signup } from "@/api/signup";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",
    name: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",
    name: "",
  });
  const [agreements, setAgreements] = useState({
    termsOfService: false,
    privacyPolicy: false,
    marketing: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    const regex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/;
    return regex.test(phone);
  };

  const validatePassword = (password: string) => {
    // 최소 8자 이상
    if (password.length < 8) {
      return false;
    }
    // 영문 포함
    const hasLetter = /[a-zA-Z]/.test(password);
    // 숫자 포함
    const hasNumber = /[0-9]/.test(password);
    // 특수문자 포함
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
      password
    );

    return hasLetter && hasNumber && hasSpecialChar;
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log("회원가입 시도:", { ...formData, agreements });
    e.preventDefault();

    const newErrors = {
      email: "",
      password: "",
      passwordConfirm: "",
      phone: "",
      name: "",
    };

    if (!formData.email) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }

    if (!formData.password) {
      newErrors.password = "비밀번호를 입력해주세요.";
    } else if (!validatePassword(formData.password)) {
      newErrors.password =
        "비밀번호는 최소 8자 이상이며, 영문, 숫자, 특수문자를 포함해야 합니다.";
    }

    if (!formData.passwordConfirm) {
      newErrors.passwordConfirm = "비밀번호 확인을 입력해주세요.";
    } else if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
    }
    if (!formData.name) {
      newErrors.name = "이름을 입력해주세요.";
    } else if (formData.name.length < 2) {
      newErrors.name = "이름은 2자 이상이어야 합니다.";
    }

    if (!formData.phone) {
      newErrors.phone = "휴대폰 번호를 입력해주세요.";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "올바른 휴대폰 번호 형식이 아닙니다.";
    }

    setErrors(newErrors);

    if (!agreements.termsOfService || !agreements.privacyPolicy) {
      message.error("필수 약관에 동의해주세요.");
      return;
    }

    if (Object.values(newErrors).every(error => !error)) {
      handleSignup();
    }
  };

  const handleSignup = async () => {
    setIsLoading(true);
    try {
      console.log("회원가입 시도(handleSignup):", { ...formData, agreements });
      await signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        mobileNumber: formData.phone,
      });
      message.success("회원가입이 완료되었습니다!");
      router.push("/login/email");
    } catch (error: any) {
      console.error("회원가입 실패:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "회원가입에 실패했습니다. 다시 시도해주세요.";
      message.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const allAgreed =
    agreements.termsOfService &&
    agreements.privacyPolicy &&
    agreements.marketing;

  const handleAllAgree = (checked: boolean) => {
    setAgreements({
      termsOfService: checked,
      privacyPolicy: checked,
      marketing: checked,
    });
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
          회원가입
        </h2>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex-1 px-6 pt-8 pb-12 overflow-y-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 이메일 */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              이메일 <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={e => handleChange("email", e.target.value)}
              placeholder="example@email.com"
              className={`w-full h-14 px-4 bg-gray-800/50 border ${
                errors.email ? "border-red-500" : "border-gray-700"
              } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          {/* 비밀번호 */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              비밀번호 <span className="text-red-400">*</span>
            </label>
            {(() => {
              const hasPassword = formData.password.length > 0;
              const isValidPassword =
                hasPassword && validatePassword(formData.password);
              const getBorderColor = () => {
                if (errors.password) return "#ef4444";
                if (isValidPassword) return "#3b82f6";
                if (hasPassword) return "#ef4444";
                return "#374151";
              };

              return (
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={e => handleChange("password", e.target.value)}
                  placeholder="8자 이상 입력해주세요"
                  style={{
                    width: "100%",
                    height: "3.5rem",
                    padding: "0 1rem",
                    backgroundColor: "rgba(31, 41, 55, 0.5)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: getBorderColor(),
                    borderRadius: "0.75rem",
                    color: "#ffffff",
                    outline: "none",
                    transition: "all 0.2s",
                  }}
                  className="!w-full !h-14 !px-4 !bg-gray-800/50 !border !rounded-xl !text-white placeholder-gray-500 !focus:outline-none focus:ring-2 focus:ring-blue-500 !focus:border-transparent !transition-all"
                  onFocus={e => {
                    const borderColor = isValidPassword
                      ? "#3b82f6"
                      : hasPassword
                        ? "#ef4444"
                        : "#3b82f6";
                    e.target.style.borderColor = borderColor;
                    e.target.style.boxShadow =
                      "0 0 0 2px rgba(59, 130, 246, 0.5)";
                  }}
                  onBlur={e => {
                    e.target.style.boxShadow = "none";
                    e.target.style.borderColor = getBorderColor();
                  }}
                />
              );
            })()}
            <p className="mt-2 text-sm text-gray-400">
              비밀번호는 최소 8자 이상이며, 영문, 숫자, 특수문자를 포함해야
              합니다
            </p>
            {errors.password && (
              <p className="mt-2 text-sm text-red-400">{errors.password}</p>
            )}
          </div>

          {/* 비밀번호 확인 */}
          <div>
            <label
              htmlFor="passwordConfirm"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              비밀번호 확인 <span className="text-red-400">*</span>
            </label>
            <input
              type="password"
              id="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={e => handleChange("passwordConfirm", e.target.value)}
              placeholder="비밀번호를 다시 입력해주세요"
              className={`w-full h-14 px-4 bg-gray-800/50 border ${
                errors.passwordConfirm ? "border-red-500" : "border-gray-700"
              } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            />
            {errors.passwordConfirm && (
              <p className="mt-2 text-sm text-red-400">
                {errors.passwordConfirm}
              </p>
            )}
          </div>
          {/* 이름 */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              이름 <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={e => handleChange("name", e.target.value)}
              placeholder="이름을 입력해주세요"
              className={`w-full h-14 px-4 bg-gray-800/50 border ${
                errors.name ? "border-red-500" : "border-gray-700"
              } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-400">{errors.name}</p>
            )}
          </div>

          {/* 휴대폰 번호 */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              휴대폰 번호 <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={e => handleChange("phone", e.target.value)}
              placeholder="010-1234-5678"
              className={`w-full h-14 px-4 bg-gray-800/50 border ${
                errors.phone ? "border-red-500" : "border-gray-700"
              } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
            )}
          </div>

          {/* 약관 동의 */}
          <div className="pt-4 space-y-4">
            <div className="pb-3 border-b border-gray-700">
              <Checkbox
                checked={allAgreed}
                onChange={e => handleAllAgree(e.target.checked)}
                className="text-white [&_.ant-checkbox]:!bg-gray-800/50 [&_.ant-checkbox]:!border-gray-600"
              >
                <span className="text-gray-300 font-semibold">
                  전체 동의하기
                </span>
              </Checkbox>
            </div>

            <div className="space-y-3">
              <Checkbox
                checked={agreements.termsOfService}
                onChange={e =>
                  setAgreements(prev => ({
                    ...prev,
                    termsOfService: e.target.checked,
                  }))
                }
                className="text-white [&_.ant-checkbox]:!bg-gray-800/50 [&_.ant-checkbox]:!border-gray-600"
              >
                <span className="text-gray-400 text-sm">
                  <span className="text-red-400">(필수)</span> 이용약관 동의
                </span>
              </Checkbox>

              <Checkbox
                checked={agreements.privacyPolicy}
                onChange={e =>
                  setAgreements(prev => ({
                    ...prev,
                    privacyPolicy: e.target.checked,
                  }))
                }
                className="text-white [&_.ant-checkbox]:!bg-gray-800/50 [&_.ant-checkbox]:!border-gray-600"
              >
                <span className="text-gray-400 text-sm">
                  <span className="text-red-400">(필수)</span> 개인정보 처리방침
                  동의
                </span>
              </Checkbox>

              <Checkbox
                checked={agreements.marketing}
                onChange={e =>
                  setAgreements(prev => ({
                    ...prev,
                    marketing: e.target.checked,
                  }))
                }
                className="text-white [&_.ant-checkbox]:!bg-gray-800/50 [&_.ant-checkbox]:!border-gray-600"
              >
                <span className="text-gray-400 text-sm">
                  (선택) 마케팅 정보 수신 동의
                </span>
              </Checkbox>
            </div>
          </div>

          {/* 회원가입 버튼 */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-14 ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] mt-8`}
          >
            {isLoading ? "처리 중..." : "회원가입"}
          </button>

          {/* 로그인 링크 */}
          <div className="text-center pt-4 pb-8">
            <p className="text-gray-400 text-sm">
              이미 회원이신가요?{" "}
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="text-blue-400 hover:text-blue-300 font-semibold underline"
              >
                로그인
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
