import Footer from "@/components/layout/Footer";
import { SettingOutlined } from "@ant-design/icons";

export default function ChatListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col">
      <header className="flex flex-row justify-between align=items sticky top-0 z-10 border-b bg-white p-4">
        {/* h1에 기본 marginBottom: 10px이 있어서 초기화 */}
        <h1 className="text-xl font-bold m-0">채팅</h1>
        <SettingOutlined />
      </header>
      <main className="flex-1 overflow-y-auto pb-16">{children}</main>
      <Footer />
    </div>
  );
}
