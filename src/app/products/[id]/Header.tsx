"use client";

import React from "react";
import styles from "@/components/layout/Header.module.css";
import { useRouter } from "next/navigation";

const ShareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="16,6 12,2 8,6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="12"
      y1="2"
      x2="12"
      y2="15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

    const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "상품 제목",
          url: window.location.href,
        });
      } catch (err) {
        console.error("공유 실패", err);
      }
    } else {
      alert("이 브라우저는 공유 기능을 제공하지 않습니다.");
    }
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContent}`}>
        {/* 왼쪽 뒤로가기 버튼 */}

        <button
          className={styles.backButton}
          onClick={handleBackClick}
          aria-label="뒤로가기"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 중앙 타이틀 */}
        <h1 className={styles.title}>상품 상세</h1>

        {/* 오른쪽 아이콘들 */}
        <div className={styles.rightIcons}>
          <button aria-label="공유" onClick={handleShare}><ShareIcon/></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
