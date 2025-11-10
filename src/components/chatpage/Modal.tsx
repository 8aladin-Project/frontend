"use client";

import React, { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
}: ModalProps) {
  // isOpen이 false이면 아무것도 렌더링하지 않습니다.
  if (!isOpen) return null;

  return (
    // 1. 모달 배경 (어두운 반투명)
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // 배경 클릭 시 닫기
    >
      {/* 2. 모달 컨텐츠 (흰색 패널) */}
      <div
        className="relative w-full max-w-sm rounded-lg bg-white p-6 shadow-xl"
        onClick={e => e.stopPropagation()} // 모달 클릭 시 배경 클릭 이벤트 전파 방지
      >
        {/* 제목 */}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        {/* 내용 */}
        <div className="mt-4 text-sm text-gray-600">{children}</div>

        {/* 버튼 영역 */}
        <div className="mt-6 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            취소
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
