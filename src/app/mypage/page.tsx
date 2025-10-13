// app/mypage/page.tsx
import Header from "./Header";
import Footer from "@/components/layout/Footer";
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
      <Footer />
    </div>
  );
}
