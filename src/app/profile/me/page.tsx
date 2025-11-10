// app/mypage/page.tsx

import MyPage from "./MyPage";

export default function Page() {
  return (
    <div
      className="shell" /* style={{ ['--header-h' as any]:'56px', ['--bottom-h' as any]:'64px' }} */
    >
      <main className="main">
        <MyPage />
      </main>
    </div>
  );
}
