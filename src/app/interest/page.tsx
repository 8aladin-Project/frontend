"use client";

import React, { useState } from "react";
import { Tabs } from "antd";
import type { InterestItem } from "@/data/interest/interestItems";
import { interestItems } from "@/data/interest/interestItems";
import InterestList from "@/components/interest/InterestList";
import styles from "@/components/mypage/sellingListTabs.module.css";

export default function InterestPage() {
  const [items, setItems] = useState<InterestItem[]>(interestItems);

  // 판매중인 아이템들
  const sellingItems = items.filter(item => item.badge === "판매중");

  // 판매완료된 아이템들
  const soldItems = items.filter(item => item.badge === "판매완료");

  const handleItemClick = (item: InterestItem) => {
    console.log("아이템 클릭:", item);
    // 상품 상세 페이지로 이동하는 로직
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="mt-4 px-4">
        <Tabs
          defaultActiveKey="selling"
          className={`${styles.tabsSpread} [--ant-tabs-ink-bar-color:#232323] [--ant-tabs-active-color:#232323]`}
          items={[
            {
              key: "selling",
              label: <span className="text-[#232323]">판매중</span>,
              children:
                sellingItems.length > 0 ? (
                  <InterestList
                    title="판매중인 상품"
                    items={sellingItems}
                    onItemClick={handleItemClick}
                  />
                ) : (
                  <EmptyBlock text="관심목록에 등록된 판매중인 상품이 없습니다." />
                ),
            },
            {
              key: "sold",
              label: "판매완료",
              children:
                soldItems.length > 0 ? (
                  <InterestList
                    title="판매완료된 상품"
                    items={soldItems}
                    onItemClick={handleItemClick}
                  />
                ) : (
                  <EmptyBlock text="관심목록에 등록된 판매완료된 상품이 없습니다." />
                ),
            },
          ]}
        />
      </section>
    </div>
  );
}

function EmptyBlock({ text }: { text: string }) {
  return <div className="py-10 text-center text-gray-400">{text}</div>;
}
