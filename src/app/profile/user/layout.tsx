import ClientLayout from "@/components/layout/ClientLayout";
import { userProfile } from "@/data/mypage/myProfile";

export default function ProfileUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientLayout
      title={`${userProfile.name}님 프로필`}
      showHeader={true}
      showBottomNavigation={true}
    >
      {children}
    </ClientLayout>
  );
}
