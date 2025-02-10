"use client";

import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import Image from "next/image"; // Impor Image dari Next.js
import { useRouter } from "next/navigation";
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

const GtiTutorialIntro5 = () => {
  const router = useRouter();
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

  const RotationCard = ({ topNumber, bottomNumber, isHighlighted }) => (
    <Card
      style={{
        width: 160,
        padding: 0,
        border: isHighlighted ? "2px solid #1890ff" : "1px solid #d9d9d9",
        borderRadius: 2,
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
          backgroundColor: "#bfbfbf",
          display: "flex",
          alignItems: "center",
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

  const OptionCard = ({ optionValue, isHighlighted }) => (
    <Card
      style={{
        width: 140,
        padding: 0,
        border: isHighlighted ? "2px solid #1890ff" : "1px solid #d9d9d9",
        borderRadius: 2,
      }}
      bodyStyle={{ padding: 0 }}
    >
      <div
        style={{
          height: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
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
      <Card style={{ margin: "24px 64px 16px" }}>
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
              <OptionCard optionValue={optionValue} isHighlighted={false} />
            </Col>
          ))}
        </Row>
      </Card>
      <Row style={{ margin: "16px 64px 0px" }}>
        <div style={{ marginBottom: "20px", height: "170px", width: "100%", overflow: "auto" }}>
          <p style={{ padding: "0", margin: "0px 0px 8px 0px" }}>🔍 Tips Cepat Menyelesaikan Soal Psikologi Bentuk & Pola</p>
          <p style={{ padding: "0", margin: "0px" }}>1️. Bandingkan bentuk atas dan bawah</p>
          <ul style={{ padding: "0px 16px 0px", margin: "0" }}>
            <li>Apakah bentuknya mirip?</li>
            <li>Atau hanya merupakan rotasi atau cerminan satu sama lain?</li>
          </ul>
          <p style={{ padding: "0", margin: "0px" }}>2. Lakukan perbandingan yang sama untuk pilihan lain</p>
          <ul style={{ padding: "0px 16px 0px", margin: "0" }}>
            <li>Cari pola atau kesamaan dengan cara serupa.</li>
          </ul>
          <p style={{ padding: "0", margin: "0px" }}>3️. Cek pola keseluruhan</p>
          <ul style={{ padding: "0px 16px 0px", margin: "0" }}>
            <li>Apakah ada pola yang berulang?</li>
            <li>Apakah bentuknya mengikuti aturan tertentu?</li>
          </ul>
          <p style={{ padding: "0", margin: "8px 0px 0px 0px" }}>✨ Dengan pendekatan ini, kamu bisa menjawab soal lebih sistematis dan cepat! 🚀</p>
        </div>
      </Row>
      <Row style={{ width: "100%" }} justify="center">
        <Button size="large" style={{ backgroundColor: "#1b3042", color: "white", width: "400px" }} onClick={() => router.push("/exam/gti/subtest5/tutorial")}>
          Mulai Tutorial
        </Button>
      </Row>
    </>
  );
};

export default GtiTutorialIntro5;
