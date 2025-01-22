"use client";

import { Typography, Row, Col, Button, Card } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const { Title, Text } = Typography;

const GtiTutorial2 = ({ selectedOption, onNextQuestion, setSelectedOption }) => {
  const answers = ["Galang", "Helma", "Akmal"];
  const correctAnswer = "Helma"; // Jawaban yang benar
  const router = useRouter();

  // Menentukan apakah jawaban benar atau tidak
  const isAnswerCorrect = selectedOption === correctAnswer;

  const handleStartTest = () => {
    router.push("http://localhost:3000/exam/gti/subtest2/questions");
  };

  const handleOptionClick = (value) => {
    setSelectedOption(value); // Memperbarui pilihan yang dipilih
  };

  return (
    <Card>
      <div style={{ margin: "20px 20px" }}>
        <Row justify="center" align="middle" style={{ textAlign: "center" }}>
          <Col>
            <Title level={3} style={{ margin: 0 }}>
              Galang lebih Cepat dari Akmal <br />
              Akmal lebih Cepat dari Helma
            </Title>
            <Title level={3} style={{ margin: 0 }}>
              Siapa yang terlamban?
            </Title>
          </Col>
        </Row>
        <br />
        <Row gutter={[16, 16]} align="middle" justify="center" style={{ marginTop: "10px" }}>
          {answers.map((answer, index) => (
            <Col span={8} key={`answer-${index}`}>
              <Button
                type={selectedOption === answer ? "primary" : "default"}
                onClick={() => handleOptionClick(answer)}
                style={{
                  width: "100%",
                  height: "50px",
                  borderRadius: "8px",
                  fontSize: "16px",
                }}
              >
                {answer}
              </Button>
            </Col>
          ))}
        </Row>
        {selectedOption && (
          <Row gutter={[16, 16]} align="middle" justify="center" style={{ marginTop: "70px" }}>
            <Col span={24} style={{ textAlign: "center" }}>
              <Text type={isAnswerCorrect ? "success" : "danger"}>{isAnswerCorrect ? "Jawaban Benar" : "Jawaban Salah"}</Text>
            </Col>
          </Row>
        )}
        {isAnswerCorrect && (
          <Row gutter={[16, 16]} align="middle" justify="center" style={{ marginTop: "20px" }}>
            <Col span={24} style={{ textAlign: "center" }}>
              <Button type="primary" onClick={onNextQuestion} style={{ marginRight: "10px" }}>
                Ulangi Tutorial
              </Button>
              <Button style={{ backgroundColor: "#52c41a", color: "white" }} onClick={handleStartTest}>
                Mulai Test
              </Button>
            </Col>
          </Row>
        )}
      </div>
    </Card>
  );
};

export default GtiTutorial2;
