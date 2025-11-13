"use client";

import NotificationList from "@/components/notificationpage/NotificationList";
import type { Notification } from "@/data/notificationpage/notification";
import {notifications} from "@/data/notificationpage/notification";
import { useRouter } from "next/navigation";



export default function NotificationPage() {
  const router = useRouter();
  const handleNotificationClick = (item: Notification) => {
    router.push(item.url);
  };

  return (
    <div className="max-w-xl mx-auto max-h-md mt-10 ">
      <NotificationList data={notifications} onItemClick={handleNotificationClick}/>
    </div>
  )
}
