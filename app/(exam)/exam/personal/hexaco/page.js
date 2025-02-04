"use client";
import React, { useState } from "react";
import { Typography, Flex, Button, Space, Divider, Modal } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
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
          width={700}
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
              Petunjuk Pengerjaan Hexaco 🧠 :
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
                  Setiap soal terdiri dari 1 pernyataan dengan 5 pilihan jawaban
                  yaitu Seperti contoh di bawah ini.
                </Text>
                <ul>
                  <li>
                    <Text>Sangat Setuju.</Text>
                  </li>
                  <li>
                    <Text>Setuju</Text>
                  </li>
                  <li>
                    <Text>Netral</Text>
                  </li>
                  <li>
                    <Text>Tidak Setuju</Text>
                  </li>
                  <li>
                    <Text>Sangat Tidak Setuju.</Text>
                  </li>
                </ul>
                {/* <div
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
                </div> */}
              </li>
              <li>
                <Text>
                  Pilih jawaban yang paling sesuai dan menggambarkan Anda
                </Text>
              </li>
              <li>
                <Text>
                  Jawablah secara jujur dan spontan dengan klik salah satu
                  jawaban yang tepat
                </Text>
              </li>
              <li>
                <Text>
                  Perhatikan waktu pengerjaan karena waktunya terbatas
                </Text>
              </li>

              <li>
                <Text>Selamat mengerjakan dan semoga sukses!</Text>
              </li>
            </ol>
          </div>
        </Modal>
        <HexacoCard />
      </Content>
    </>
  );
};

export default Hexaco;
