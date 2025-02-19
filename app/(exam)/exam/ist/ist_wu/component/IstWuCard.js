import React, { useState } from "react";
import { Typography, Card, Space, Row, Button } from "antd";
import ModalIstWu from "./ModalIstWu";
import useExamStore from "@/app/(exam)/stores/useExamStore";

const { Title, Text } = Typography;

const IstWuCard = () => {
  const { getCurrentQuestion, setAnswer, answers, currentQuestion } =
    useExamStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentQuestionData = getCurrentQuestion();
  if (!currentQuestionData) return [];

  console.log("ini adalah data pertanyaan :", currentQuestionData.question);

  const selectedAnswer = answers[currentQuestionData.id] || null;
  const question = currentQuestionData.question;

  const choices = currentQuestionData.options.map((value, index) => ({
    label: String.fromCharCode(65 + index),
    value,
  }));

  return (
    <>
      <Row style={{ width: "100%", paddingRight: "24px" }} justify="end">
        <Button
          type="default"
          size="middle"
          onClick={() => setIsModalOpen(true)}
          style={{ margin: "16px 0px" }}
        >
          Panduan
        </Button>
      </Row>

      <Card
        style={{
          margin: "0px 24px",
          boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)",
          border: "none",
        }}
      >
        <Title level={4} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
          {currentQuestion}. {question}
        </Title>

        <Space style={{ paddingLeft: "30px" }} direction="vertical">
          <Text style={{ fontSize: "17px" }}>Manakah jawaban yang sesuai?</Text>

          <ol
            style={{
              listStyleType: "none",
              paddingLeft: 0,
              fontSize: "15px",
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >
            {choices.map((choice) => (
              <li
                key={choice.label}
                onClick={() => setAnswer(currentQuestionData.id, choice.label)}
                style={{
                  color: "#1B3042",
                  backgroundColor:
                    selectedAnswer === choice.label
                      ? "aliceblue"
                      : "transparent",
                  padding: "8px 16px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  border: `1px solid ${
                    selectedAnswer === choice.label
                      ? "cornflowerblue"
                      : "lightgray"
                  }`,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    fontWeight: "bold",
                    border: "1px solid",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "10px",
                    backgroundColor:
                      selectedAnswer === choice.label
                        ? "cornflowerblue"
                        : "transparent",
                    color: selectedAnswer === choice.label ? "white" : "gray",
                  }}
                >
                  {choice.label}
                </span>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "ABeeZee, sans-serif",
                    fontWeight: "semibold",
                  }}
                >
                  {choice.value}
                </p>
              </li>
            ))}
          </ol>
        </Space>
      </Card>

      <ModalIstWu open={isModalOpen} onCancel={() => setIsModalOpen(false)} />
    </>
  );
};

export default IstWuCard;
