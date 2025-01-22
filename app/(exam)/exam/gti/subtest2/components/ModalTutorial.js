"use client";

import { Typography, Row, Col, Modal, Button } from "antd";
import React, { useState } from "react";
const { Title, Text } = Typography;

const ModalTutorial = ({ open, onCancel }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const tutorialAnswers = ["Galang", "Helma"];

  const handleOptionClick = (value) => {
    setSelectedOption(value);
  };

  return (
    <Modal
      width={1000}
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
          Petunjuk Pengerjaan
        </Title>
      }
      open={open}
      onCancel={onCancel}
      footer={null}
    >
      <div style={{ marginTop: "20px" }}>
        <Text>Setiap pertanyaan mengenai siapa yang lebih berat atau lebih ringan, siapa lebih tinggi atau lebih pendek, dan perbandingan-perbandingan lainnya dengan orang di sekitarnya.</Text>
        <br />
        <br />
        <Text>Simaklah dengan baik contoh-contoh berikut ini:</Text>
        <Row justify="center" align="middle" style={{ textAlign: "center" }}>
          <Col>
            <Title level={3}>
              Galang lebih berat dari Helma
            </Title>
            <Title level={3}>
              Siapa yang terberat?
            </Title>
          </Col>
        </Row>
        <br />
        <Row gutter={[16, 16]} align="middle" justify="center" style={{ marginTop: "10px" }}>
          {tutorialAnswers.map((answer, index) => (
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
      </div>
    </Modal>
  );
};

export default ModalTutorial;
