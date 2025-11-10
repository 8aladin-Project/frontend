import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  rightIcons?: React.ReactNode;
  onBackClick?: () => void;
}

const Header = React.memo(
  ({ title, showBackButton = false, rightIcons, onBackClick }: HeaderProps) => {
    return (
      <header className={styles.header}>
        <div
          className={`${styles.headerContent} ${!showBackButton ? styles.noBackButton : ""}`}
        >
          {/* 왼쪽 뒤로가기 버튼 */}
          {showBackButton && (
            <button
              className={styles.backButton}
              onClick={onBackClick}
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
          )}

          {/* 중앙 타이틀 */}
          <h1 className={styles.title}>{title}</h1>

          {/* 오른쪽 아이콘들 */}
          <div className={styles.rightIcons}>{rightIcons}</div>
        </div>
      </header>
    );
  }
);

export default Header;
