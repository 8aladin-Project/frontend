"use client";

import React from "react";

import ProfileSection from "@/components/profile/ProfileSection";
import { sellingItems } from "@/data/profile/sellingItems";
import SellingListTabs from "@/components/profile/SellingListTabs";
import { userProfile } from "@/data/profile/myProfile";

export default function UserProfile() {
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
