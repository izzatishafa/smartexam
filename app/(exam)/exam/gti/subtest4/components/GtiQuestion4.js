"use client";
import React, { useState } from "react";
import { Button, Card, Row, Typography, Col } from "antd";
import ModalGti4 from "./ModalGti4";
const { Text } = Typography;
import useExamStore from "@/app/(exam)/stores/useExamStore";
import LoadingPage from "@/app/(exam)/components-layout/LoadingPage";

const GtiQuestion4 = () => {
  const { getCurrentQuestion, setAnswer, answers, currentQuestion, currentSubtest } = useExamStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentQuestionData = getCurrentQuestion();

  const showModal = () => setIsModalOpen(true);
  // Memproses string pertanyaan menjadi array huruf
  const letters = currentQuestionData.question.split(",");
  if (currentSubtest !== "gti_kka") return <LoadingPage />;

  const LetterCard = ({ letter, isSelected }) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <Card
        style={{
          width: 140,
          height: 160,
          padding: 0,
          borderRadius: 6,
          boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)",
          border: "none",
          backgroundColor: "rgba(27, 48, 66, 0.5)",
          marginBottom: 15,
        }}
        bodyStyle={{
          padding: 0,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 80,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {letter}
        </Text>
      </Card>
      <Card
        style={{
          width: 140,
          padding: 0,
          borderRadius: 2,
          backgroundColor: isSelected ? "#2D7CC1" : "white", // Ubah warna saat selected
          borderRadius: 6,
          cursor: "pointer",
          border: "1px solid #1B3042",
        }}
        bodyStyle={{
          padding: "1px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => setAnswer(currentQuestionData.id, letter)}
      >
        <Text style={{ fontSize: 20, color: isSelected ? "white" : "black" }}>{letter}</Text>
      </Card>
    </div>
  );

  return (
    <>
      <Row style={{ width: "100%", paddingRight: "24px" }} justify="end">
        <Button variant="outlined" size="middle" color="green" onClick={showModal} style={{ margin: "16px 0px" }}>
          Panduan
        </Button>
      </Row>
      <Card style={{ margin: "0px 64px", boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)", border: "none" }} bodyStyle={{ padding: "16px 32px 24px" }}>
        <Row style={{ width: "100%", marginBottom: "24px" }}>
          <Text style={{ fontSize: 20 }}>{currentQuestionData.id}. Pilih jawaban dari teka-teki tersebut dengan tepat !</Text>
        </Row>
        <Row gutter={32} justify="center">
          {letters.map((letter, index) => (
            <Col key={index}>
              <LetterCard letter={letter} isSelected={answers[currentQuestionData.id] === letter} />
            </Col>
          ))}
        </Row>
      </Card>
      <ModalGti4 open={isModalOpen} onCancel={() => setIsModalOpen(false)} />
    </>
  );
};

export default GtiQuestion4;
