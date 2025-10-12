import Link from "next/link";
import Image from "next/image";
import { SearchOutlined } from "@ant-design/icons";

// 더미 데이터
async function getChatRooms() {
  return [
    {
      id: "1",
      userName: "김철수", // 상대방 이름 혹은 닉네임
      productImage: "/images/product_1.jpeg", // 상품 이미지
      lastMessage: "네, 내일 2시에 역삼역에서 만나요!", // 마지막 메시지 내용 (길어지면 자름)
      productName: "아이폰 14 Pro 딥퍼플", // 제품명
      price: 850000, // 상품 가격
      timestamp: "오후 3:24", // 마지막 메시지 시각
      unreadCount: 2, // 안 읽은 메시지 수
      isOnline: true, // 상대방 상태 (온라인/오프라인)
    },
    {
      id: "2",
      userName: "박영희",
      productImage: "/images/product_2.jpeg",
      lastMessage: "사진 더 보내주실 수 있나요?",
      productName: "맥북 에어 M2 실버",
      price: 1200000,
      timestamp: "오후 1:15",
      unreadCount: 0,
      isOnline: false,
    },
    {
      id: "3",
      userName: "이민수",
      productImage: "/images/product_3.jpg",
      lastMessage: "경매 참여했습니다! 💪",
      productName: "삼성 갤럭시 워치5",
      price: 180000,
      timestamp: "오전 11:42",
      unreadCount: 1,
      isOnline: true,
    },
  ];
}

export default async function ChatListPage() {
  const rooms = await getChatRooms();

  return (
    <div className="flex h-full flex-col bg-white">
      {/* 상단 검색창 */}
      <header className="sticky top-0 z-10 bg-white p-4">
        {/* 아이콘이 input에 감싸져있는 것처럼 보이게 하기 위해 relative 속성 사용 */}
        <div className="relative flex w-full items-center">
          {/* 아이콘에 absolute : 부모 div 기준으로 위치 설정 */}
          {/* left-3: 왼쪽에서 조금 떼고 */}
          <SearchOutlined className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="채팅방 검색"
            // 아이콘이 들어갈 공간을 확보하기 위해 왼쪽 패딩(pl-10)을 줍니다.
            className="w-full rounded-md border border-gray-200 bg-gray-100 py-2 pl-10 pr-4 text-sm focus:outline-none "
          />
        </div>
      </header>

      {/* 채팅 목록 */}
      <main className="flex-1 overflow-y-auto">
        <ul>
          {rooms.map(room => (
            <li key={room.id}>
              <Link href={`/chat/${room.id}`} className="flex space-x-4 p-4">
                {/* 상품 이미지 */}
                <div className="relative h-14 w-14 flex-shrink-0">
                  <Image
                    src={room.productImage}
                    alt={room.productName}
                    width={56}
                    height={56}
                    className="rounded-md object-cover"
                  />
                  {room.isOnline && (
                    <span className="absolute -bottom-1 -right-1 block h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                  )}
                </div>

                {/* 채팅 정보 */}
                <div className="flex-1 overflow-hidden">
                  <p className="font-semibold text-gray-800">{room.userName}</p>
                  <p className="truncate text-sm text-gray-600">
                    {room.lastMessage}
                  </p>
                  <p className="mt-1 truncate text-xs text-gray-400">
                    {room.productName} &middot; {room.price.toLocaleString()}원
                  </p>
                </div>

                {/* 시간 및 안 읽은 메시지 */}
                <div className="flex flex-col items-end space-y-1 text-xs text-gray-400">
                  <p>{room.timestamp}</p>
                  {room.unreadCount > 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {room.unreadCount}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
