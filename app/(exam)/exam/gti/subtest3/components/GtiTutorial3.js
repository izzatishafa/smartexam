"use client";

import React from "react";
import { Button, Card, Row, Typography, Col, notification } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const { Text } = Typography;

const GtiTutorial3 = () => {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const data = {
    letter: ["K", "H", "N"],
    options: ["K", "N"],
  };

  const checkAnswer = (options) => {
    setSelectedAnswer(options);

    if (options === "N") {
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

  const LetterCard = ({ letter, isHighlighted }) => (
    <Card
      style={{
        width: 140,
        padding: 0,
        border: isHighlighted ? "2px solid #1890ff" : "1px solid #d9d9d9",
        borderRadius: 6,
        boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)",
        border: "none",
      }}
      bodyStyle={{ padding: 0 }}
    >
      <div
        style={{
          height: 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(27, 48, 66, 0.5)",
          borderRadius: 6,
          color: "white",
          fontSize: 80,
        }}
      >
        {letter}
      </div>
    </Card>
  );

  const OptionCard = ({ options, isSelected, onClick }) => (
    <Card
      style={{
        width: 240,
        padding: 0,
        backgroundColor: isSelected ? "#2D7CC1" : "white", // Ubah warna saat selected
        borderRadius: 6,
        border: "1px solid #1B3042",
      }}
      bodyStyle={{ padding: 0 }}
      onClick={() => onClick(options)}
    >
      <div
        style={{
          height: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          cursor: "pointer",
          color: isSelected ? "white" : "black",
        }}
      >
        {options}
      </div>
    </Card>
  );
  
  return (
    <>
      <Card style={{ margin: "24px 64px", boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)", border: "none" }} bodyStyle={{ padding: "16px 16px 24px" }}>
        <Row style={{ width: "100%" }}>
          <Text style={{ fontSize: 16 }}>Perhatikan contoh soal berikut!</Text>
        </Row>
        <Row gutter={32} style={{ margin: "18px 0px 32px" }} justify="center">
          {data.letter.map((letter, index) => (
            <Col key={index}>
              <LetterCard letter={letter} />
            </Col>
          ))}
        </Row>

        <Row gutter={32} justify="center">
          {data.options.map((options) => (
            <Col key={options}>
              <OptionCard options={options} isSelected={selectedAnswer === options} onClick={checkAnswer} />
            </Col>
          ))}
        </Row>
      </Card>
      {isCorrect && (
        <Row style={{ width: "100%", marginTop: "40px" }} justify="center" className="mt-4">
          <Button
            size="large"
            style={{
              backgroundColor: "#1b3042",
              color: "white",
              width: "400px",
            }}
            onClick={() => router.push("/exam/gti/subtest3/questions")}
          >
            Mulai Test
          </Button>
        </Row>
      )}
    </>
  );
};
export default GtiTutorial3;
