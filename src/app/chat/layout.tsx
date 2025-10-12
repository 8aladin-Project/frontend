import Footer from "@/components/layout/Footer";

export default function ChatListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col">
      <header className="sticky top-0 z-10 border-b bg-white p-4">
        <h1 className="text-xl font-bold">채팅</h1>
      </header>
      <main className="flex-1 overflow-y-auto pb-16">{children}</main>
      <Footer />
    </div>
  );
}
