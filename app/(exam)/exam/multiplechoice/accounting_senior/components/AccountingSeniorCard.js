"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Button, Row } from "antd";
import MultipleChoice from "./MultipleChoice";
import ModalAS from "./ModalAS";
import useExamStore from "@/app/(exam)/stores/useExamStore";

const { Title } = Typography;

export default function AccountingSeniorCard() {
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
          {currentQuestion}. Bacalah teks berikut untuk menjawab soal!
        </Title>

        <Space style={{ paddingLeft: "10px" }} direction="vertical">
          {/* Card untuk menampilkan pertanyaan dengan HTML */}
          <Card
            style={{
              borderTop: "1px solid #d9d9d9",
              borderBottom: "1px solid #d9d9d9",
              borderLeft: "none",
              borderRight: "none",
              height: "200px",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                lineHeight: "1.2",
                margin: 0,
                fontSize: "16px",
                color: "#333",
              }}
              dangerouslySetInnerHTML={{ __html: currentQuestionData.question }}
            />
          </Card>
          <MultipleChoice
            options={currentQuestionData.options}
            questionId={currentQuestionData.id}
          />
        </Space>
      </Card>
      <ModalAS open={isModalOpen} onCancel={() => setIsModalOpen(false)} />
    </>
  );
}
