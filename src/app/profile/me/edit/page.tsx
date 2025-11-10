"use client";

import React, { useState } from "react";
import { Button, Form, Input, message, Space, Switch, Typography } from "antd";
import { useRouter } from "next/navigation";
import { myProfile } from "@/data/mypage/myProfile";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

type EditProfileFormValues = {
  name: string;
  location: string;
  verified: boolean;
  bio?: string;
};

export default function EditProfilePage() {
  const router = useRouter();
  const [form] = Form.useForm<EditProfileFormValues>();
  const [saving, setSaving] = useState(false);

  const initialValues: EditProfileFormValues = {
    name: myProfile.name,
    location: myProfile.location,
    verified: myProfile.verified,
    bio: "",
  };

  const handleFinish = async (values: EditProfileFormValues) => {
    setSaving(true);
    try {
      // TODO: 실제 API 연동
      await new Promise(resolve => setTimeout(resolve, 800));

      message.success("회원정보가 저장되었습니다.");
      router.back();
    } catch (error) {
      message.error("저장에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (form.isFieldsTouched()) {
      const confirmLeave = window.confirm(
        "변경사항이 저장되지 않을 수 있습니다. 페이지를 이동하시겠습니까?"
      );
      if (!confirmLeave) {
        return;
      }
    }
    router.back();
  };

  return (
    <div className="min-h-full bg-white px-4 py-6">
      <Space direction="vertical" size={24} className="w-full">
        <div>
          <Title level={4} className="!mb-1">
            회원정보 수정
          </Title>
        </div>

        <Form<EditProfileFormValues>
          form={form}
          layout="vertical"
          initialValues={initialValues}
          onFinish={handleFinish}
          requiredMark="optional"
        >
          <Form.Item
            label="이름"
            name="name"
            rules={[
              { required: true, message: "이름을 입력해주세요." },
              { max: 20, message: "이름은 20자 이하로 입력해주세요." },
            ]}
          >
            <Input placeholder="이름을 입력하세요" />
          </Form.Item>

          <Form.Item
            label="활동 지역"
            name="location"
            rules={[
              { required: true, message: "활동 지역을 입력해주세요." },
              { max: 30, message: "활동 지역은 30자 이하로 입력해주세요." },
            ]}
          >
            <Input placeholder="예) 강남구 역삼동" />
          </Form.Item>

          <Form.Item
            label="동네 인증 상태"
            name="verified"
            valuePropName="checked"
            tooltip="동네 인증을 완료했다면 켜짐으로 유지해주세요."
          >
            <Switch checkedChildren="완료" unCheckedChildren="미완료" />
          </Form.Item>

          <Form.Item>
            <div className="flex items-center justify-end gap-3">
              <Button onClick={handleCancel}>취소</Button>
              <Button type="primary" htmlType="submit" loading={saving}>
                저장
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
}
