// app/profile/me/page.tsx

import Profile from "./Profile";

export default function Page() {
  return (
    <div
      className="shell" /* style={{ ['--header-h' as any]:'56px', ['--bottom-h' as any]:'64px' }} */
    >
      <main className="main">
        <Profile />
      </main>
    </div>
  );
}
