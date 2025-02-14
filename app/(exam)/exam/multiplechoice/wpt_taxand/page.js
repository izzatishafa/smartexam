"use client";
import React, { useState } from "react";
import { Typography, Flex, Button, Space, Divider, Modal } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import Countdown from "@/components/ui/Countdown";
import QuizHeader from "@/components/ui/QuizHeader";
import { Layout } from "antd";
import EnglishCard from "@/components/ui/card/EnglishCard";
import WptCard from "@/components/ui/card/WptCard";

const WptTaxandPage = () => {
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
          width={800}
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
              Petunjuk Pengerjaan WPT 🧠 :
            </Title>
          }
          open={isModalOpen}
          onCancel={handleClose}
          footer={null}
        >
          <div>
            <ol style={{ listStyleType: "ordinal" }}>
              <li>
                <Text>
                  Pilih jawaban yang paling tepat untuk setiap soal — ikuti
                  naluri dan logika Anda!
                </Text>
              </li>
              <li>
                <Text>
                  Bacalah setiap soal dengan cermat, perhatikan pola, dan jangan
                  lupa untuk tetap fokus.
                </Text>
              </li>
              <li>
                <Text>
                  Kelola waktu dengan bijak. Ingat, fokus dan tenang adalah
                  kunci!
                </Text>
              </li>
              <div style={{ marginTop: "0.75rem" }}>
                <b>Total:</b> 50 soal{" "}
              </div>
              <div style={{ marginTop: "0.75rem" }}>
                ✨ <b>Siap?</b> Ayo taklukkan tantangan ini dan tunjukkan yang
                terbaik! 🚀{" "}
              </div>
              <div
                style={{
                  marginTop: "0.75rem",
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                }}
              >
                Semoga sukses! 💡
              </div>
            </ol>
          </div>
        </Modal>
        <WptCard />
      </Content>
    </>
  );
};

export default WptTaxandPage;
