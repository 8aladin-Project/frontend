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
import { userProfile } from "@/data/mypage/myProfile";

export default function MyPage() {
  return (
    <div className="min-h-full bg-white px-4">
      {/* 프로필 */}
      <ProfileSection profile={userProfile} showEditIcon={false} />

      {/* 탭 + 리스트 */}
      <SellingListTabs
        sellingItems={sellingItems}
        hideBuyTab={true}
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
