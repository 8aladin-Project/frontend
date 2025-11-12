import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#232323" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "헤더에 표시될 타이틀",
    },
    showBackButton: {
      control: "boolean",
      description: "뒤로가기 버튼 표시 여부",
    },
    onBackClick: {
      action: "back clicked",
      description: "뒤로가기 버튼 클릭 이벤트",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 아이콘 컴포넌트들
const BellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3464 21.9965 11.992 21.9965C11.6376 21.9965 11.2894 21.9044 10.9858 21.7295C10.6821 21.5547 10.4298 21.3031 10.254 21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" />
  </svg>
);

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

const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

// 메인 페이지 헤더 (팔라딘)
export const MainPage: Story = {
  args: {
    title: "팔라딘",
    showBackButton: false,
    rightIcons: (
      <>
        <button aria-label="알림">
          <BellIcon />
        </button>
        <button aria-label="검색">
          <SearchIcon />
        </button>
      </>
    ),
  },
};

// 상품 상세 페이지 헤더
export const ProductDetail: Story = {
  args: {
    title: "상품 상세",
    showBackButton: true,
    rightIcons: (
      <button aria-label="공유">
        <ShareIcon />
      </button>
    ),
  },
};

// 채팅 페이지 헤더
export const ChatRoom: Story = {
  args: {
    title: "A님과 대화중",
    showBackButton: true,
  },
};
// 채팅 페이지 헤더
export const Chats: Story = {
  args: {
    title: "채팅",
    showBackButton: true,
    rightIcons: (
      <button aria-label="설정">
        <SettingsIcon />
      </button>
    ),
  },
};
// 내 정보 페이지 헤더
export const MyInfo: Story = {
  args: {
    title: "내 정보",
    showBackButton: true,
  },
};

// 관심 목록 페이지 헤더
export const Wishlist: Story = {
  args: {
    title: "관심 목록",
    showBackButton: true,
  },
};

// 검색 페이지 헤더
export const Search: Story = {
  args: {
    title: "검색",
    showBackButton: true,
  },
};

// 상품 등록 페이지 헤더
export const RegisterProduct: Story = {
  args: {
    title: "상품 등록",
    showBackButton: true,
  },
};

// 뒤로가기 버튼 없는 헤더
export const NoBackButton: Story = {
  args: {
    title: "NoBackButton",
    showBackButton: false,
    rightIcons: (
      <>
        <button aria-label="알림">
          <BellIcon />
        </button>
        <button aria-label="검색">
          <SearchIcon />
        </button>
      </>
    ),
  },
};

// 아이콘 없는 헤더
export const NoIcons: Story = {
  args: {
    title: "NoIcons",
    showBackButton: true,
  },
};
