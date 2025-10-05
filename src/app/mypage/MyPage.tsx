"use client";

import React from "react";
import { Typography, Badge } from "antd";
import {
  HeartOutlined,
  StarOutlined,
  SafetyOutlined,
  CreditCardOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

import ProfileSection from "@/components/mypage/ProfileSection";
import { sellingItems, type SellingItem } from "@/data/mypage/sellingItems";
import SellingListTabs from "@/components/mypage/SellingListTabs";
import { myProfile } from "@/data/mypage/myProfile";

export default function MyPage() {
  return (
    <div className="min-h-full bg-white px-4">
      {/* 프로필 */}
      <ProfileSection profile={myProfile} />

      {/* 바로가기 아이콘 그리드 */}
      <section className="mt-4">
        <div className="grid grid-cols-3 gap-y-6 rounded-2xl border border-gray-100 p-5 shadow-sm">
          <Shortcut icon={<HeartOutlined />} label="관심목록" />
          <Shortcut icon={<StarOutlined />} label="내 후기" />
          <Shortcut icon={<SafetyOutlined />} label="지역 인증" />
          <Shortcut icon={<CreditCardOutlined />} label="판매수익" />
          <Shortcut icon={<SettingOutlined />} label="설정" />
          <Shortcut icon={<CustomerServiceOutlined />} label="고객센터" />
        </div>
      </section>

      {/* 탭 + 리스트 */}
      <SellingListTabs
        sellingItems={sellingItems}
        onItemClick={item => {
          // 예: 상세 페이지 이동 등
          // router.push(`/items/${item.id}`);
        }}
      />
    </div>
  );
}

function Shortcut({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <Badge count={0} size="small">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-700">
          {icon}
        </div>
      </Badge>
      <div className="mt-2 text-[13px] text-gray-600">{label}</div>
    </div>
  );
}
