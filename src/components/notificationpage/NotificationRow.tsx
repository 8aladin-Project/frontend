"use client";

import { List, Tag } from "antd";
import type { Notification } from "@/data/notificationpage/notification";

type NotificationRowProps = {
  item: Notification;
  onClick?: (item: Notification) => void;
};

export default function NotificationRow({
  item,
  onClick,
}: NotificationRowProps) {
  return (
    <List.Item
      onClick={() => onClick?.(item)}
      className="flex items-center justify-between "
    >
      <div className="flex">
        <div className="mr-2">
          <img src={item.img_url} className="h-[120px]" />
        </div>
        <div>
          <h3 className="font-semibold mb-4">{item.type}</h3>
          <p className="text-gray-500 text-sm mb-8">{item.content}</p>
          <small className="text-gray-400 text-xs">{item.url}</small>
        </div>
      </div>
      <Tag color={item.isRead ? "default" : "black"}>
        {item.isRead ? "읽음" : "안 읽음"}
      </Tag>
    </List.Item>
  );
}
