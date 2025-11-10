// /data/interest/interestItems.ts
export type InterestItem = {
  id: number;
  title: string;
  price: string;
  badge: string;
  meta: string;
  emoji: string;
};

export const interestItems: InterestItem[] = [
  {
    id: 1,
    title: "아이폰 15 Pro 티타늄 블루 256GB",
    price: "1,200,000원",
    badge: "판매중",
    meta: "조회 89 · 관심 23",
    emoji: "📱",
  },
  {
    id: 2,
    title: "에어팟 프로 2세대",
    price: "350,000원",
    badge: "판매중",
    meta: "조회 156 · 관심 45",
    emoji: "🎧",
  },
  {
    id: 3,
    title: "아이패드 에어 5세대 스페이스 그레이",
    price: "750,000원",
    badge: "판매완료",
    meta: "조회 203 · 관심 67",
    emoji: "📱",
  },
  {
    id: 4,
    title: "애플워치 시리즈 9 알루미늄",
    price: "450,000원",
    badge: "판매중",
    meta: "조회 78 · 관심 19",
    emoji: "⌚",
  },
  {
    id: 5,
    title: "맥북 프로 14인치 M3 Pro",
    price: "2,500,000원",
    badge: "판매중",
    meta: "조회 234 · 관심 89",
    emoji: "💻",
  },
];
