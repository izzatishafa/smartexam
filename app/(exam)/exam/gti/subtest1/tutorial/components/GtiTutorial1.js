"use client";

import { Button, Card, Row, Typography, Col, notification } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const { Title, Text } = Typography;

const GtiTutorial1 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const router = useRouter();

  const data = {
    letters: [
      { upperLetter: "Q", lowerLetter: "r" },
      { upperLetter: "H", lowerLetter: "n" },
      { upperLetter: "E", lowerLetter: "b" },
      { upperLetter: "T", lowerLetter: "a" },
    ],
    options: [0, 1, 2, 3, 4],
  };

  const checkAnswer = (number) => {
    setSelectedAnswer(number);

    if (number === 0) {
      setIsCorrect(true);
      notification.success({
        message: "Jawaban Benar!",
        description: "Selamat, jawaban Anda benar.",
        placement: "topRight",
        className: "custom-notification",
        style: {
          background: "#f6ffed",
          border: "1px solid #b7eb8f",
          borderRadius: 6,
        },
      });
    } else {
      setIsCorrect(false);
      notification.error({
        message: "Jawaban Salah",
        description: "Silakan coba lagi.",
        placement: "topRight",
        className: "custom-notification",
        style: {
          background: "#fff2f0",
          border: "1px solid #ffccc7",
          borderRadius: 6,
        },
      });
    }
  };

  const LetterCard = ({ upperLetter, lowerLetter, isHighlighted }) => (
    <Card
      style={{
        width: 140,
        padding: 0,
        border: isHighlighted ? "2px solid #1890ff" : "1px solid #d9d9d9",
        borderRadius: 5,
        boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)",
        border: "none",
      }}
      bodyStyle={{ padding: 0 }}
    >
      <div
        style={{
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 70,
        }}
      >
        {upperLetter}
      </div>
      <div
        style={{
          height: 50,
          backgroundColor: "rgba(27, 48, 66, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 30,
          borderRadius: "0 0 5px 5px",
        }}
      >
        {lowerLetter}
      </div>
    </Card>
  );

  const NumberOption = ({ number, isSelected, onClick }) => (
    <Card
      style={{
        width: 110,
        height: 34,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isSelected ? "#2D7CC1" : "white", // Ubah warna saat selected
        borderRadius: 6,
        border: "1px solid #1B3042",
        cursor: "pointer",
      }}
      bodyStyle={{
        padding: 0,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => onClick(number)}
    >
      <div style={{ fontSize: 20, color: isSelected ? "white" : "black" }}>{number}</div>
    </Card>
  );

  return (
    <>
      <Card style={{ margin: "24px", boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)", border: "none" }} bodyStyle={{ padding: "8px 16px 24px" }}>
        <Row style={{ width: "100%", marginBottom: "16px" }} justify="center">
          <Text style={{ fontSize: 16 }}>Perhatikan soal berikut !</Text>
        </Row>
        <Row gutter={54} style={{ margin: "8px 0px 24px" }} justify="center">
          {data.letters.map((letter, index) => (
            <Col key={index}>
              <LetterCard upperLetter={letter.upperLetter} lowerLetter={letter.lowerLetter} />
            </Col>
          ))}
        </Row>
        <Row gutter={54} justify="center">
          {data.options.map((number) => (
            <Col key={number}>
              <NumberOption number={number} isSelected={selectedAnswer === number} onClick={checkAnswer} />
            </Col>
          ))}
        </Row>
      </Card>
      {isCorrect && (
        <Row style={{ width: "100%", marginTop: "40px" }} justify="center">
          <Button
            size="large"
            style={{
              backgroundColor: "#1b3042",
              color: "white",
              width: "400px",
            }}
            onClick={() => router.push("/exam/gti/subtest1/questions")}
          >
            Mulai Test
          </Button>
        </Row>
      )}
    </>
  );
};

export default GtiTutorial1;
