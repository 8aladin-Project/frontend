"use client";
import { useRouter } from "next/navigation";
import { LeftOutlined } from "@ant-design/icons";

export default function Header() {
  const router = useRouter();

  return (
    <header className="header">
      <div className="header-safe" />
      <div className="header-inner">
        <div className="header-grid">
          <div className="header-left">
            <button className="header-btn" onClick={() => router.back()}>
              <LeftOutlined />
            </button>
          </div>
          <div className="header-center flex items-center justify-center h-full">
            <h1 className="header-title m-0">검색</h1>
          </div>
          <div className="header-right"></div>
        </div>
      </div>
    </header>
  );
}
