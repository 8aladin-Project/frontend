import Link from "next/link";
import Image from "next/image";
import ChatRoomLayout from "./chatRoomLayout";

// 더미 데이터
async function getChatRoomDetails(roomId: string) {
  return {
    userName: "게이머김씨",
    productImage: "/images/product_1.jpeg",
    productName: "닌텐도 스위치 OLED 화이트",
    price: 320000,
  };
}
async function getMessages(roomId: string) {
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
      text: "평일 저녁 7시 이후나 주말 언데든지 가능합니다. 강남역 근처에서 만나면 될 것 같아요.",
      timestamp: "14:36",
    },
  ];
}
const suggestedReplies = [
  "가격 문의",
  "거래 장소",
  "상품 상태",
  "직거래 가능한가요?",
];

export default async function ChatRoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  const { roomId } = params;
  const details = await getChatRoomDetails(roomId);
  const messages = await getMessages(roomId);

  return (
    <ChatRoomLayout>
      <div className="flex h-full flex-col bg-gray-100">
        {/* 상단 헤더 */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b bg-white px-4 py-3">
          <Link href="/chat">
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
          <h1 className="text-lg font-semibold">
            {details.userName}님과 대화중
          </h1>
          <button>
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01"
              />
            </svg>
          </button>
        </header>

        {/* 상품 정보 바 */}
        <div className="sticky top-[57px] z-10 flex items-center space-x-3 border-b bg-white p-3">
          <Image
            src={details.productImage}
            alt={details.productName}
            width={40}
            height={40}
            className="rounded-md"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold">{details.productName}</p>
            <p className="text-xs text-gray-600">
              {details.price.toLocaleString()}원
            </p>
          </div>
          <span className="text-xs text-gray-400">{details.userName}</span>
        </div>

        {/* 채팅 메시지 영역 */}
        <main className="flex-1 space-y-4 overflow-y-auto p-4">
          <p className="py-2 text-center text-xs text-gray-500">
            {details.userName}님과의 채팅이 시작되었습니다.
          </p>
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${msg.sender === "me" ? "flex-row-reverse" : "flex-row"}`}
            >
              {msg.sender === "other" && (
                <Image
                  src="/images/product_1.jpeg"
                  alt="상대방 프로필"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full"
                />
              )}
              <div
                className={`max-w-xs rounded-2xl px-4 py-2 text-sm lg:max-w-md ${msg.sender === "me" ? "rounded-br-none bg-gray-800 text-white" : "rounded-bl-none bg-white text-gray-800"}`}
              >
                {msg.text}
              </div>
              <span className="text-xs text-gray-400">{msg.timestamp}</span>
            </div>
          ))}
        </main>

        {/* 추천 답변 및 입력창 */}
        <footer className="sticky bottom-0 bg-white pt-2">
          <div className="flex space-x-2 overflow-x-auto whitespace-nowrap p-2">
            {suggestedReplies.map(reply => (
              <button
                key={reply}
                className="rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-700"
              >
                {reply}
              </button>
            ))}
          </div>
          <div className="flex items-center p-2">
            <button className="p-2 text-gray-500">+</button>
            <input
              type="text"
              placeholder="메시지를 입력하세요..."
              className="flex-1 rounded-full bg-gray-100 px-4 py-2 focus:outline-none"
            />
            <button className="p-2 text-gray-500">🙂</button>
          </div>
        </footer>
      </div>
    </ChatRoomLayout>
  );
}
