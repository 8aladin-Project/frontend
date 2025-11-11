// app/profile/page.tsx

import UserProfile from "./UserProfile";

export default function Page() {
  return (
    <div
      className="shell" /* style={{ ['--header-h' as any]:'56px', ['--bottom-h' as any]:'64px' }} */
    >
      <main className="main">
        <UserProfile />
      </main>
    </div>
  );
}
