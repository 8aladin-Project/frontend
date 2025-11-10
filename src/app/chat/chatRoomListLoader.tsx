// src/app/chat/chatRoomListLoader.tsx
// 채팅 목록 로더 컴포넌트.
// 서버 컴포넌트(page)에서 받은 데이터를
// 클라이언트 Context 상태로 로드하는 "브릿지" 역할의 컴포넌트

"use client";

import { useEffect } from "react";
import { useChatEdit } from "./chatEditContext";
import ChatRoomList from "./chatRoomList"; // 5단계의 목록 컴포넌트

// page.tsx의 Room 타입을 가져옵니다
type Room = {
  id: string;
  userName: string;
  productImage: string;
  lastMessage: string;
  productName: string;
  price: number;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
};

// 서버 컴포넌트(page)에서 받은 데이터를
// 클라이언트 Context 상태로 로드하는 "브릿지" 역할의 컴포넌트
export default function ChatRoomListLoader({
  initialRooms,
}: {
  initialRooms: Room[];
}) {
  const { loadRooms } = useChatEdit();

  // 서버에서 받은 데이터를 Context 상태에 한 번 로드합니다.
  useEffect(() => {
    loadRooms(initialRooms);
  }, [initialRooms, loadRooms]);

  // 실제 목록 렌더링은 ChatRoomList가 Context 데이터를 기반으로 수행
  return <ChatRoomList />;
}
