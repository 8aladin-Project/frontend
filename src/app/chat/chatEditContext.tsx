// src/app/chat/chatEditContext.tsx
// '편집 모드' 여부, 선택된 항목, 목록 데이터, 관련 로직(토글, 삭제 등)을 관리하는 Context를 정의하는 파일입니다.

"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// page.tsx의 Room 타입을 가져옵니다 (별도 types 파일로 분리하는 것이 이상적)
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

// Context가 제공할 값들의 타입
type ChatEditContextType = {
  isEditMode: boolean;
  toggleEditMode: () => void;
  selectedRoomIds: Set<string>;
  toggleRoomSelection: (id: string) => void;
  clientRooms: Room[];
  loadRooms: (rooms: Room[]) => void;
  deleteSelected: () => void;
};

// Context 생성 (기본값은 undefined로 설정)
const ChatEditContext = createContext<ChatEditContextType | undefined>(
  undefined
);

// Context Provider 컴포넌트
export function ChatEditProvider({ children }: { children: ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedRoomIds, setSelectedRoomIds] = useState(new Set<string>());
  const [clientRooms, setClientRooms] = useState<Room[]>([]);

  // 서버에서 로드한 방 목록을 client state로 설정
  const loadRooms = (rooms: Room[]) => {
    setClientRooms(rooms);
  };

  // 편집 모드 토글. 모드가 꺼지면 선택 목록 초기화
  const toggleEditMode = () => {
    setIsEditMode(prev => !prev);
    setSelectedRoomIds(new Set()); // 편집 모드 종료 시 선택 해제
  };

  // 특정 방 선택/해제 토글
  const toggleRoomSelection = (id: string) => {
    setSelectedRoomIds(prevSet => {
      const newSet = new Set(prevSet);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // 선택된 방 삭제 (클라이언트 상태에서만)
  const deleteSelected = () => {
    setClientRooms(prevRooms =>
      prevRooms.filter(room => !selectedRoomIds.has(room.id))
    );
    setSelectedRoomIds(new Set()); // 선택 목록 비우기
    setIsEditMode(false); // 편집 모드 종료
  };

  const value = {
    isEditMode,
    toggleEditMode,
    selectedRoomIds,
    toggleRoomSelection,
    clientRooms,
    loadRooms,
    deleteSelected,
  };

  return (
    <ChatEditContext.Provider value={value}>
      {children}
    </ChatEditContext.Provider>
  );
}

// Context를 쉽게 사용하기 위한 Custom Hook
export function useChatEdit() {
  const context = useContext(ChatEditContext);
  if (context === undefined) {
    throw new Error("useChatEdit must be used within a ChatEditProvider");
  }
  return context;
}
