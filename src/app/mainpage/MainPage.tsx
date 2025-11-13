"use client";

import CategoryTabs from "@/components/mainpage/CategoryTabs";
import PopularCategories from "@/components/mainpage/PopularCategories";
import PopularProducts from "@/components/mainpage/PopularProducts";
import Image from "next/image";

export default function MainPage() {
  const handleCategoryChange = (category: string) => {
    console.log("Selected category:", category);
    // 여기에 카테고리 변경 로직을 추가할 수 있습니다
  };

  return (
    <>
      <div className="bg-white min-h-screen pb-20">
        {/* 검색바 */}
        <div className="px-4 py-3 bg-white">
          <div className="relative">
            <input
              type="text"
              placeholder="상품명, 브랜드명 등을 검색해보세요"
              className="w-full h-12 px-4 pr-12 bg-gray-100 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Image
              src="/mainpage/magnifying-glass.svg"
              alt="검색"
              width={20}
              height={20}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* 카테고리 탭 */}
        <CategoryTabs onCategoryChange={handleCategoryChange} />

        {/* 프로모션 배너 */}
        <div className="px-4 py-4">
          <div className="bg-black rounded-xl p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">
                중고거래의 새로운 경험
              </h2>
              <p className="text-white">안전하고 편리한 거래를 시작하세요</p>
            </div>
          </div>
        </div>

        {/* 인기 카테고리 */}
        <PopularCategories onCategoryClick={handleCategoryChange} />

        {/* 중고거래 인기매물 */}
        <PopularProducts
          onProductClick={productId =>
            console.log("Product clicked:", productId)
          }
          onMoreClick={() => console.log("More clicked")}
        />
      </div>
      <ScrollToTopButton />
    </>
  );
}

function ScrollToTopButton() {
  const scrollToTop = () => {
    const scrollContainer = document.querySelector(
      ".fixed.inset-0.overflow-y-auto"
    ) as HTMLElement;
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-[90px] right-12 z-40 max-w-[600px] mx-auto left-6">
      <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-[#232323] hover:bg-[#2d2d2d] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ml-auto"
        aria-label="상단으로 이동"
      >
        <Image
          src="/mainpage/up.svg"
          alt="상단으로"
          width={24}
          height={24}
          className="filter brightness-0 invert"
        />
      </button>
    </div>
  );
}
