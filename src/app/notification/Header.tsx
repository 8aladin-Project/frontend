import Image from "next/image";

const Header = () => {
  return (
    <div className="sticky top-0 w-full h-[56px] bg-[#232323] z-30 flex justify-between items-center px-4">
      <h1 className="text-xl font-bold text-white leading-none flex items-center m-0">
        알림
      </h1>
      <div className="flex items-center space-x-4">
        {/* 알림 아이콘 */}
        <Image
          src="/mainpage/bell.svg"
          alt="알림"
          width={24}
          height={24}
          className="w-6 h-6 filter brightness-0 invert"
        />
        {/* 하트 아이콘 */}
        <Image
          src="/mainpage/heart.svg"
          alt="찜하기"
          width={24}
          height={24}
          className="w-6 h-6 filter brightness-0 invert"
        />
      </div>
    </div>
  );
};

export default Header;
