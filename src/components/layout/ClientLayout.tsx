"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import BottomNavigationBar from "./BottomNavigationBar";

interface ClientLayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  showHeader?: boolean;
  showBottomNavigation?: boolean;
}

export default function ClientLayout({
  children,
  title = "",
  showBackButton = true,
  showHeader = false,
  showBottomNavigation = false,
}: ClientLayoutProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="min-h-[100svh] flex flex-col">
      {showHeader && (
        <Header
          title={title}
          showBackButton={showBackButton}
          onBackClick={handleBackClick}
        />
      )}
      <div className="flex-1">{children}</div>
      {showBottomNavigation && <BottomNavigationBar />}
    </div>
  );
}
