"use client";

import React, { memo } from "react";
import { Card, Tag, Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import type { InterestItem } from "@/data/interest/interestItems";

type InterestItemRowProps = {
  item: InterestItem;
  onItemClick?: (item: InterestItem) => void;
  onRemoveInterest?: (item: InterestItem) => void;
};

function InterestItemRowBase({
  item,
  onItemClick,
  onRemoveInterest,
}: InterestItemRowProps) {
  const handleRowClick = () => {
    if (onItemClick) onItemClick(item);
  };

  const handleRemoveClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation(); // 카드 클릭 이벤트와 분리
    if (onRemoveInterest) onRemoveInterest(item);
  };

  return (
    <Card
      className="rounded-xl hover:shadow-sm transition-shadow cursor-pointer"
      bordered
      onClick={onItemClick ? handleRowClick : undefined}
      style={{ padding: 6 }}
    >
      <div className="w-full">
        <div className="flex items-stretch gap-3">
          {/* 왼쪽 이모지 박스 */}
          <div className="flex aspect-square h-full min-h-[80px] items-center justify-center rounded-xl bg-gray-50 text-2xl shrink-0 mr-4">
            {item.emoji}
          </div>

          {/* 가운데 텍스트 영역 */}
          <div className="flex flex-col justify-center flex-1 pt-1">
            <span className="text-[15px] font-semibold">{item.title}</span>
            <span className="mt-1 text-[18px] font-extrabold">
              {item.price}
            </span>
            <div className="mt-2 flex items-center gap-2">
              <Tag color="success" className="!rounded-full !px-2 !py-0.5">
                {item.badge}
              </Tag>
              <span className="text-sm text-gray-500">{item.meta}</span>
            </div>
          </div>

          {/* 오른쪽 액션 버튼 */}
          {onRemoveInterest && (
            <div className="flex items-start">
              <Button
                type="text"
                icon={<HeartOutlined />}
                onClick={handleRemoveClick}
                className="text-red-500"
              >
                해제
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export default memo(InterestItemRowBase);
