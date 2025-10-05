// app/antd-registry.tsx
"use client";

import React from "react";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";

export default function AntdRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const cache = React.useMemo(() => createCache(), []);
  // 서버 렌더 시점에 생성된 스타일을 HTML에 주입
  useServerInsertedHTML(() => {
    const styleText = extractStyle(cache, true);
    return <style id="antd" dangerouslySetInnerHTML={{ __html: styleText }} />;
  });

  return (
    <StyleProvider cache={cache} hashPriority="low">
      {children}
    </StyleProvider>
  );
}
