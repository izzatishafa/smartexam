"use client";
import React, { useState } from "react";
import { Typography, Flex, Button, Space, Divider, Modal } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import Countdown from "@/components/ui/Countdown";
import QuizHeader from "@/components/ui/QuizHeader";
import { Layout } from "antd";
import GtiTutorial1 from "@/components/ui/card/GtiTutorial1";

const GtiGroupPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <QuizHeader title="GTI Group" onGuideClick={showModal}>
        <Countdown />
      </QuizHeader>
      <Content style={{ margin: "20px" }}>
        <Space>
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
                    Di dalam setiap kotak terdapat pasangan huruf di setiap
                    soal, pada contoh di atas pasangan huruf tersebut berada di
                    dalam kotak yang membatasinya.
                  </Text>
                </li>
                <li>
                  <Text>
                    Tugas Anda adalah menghitung dari keempat pasangan huruf
                    yang ada, berapa jumlah pasangan huruf yang memiliki
                    kesamaan antara huruf yang berada di baris atas dengan huruf
                    yang tepat berada di baris bawahnya.
                  </Text>
                </li>
                <li>
                  <Text>
                    Pada contoh di atas, pasangan pertama huruf F dan f
                    merupakan huruf yang sama. R dan r serta S dan s, pasangan
                    ketiga dan keempat juga merupakan huruf yang sama.
                  </Text>
                </li>
                <li>
                  <Text>
                    Pasangan kedua yakni G dan c, adalah pasangan yang tidak
                    sama.
                  </Text>
                </li>
                <li>
                  <Text>
                    Pada contoh di atas terdapat 3 pasangan huruf yang sama.
                    Jawaban pada angka 3 (tiga) merupakan jawaban yang benar
                    untuk jawaban persoalan ini.
                  </Text>
                </li>
              </ol>
            </div>
          </Modal>
        </Space>
        <GtiTutorial1 />
      </Content>
    </>
  );
};

export default GtiGroupPage;
