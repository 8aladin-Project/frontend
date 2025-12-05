"use client";

import React, { memo } from "react";
import { Card, Tag } from "antd";
import type { SellingItem } from "@/data/profile/sellingItems";

type ItemRowProps = {
  item: SellingItem;
  onClick?: (item: SellingItem) => void;
};

function ItemRowBase({ item, onClick }: ItemRowProps) {
  const handleClick = () => {
    if (onClick) onClick(item);
  };

  return (
    <Card
      hoverable
      onClick={onClick ? handleClick : undefined}
      className="rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
      style={{ padding: 6 }} // antd body padding 커스텀
    >
      <div className="flex items-stretch gap-3">
        {/* 이모지 영역 */}
        <div className="flex aspect-square h-full min-h-[80px] items-center justify-center rounded-xl bg-gray-50 text-2xl shrink-0 mr-4">
          {item.emoji}
        </div>

        {/* 텍스트 영역 */}
        <div className="flex flex-col justify-center flex-1 pt-1">
          <span className="text-[15px] font-semibold">{item.title}</span>
          <span className="mt-1 text-[18px] font-extrabold">{item.price}</span>
          <div className="mt-2 flex items-center gap-2">
            <Tag color="success" className="!rounded-full !px-2 !py-0.5">
              {item.badge}
            </Tag>
            <span className="text-sm text-gray-500">{item.meta}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default memo(ItemRowBase);
