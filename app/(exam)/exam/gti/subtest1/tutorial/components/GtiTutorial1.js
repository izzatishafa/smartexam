"use client";
import React from "react";
import { Typography, Row, Col, Button, Card } from "antd";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

const { Title, Text } = Typography;


const GtiTutorial1 = ({ upperRowLetters = [], lowerRowLetters = [], answers = [], selectedOption, onOptionClick, isAnswerCorrect, onNextQuestion }) => {

    const router = useRouter(); 

    const handleStartTest = () => {
      router.push("http://localhost:3000/exam/gti/subtest1/questions");
    };

  return (
    <>
      <Row gutter={[16, 16]} align="middle" justify="center">
        {upperRowLetters.map((letter, index) => (
          <Col span={4} key={`upper-${index}`}>
            <Title level={1} style={{ textAlign: "center" }}>
              {letter}
            </Title>
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} align="middle" justify="center">
        {lowerRowLetters.map((letter, index) => (
          <Col span={4} key={`lower-${index}`}>
            <Title level={3} style={{ textAlign: "center" }}>
              {letter}
            </Title>
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} align="middle" justify="center" style={{ marginTop: "20px" }}>
        {answers.map((answer, index) => (
          <Col span={4} key={`answer-${index}`}>
            <Button
              type={selectedOption === answer ? "primary" : "default"}
              onClick={() => onOptionClick(answer)}
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
      {isAnswerCorrect !== null && (
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
    </>
  );
};

export default GtiTutorial1;
