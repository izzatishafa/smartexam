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
        width: 180,
        padding: 0,
        border: isHighlighted ? "2px solid #1890ff" : "1px solid #d9d9d9",
        borderRadius: 2,
      }}
      bodyStyle={{ padding: 0 }}
    >
      <div
        style={{
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 80,
        }}
      >
        {upperLetter}
      </div>
      <div
        style={{
          height: 50,
          backgroundColor: "#bfbfbf",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 20,
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
        border: isSelected ? "2px solid #1890ff" : "1px solid #d9d9d9",
        borderRadius: 6,
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
      <div style={{ fontSize: 20 }}>{number}</div>
    </Card>
  );

  return (
    <>
      <Card style={{ margin: "24px 64px" }}>
        <Row style={{ width: "100%" }} justify="center">
          <Text style={{ fontSize: 24 }}>Berapa jumlah pasangan huruf yang memiliki kesamaan?</Text>
        </Row>
        <Row gutter={32} style={{ margin: "24px 0px" }} justify="center">
          {data.letters.map((letter, index) => (
            <Col key={index}>
              <LetterCard upperLetter={letter.upperLetter} lowerLetter={letter.lowerLetter} />
            </Col>
          ))}
        </Row>

        <Row gutter={32} justify="center">
          {data.options.map((number) => (
            <Col key={number}>
              <NumberOption number={number} isSelected={selectedAnswer === number} onClick={checkAnswer} />
            </Col>
          ))}
        </Row>
      </Card>
      {isCorrect && (
        <Row style={{ width: "100%" }} justify="center" className="mt-4">
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
