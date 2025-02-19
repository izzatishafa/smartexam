"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Divider, Flex, Button, Row } from "antd";
import MultipleChoice from "./MultipleChoice";
import ModalAJ from "./ModalAJ";
import useExamStore from "@/app/(exam)/stores/useExamStore";

const { Title, Text } = Typography;

export default function AccountingJuniorCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getCurrentQuestion, currentQuestion } = useExamStore();

  const currentQuestionData = getCurrentQuestion();

  if (!currentQuestionData) return <div>Loading...</div>;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Row style={{ width: "100%", paddingRight: "24px" }} justify="end">
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
          height: "380px",
          overflowY: "auto",
          margin: "0px 24px",
          boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)",
          border: "none",
        }}
      >
        <Title level={5} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
          {currentQuestion}. Bacalah teks berikut untuk menjawab soal!
        </Title>

        <Space style={{ paddingLeft: "30px" }} direction="vertical">
          <Text style={{ fontSize: "14px" }}>
            {currentQuestionData.question}
          </Text>
          <MultipleChoice
            options={currentQuestionData.options}
            questionId={currentQuestionData.id}
          />
        </Space>
      </Card>
      <ModalAJ open={isModalOpen} onCancel={() => setIsModalOpen(false)} />
    </>
  );
}
