"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNavigationBar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/mainpage",
      icon: "/mainpage/house.svg",
      alt: "홈",
      label: "홈",
    },
    {
      href: null, // 검색은 라우터 없음
      icon: "/mainpage/magnifying-glass.svg",
      alt: "검색",
      label: "검색",
    },
    {
      href: "/register",
      icon: "/mainpage/plus.svg",
      alt: "등록",
      label: "등록",
    },
    {
      href: "/chat",
      icon: "/mainpage/chat.svg",
      alt: "채팅",
      label: "채팅",
    },
    {
      href: "/profile/me",
      icon: "/mainpage/user.svg",
      alt: "마이페이지",
      label: "마이페이지",
    },
  ];

  return (
    <div className="bottom-0 w-full z-30 sticky ">
      <div className="max-w-[600px] mx-auto bg-white border-t border-gray-200">
        <div className="flex justify-around items-center py-2 px-4">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;

            // 라우터가 없는 경우 (검색)
            if (!item.href) {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center py-2 cursor-default"
                >
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={24}
                    height={24}
                    className="w-6 h-6 mb-1 opacity-70"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(14%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0.14) contrast(100%)",
                    }}
                  />
                  <span className="text-xs text-[#232323]">{item.label}</span>
                </div>
              );
            }

            // 라우터가 있는 경우
            return (
              <Link
                key={index}
                href={item.href}
                className="flex flex-col items-center py-2"
              >
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={24}
                  height={24}
                  className={`w-6 h-6 mb-1 ${isActive ? "" : "opacity-70"}`}
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(14%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0.14) contrast(100%)",
                  }}
                />
                <span
                  className={`text-xs text-[#232323] ${isActive ? "font-medium" : ""}`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigationBar;
