// src/data/myProfile.ts

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
