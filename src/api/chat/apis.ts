// 더미 데이터
export async function getChatRoomDetails(roomId: string) {
  return {
    userName: "게이머김씨",
    productImage: "/images/product_1.jpeg",
    productName: "닌텐도 스위치 OLED 화이트",
    price: 320000,
  };
}

export async function getMessages(roomId: string) {
  return [
    {
      id: 1,
      sender: "other",
      text: "안녕하세요! 닌텐도 스위치 OLED 상품에 관심 가져 주셔서 감사합니다.",
      timestamp: "14:31",
    },
    {
      id: 2,
      sender: "me",
      text: "안녕하세요! 상품 상태가 정말 좋아 보이네요.",
      timestamp: "14:32",
    },
    {
      id: 3,
      sender: "other",
      text: "네, 정말 거의 사용하지 않아서 새것과 다름없습니다. 스크린 보호필름도 처음부터 붙여서 사용했어요.",
      timestamp: "14:33",
    },
    {
      id: 4,
      sender: "me",
      text: "혹시 직거래 가능한 시간대가 언제인가요?",
      timestamp: "14:35",
    },
    {
      id: 5,
      sender: "other",
      text: "평일 저녁 7시 이후나 주말 언제든지 가능합니다. 강남역 근처에서 만나면 될 것 같아요.",
      timestamp: "14:36",
    },
  ];
}
