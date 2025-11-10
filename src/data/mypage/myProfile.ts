// src/data/mypage/myProfile.ts

export type ProfileStat = { label: string; value: string };

export type ProfileData = {
  name: string;
  verified: boolean;
  location: string;
  initial: string;
  avatarBg?: string;
  avatarColor?: string;
  stats: ProfileStat[];
};

export const myProfile: ProfileData = {
  name: "홍길동",
  verified: true,
  location: "강남구 역삼동",
  initial: "홍",
  avatarBg: "#232323",
  avatarColor: "#fff",
  stats: [
    { label: "평점", value: "4.8" },
    { label: "후기", value: "24" },
    { label: "거래", value: "32" },
    { label: "응답률", value: "95%" },
  ],
};

// 타 유저 프로필 데이터
export const userProfile: ProfileData = {
  name: "김철수",
  verified: true,
  location: "서초구 서초동",
  initial: "김",
  avatarBg: "#4A90E2",
  avatarColor: "#fff",
  stats: [
    { label: "평점", value: "4.9" },
    { label: "후기", value: "38" },
    { label: "거래", value: "45" },
    { label: "응답률", value: "98%" },
  ],
};
