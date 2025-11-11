// /data/profile/sellingItems.ts
export type SellingItem = {
  id: number;
  title: string;
  price: string;
  badge: string;
  meta: string;
  emoji: string;
};

export const sellingItems: SellingItem[] = [
  {
    id: 1,
    title: "아이폰 14 Pro 딥퍼플 128GB",
    price: "850,000원",
    badge: "판매중",
    meta: "조회 45 · 관심 8",
    emoji: "📱",
  },
  {
    id: 2,
    title: "맥북 에어 M2 실버 256GB",
    price: "1,250,000원",
    badge: "판매중",
    meta: "조회 102 · 관심 17",
    emoji: "💻",
  },
];
