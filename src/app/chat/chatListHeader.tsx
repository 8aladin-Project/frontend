// src/app/chat/chatListHeader.tsx
// 채팅 목록 헤더 컴포넌트입니다. chatEditContext.tsx 의 isEditMode 상태 값에 따라 일반 모드와 편집 모드를 구분합니다.
// 일반 모드와 편집 모드에 따라 다른 헤더가 동적으로 적용됩니다.(채팅, 아이콘) / (취소, N개 선택)

"use client";

import { useState } from "react";
import {
  SettingOutlined,
  EditOutlined, // 연필 아이콘
} from "@ant-design/icons";
import { useChatEdit } from "./chatEditContext";
import Modal from "@/components/chatpage/Modal";

export default function ChatListHeader() {
  const { isEditMode, toggleEditMode, selectedRoomIds, deleteSelected } =
    useChatEdit();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 채팅 목록 삭제 모달에서 삭제 누를 시 일어날 동작 정의
  const handleConfirmDelete = () => {
    deleteSelected();
    setIsModalOpen(false);
  };

  return (
    <header className="sticky top-0 z-10 flex flex-row items-center justify-between border-b bg-white p-4">
      {!isEditMode ? (
        // 일반 모드 헤더
        <>
          <h1 className="m-0 text-xl font-bold">채팅</h1>
          <div className="flex items-center space-x-4">
            <EditOutlined
              className="text-lg"
              onClick={toggleEditMode} // 연필 클릭 시 편집 모드
            />
            <SettingOutlined className="text-lg" />
          </div>
        </>
      ) : (
        // 편집 모드 헤더
        <>
          <button
            onClick={toggleEditMode} // 취소 버튼
            className="text-base text-gray-700"
          >
            취소
          </button>
          <h1 className="m-0 text-lg font-semibold">
            {selectedRoomIds.size}개 선택
          </h1>
          <button
            onClick={() => setIsModalOpen(true)} // 삭제 버튼 클릭 시 모달 열기. deletedSelected() 를 포함.
            disabled={selectedRoomIds.size === 0} // 선택된 게 없으면 비활성화
            className="text-base font-bold text-red-500 disabled:text-gray-400"
          >
            삭제
          </button>
        </>
      )}
    </header>
  );
}
