"use client";

import React from "react";
import { List } from "antd";
import type { SellingItem } from "@/data/mypage/sellingItems";
import ItemRow from "@/components/mypage/ItemRow";

type ItemListProps = {
  sellingItems: SellingItem[];
  onItemClick?: (item: SellingItem) => void;
};

export default function ItemList({ sellingItems, onItemClick }: ItemListProps) {
  return (
    <div>
      <div className="flex items-center justify-between py-2 text-gray-600">
        <span className="text-base font-bold pl-2">판매중인 상품</span>
        <span className="text-base font-semibold pr-2">
          {sellingItems.length}개
        </span>
      </div>

      <List
        itemLayout="horizontal"
        dataSource={sellingItems}
        split={false}
        renderItem={item => <ItemRow item={item} onClick={onItemClick} />}
      />
    </div>
  );
}
