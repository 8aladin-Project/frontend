"use client";

import React, { memo } from "react";
import { List, Tag } from "antd";
import type { SellingItem } from "@/data/profile/sellingItems";

type ItemRowProps = {
  item: SellingItem;
  onClick?: (item: SellingItem) => void;
};

function ItemRowBase({ item, onClick }: ItemRowProps) {
  return (
    <List.Item
      className="mb-3 rounded-xl border hover:shadow-sm transition-shadow"
      onClick={onClick ? () => onClick(item) : undefined}
    >
      <div className="w-full px-3 py-3">
        <div className="flex items-stretch gap-3">
          <div className="flex aspect-square h-full min-h-[80px] items-center justify-center rounded-xl bg-gray-50 text-2xl shrink-0">
            {item.emoji}
          </div>

          <div className="flex flex-col justify-center flex-1">
            <span className="text-[17px] font-semibold">{item.title}</span>
            <span className="mt-1 text-[20px] font-extrabold">
              {item.price}
            </span>
            <div className="mt-2 flex items-center gap-2">
              <Tag color="success" className="!rounded-full !px-2 !py-0.5">
                {item.badge}
              </Tag>
              <span className="text-sm text-gray-500">{item.meta}</span>
            </div>
          </div>
        </div>
      </div>
    </List.Item>
  );
}

export default memo(ItemRowBase);
