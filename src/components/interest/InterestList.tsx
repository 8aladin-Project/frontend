"use client";

import React from "react";
import { List } from "antd";
import type { InterestItem } from "@/data/interest/interestItems";
import InterestItemRow from "@/components/interest/InterestItemRow";

type InterestListProps = {
  title: string;
  items: InterestItem[];
  onItemClick?: (item: InterestItem) => void;
  onRemoveInterest?: (item: InterestItem) => void;
};

export default function InterestList({
  title,
  items,
  onItemClick,
  onRemoveInterest,
}: InterestListProps) {
  return (
    <div>
      <div className="flex items-center justify-between py-2 text-gray-600">
        <span className="text-base font-bold pl-2">{title}</span>
        <span className="text-base font-semibold pr-2">{items.length}개</span>
      </div>

      <List
        itemLayout="horizontal"
        dataSource={items}
        split={false}
        renderItem={item => (
          <InterestItemRow
            item={item}
            // onClick={onItemClick}
            onRemoveInterest={onRemoveInterest}
          />
        )}
      />
    </div>
  );
}
