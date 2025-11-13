import ClientLayout from "@/components/layout/ClientLayout";

export default function InterestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientLayout title="관심목록" showHeader={true} showBottomNavigation={true}>
      {children}
    </ClientLayout>
  );
}
