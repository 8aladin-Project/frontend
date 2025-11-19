import ClientLayout from "@/components/layout/ClientLayout";

export default function NotificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientLayout title="알림" showHeader={true} showBackButton={true} showBottomNavigation={true}>
      {children}
    </ClientLayout>
  );
}
