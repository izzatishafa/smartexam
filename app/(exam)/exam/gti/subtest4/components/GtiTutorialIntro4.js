"use client";

import { Button, Card, Row, Typography, Col } from "antd";
import React from "react";
import { useRouter } from "next/navigation";
const { Text } = Typography;

const GtiTutorialIntro4 = () => {
  const router = useRouter();
  const data = {
    letter: [12, 19, 7],
    options: [12, 19, 7],
  };

  const LetterCard = ({ letter, isHighlighted }) => (
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
          height: 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#bfbfbf",
          color: "white",
          fontSize: 80,
        }}
      >
        {letter}
      </div>
    </Card>
  );

  const OptionCard = ({ options, isHighlighted }) => (
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
        {options}
      </div>
    </Card>
  );

  return (
    <>
      <Card style={{ margin: "24px 64px 16px" }}>
        <Row style={{ width: "100%" }}>
          <Text style={{ fontSize: 18 }}>Perhatikan contoh soal berikut!</Text>
        </Row>
        <Row gutter={32} style={{ margin: "18px 0px" }} justify="center">
          {data.letter.map((letter, index) => (
            <Col key={index}>
              <LetterCard letter={letter} />
            </Col>
          ))}
        </Row>

        <Row gutter={32} justify="center">
          {data.options.map((options) => (
            <Col key={options}>
              <OptionCard options={options} />
            </Col>
          ))}
        </Row>
      </Card>
      <Row style={{ margin: "16px 64px 0px" }}>
        <div style={{marginBottom:"4px"}}>
          <ul style={{ padding: "0px 16px 0px", margin: "0px 0px 10px 0px", listStyleType: "decimal" }}>
            <li>Pilihlah angka tertinggi dan terendah dari setiap kelompok bilangan yang terdiri dari 3 angka.</li>
            <li>Hilangkan angka tertinggi dan terendah tersebut.</li>
            <li>Dari angka yang tersisa di tengah, tentukan angka yang memiliki selisih terbesar dengan angka tertinggi atau terendah (bukan dari angka tertinggi atau terendah).</li>
          </ul>
          <p style={{ padding: "0", margin: "0px 0px 8px 0px" }}>Contoh:</p>
          <ul style={{ padding: "0px 16px 0px", margin: "0" }}>
            <li>Jika angkanya adalah 8, 7, dan 13:</li>
            <li>Angka 7 adalah yang terendah.</li>
            <li>Angka 13 adalah yang tertinggi.</li>
            <li>Tentukan letak angka yang memiliki selisih terbesar.</li>
          </ul>
          <p style={{ padding: "0", margin: "10px" }}>Tips: Pastikan untuk fokus pada huruf di tengah dan pilih huruf yang paling tepat untuk menyelesaikan urutan!</p>
        </div>
      </Row>
      <Row style={{ width: "100%" }} justify="center">
        <Button size="large" style={{ backgroundColor: "#1b3042", color: "white", width: "400px" }} onClick={() => router.push("/exam/gti/subtest4/tutorial")}>
          Mulai Tutorial
        </Button>
      </Row>
    </>
  );
};

export default GtiTutorialIntro4;
