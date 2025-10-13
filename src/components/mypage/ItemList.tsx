"use client";

import React from "react";
import { List } from "antd";
import type { SellingItem } from "@/data/mypage/sellingItems";
import ItemRow from "@/components/mypage/ItemRow";

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
        <span className="text-base font-semibold pr-2">
          {items.length}개
        </span>
      </div>

      <List
        itemLayout="horizontal"
        dataSource={items}
        split={false}
        renderItem={item => <ItemRow item={item} onClick={onItemClick} />}
      />
    </div>
  );
}
