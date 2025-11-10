"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/mainpage/ProductCard";
import Image from "next/image";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    Array<{
      id: string;
      name: string;
      timeAgo: string;
    }>
  >([]);
  const [recentSearchResults, setRecentSearchResults] = useState<
    Array<{
      id: string;
      name: string;
      timeAgo: string;
    }>
  >([]);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  //더미
  const allProducts = [
    {
      id: "1",
      name: "닌텐도 스위치 OLED 화이트",
      timeAgo: "10분 전",
    },
    {
      id: "2",
      name: "캠핑 테이블 접이식 대형",
      timeAgo: "30분 전",
    },
    {
      id: "3",
      name: "루이비통 네버풀 MM",
      timeAgo: "1시간 전",
    },
    {
      id: "4",
      name: "자전거 트렉 FX3",
      timeAgo: "2시간 전",
    },
    {
      id: "5",
      name: "아이패드 프로 11인치 M2",
      timeAgo: "3시간 전",
    },
    {
      id: "6",
      name: "나이키 에어맥스 97",
      timeAgo: "4시간 전",
    },
    {
      id: "7",
      name: "아이폰 17",
      timeAgo: "5시간 전",
    },
    {
      id: "8",
      name: "에프킬라",
      timeAgo: "6시간 전",
    },
    {
      id: "9",
      name: "맥북 프로 16인치 M3",
      timeAgo: "7시간 전",
    },
    {
      id: "10",
      name: "갤럭시 워치 6 클래식",
      timeAgo: "8시간 전",
    },
    {
      id: "11",
      name: "소니 WH-1000XM5 헤드폰",
      timeAgo: "9시간 전",
    },
    {
      id: "12",
      name: "에어프라이어 오븐",
      timeAgo: "10시간 전",
    },
  ];

  const handleSearch = () => {
    setIsSearching(true);

    setTimeout(() => {
      if (!searchQuery.trim()) {
        setSearchResults([]);
        setIsSearching(false);
        return;
      }

      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
      if (filtered.length > 0) {
        setRecentSearchResults(filtered);
      }
      setIsSearching(false);
    }, 300);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="px-4 py-4 bg-white border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="상품명, 브랜드명 등을 검색해보세요"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full h-12 px-4 pr-12 bg-gray-100 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            aria-label="검색"
          >
            <Image
              src="/mainpage/magnifying-glass.svg"
              alt="검색"
              width={20}
              height={20}
              className="text-gray-400"
            />
          </button>
        </div>
      </div>

      <div className="px-4 py-4">
        {!searchQuery &&
          searchResults.length === 0 &&
          recentSearchResults.length === 0 && (
            <div className="text-center py-12">
              <Image
                src="/mainpage/magnifying-glass.svg"
                alt="검색"
                width={48}
                height={48}
                className="mx-auto mb-4 opacity-30"
              />
              <p className="text-gray-400 text-sm">
                검색어를 입력하고 검색해보세요
              </p>
            </div>
          )}

        {isSearching && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-sm">검색 중...</p>
          </div>
        )}

        {searchResults.length > 0 && searchQuery.trim() && (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                검색 결과{" "}
                <span className="font-semibold text-gray-900">
                  {searchResults.length}개
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {searchResults.map(product => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  timeAgo={product.timeAgo}
                  onClick={() => handleProductClick(product.id)}
                />
              ))}
            </div>
          </>
        )}

        {!searchQuery.trim() && recentSearchResults.length > 0 && (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                최근 검색 결과{" "}
                <span className="font-semibold text-gray-900">
                  {recentSearchResults.length}개
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {recentSearchResults.map(product => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  timeAgo={product.timeAgo}
                  onClick={() => handleProductClick(product.id)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
