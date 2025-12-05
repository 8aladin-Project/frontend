"use client";

import React from "react";
import { Space } from "antd";
import type { SellingItem } from "@/data/profile/sellingItems";
import ItemRow from "@/components/profile/ItemRow";

type ItemListProps = {
  title: string;
  items: SellingItem[];
  onItemClick?: (item: SellingItem) => void;
};

export default function ItemList({ title, items, onItemClick }: ItemListProps) {
  return (
    <div>
      <div className="flex items-center justify-between py-2 text-gray-600">
        <span className="text-base font-bold pl-2">{title}</span>
        <span className="text-base font-semibold pr-2">{items.length}개</span>
      </div>

      {/* antd List 대신 antd Space + 커스텀 Row */}
      <Space
        orientation="vertical" // v6에서 direction 대신 orientation
        size="middle"
        className="w-full"
      >
        {items.map(item => (
          <ItemRow
            key={item.id} // 없으면 다른 고유값 사용
            item={item}
            onClick={onItemClick}
          />
        ))}
      </Space>
    </div>
  );
}
