"use client";

import {
  ArrowLeftOutlined,
  ShareAltOutlined,
  HeartFilled,
  WechatWorkOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Tag } from "antd";

export default function Page() {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const images = [
    "https://shopping-phinf.pstatic.net/main_3888828/38888282618.20230913071643.jpg",
    "https://shopping-phinf.pstatic.net/main_4731061/47310617618.20240426090954.jpg",
    "https://shopping-phinf.pstatic.net/main_3247334/32473346832.20221227204218.jpg",
  ];

  const clickEffect = (index: number) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 150);
    console.log("click");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "상품 제목",
          url: window.location.href,
        });
      } catch (err) {
        console.log("공유 실패", err);
      }
    } else {
      alert("이 브라우저는 공유 기능을 제공하지 않습니다.");
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-100">
      <header>
        <div className="top-0 w-[600px] h-[50px] bg-[#232323] text-white flex items-center justify-center mx-auto">
          <div>
            <button>
              <ArrowLeftOutlined
                className="text-[20px]"
                onClick={() => history.back()}
              />
            </button>
          </div>
          <div className="mx-[230px] flex items-center">
            <h1 className="m-0 font-bold">상품 상세</h1>
          </div>
          <div>
            <button onClick={handleShare}>
              <ShareAltOutlined className="text-[20px]" />
            </button>
          </div>
        </div>
      </header>

      <main
        className="pb-[70px] bg-[#F9FAFB] overflow-y-auto "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="w-[600px] h-[600px] border">
          <img src={images[0]} className="object-cover w-full h-full" />
        </div>
        <div>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => clickEffect(index)}
              className={`border-[3px] border-[#E5E7EB] rounded-2xl mx-1 my-3 ${clickedIndex === index ? "scale-95 ring-4 ring-black" : ""}`}
            >
              <img src={image} className="object-cover w-20 h-20 rounded-2xl" />
            </button>
          ))}
        </div>
        <div className="w-[600px] h-[80px] flex items-center justify-center mx-auto">
          <div className="w-[50px] h-[50px] ml-[10px] mr-[10px]">
            <img
              src="https://shopping-phinf.pstatic.net/main_3888828/38888282618.20230913071643.jpg"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div className="ml-[10px]">
            <h1 className="font-semibold">게임러버김씨</h1>
            <h1 className="text-[#697281]">신뢰도 높은 판매자</h1>
          </div>
          <div className="ml-auto font-medium text-[#344153] bg-[#F3F4F6] p-1 rounded mr-6">
            <button>프로필 보기</button>
          </div>
        </div>
        <div className="text-[20px] flex items-center mt-[20px] ml-[20px]">
          <h1 className="font-bold mr-2 mb-0">닌텐도 스위치 OLED 화이트</h1>
          <Tag color="success" className="!rounded-full !px-2 !py-0.5">
            판매중
          </Tag>
        </div>
        <div className="text-[30px] ml-[20px] mt-[20px]">
          <h1 className="font-bold">320,000원</h1>
        </div>
        <div className="font-semi bold ml-[20px]">
          <p>
            몇번 안해봤고 배터리 개선판입니다 <br />
            기스에 예민해서 직접 보호필름 붙이러 갔었고용 상태 S급이에요
            <br />
            풀구성중에 조이콘 그립 (검정)은 분실하였습니다ㅜㅜ
            <br />
            나머지 구성은 모두 있어요❗️
            <br />
            박스 있는데 상태는 안좋아요 <br />
            <br />
            조이콘 캡은 서비스로 드려용 <br />
            닌텐도 칩도 팔고 있어요 <br />
            같이 구매시 에눌 해드립니다
          </p>
        </div>
      </main>

      <footer>
        <div className="fixed bottom-0 w-[600px] h-[70px] bg-white text-white flex items-center justify-center mx-auto">
          <div className="px-[10px]">
            <button className="bg-white text-[#9AA3B0] border-2 px-4 py-4 rounded flex items-center">
              <HeartFilled className="text-[20px]" />
            </button>
          </div>
          <div className="px-[10px]">
            <button className="bg-[#F3F4F6] text-black font-bold px-[75] py-4 rounded">
              <WechatWorkOutlined className="text-[20px]" /> 채팅하기
            </button>
          </div>
          <div className="px-[10px]">
            <button className="bg-[#232323] text-white font-bold px-[75] py-4 rounded">
              <ShoppingCartOutlined className="text-[20px]" /> 구매하기
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
