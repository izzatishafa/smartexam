"use client";
import { Typography, Row, Col, Modal, Button, Card } from "antd";
import React, { useState } from "react";
import styles from "../../styles/style.module.css";
const { Title, Text } = Typography;

const GtiQuestion2 = ({ data, onAnswer, currentAnswer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const processQuestion = (questionString) => {
    if (!questionString.includes(";")) return { scenarios: [], question: "", options: [] };

    // Pisahkan bagian utama dan opsi
    const [mainPart, optionsPart] = questionString.split(";").map((s) => s.trim());

    // Gunakan regex untuk mendeteksi pertanyaan (misalnya: "Siapa yang", "Apa yang", dll.)
    const questionMatch = mainPart.match(/(Siapa|Apa|Bagaimana|Mengapa|Dimana|Kapan|Berapa)\s+\w+/i);

    if (!questionMatch) return { scenarios: [], question: mainPart, options: [] };

    const questionStartIndex = questionMatch.index;
    const scenarios = mainPart
      .slice(0, questionStartIndex)
      .split(",")
      .map((s) => s.trim());
    const question = mainPart.slice(questionStartIndex).trim();
    const options = optionsPart.split(",").map((opt) => opt.trim());

    return { scenarios, question, options };
  };

  const QuestionOption = ({ letter, option, isSelected, onClick }) => (
    <Button className={styles["user-button"]} onClick={() => onClick(letter)}>
      <div className={styles.avatar}>{letter}</div>
      <span className={styles.option}>{option}</span>
    </Button>
  );

  const { scenarios, question, options } = processQuestion(data.question);
  const letters = ["A", "B", "C", "D"]; // Bisa ditambah sesuai kebutuhan

  return (
    <>
      <Button variant="outlined" size="small" onClick={showModal} style={{ margin: "16px 0px" }}>
        Panduan
      </Button>
      <Card style={{ margin: "32px 64px 32px" }}>
        <Text style={{ fontSize: 20, display: "block", marginBottom: "24px" }}>{data.id}. Pilih jawaban dari teka-teki tersebut dengan tepat!</Text>
        {/* Scenarios */}
        <div style={{ marginBottom: "24px" }}>
          {scenarios.map((scenario, index) => (
            <Text key={index} style={{ fontSize: 20, display: "block", marginBottom: "16px", fontWeight: "bold" }}>
              {scenario}
            </Text>
          ))}
        </div>
        {/* Question */}
        <Text style={{ fontSize: 20, display: "block", marginBottom: "24px" }}>{question}</Text>
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
