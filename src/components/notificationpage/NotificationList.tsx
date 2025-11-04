"use client";

import { List } from "antd";
import NotificationRow from "./NotificationRow";
import type { Notification } from "@/data/notificationpage/notification";

type NotificationListProps = {
  data: Notification[];
  onItemClick?: (item: Notification) => void;
};

export default function NotificationList({ data, onItemClick }: NotificationListProps) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      split={false}
      renderItem={(item) => <NotificationRow item={item} onClick={onItemClick}/>}
    />
  );
}
