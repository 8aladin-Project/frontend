export type Notification = {
  id: number;
  type: string;
  content: string;
  isRead: boolean;
  url: string;
  img_url: string;
};

export const notifications: Notification[] = [
  {
    id: 1,
    type: "추천 컨텐츠",
    content: "누구님을 위한 기타 팝니다",
    isRead: false,
    url: "http://localhost:3000/products/1",
    img_url: "https://shopping-phinf.pstatic.net/main_3888828/38888282618.20230913071643.jpg" 
  },
  {
    id: 2,
    type: "관심 물품",
    content: "다른 이웃이 '맥북 프로'글에 관심을 눌렀어요.",
    isRead: true,
    url: "http://localhost:3000/products/1",
    img_url: "https://shopping-phinf.pstatic.net/main_4731061/47310617618.20240426090954.jpg"

  },
  {
    id: 3,
    type: "조회 물품 할인",
    content: "최근 본 '맥북 프로'의 가격이 떨어졌어요.",
    isRead: false,
    url: "http://localhost:3000/products/1",
    img_url: "https://shopping-phinf.pstatic.net/main_3247334/32473346832.20221227204218.jpg"

  },
];
// export type Notification = {
//   type: string;
//   content: string;
//   is_read: boolean;
//   url: string;
// };

// export const notification: Notification[] = [
//   {
//     type: "추천 컨텐츠",
//     content: "누구님을 위한 기타 팝니다",
//     is_read: true,
//     url: "http://localhost:3000/products/1",
//   },
//   {
//     type: "관심 물품",
//     content: "다른 이웃이 '맥북프로'글에 관심을 눌렀어요.",
//     is_read: false,
//     url: "http://localhost:3000/products/1",
//   },
//   {
//     type: "조회 물품 할인",
//     content: "최근 본 '백북프로'의 가격이 떨어졌어요.",
//     is_read: false,
//     url: "http://localhost:3000/products/1",
//   },
// ];
