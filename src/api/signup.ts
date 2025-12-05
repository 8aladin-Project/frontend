import axiosInstance from "./axiosInstance";

// 회원가입 요청 타입
export interface SignupRequest {
  name: string;
  email: string;
  password: string;
  mobileNumber: string;
}

// 회원가입 응답 타입
export interface SignupResponse {
  memberId: number;
  name: string;
  email: string;
  message: string;
}

// 회원가입 API
export async function signup(
  signupData: SignupRequest
): Promise<SignupResponse> {
  const response = await axiosInstance.post<SignupResponse>(
    "/api/v1/members/signup",
    signupData
  );
  console.log("요청 URL:", response.config.url);
  console.log("응답 데이터:", response.data);
  console.log("요청 데이터:", signupData);
  return response.data;
}
