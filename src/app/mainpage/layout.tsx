import ClientLayout from "@/components/layout/ClientLayout";

export default function MainPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientLayout showHeader={false} showBottomNavigation={true}>
      {children}
    </ClientLayout>
  );
}
