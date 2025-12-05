"use client";

import React from "react";
import { Avatar, Row, Col, Space, Tag, Divider, Typography } from "antd";
import { EnvironmentOutlined, EditOutlined } from "@ant-design/icons";
import { ProfileData } from "@/data/profile/myProfile";
import { useRouter } from "next/navigation";
const { Title, Text } = Typography;

export default function ProfileSection({
  profile,
  showEditIcon = true,
}: {
  profile: ProfileData;
  showEditIcon?: boolean;
}) {
  const {
    name,
    verified,
    location,
    initial,
    avatarBg = "#232323",
    avatarColor = "#fff",
    stats,
  } = profile;
  const router = useRouter();

  const handleEditClick = () => {
    router.push("/profile/me/edit");
  };

  return (
    <section className="pt-5">
      <div className="rounded-2xl border border-black/10 p-4 shadow-sm">
        <Row gutter={16} align="middle" justify="space-between">
          {/* 왼쪽 아바타 */}
          <Col flex="none">
            <Avatar
              size={64}
              style={{
                backgroundColor: avatarBg,
                color: avatarColor,
                fontWeight: 700,
                fontSize: 28,
              }}
            >
              {initial}
            </Avatar>
          </Col>

          {/* 중앙 이름, 인증, 위치 */}
          <Col flex="auto">
            <Space orientation="vertical" size={4} className="pl-2">
              <Space size="small" align="center">
                <Title level={4} className="!m-0 !font-bold">
                  {name}
                </Title>
                {verified && (
                  <Tag color="success" className="!rounded-full">
                    인증
                  </Tag>
                )}
              </Space>
              <Space size={6} align="center" className="text-gray-500">
                <EnvironmentOutlined />
                <Text type="secondary">{location}</Text>
              </Space>
            </Space>
          </Col>

          {/* 오른쪽 편집 아이콘 */}
          {showEditIcon && (
            <Col flex="none">
              <button
                type="button"
                className="rounded-full p-2 text-xl text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                onClick={handleEditClick}
                aria-label="회원정보 수정"
              >
                <EditOutlined />
              </button>
            </Col>
          )}
        </Row>

        <Divider className="!my-4" />

        {/* 하단 통계 */}
        <Row gutter={16} justify="space-around">
          {stats.map((stat, index) => (
            <Col key={index} className="text-center">
              <div className="text-[17px] font-bold">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
