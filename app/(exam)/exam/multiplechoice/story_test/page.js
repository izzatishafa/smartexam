"use client";
import React, { useState } from "react";
import { Typography, Flex, Button, Space, Divider, Modal } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import { Layout } from "antd";
import TableTestCard from "@/components/ui/card/TableTestCard";
import StoryTestCard from "@/app/(exam)/exam/multiplechoice/english/components/StoryTestCard";

const StoryTestPage = () => {
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
        <div
          style={{
            padding: "10px 20px",
            width: "100%",
            maxHeight: 360,
            background: "white",
            borderRadius: "1rem",
            border: "1px solid #E0E0E0",
            overflowY: "auto",
            // overflowX: "hidden",
          }}
        > 
          <StoryTestCard />
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
              Petunjuk Pengerjaan Table Test 🧠 :
            </Title>
          }
          open={isModalOpen}
          onCancel={handleClose}
          footer={null}
        >
          <div>
            <ol style={{ listStyleType: "ordinal" }}>
              <li>
                <Text>Simak data tabel yang ada agar dapat menjawab soal dengan baik.</Text>
              </li>
              <li>
                <Text>Perhatikan soal tersebut digunakan untuk menjawab dari nomor berapa sampai dengan berapa.</Text>
              </li>
              <div style={{ marginTop: "0.75rem" }}>
                ✨ <span style={{ fontSize: "1rem", fontWeight: "bold" }}>Tips:</span> Pastikan untuk fokus pada huruf di tengah dan pilih huruf yang paling tepat untuk menyelesaikan urutan! 🚀{" "}
              </div>
              <div
                style={{
                  marginTop: "0.75rem",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Semoga sukses! 💡
              </div>
            </ol>
          </div>
        </Modal>
      </Content>
    </>
  );
};

export default StoryTestPage;
