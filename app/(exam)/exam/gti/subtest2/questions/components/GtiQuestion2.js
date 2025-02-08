"use client";
import { Typography, Row, Col, Modal, Button, Card } from "antd";
import React, { useState } from "react";
import styles from "../../styles/style.module.css";
const { Title, Text } = Typography;

const GtiQuestion2 = ({ data, onAnswer, currentAnswer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const processQuestion = (questionString) => {
    // Memisahkan menggunakan titik koma
    const [mainPart, optionsPart] = questionString.split(";");

    // Memisahkan skenario dan pertanyaan
    const questionIndex = mainPart.indexOf("Siapa yang");
    const scenarios = mainPart
      .slice(0, questionIndex)
      .split(",")
      .map((s) => s.trim());
    const question = mainPart.slice(questionIndex);

    // Memproses opsi
    const options = optionsPart.split(",").map((opt) => opt.trim());

    return {
      scenarios,
      question,
      options,
    };
  };

  const QuestionOption = ({ letter, option, isSelected, onClick }) => {
    return (
      <Button className={styles["user-button"]} onClick={() => onClick(letter)}>
        <div className={styles.avatar}>{letter}</div>
        <span className={styles.option}>{option}</span>
      </Button>
    );
  };

  const { scenarios, question, options } = processQuestion(data.question);
  const letters = ["A", "B", "C"];

  return (
    <>
      <Button variant="outlined" size="small" onClick={showModal} style={{ margin: "16px 0px" }}>
        Panduan
      </Button>
      <Card style={{ margin: "32px 64px 32px" }}>
        <Text style={{ fontSize: 20, display: "block", marginBottom: "24px" }}>{data.id}. Pilih jawaban dari teka-teki tersebut dengan tepat !</Text>
        {/* Scenarios */}
        <div style={{ marginBottom: "24px" }}>
          {scenarios.map((scenario, index) => (
            <Text
              key={index}
              style={{
                fontSize: 20,
                display: "block",
                marginBottom: "16px",
                fontWeight: "bold",
              }}
            >
              {scenario}
            </Text>
          ))}
        </div>
        {/* Question */}
        <Text
          style={{
            fontSize: 20,
            display: "block",
            marginBottom: "24px",
          }}
        >
          {question}
        </Text>
        {/* Options */}
        <Row gutter={[16, 16]}>
          {options.map((option, index) => (
            <Col key={index}>
              <QuestionOption letter={letters[index]} option={option} isSelected={currentAnswer === option} onClick={() => onAnswer(data.id, option)} />
            </Col>
          ))}
        </Row>
      </Card>
      
    </>
  );
};

export default GtiQuestion2;
