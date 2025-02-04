"use client";
import React, { useState } from "react";
import { Typography, Flex, Button, Space, Divider, Modal } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import QuizHeader from "@/components/ui/QuizHeader";
import { Layout } from "antd";
import EnglishCard from "@/components/ui/card/EnglishCard";

const EnglishUniversity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Content style={{ margin: "20px" }}>
        <Flex
          style={{
            width: "100%",
            justifyContent: "flex-end",
            backgroundColor: "white",
            margin: "0 10px 20px 0",
          }}
        >
          <Button variant="outlined" color="green" onClick={showModal}>
            Panduan
          </Button>
        </Flex>
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
            <ol>
              <li>
                <Text>Baca soal dengan teliti.</Text>
              </li>
              <li>
                <Text>Pantau waktu di pojok atas.</Text>
              </li>
              <li>
                <Text>Jawab semua soal dengan teliti.</Text>
              </li>
              <li>
                <Text>Periksa ulang sebelum submit.</Text>
              </li>
              <li>
                <Text>Baca soal dengan teliti.</Text>
              </li>
            </ol>
            <Text
              style={{
                marginLeft: "20px",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Semoga sukses! 💡
            </Text>
          </div>
        </Modal>
        <div
          style={{
            padding: "10px 20px",
            minHeight: 360,
            background: "white",
            borderRadius: "1rem",
            border: "1px solid #E0E0E0",
          }}
        >
          <EnglishCard />{" "}
        </div>
      </Content>
    </>
  );
};

export default EnglishUniversity;
