"use client";

import React, { useState } from "react";
import {
  Affix,
  Button,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Segmented,
  Select,
  // Space,
  Typography,
  Upload,
  message,
} from "antd";
import {
  LeftOutlined,
  // UploadOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import styles from "./register.module.css";
import { useRouter } from "next/navigation";
import {
  uploadImages,
  createProduct,
  type CreateProductRequest,
} from "@/api/register";
const { Title, Text } = Typography;
const { Dragger } = Upload;

export default function Page() {
  const [form] = Form.useForm();
  const router = useRouter();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    try {
      if (fileList.length === 0) {
        message.error("상품 사진을 최소 1장 이상 업로드해주세요.");
        return;
      }
      const values = await form.validateFields();

      // 폼 값 디버깅
      console.log("폼 값:", values);

      setIsSubmitting(true);

      // 파일 리스트에서 실제 File 객체 추출
      const imageFiles = fileList
        .map(file => file.originFileObj)
        .filter((file): file is NonNullable<typeof file> => file !== undefined)
        .map(file => file as File);

      if (imageFiles.length === 0) {
        message.error("업로드할 이미지 파일이 없습니다.");
        setIsSubmitting(false);
        return;
      }

      // 이미지 업로드
      message.loading("이미지를 업로드하는 중...", 0);
      let uploadedImages;
      try {
        uploadedImages = await uploadImages(imageFiles);
        message.destroy();
      } catch (error: any) {
        message.destroy();
        console.error("이미지 업로드 실패:", error);
        console.error("에러 상세:", {
          message: error?.message,
          status: error?.response?.status,
          statusText: error?.response?.statusText,
          url: error?.config?.url,
          baseURL: error?.config?.baseURL,
          responseData: error?.response?.data,
        });

        // 서버에서 반환한 에러 메시지 파싱
        const responseData = error?.response?.data;
        let errorMessage = "이미지 업로드에 실패했습니다.";

        if (error?.response?.status === 404) {
          errorMessage =
            "API 서버를 찾을 수 없습니다. 환경 변수를 확인해주세요.";
        } else if (error?.response?.status === 500) {
          // 서버 에러 응답에서 error_message 추출
          if (responseData?.error_message) {
            errorMessage = `서버 오류: ${responseData.error_message}`;
          } else if (responseData?.error_code_name === "IMAGE_UPLOAD_FAILED") {
            errorMessage =
              "이미지 업로드에 실패했습니다. 잠시 후 다시 시도해주세요.";
          } else {
            errorMessage =
              "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
          }
        } else if (responseData?.error_message) {
          errorMessage = responseData.error_message;
        } else if (error?.message) {
          errorMessage = error.message;
        }

        message.error(errorMessage);
        setIsSubmitting(false);
        return;
      }

      if (!uploadedImages || uploadedImages.length === 0) {
        message.error("이미지 업로드에 실패했습니다.");
        setIsSubmitting(false);
        return;
      }

      // 첫 번째 이미지를 대표 이미지로, 나머지를 추가 이미지로 설정
      const mainImageUrl = uploadedImages[0]?.imageUrl || "";
      const additionalImages =
        uploadedImages.length > 1
          ? uploadedImages.slice(1).map(img => img.imageUrl)
          : [];

      // 카테고리 값 확인 및 처리
      const categoryValue = values.category;
      console.log("카테고리 값:", categoryValue);

      // 상품 생성 데이터 준비
      const productData: CreateProductRequest = {
        memberId: 0, // TODO: 실제 사용자 ID로 변경 필요
        title: values.title || "",
        category: categoryValue ? [categoryValue] : [],
        content: values.content || "",
        mainImageUrl,
        images: additionalImages,
        price: Number(values.price) || 0,
        status: values.status || "새상품",
      };

      // 전송할 데이터 콘솔 출력
      console.log(
        "상품 등록 요청 데이터:",
        JSON.stringify(productData, null, 2)
      );

      // 상품 생성
      message.loading("상품을 등록하는 중...", 0);
      await createProduct(productData);
      message.destroy();

      message.success("상품이 성공적으로 등록되었습니다.");
      router.back();
    } catch (error: any) {
      message.destroy();
      console.error("상품 등록 실패:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "상품 등록에 실패했습니다. 다시 시도해주세요.";
      message.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const MAX = 10;

  const draggerProps: UploadProps = {
    multiple: true,
    listType: "picture-card",
    fileList,
    beforeUpload: file => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("이미지 파일만 업로드할 수 있습니다. (jpg, png, gif 등)");
        return Upload.LIST_IGNORE; // 업로드 목록에도 추가되지 않음
      }
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        message.error("이미지는 5MB 이하로 업로드해주세요.");
        return Upload.LIST_IGNORE;
      }

      return false; // 실제 업로드는 막고 로컬 미리보기만 허용
    },
    onChange(info) {
      const newList = info.fileList.slice(0, MAX);
      setFileList(newList);
    },
    onRemove(file) {
      setFileList(prev => prev.filter(f => f.uid !== file.uid));
    },
  };
  return (
    <div className="min-h-screen bg-white">
      {/* 상단 고정 헤더 */}
      <Affix offsetTop={0}>
        <div className="sticky top-0 z-10 flex items-center justify-between px-3 py-3 bg-white border-b">
          <Button
            type="text"
            icon={<LeftOutlined />}
            onClick={() => router.back()}
          />
          <Title level={5} className="!m-0">
            상품 등록
          </Title>
          <Button onClick={onSubmit} loading={isSubmitting}>
            등록
          </Button>
        </div>
      </Affix>

      <div className="px-3 pb-8">
        <Form form={form} layout="vertical">
          {/* 상품 사진 */}
          <section className="pt-3">
            <div className="flex items-center justify-between">
              <Text strong>
                상품 사진 <Text type="danger">*</Text>
              </Text>
              <Text type="secondary">
                ({fileList.length}/{MAX})
              </Text>
            </div>

            <div className="p-4 mt-2 border rounded-2xl border-black/10">
              <Dragger
                {...draggerProps}
                className={`${styles.customDragger} !bg-white`}
                accept="image/*"
                maxCount={MAX}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">사진 추가</p>
                <p className="ant-upload-hint">
                  최대 {MAX}장까지 업로드
                  <br />
                  사진을 여기로 끌어다 놓으세요.
                </p>
              </Dragger>

              <Text type="secondary" className="mt-2 block text-[12px]">
                첫 번째 사진이 대표 사진으로 설정됩니다.
              </Text>
            </div>
          </section>

          <Divider className="!my-5" />

          {/* 기본 정보 */}
          <section>
            <Title level={5} className="!mb-3">
              기본 정보
            </Title>

            <Form.Item
              label="상품명"
              name="title"
              rules={[{ required: true, message: "상품명을 입력해주세요." }]}
            >
              {/* Input에 모듈 클래스 적용 */}
              <div className={styles.customInput}>
                <Input placeholder="상품명을 입력해주세요" />
              </div>
            </Form.Item>

            <Row gutter={12}>
              <Col span={24} md={12}>
                <Form.Item
                  label="카테고리"
                  name="category"
                  rules={[
                    { required: true, message: "카테고리를 선택해주세요." },
                  ]}
                >
                  <Select
                    placeholder="카테고리를 선택해주세요"
                    options={[
                      { label: "디지털/가전", value: "디지털/가전" },
                      { label: "가구/인테리어", value: "가구/인테리어" },
                      { label: "패션/잡화", value: "패션/잡화" },
                      { label: "도서/티켓", value: "도서/티켓" },
                      { label: "기타", value: "기타" },
                    ]}
                    className="w-full"
                  />
                </Form.Item>
              </Col>

              <Col span={24} md={12}>
                <Form.Item
                  label="가격"
                  name="price"
                  rules={[{ required: true, message: "가격을 입력해주세요." }]}
                >
                  <div className={styles.customNumber}>
                    <InputNumber<string>
                      stringMode
                      min="0"
                      formatter={v =>
                        v ? v.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""
                      }
                      parser={v => (v ? v.replace(/[^\d.-]/g, "") : "0")}
                    />
                  </div>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="상품 상태"
              name="status"
              initialValue="새상품"
              rules={[{ required: true, message: "상품 상태를 선택해주세요." }]}
            >
              <Segmented
                block
                options={[
                  { label: "새상품", value: "새상품" },
                  { label: "거의 새것", value: "거의 새것" },
                  { label: "중고", value: "중고" },
                ]}
              />
            </Form.Item>
          </section>

          <Divider className="!my-5" />

          {/* 상세 정보 */}
          <section>
            <Title level={5} className="!mb-3">
              상세 정보
            </Title>

            <Form.Item
              label={
                <>
                  상세 설명 <Text type="danger">*</Text>
                </>
              }
              name="content"
              rules={[{ required: true, message: "상세 설명을 입력해주세요." }]}
            >
              <Input.TextArea
                showCount
                maxLength={2000}
                autoSize={{ minRows: 5, maxRows: 10 }}
                placeholder="상품 설명을 작성해주세요."
                className="rounded-xl"
              />
            </Form.Item>

            <div className="rounded-xl bg-gray-50/80 px-4 py-3 text-[13px] leading-6 text-gray-600">
              <ul className="pl-5 list-disc">
                <li>
                  상품의 브랜드, 구매 시기, 사용감 등을 자세히 적어주세요.
                </li>
                <li>실제 촬영한 사진과 함께 올려주세요.</li>
                <li>
                  키워드 위주보다는 자세한 설명이 구매 결정에 도움이 됩니다.
                </li>
              </ul>
            </div>
          </section>
        </Form>
      </div>
    </div>
  );
}
