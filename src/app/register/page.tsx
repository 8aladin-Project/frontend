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
  Radio,
  Row,
  Segmented,
  Select,
  Space,
  Typography,
  Upload,
  message,
} from "antd";
import {
  LeftOutlined,
  UploadOutlined,
  InboxOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import styles from "./register.module.css";

const { Title, Text } = Typography;
const { Dragger } = Upload;

export default function Page() {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      // 파일은 fileList에 있음
      console.log({ ...values, photos: fileList });
      message.success("등록 준비가 완료되었습니다.");
    } catch {
      // validate 실패
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
          <Button type="text" icon={<LeftOutlined />} />
          <Title level={5} className="!m-0">
            상품 등록
          </Title>
          <Button type="primary" onClick={onSubmit}>
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

            <Form.Item label="상품명" name="title">
              {/* Input에 모듈 클래스 적용 */}
              <div className={styles.customInput}>
                <Input placeholder="상품명을 입력해주세요" />
              </div>
            </Form.Item>

            <Row gutter={12}>
              <Col span={24} md={12}>
                <Form.Item label="카테고리" name="category">
                  {/* Select에 모듈 클래스 적용 */}
                  <div className={styles.customSelect}>
                    <Select
                      placeholder="카테고리를 선택해주세요"
                      options={[
                        { label: "디지털/가전", value: "digital" },
                        { label: "가구/인테리어", value: "furniture" },
                        { label: "패션/잡화", value: "fashion" },
                        { label: "도서/티켓", value: "book" },
                        { label: "기타", value: "etc" },
                      ]}
                      className="w-full"
                    />
                  </div>
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
              name="condition"
              initialValue="new"
              rules={[{ required: true, message: "상품 상태를 선택해주세요." }]}
            >
              <Segmented
                block
                options={[
                  { label: "새상품", value: "new" },
                  { label: "거의 새것", value: "like-new" },
                  { label: "중고", value: "used" },
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
              name="description"
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

          <Divider className="!my-5" />

          {/* 거래 설정 */}
          <section>
            <Title level={5} className="!mb-3">
              거래 설정
            </Title>

            <Form.Item
              label="거래 방법"
              name="dealType"
              initialValue="both"
              rules={[{ required: true, message: "거래 방법을 선택해주세요." }]}
            >
              <Segmented
                block
                options={[
                  { label: "직거래", value: "direct" },
                  { label: "택배", value: "delivery" },
                  { label: "둘 다", value: "both" },
                ]}
              />
            </Form.Item>

            <Form.Item label="거래 위치" name="location">
              <Input
                prefix={<EnvironmentOutlined />}
                placeholder="동네를 검색해보세요"
                className="rounded-xl"
              />
            </Form.Item>

            <Text type="secondary" className="block text-[12px]">
              정확한 동네를 입력하면 근처 관심 고객에게 상품이 노출돼요.
            </Text>
          </section>
        </Form>
      </div>
    </div>
  );
}
