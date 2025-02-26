"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Row, Button, Flex } from "antd";
import MultipleChoice from "@/app/(exam)/components/MultipleChoice";
import ModalEnglish from "./ModalEnglish";

const { Title, Text } = Typography;

export default function EnglishCard({
  question,
  choices,
  questionNumber,
  selectedOption,
  onSelectOption,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("ini adalah pilihan :", choices);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Row
        style={{
          width: "100%",
          paddingRight: "24px",
        }}
        justify="end"
      >
        <Button
          variant="outlined"
          size="middle"
          color="green"
          onClick={showModal}
          style={{ margin: "16px 0px" }}
        >
          Panduan
        </Button>
      </Row>
      <Card
        style={{
          margin: "0px 14px 10px",
          boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)",
          border: "none",
          backgroundColor: "#fff",
        }}
      >
        <Title
          level={5}
          style={{ margin: 0, fontWeight: "normal", paddingLeft: "10px" }}
        >
          {questionNumber}. Choose the grammatically correct word ord phrase to
          complete the following sentences.
        </Title>

        <Space style={{ paddingLeft: "30px" }} direction="vertical">
          <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
            {question}
          </Text>
          <MultipleChoice choices={choices} onSelectOption={onSelectOption} />
        </Space>
      </Card>
      <ModalEnglish open={isModalOpen} close={handleClose} />
    </>
  );
}
