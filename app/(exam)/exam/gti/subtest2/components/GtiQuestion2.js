"use client";

import { Typography, Row, Col, Modal, Button, Card } from "antd";
import React, { useState } from "react";
const { Title, Text } = Typography;

const GtiQuestion2 = ({ selectedOption, onNextQuestion, setSelectedOption }) => {
  const answers = ["Galang", "Helma", "Akmal"];

  const handleOptionClick = (value) => {
    setSelectedOption(value);
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
        <Row gutter={[16, 16]} align="middle" justify="center" style={{ marginTop: "20px" }}>
          <Col span={24} style={{ textAlign: "center", marginTop: "70px" }}>
            <Button type="primary" onClick={onNextQuestion}>
              Pertanyaan Selanjutnya
            </Button>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default GtiQuestion2;
