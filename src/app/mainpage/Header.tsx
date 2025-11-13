"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <div className="sticky top-0 w-full h-[56px] bg-[#232323] z-30 flex justify-between items-center px-4">
      <h1 className="text-xl font-bold text-white leading-none flex items-center m-0">
        팔라딘
      </h1>
      <div className="flex items-center space-x-4">
        {/* 알림 아이콘 */}
        <button
          onClick={() => console.log("알림 페이지")}
          className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label="알림"
        >
          <Image
            src="/mainpage/bell.svg"
            alt="알림"
            width={24}
            height={24}
            className="w-6 h-6 filter brightness-0 invert"
          />
        </button>
        {/* 하트 아이콘 */}
        <button
          onClick={() => console.log("찜 목록")}
          className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label="찜하기"
        >
          <Image
            src="/mainpage/heart.svg"
            alt="찜하기"
            width={24}
            height={24}
            className="w-6 h-6 filter brightness-0 invert"
          />
        </button>
        {/* 사용자 아이콘 - 로그인 페이지로 이동 */}
        <button
          onClick={() => router.push("/login")}
          className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label="로그인"
        >
          <Image
            src="/mainpage/user.svg"
            alt="로그인"
            width={24}
            height={24}
            className="w-6 h-6 filter brightness-0 invert"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
