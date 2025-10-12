export default function ChatRoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col">
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
