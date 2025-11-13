"use client";

import React from "react";
import { Tabs } from "antd";
import type { SellingItem } from "@/data/profile/sellingItems";
import ItemList from "@/components/profile/ItemList";
import styles from "./sellingListTabs.module.css";

type SellingListTabsProps = {
  sellingItems: SellingItem[];
  buyingItems?: SellingItem[];
  auctionItems?: SellingItem[];
  className?: string;
  onItemClick?: (item: SellingItem) => void;
  hideBuyTab?: boolean;
};

export default function SellingListTabs({
  sellingItems,
  buyingItems = [],
  auctionItems = [],
  className = "",
  onItemClick,
  hideBuyTab = false,
}: SellingListTabsProps) {
  const tabItems = [
    {
      key: "sell",
      label: <span className="text-[#232323]">판매내역</span>,
      children:
        sellingItems.length > 0 ? (
          <ItemList
            title="판매내역"
            items={sellingItems}
            onItemClick={onItemClick}
          />
        ) : (
          <EmptyBlock text="판매내역이 없습니다." />
        ),
    },
    ...(hideBuyTab
      ? []
      : [
          {
            key: "buy",
            label: "구매내역",
            children:
              buyingItems.length > 0 ? (
                <ItemList
                  title="구매내역"
                  items={buyingItems}
                  onItemClick={onItemClick}
                />
              ) : (
                <EmptyBlock text="구매내역이 없습니다." />
              ),
          },
        ]),
    {
      key: "auction",
      label: "경매내역",
      children:
        auctionItems.length > 0 ? (
          <ItemList
            title="경매내역"
            items={auctionItems}
            onItemClick={onItemClick}
          />
        ) : (
          <EmptyBlock text="경매내역이 없습니다." />
        ),
    },
  ];

  return (
    <section className="mt-4">
      <Tabs
        defaultActiveKey="sell"
        className={`${styles.tabsSpread} ${className} [--ant-tabs-ink-bar-color:#232323] [--ant-tabs-active-color:#232323]`}
        items={tabItems}
      />
    </section>
  );
}

function EmptyBlock({ text }: { text: string }) {
  return <div className="py-10 text-center text-gray-400">{text}</div>;
}
