"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Button, Row } from "antd";
import MultipleChoice from "@/app/(exam)/components/MultipleChoice";
import ModalD3AD from "./ModalD3AD";
import useExamStore from "@/app/(exam)/stores/useExamStore";

const { Title, Text } = Typography;

export default function D3ADCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getCurrentQuestion, currentQuestion } = useExamStore();

  const currentQuestionData = getCurrentQuestion();

  if (!currentQuestionData) return <div>Loading...</div>;

  const showModal = () => {
    setIsModalOpen(true);
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
          padding: "0px",
        }}
      >
        <Title
          level={5}
          style={{ marginTop: 0, fontWeight: "normal", paddingLeft: "10px" }}
        >
          {currentQuestion}. {currentQuestionData.question}
        </Title>
        <Space style={{ paddingLeft: "30px" }} direction="vertical">
          <MultipleChoice
            options={currentQuestionData.options}
            questionId={currentQuestionData.id}
          />
        </Space>
      </Card>
      <ModalD3AD open={isModalOpen} onCancel={() => setIsModalOpen(false)} />
    </>
  );
}
