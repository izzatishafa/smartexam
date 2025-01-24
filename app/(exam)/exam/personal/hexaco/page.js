"use client";
import React, { useState } from "react";
import { Typography, Flex, Button, Space, Divider, Modal } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import Countdown from "@/components/ui/Countdown";
import QuizHeader from "@/components/ui/QuizHeader";
import { Layout } from "antd";
import HexacoCard from "@/components/ui/card/HexacoCard";

const Hexaco = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <QuizHeader title="Hexaco" onGuideClick={showModal}>
        <Countdown />
      </QuizHeader>
      <Content style={{ margin: "20px" }}>
        <Space>
          <Modal
            width={1000}
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
                  <Text>
                    Setiap soal terdiri dari 1 pernyataan dengan 5 pilihan
                    jawaban yaitu Sangat Setuju, Setuju, Netral, Tidak Setuju,
                    dan Sangat Tidak Setuju. Seperti contoh di bawah ini.
                  </Text>
                  <div
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      textAlign: "center",
                    }}
                  >
                    <Space size="middle">
                      <Button>Sangat Setuju</Button>
                      <Button>Setuju</Button>
                      <Button>Netral</Button>
                      <Button>Tidak Setuju</Button>
                      <Button>Sangat Tidak Setuju</Button>
                    </Space>
                  </div>
                </li>
                <li>
                  <Text>
                    Pilihlah jawaban yang paling sesuai dengan diri Anda.
                  </Text>
                </li>
                <li>
                  <Text>
                    Jawablah secara jujur dan spontan dengan mengklik salah satu
                    dari pilihan jawaban tersebut.
                  </Text>
                </li>
                <li>
                  <Text>
                    Jika sudah memahami petunjuk, silakan klik tombol{" "}
                    <b>Mulai Test</b> untuk melanjutkan ke soal berikutnya.
                  </Text>
                </li>
                <li>
                  <Text>
                    Waktu pengerjaan tes ini terbatas, untuk itu gunakan waktu
                    Anda semaksimal mungkin.
                  </Text>
                </li>
                <li>
                  <Text>Selamat mengerjakan dan semoga sukses!</Text>
                </li>
              </ol>
            </div>
          </Modal>
        </Space>
        <HexacoCard />
      </Content>
    </>
  );
};

export default Hexaco;
