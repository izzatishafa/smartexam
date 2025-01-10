"use client";
import React from "react";
import { Typography, Row, Col, Button, Card } from "antd";

const { Title } = Typography;

const GtiQuestion1 = ({ upperRowLetters = [], lowerRowLetters = [], answers = [], selectedOption, onOptionClick, isAnswerCorrect, onNextQuestion }) => {
  return (
    <Card>
      <Row gutter={[16, 16]} align="middle" justify="center" style={{ marginTop: "20px" }}>
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
        <Row gutter={[16, 16]} align="middle" justify="center" style={{ marginTop: "20px" }}>
          <Col span={24} style={{ textAlign: "center", marginTop: "70px" }}>
            <Button type="primary" onClick={onNextQuestion}>
              Pertanyaan Selanjutnya
            </Button>
          </Col>
        </Row>
    </Card>
  );
};

export default GtiQuestion1;
