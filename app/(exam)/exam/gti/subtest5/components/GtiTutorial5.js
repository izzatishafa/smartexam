"use client";

import React from "react";
import { Button, Card, Col, Row, Typography, notification } from "antd";
import Image from "next/image"; // Impor Image dari Next.js
const { Text } = Typography;
import { useRouter } from "next/navigation";
import { useState } from "react";

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

const GtiTutorial5 = () => {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const subtestData = {
    questions: [
      {
        id: 1,
        type: "GTI",
        question: "3,8|2,8|8,3",
        code: "gti_orientasi",
        options: [0, 1, 2, 3], // Pindahkan options ke dalam question
      },
    ],
  };

  const checkAnswer = (optionValue) => {
    setSelectedAnswer(optionValue);

    if (optionValue === 1) {
      setIsCorrect(true);
      notification.success({
        message: "Jawaban Benar!",
        description: "Selamat, jawaban Anda benar.",
        placement: "topRight",
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
        style: {
          background: "#fff2f0",
          border: "1px solid #ffccc7",
          borderRadius: 6,
        },
      });
    }
  };

  const RotationCard = ({ topNumber, bottomNumber, isHighlighted }) => (
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
        <Image src={rotationImages[topNumber]} alt={`Rotasi ${topNumber}`} width={60} height={60} />
      </div>
      <div
        style={{
          height: 80,
          backgroundColor: "rgba(27, 48, 66, 0.5)",
          display: "flex",
          alignItems: "center",
          borderRadius: "0px 0px 6px 6px",
          justifyContent: "center",
          color: "white",
          fontSize: 20,
        }}
      >
        <div style={{ filter: "brightness(0) invert(1)" }}>
          <Image src={rotationImages[bottomNumber]} alt={`Rotasi ${bottomNumber}`} width={60} height={60} />
        </div>
      </div>
    </Card>
  );

  const OptionCard = ({ optionValue, isSelected, onClick }) => (
    <Card
      style={{
        width: 140,
        padding: 0,
        borderRadius: 6,
        border: "1px solid #1B3042",
        backgroundColor: isSelected ? "#2D7CC1" : "white",
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
          cursor:"pointer",
        }}
      >
        {optionValue}
      </div>
    </Card>
  );

  // Fungsi untuk memproses string question menjadi array soal
  const parseQuestion = (questionStr) => {
    const pairs = questionStr.split("|");
    return pairs.map((pair, index) => {
      const [topNumber, bottomNumber] = pair.split(",");
      return {
        id: index + 1,
        topNumber: parseInt(topNumber),
        bottomNumber: parseInt(bottomNumber),
      };
    });
  };

  // Ambil data question dari subtest
  const questionData = subtestData.questions[0];
  const questions = parseQuestion(questionData.question);

  return (
    <>
      <Card style={{ margin: "24px 64px 16px", boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)", border: "none" }} bodyStyle={{ padding: "16px 32px 24px" }}>
        <Row style={{ width: "100%" }} justify="center">
          <Text style={{ fontSize: 16 }}>Perhatikan soal berikut !</Text>
        </Row>
        <Row gutter={54} style={{ margin: "16px 0px 24px" }} justify="center">
          {questions.map((question) => (
            <Col key={question.id}>
              <RotationCard
                topNumber={question.topNumber}
                bottomNumber={question.bottomNumber}
                isHighlighted={false} // Sesuaikan jika perlu highlight
              />
            </Col>
          ))}
        </Row>
        <Row gutter={32} justify="center">
          {questionData.options.map((optionValue) => (
            <Col key={optionValue}>
              <OptionCard optionValue={optionValue} isHighlighted={false} isSelected={selectedAnswer === optionValue} onClick={() => checkAnswer(optionValue)} />
            </Col>
          ))}
        </Row>
      </Card>
      {isCorrect && (
        <Row style={{ width: "100%", marginTop:"40px" }} justify="center" className="mt-4">
          <Button
            size="large"
            style={{
              backgroundColor: "#1b3042",
              color: "white",
              width: "400px",
            }}
            onClick={() => router.push("/exam/gti/subtest5/questions")}
          >
            Mulai Test
          </Button>
        </Row>
      )}
    </>
  );
};

export default GtiTutorial5;
