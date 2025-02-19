"use client";

import React, { useState } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import Image from "next/image";
import ModalGti5 from "./ModalGti5";
import useExamStore from "@/app/(exam)/stores/useExamStore";

const { Text } = Typography;

const rotationImages = {
  1: "/assets/images/orientasi/f1.png",
  2: "/assets/images/orientasi/f2.png",
  3: "/assets/images/orientasi/f3.png",
  4: "/assets/images/orientasi/f4.png",
  5: "/assets/images/orientasi/f5.png",
  6: "/assets/images/orientasi/f6.png",
  7: "/assets/images/orientasi/f7.png",
  8: "/assets/images/orientasi/f8.png",
};

const GtiQuestion5 = () => {
  const { getCurrentQuestion, setAnswer, answers, currentQuestion } = useExamStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentQuestionData = getCurrentQuestion() || {}; // Pastikan tidak null
  const showModal = () => setIsModalOpen(true);
  const options = [0, 1, 2, 3];

  const RotationCard = ({ topNumber, bottomNumber }) => (
    <Card
      style={{
        width: 160,
        padding: 0,
        borderRadius: 6,
        boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)",
        border: "none",
      }}
      bodyStyle={{ padding: 0 }}
    >
      <div
        style={{
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={rotationImages[topNumber] || "/assets/images/placeholder.png"} // Fallback jika tidak ada gambar
          alt={`Rotasi ${topNumber}`}
          width={60}
          height={60}
        />
      </div>
      <div
        style={{
          height: 80,
          backgroundColor: "rgba(27, 48, 66, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0px 0px 6px 6px",
          color: "white",
          fontSize: 20,
        }}
      >
        <div style={{ filter: "brightness(0) invert(1)" }}>
          <Image src={rotationImages[bottomNumber] || "/assets/images/placeholder.png"} alt={`Rotasi ${bottomNumber}`} width={60} height={60} />
        </div>
      </div>
    </Card>
  );

  const OptionCard = ({ optionValue, onClick, isSelected }) => (
    <Card
      style={{
        width: 140,
        padding: 0,
        borderRadius: 6,
        border: "1px solid #1B3042",
        backgroundColor: isSelected ? "#2D7CC1" : "white",
        cursor: "pointer",
      }}
      bodyStyle={{ padding: 0 }}
      onClick={onClick}
    >
      <div
        style={{
          height: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          color: isSelected ? "white" : "black",
        }}
      >
        {optionValue}
      </div>
    </Card>
  );

  const parseQuestion = (questionStr) => {
    if (!questionStr) return []; // Jika null atau kosong, kembalikan array kosong

    const pairs = questionStr.split("|");
    return pairs.map((pair, index) => {
      const [topNumber, bottomNumber] = pair.split(",");
      return {
        id: index + 1,
        topNumber: parseInt(topNumber, 10) || 0, // Jika tidak valid, default ke 0
        bottomNumber: parseInt(bottomNumber, 10) || 0,
      };
    });
  };

  const questions = parseQuestion(currentQuestionData?.question || ""); // Fallback jika question null

  return (
    <>
      <Row style={{ width: "100%", paddingRight: "24px" }} justify="end">
        <Button variant="outlined" size="middle" color="green" onClick={showModal} style={{ margin: "16px 0px" }}>
          Panduan
        </Button>
      </Row>
      <Card style={{ margin: "0px 64px 16px", boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)", border: "none" }} bodyStyle={{ padding: "16px 32px 24px" }}>
        <Row style={{ width: "100%" }} justify="center">
          <Text style={{ fontSize: 16 }}>Perhatikan soal berikut!</Text>
        </Row>
        <Row gutter={54} style={{ margin: "16px 0px 24px" }} justify="center">
          {questions.length > 0 ? (
            questions.map((question) => (
              <Col key={question.id}>
                <RotationCard topNumber={question.topNumber} bottomNumber={question.bottomNumber} />
              </Col>
            ))
          ) : (
            <Text style={{ fontSize: 14, color: "red" }}>Soal tidak tersedia</Text>
          )}
        </Row>
        <Row gutter={32} justify="center">
          {options.map((optionValue) => (
            <Col key={optionValue}>
              <OptionCard optionValue={optionValue} isSelected={answers?.[currentQuestionData?.id] === optionValue} onClick={() => setAnswer?.(currentQuestionData?.id, optionValue)} />
            </Col>
          ))}
        </Row>
      </Card>
      <ModalGti5 open={isModalOpen} onCancel={() => setIsModalOpen(false)} />
    </>
  );
};

export default GtiQuestion5;
