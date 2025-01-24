"use client";
import React, { useState } from "react";
import { Typography, Flex, Button, Space, Divider, Modal } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import Countdown from "@/components/ui/Countdown";
import QuizHeader from "@/components/ui/QuizHeader";
import { Layout } from "antd";
import EssayCard from "@/components/ui/card/EssayCard";

const EssayPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <QuizHeader title="Essay" onGuideClick={showModal}>
        <Countdown />
      </QuizHeader>
      <Content style={{ margin: "20px" }}>
        <Space>
          <Modal
            width={600}
            title={
              <Title
                level={5}
                style={{
                  color: "#2F2F2F",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: 2,
                }}
              >
                Petunjuk Pengerjaan
              </Title>
            }
            open={isModalOpen}
            onCancel={handleClose}
            footer={null}
          >
            <div>
              <ol style={{ listStyleType: "disc" }}>
                <li>
                  <Text>
                    Setiap soal terdiri dari 1 pernyataan dengan 4 pilihan yang
                    terdiri dari jawaban dengan A, B, C, dan D
                  </Text>
                </li>
              </ol>
            </div>
          </Modal>
        </Space>
        <EssayCard />
      </Content>
    </>
  );
};

export default EssayPage;
