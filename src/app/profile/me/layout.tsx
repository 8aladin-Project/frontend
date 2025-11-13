import ClientLayout from "@/components/layout/ClientLayout";

export default function ProfileMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientLayout title="내 정보" showHeader={true} showBottomNavigation={true}>
      {children}
    </ClientLayout>
  );
}
