"use client";

import { Button, Card, Row, Typography, Col } from "antd";
import React from "react";
import { useRouter } from "next/navigation";
const { Text } = Typography;

const GtiTutorialIntro3 = () => {
  const router = useRouter();
  const data = {
    letter: ["K", "H", "N"],
    options: ["K", "H", "N"],
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
      <Card style={{ margin: "24px 64px" }}>
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
        <div style={{ marginBottom: "24px" }}>
          <p style={{ padding: "0", margin: "0px 0px 10px 0px" }}>Tantanganmu adalah mengingat urutan dan memilih huruf yang tepat sesuai aturan berikut:</p>
          <ul style={{ padding: "0px 16px 0px", margin: "0" }}>
            <li>Perhatikan: Setiap kotak berisi tiga huruf acak.</li>
            <li>Ingat urutannya: Susun huruf-huruf tersebut sesuai dengan urutan alfabet.</li>
            <li>Tentukan pilihan: Pilih huruf dengan selisih terjauh dari huruf di tengah.</li>
          </ul>
          <p style={{ padding: "0", margin: "10px" }}>Tips: Pastikan untuk fokus pada huruf di tengah dan pilih huruf yang paling tepat untuk menyelesaikan urutan!</p>
        </div>
      </Row>
      <Row style={{ width: "100%" }} justify="center">
        <Button size="large" style={{ backgroundColor: "#1b3042", color: "white", width: "400px" }} onClick={() => router.push("/exam/gti/subtest3/tutorial")}>
          Mulai Tutorial
        </Button>
      </Row>
    </>
  );
};

export default GtiTutorialIntro3;
