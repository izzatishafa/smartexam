"use client";
import React from "react";
import { Typography, Row, Col, Button, Card } from "antd";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

const GtiTutorialIntro1 = () => {

  const  router  = useRouter();

  const data = {
    letters: [
      { upperLetter: "Q", lowerLetter: "r" },
      { upperLetter: "H", lowerLetter: "n" },
      { upperLetter: "E", lowerLetter: "b" },
      { upperLetter: "T", lowerLetter: "a" },
    ],
    options: [0, 1, 2, 3, 4],
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
      onClick={onClick}
    >
      <div style={{ fontSize: 20 }}>{number}</div>
    </Card>
  );

  return (
    <>
      <Card style={{ margin: "32px 24px 32px" }}>
        <Row style={{ width:"100%"}} justify="center">
          <Text style={{ fontSize: 16 }}>
            Perhatikan soal berikut !
          </Text>
        </Row>
        <Row gutter={54} style={{ margin: "16px 0px 24px" }} justify="center">
          {data.letters.map((letter, index) => (
            <Col key={index}>
              <LetterCard upperLetter={letter.upperLetter} lowerLetter={letter.lowerLetter} />
            </Col>
          ))}
        </Row>
        <Row gutter={54} justify="center">
          {data.options.map((number) => (
            <Col key={number}>
              <NumberOption number={number} />
            </Col>
          ))}
        </Row>
      </Card>
      <Row style={{ margin: "16px 64px 0px" }}>
        <div style={{ marginBottom: "24px" }}>
          <p style={{ padding: "0", margin: "0" }}>Setiap kotak berisi pasangan huruf. Tugas Anda adalah menghitung jumlah pasangan huruf yang memiliki kesamaan antara huruf di baris atas dengan huruf yang tepat berada di baris bawah.</p>
          <p style={{ padding: "0", margin: "0" }}>Contoh:</p>
          <ul style={{ padding: "0px 16px 0px", margin: "0" }}>
            <li>Pasangan:</li>
            <li>F - f ✓ (sama)</li>
            <li>G - c ✗ (tidak sama)</li>
            <li>R - r ✓ (sama)</li>
            <li>S - s ✓ (sama)</li>
          </ul>
          <p style={{ padding: "0", margin: "0" }}>Dari contoh di atas, terdapat 3 pasangan huruf yang sama. Jawaban yang benar adalah 3.</p>
        </div>
      </Row>
      <Row style={{ width: "100%" }} justify="center">
        <Button size="large" style={{ backgroundColor: "#1b3042", color: "white", width: "400px" }} onClick={() => router.push("/exam/gti/subtest1/tutorial")}>
          Mulai Tutorial
        </Button>
      </Row>
    </>
  );
};

export default GtiTutorialIntro1;
