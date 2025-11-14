// components/PhoneFrameLayout.tsx
import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

export default function PhoneFrameLayout({
  children,
  title,
  className,
}: Props) {
  return (
    <div className="fixed inset-0 bg-gray-100 overflow-y-auto overflow-x-hidden">
      <div className="min-h-screen flex justify-center px-6 py-0">
        <div className="w-full max-w-[600px] min-h-screen">
          <div
            className={clsx(
              "relative min-h-screen",
              "shadow-[0_18px_28px_rgba(0,0,0,.18),0_2px_8px_rgba(0,0,0,.07)]",
              "bg-white",
              className
            )}
          >
            <div className="relative">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
