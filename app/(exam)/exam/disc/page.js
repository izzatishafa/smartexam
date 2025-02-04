"use client";
import React, { useState } from "react";
import { Typography, Space, Modal, Card, Button, Flex } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import { Layout } from "antd";
// import DiscRadioQuestion from "@/components/ui/DiscRadioQuestion";
import DiscCard from "@/components/ui/card/DiscCard";

const DiscPage = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const dataSource = [
    {
      key: "1",
      pref: "Mudah bergaul, menyenangkan.",
    },
    {
      key: "2",
      pref: "Mudah percaya kepada orang lain.",
    },
    {
      key: "3",
      pref: "Penuh toleransi, menghormati orang lain.",
    },
    {
      key: "4",
      pref: "Suka berpetualangan, pengambil risiko.",
    },
  ];

  const data = [
    {
      key: "1",
      pref: "Mudah bergaul, menyenangkan. kcsjacasjcnakjsnckascnaksjcnkascnaksj",
      most: false,
      least: false,
    },
    {
      key: "2",
      pref: "Mudah percaya kepada orang lain.",
      most: false,
      least: false,
    },
    {
      key: "3",
      pref: "Penuh toleransi, menghormati orang lain.",
      most: false,
      least: false,
    },
    {
      key: "4",
      pref: "Suka berpetualangan, pengambil risiko.",
      most: false,
      least: false,
    },
  ];

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
        <div
          style={{
            padding: "10px 20px",
            minHeight: 360,
            background: "white",
            borderRadius: "1rem",
            border: "1px solid #E0E0E0",
          }}
        >
          <DiscCard data={data}></DiscCard>
        </div>
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
              Petunjuk Pengerjaan DISC 🧠 :
            </Title>
          }
          open={isModalOpen}
          onCancel={handleClose}
          footer={null}
        >
          <Flex style={{ flexDirection: "column" }}>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                marginBottom: "20px",
              }}
            >
              <li>
                <Text>Pilihlah salah satu opsi yang sesuai dengan Anda</Text>
              </li>
              <li>
                <Text>
                  Jawab sesuai dengan kriteria diri Anda Setiap soal memiliki 4
                  pertanyaan
                </Text>
              </li>
              <li>
                <Text>Setiap soal memiliki 4 pertanyaan</Text>
              </li>
            </ul>
            <Text style={{ marginLeft: "20px", fontWeight: "bold" }}>
              Pilihan :
            </Text>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                marginBottom: "20px",
              }}
            >
              <li>
                <Text>
                  M (Most): Yang paling sesuai dan paling menggambarkan Anda.
                </Text>
              </li>
              <li>
                <Text>
                  L (Least): Yang paling tidak sesuai dan tidak menggambarkan
                  Anda
                </Text>
              </li>
            </ul>
            <Text style={{ marginLeft: "20px" }}>
              ✨{" "}
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Tips:
              </span>{" "}
              Pastikan Anda menjawab dengan jujur sesuai dengan keadaan diri
              Anda !
            </Text>
            <Text
              style={{
                marginTop: "1rem",
                fontSize: "1rem",
                fontWeight: "bold",
                marginLeft: "20px",
              }}
            >
              Semoga sukses! 💡
            </Text>
          </Flex>
        </Modal>
      </Content>
    </>
  );
};

export default DiscPage;
