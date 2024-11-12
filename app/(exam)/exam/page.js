"use client";
import React, { useState } from "react";
import { Typography, Card, Button, Space, Divider, Modal } from "antd";
import Countdown from "@/components/ui/Countdown";
import BasicCard from "@/components/ui/card/BasicCard";
import DiscCard from "@/components/ui/card/DiscCard";
import { Layout } from "antd";
const { Content } = Layout;
const { Title, Text } = Typography;

const Exam = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Typography
        style={{
          width: "100%",
          backgroundColor: "#1B3042",
          paddingBottom: "15px",
          paddingTop: "15px",
          margin: 0,
        }}
      >
        <Title
          level={4}
          style={{ color: "white", textAlign: "center", margin: 0 }}
        >
          Online Test - Bahasa Inggris University
        </Title>
      </Typography>
      <Content style={{ margin: "20px" }}>
        <Space
          direction="horizontal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 0,
          }}
        >
          <Title
            level={4}
            style={{
              paddingLeft: "5px",
              paddingBottom: "5px",
              fontWeight: "normal",
            }}
          >
            Grammar - Question 1
          </Title>
          <Countdown />
        </Space>
        <Divider
          style={{ color: "lightgray", marginTop: "0px", marginBottom: "15px" }}
        />
        <Space
          style={{ width: "100%", justifyContent: "end", marginBottom: "15px" }}
        >
          <Button type="primary" onClick={showModal}>
            Panduan
          </Button>
          <Modal
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
            <ol
              style={{
                paddingLeft: "20px",
                fontSize: "16px",
                color: "#4A4A4A",
              }}
            >
              <li>Baca soal dengan teliti.</li>
              <li>Pantau waktu di pojok atas.</li>
              <li>Jawab semua soal dengan teliti.</li>
              <li>Periksa ulang sebelum submit.</li>
              <li>Klik Submit setelah selesai.</li>
            </ol>
            <Text
                style={{
                  color: "#2F2F2F",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: 2,
                }}
              >
                Semoga Sukses! 🤩
              </Text>
          </Modal>
        </Space>
        {/* <BasicCard /> */}
        <DiscCard />
      </Content>
    </>
  );
};

export default Exam;
