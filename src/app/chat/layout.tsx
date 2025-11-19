// src/app/chat/layout.tsx
// 채팅 목록 레이아웃 컴포넌트.
// ChatEditProvider를 사용하여 Context를 제공하고,
// ChatListHeader를 사용하여 헤더를 렌더링합니다.
// Footer를 사용하여 하단 푸터를 렌더링합니다.

"use client"; // Context Provider를 사용하기 위해 클라이언트 컴포넌트로 전환

// import { SettingOutlined } from "@ant-design/icons";
import { ChatEditProvider } from "./chatEditContext";
import ChatListHeader from "./chatListHeader";
import ClientLayout from "@/components/layout/ClientLayout";

export default function ChatListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientLayout showHeader={false} showBottomNavigation={true}>
      <ChatEditProvider>
        <div className="flex h-full flex-col">
          <ChatListHeader />
          {/* ChatEditProvider와 ChatListHeader 쓰기 전에 사용하던 기존 헤더. 다시 쓰려면 아이콘도 import 해야 함 */}
          {/* <header className="flex flex-row justify-between items-center sticky top-0 z-10 border-b bg-white p-4"> */}
          {/* h1에 기본 marginBottom: 10px이 있어서 초기화 */}

          {/* <h1 className="text-xl font-bold m-0">채팅</h1> */}
          {/* <SettingOutlined /> */}
          {/* </header> */}
          <main className="flex-1 overflow-y-auto pb-16">{children}</main>
        </div>
      </ChatEditProvider>
    </ClientLayout>
  );
}
