// src/app/chat/chatRoomList.tsx
// 채팅 목록 컴포넌트.
//  chatEditContext.tsx 의 clientRooms, isEditMode, selectedRoomIds, toggleRoomSelection 상태 값에 따라 동적으로 렌더링됩니다.
// 편집 모드일 때는 체크박스를 표시하고, 선택 시 배경색을 변경합니다.
// 편집 모드가 아니면 기본 모드와 동일하게 렌더링됩니다.

"use client";

import Link from "next/link";
import Image from "next/image";
import { useChatEdit } from "./chatEditContext";

export default function ChatRoomList() {
  const { clientRooms, isEditMode, selectedRoomIds, toggleRoomSelection } =
    useChatEdit();

  //  편집 모드일 때 Link 이동을 막고 선택을 토글하는 핸들러
  const handleClickItem = (
    e: React.MouseEvent<HTMLAnchorElement>,
    roomId: string
  ) => {
    if (isEditMode) {
      e.preventDefault(); // Link의 페이지 이동을 막습니다.
      toggleRoomSelection(roomId); // 선택 토글
    }
    // 편집 모드가 아니면 Link는 기본 동작(페이지 이동)을 수행합니다.
  };

  return (
    <main className="flex-1 overflow-y-auto">
      <ul>
        {clientRooms.map(room => (
          <li
            key={room.id}
            className={`border-b ${
              isEditMode ? "hover:bg-blue-50" : "hover:bg-gray-50"
            } ${
              selectedRoomIds.has(room.id) ? "bg-blue-100" : "" // 선택 시 배경색
            }`}
          >
            <Link
              href={`/chat/${room.id}`}
              className="flex space-x-4 p-4"
              onClick={e => handleClickItem(e, room.id)}
            >
              {/* 편집 모드일 때 체크박스 표시 */}
              {isEditMode && (
                <div className="flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={selectedRoomIds.has(room.id)}
                    // onChange는 부모 Link의 onClick으로 처리되므로
                    // readOnly={true}를 사용합니다.
                    readOnly
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
              )}

              {/* 상품 이미지 */}
              <div className="relative h-14 w-14 flex-shrink-0">
                <Image
                  src={room.productImage}
                  alt={room.productName}
                  width={56}
                  height={56}
                  className="rounded-md object-cover"
                />
                {room.isOnline && (
                  <span className="absolute -bottom-1 -right-1 block h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                )}
              </div>

              {/* 채팅 정보 */}
              <div className="flex-1 overflow-hidden">
                <p className="font-semibold text-gray-800">{room.userName}</p>
                <p className="truncate text-sm text-gray-600">
                  {room.lastMessage}
                </p>
                <p className="mt-1 truncate text-xs text-gray-400">
                  {room.productName} &middot; {room.price.toLocaleString()}원
                </p>
              </div>

              {/* 시간 및 안 읽은 메시지 */}
              <div className="flex flex-col items-end space-y-1 text-xs text-gray-400">
                <p>{room.timestamp}</p>
                {room.unreadCount > 0 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {room.unreadCount}
                  </span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
