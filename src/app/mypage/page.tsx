// app/mypage/page.tsx
import Header from "./Header";
import BottomNav from "./BottomNav";
import MyPage from "./MyPage";

export default function Page() {
  return (
    <div
      className="shell" /* style={{ ['--header-h' as any]:'56px', ['--bottom-h' as any]:'64px' }} */
    >
      <Header />
      <main className="main">
        <MyPage />
      </main>
      <BottomNav />
    </div>
  );
}
